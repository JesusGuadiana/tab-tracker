<template>
<v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
        <router-link to="/">
            <v-btn flat dark>
                Tab Tracker
            </v-btn>
        </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items >
        <router-link to="login">
            <v-btn
             v-if="!$store.state.isUserLoggedIn"
             flat dark>
                Login
            </v-btn>
        </router-link>
    </v-toolbar-items>

    <v-toolbar-items>
        <router-link to="register">
            <v-btn
            flat dark
            v-if="!$store.state.isUserLoggedIn">
                Sign Up
            </v-btn>
        </router-link>
    </v-toolbar-items>

</v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
