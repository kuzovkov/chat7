<template>
    <v-container v-if="!room">
        <v-row justify="center">
            <v-dialog
                    v-model="dialog" width="600px"
                    persistent
            >
                <v-card>
                    <v-card-title class="text-h5">
                        Room is required!
                    </v-card-title>
                    <v-card-actions>
                        <v-btn
                                color=""
                                variant="text"
                                @click="dialog = false; ok()"
                        >
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
    <v-container v-if="room">
        <router-view/>
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
