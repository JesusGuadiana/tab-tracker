<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2"></div>
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Email"
                type="email"
                name="email"
                v-model="email"
              ></v-text-field>
            </v-flex>
            <br>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Password"
                type="password"
                name="password"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
            </v-flex>
            <br>
            <br>
            <div v-html="error" class="error"></div>
            <v-btn dark
            class="cyan"
            @click="register"
            >Register
            </v-btn>
          </div>
        </form>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:black
}

</style>
