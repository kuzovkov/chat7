import Storage from './persist/storage';
import {parseError, sleep, Socket, Media, Video, WRTC, App} from '../helpers';

export default {
  state: {
    // ws: null,
    // media: null,
    // video: null,
    // stream: null,
    // screenStream: null,
    // socket_id: null, //current user name
    // ice: null,
    // wrtc: null,
    // remoteVideos: {},
    // users: [],
    // appear_users: [],
    // disappear_users: [],
    // video_off: false,
    // audio_off: false,
    // files: null,
    // filesp2p: null,
    // p2p_chat: true, //user p2p for chat message
    // aliases: {}, //username aliases
    // chatMessages: [], //list chat messages;
    // options: {}
    app: null,
    username: null,
  },
  mutations: {
    setApp(state, app){
      state.app = app;
    },
    setUsername(state, username){
      state.username = username;
    }
  },
  actions: {
    async initApp({commit}, payload){
      commit('clearError');
      commit('setLoading', true);
      try{
        const options = {username: payload.username, room: payload.room}
        const app = new App(options);
        commit('setApp', app);
        commit('setLoading', false);
      }catch(error){
        commit('setLoading', false);
        commit('setError', parseError(error.message));
      }
    },
    async setUsername({commit}, {username, room}){
      commit('clearError');
      commit('setLoading', true);
      let users_online = [];
      let listReceived = false;
      const fillUsersOnline = (data)=> {
         console.log('fillUsersOnline:', data);
        if (data.users_online && Array.isArray(data.users_online)){
            users_online = data.users_online;
        }
        listReceived = true;
        console.log('users_online:', users_online, 'listReceived:', listReceived);
      }
      try{
        let socket = null;
        socket = new Socket({options: {username, room}});
        console.log('this.socket:', socket)
        socket.setHandler('users_online', fillUsersOnline.bind(this))
        socket.connect();
        console.log('this.listReceived:', listReceived)
        while (!listReceived){ await sleep(1000); console.log('sleep ');};
        console.log('this.users_online:', users_online, username)
        if (users_online.indexOf(username) === -1){
          commit('setUsername', username);
        } else {
          throw new Error('his NicName already busy! Choose another');
        }
        listReceived = false;
        commit('setLoading', false);
      }catch(error){
        commit('setLoading', false);
        commit('setError', parseError(error.message));
      }
    }

  },
  getters: {
    app(state){
      return state.app;
    },
    username(state){
      return state.username;
    }

  }
}