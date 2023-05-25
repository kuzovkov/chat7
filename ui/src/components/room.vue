<template>
    <div v-if="room" class="room">
        <div class="wrapper">
            <header class="header">
                <div><label>Your name: </label><input type="text" name="name" id="alias" :value="app.options.username" size="20" class="name" disabled></div>
            </header>
            <div class="container">
                <div class="chat-side">
                    <div id="chat-area"></div>

                    <div class="text-input">
                        <textarea id="message-area" type="text" class="input" aria-multiline="true"></textarea>
                        <div class="send-btn controls">
                            <v-btn icon="mdi-send" size="small" id="send" @click="send"></v-btn>
                        </div>
                    </div>

                    <br>

                </div>
                <div class="videos-side">
                    <div class="video-container" id="video-container">
                    </div>
                    <div class="controls">
                        <v-btn icon="mdi-monitor" size="small" id="screenshare" @click="screenshare"></v-btn>
                        <v-btn :icon="app.video_off? 'mdi-video' : 'mdi-video-off'" size="small" id="videotoggle" @click="videotoggle"></v-btn>
                        <v-btn :icon="app.audio_off? 'mdi-volume-high' : 'mdi-volume-off'" size="small" id="audiotoggle" @click="audiotoggle"></v-btn>
                        <v-btn icon="mdi-file" size="small" id="sendfile" @click="sendfile"></v-btn>
                        <v-btn icon="mdi-logout" size="small" id="exit" @click="exit"></v-btn>
                    </div>
                    <input type="file" multiple name="files" id="file-input" style="display: none;">
                </div>

            </div>
            <footer class="footer">
                &copy; Kuzovkov A.V. 2023
            </footer>
        </div>
    </div>

</template>

<script>
    import {makeid} from '../helpers';
    export default {
        data(){
            return {

            }
        },
        methods: {
            ok(){
                this.$router.push('/');
            },
            screenshare(){
                this.app.screenShare();
            },
            videotoggle(){
                this.app.toggleVideo();
            },
            audiotoggle(){
                this.app.toggleAudio();
            },
            sendfile(){
                document.getElementById('file-input').click();
            },
            exit(){
                this.app.exit();
                this.$router.push('/');
            },
            send(){
                this.app.sendChatMessage();
            }
        },
        computed: {
            loading(){
                return this.$store.getters.loading;
            },
            room (){
                return this.$route.params['room'];
            },
            username(){
                let username = this.$store.getters.username;
                if (!username){
                    username = makeid(10);
                    this.$store.dispatch('setUsername', username);
                }
                return username;
            },
            app(){
                return this.$store.getters.app;
            },
            messageArea(){
                return document.getElementById('message-area');
            },
            chatArea(){
                return document.getElementById('chat-area');
            },
            fileInput(){
                return document.getElementById('file-input');
            }
        },
        created (){
            this.$store.dispatch('initApp', {username: this.username, room: this.room, vueComponent: this}).then(() => {
                window.addEventListener('keypress', (e)=> {
                    if (e.keyCode == 13){
                        this.app.sendChatMessage();
                    }
                })

            })
        },
        mounted(){
            this.app.onComponentMounted({messageArea: this.messageArea, chatArea: this.chatArea, fileInput: this.fileInput});
        }

    }
</script>

<style>
    /*.room {margin: 0; padding: 0; width: 100%; height: 100vh;}*/
    .video-title {position: absolute; top: 3px; left: 3px; color: white; font-weight: 600; z-index: 99;}
    .video-element-container {position: relative; margin: 10px; border-radius: 5px; display: inline-block;}
    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0px 15px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
        flex:  1 1 auto;
    }
    #chat-area {width: 100%; min-height: 500px; overflow-y: scroll; background: #eee;}
    #message-area {width: calc(100% - 35px);}
    .left {float: left;}
    span.date {color: #1c2030; font-size: smaller; margin-left: 100px;}
    span.user {color: #3bc2a1; font-size: small; margin-right: 20px;}
    #local-video {width: 640px;  height: 480px;}
    div.chat-side {flex-basis: auto; flex-grow: 0; flex-shrink: 0; padding: 10px 10px 0 0px; margin: 10px; display: flex; flex-direction: column;}
    div#chat-area {max-width: 500px; width: 500px; }
    div.videos-side {flex-grow: 0; flex-basis: 800px; flex-shrink: 1; padding: 20px 0 0 10px; margin: 10px; display: flex; flex-direction: column; flex-wrap: wrap-reverse;}
    ul.users-list {list-style-type: none; color: #3bc2a1; font-size: small; margin-right: 20px;}
    ul.users-list li {color: #3bc2a1; font-size: small; margin-right: 20px;}
    ul.users-list li.me {color: #0b3752; font-size: small; margin-right: 20px;}
    ul.users-list li.me:after {content: ' <-you'; color: darkorange;}
    div.video-container {display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-between; flex:  1 1 auto;}
    .border-red {border: 1px solid red;}
    .border-green {border: 1px solid green;}
    .border-gray {border: 1px solid gray;}
    .border-blue {border: 1px solid blue;}
    .border-orange {border: 1px solid orange;}
    div.controls {margin: 20px;text-align: center;}
    div.controls button {border-radius: 50%; background-color: #00badb; color: white; cursor: pointer; border: none; margin: 0 10px 0 10px; padding: 10px 10px 10px 10px;}
    div.controls button:hover {opacity: 0.5; color: yellow; transition: 0.5s;}
    div.text-input {position: relative;}
    div.send-btn {position: absolute; right: -30px; top: -20px;}
    .control-btn {border-radius: 50%; background-color: #00badb; color: white; cursor: pointer; border: none; margin: 0 10px 0 10px; padding: 10px 10px 10px 10px;}
    .control-btn:hover {opacity: 0.5; color: yellow; transition: 0.5s;}
    .header {background-color: #00badb; height: 50px; display: block; text-align: center; color: whitesmoke; padding-top: 10px;}
    .footer {background-color: #00badb; height: 50px; display: block; text-align: center; color: whitesmoke; padding-top: 20px;}
    button#exit {background-color: #ff253a;}
    input.name {font-size: 18px; border: 1px solid #00badb; border-radius: 5px; padding: 5px;}
    textarea#message-area {font-size: 18px; border: 1px solid #00badb; border-radius: 5px; padding: 5px; }
    .video-title {position: absolute; top: 3px; left: 3px; color: white; font-weight: 600; z-index: 99;}
    .video-element-container {position: relative; margin: 10px; border-radius: 5px; display: inline-block;}
    button#send {border-radius: 3px;}
    .progress-bar {background-color: #00badb;}
    header input {color: aliceblue;}
    @media (max-width: 1400px){
        .container {
            max-width: 970px;
        }
    }

    @media (max-width: 992px){
        .container {
            max-width: 750px;

        }
    }

    @media (max-width: 767px){
        .container {
            max-width: none;
        }
    }
</style>
