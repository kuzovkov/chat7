<template>
    <v-container class="fill-height" fluid>
        <v-container v-if="room">
           <div id="video-container"></div>
        </v-container>
    </v-container>

</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            ok(){
                this.$router.push('/');
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
               return this.$store.getters.username;
            },
            app(){
                return this.$store.getters.app;
            }
        },
        created (){
            this.$store.dispatch('initApp', {username: this.username, room: this.room}).then(() => {
                window.addEventListener('keypress', (e)=> {
                    if (e.keyCode == 13){
                        this.app.sendChatMessage();
                    }
                })
            })
        },

    }
</script>
