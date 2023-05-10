<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card class="elevation-12">
                    <v-toolbar dark flat>
                        <v-toolbar-title>Go to room</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation >
                            <v-text-field label="Username" name="Username" prepend-icon="mdi-user" type="text" v-model="username" :rules="usernameRules"/>

                            <v-text-field id="room" label="Room" name="password" prepend-icon="mdi-room" type="text" v-model="room" :counter="6" :rules="roomRules"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                         <v-spacer />
                        <v-btn @click="onSubmit" :disabled="!valid || loading" :loading="loading" id="submit-btn">Go</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {Socket, sleep} from '../helpers';
    export default {
        data(){
            return {
                username: '',
                room: '',
                valid: false,
                usernameRules: [
                    v => !!v || 'Username is required',
                    v => /[a-zA-Z0-9_]{4,}/.test(v) || 'Username must be valid',
                ],
                roomRules: [
                    v => !!v || 'Room is required',
                    v => v && v.length >= 1 || 'Room length must be 2 or more symbols',
                ],
            }
        },
        methods: {
            async onSubmit (){
                if (this.$refs.form.validate()){
                    const options = {username: this.username, room: this.room};
                    this.$store.dispatch('setUsername', options)
                            .then(() => {
                                this.$router.push(`/room/${this.room}`);
                            })
                            .catch((e) => {

                            })
                    }
                }
            },
        computed: {
            loading(){
                return this.$store.getters.loading;
            }
        },
        created (){
            window.addEventListener('keypress', (e)=> {
                if (e.keyCode == 13){
                    document.getElementById('submit-btn').click()
                }
            })

        },

    }
</script>
