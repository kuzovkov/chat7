import { createStore } from 'vuex';
import common from './common';
import app from './app';

const store = createStore({
    modules: {
        common,
        app
    },
    state: {
    },
    getters: {
    }
});

export default store;