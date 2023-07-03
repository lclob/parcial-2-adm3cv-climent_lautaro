<template>
  <v-sheet class="elevation-5" id="navBar">
    <v-app-bar color="primary" app dense>
      <v-container>
        <v-row justify="start" align="center">
          <router-link to="/" class="home-link">
              <span>home</span>
          </router-link>

          <v-spacer></v-spacer>

          <v-toolbar-title>surf-shop</v-toolbar-title>

          <v-spacer></v-spacer>

          <router-link to="/carrito">
            <v-btn icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </router-link>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      group: true
    }
  },
}
</script>
