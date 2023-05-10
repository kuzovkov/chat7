<template>
    <v-app id="inspire">
        <v-app-bar
                class="px-3"
                color="white"
                flat
                density="compact"
        >

            <v-spacer></v-spacer>

            <v-tabs
                    centered
                    color="grey-darken-2"
            >
                <v-tab
                        v-for="[title, to] in links"
                        :key="title"
                        :to="to"
                >
                    {{ title }}
                </v-tab>
            </v-tabs>
            <v-spacer></v-spacer>

        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <!--<v-row>-->
                    <!--<v-col-->
                            <!--cols="12"-->
                            <!--sm="12"-->
                    <!--&gt;-->
                        <!--<v-sheet-->
                                <!--min-height="70vh"-->
                                <!--rounded="lg"-->
                        <!--&gt;-->
                            <router-view/>
                        <!--</v-sheet>-->
                    <!--</v-col>-->
                <!--</v-row>-->
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            links: [
                ['Home', '/'],
                ['Terms of usage', '/terms'],
                ['FAQ', '/faq'],
                ['About Us', '/about'],
            ],
        }),
        methods: {

        },
        computed: {

        }
    }
</script>
