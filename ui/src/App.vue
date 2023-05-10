<template>
  <v-app>
    <router-view/>
    <v-snackbar
            v-model="errorbool"
            multi-line
    >
      {{ error }}

      <template v-slot:actions>
        <v-btn
                color="red"
                variant="text"
                @click="closeError()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-dialog
            v-model="showFlashMessage"
    >
      <v-card>
        <v-card-text>
          {{flashMessage}}
        </v-card-text>
        <v-card-actions>
          <v-btn block @click="closeFlashMessage()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>


<script>
  export default {
    methods: {
      closeError (){
        this.$store.dispatch('clearError')
      },
      closeFlashMessage (){
        this.$store.dispatch('clearFlashMessage')
      },
    },
    computed: {
      error (){
        return this.$store.getters.error;
      },
      errorbool(){
        return (this.$store.getters.error)? true : false;
      },
      flashMessage(){
        return this.$store.getters.flashMessage;
      },
      showFlashMessage(){
        return (this.$store.getters.flashMessage)? true : false;
      }
    },
    created(){
      console.log('App created!');
    }
  }
</script>