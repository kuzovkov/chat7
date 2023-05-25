<template>
    <div class="room-container">
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
        <div v-if="room">
            <router-view/>
        </div>
    </div>

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

    }
</script>

<style>
    /*.room-container {*/
        /*padding: 0;*/
        /*margin: 0;*/
        /*height: 100vh;*/
    /*}*/

    .border-red {border: 1px solid red;}
    .border-green {border: 1px solid green;}
    .border-blue {border: 1px solid blue;}
    .border-orange {border: 1px solid orange;}
    .border-blueviolet {border: 1px solid blueviolet;}

    /*Обнуление*/
    *{
        padding: 0;
        margin: 0;
        border: 0;
    }
    *,*:before,*:after{
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    :focus,:active{outline: none;}
    a:focus,a:active{outline: none;}
    nav,footer,header,aside{display: block;}
    html,body{
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 14px;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    input,button,textarea{font-family:inherit;}
    input::-ms-clear{display: none;}
    button{cursor: pointer;}
    button::-moz-focus-inner {padding:0;border:0;}
    a, a:visited{text-decoration: none;}
    a:hover{text-decoration: none;}
    ul li{list-style: none;}
    img{vertical-align: top;}
    h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
    .wrapper {min-height: 100%; display: flex; flex-direction: column;}
    /*--------------------*/
</style>
