export default {
    state: {
        loading: false,
        error: null,
        flashMessage: null
    },
    mutations: {
        setLoading(state, payload){
            state.loading = payload
        },
        setError(state, payload){
            state.error = payload
        },
        clearError(state){
            state.error = null
        },
        setFlashMessage(state, payload){
            state.flashMessage = payload
        },
        clearFlashMessage(state){
            state.flashMessage = null
        }
    },
    actions: {
        setLoading ({commit}, payload){
            commit('setLoading', payload)
        },
        setError({commit}, payload){
            commit('setError',  payload)
        },
        clearError({commit}){
            commit('setError')
        },
        setFlashMessage({commit}, payload){
            commit('setFlashMessage', payload)
        },
        clearFlashMessage({commit}){
            commit('clearFlashMessage')
        }

    },
    getters: {
        loading(state){
            return state.loading
        },
        error(state){
            return state.error
        },
        flashMessage(state){
            return state.flashMessage
        }
    }
}