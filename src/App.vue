<template>
  <v-app app>
    <NavHeader app dark></NavHeader>

    <v-main app id="contendedor">
      <v-container fluid primary>
        <router-view></router-view> 
      </v-container>
    </v-main>

    <v-footer app color="primary" class="d-flex justify-center">
      <p class="mx-0 my-2">lautaro climent</p>
    </v-footer>
  </v-app>
</template>

<script>
import NavHeader from './components/NavHeader';

export default {
  name: 'App',
  
  components: {
    NavHeader
},

  data () {
    return{
      //
    }
  }
};
</script>
