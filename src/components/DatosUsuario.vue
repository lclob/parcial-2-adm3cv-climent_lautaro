<template>
  <v-sheet dark rounded class="elevation-5 py-5">
    <v-container>
      <v-row id="datos-usuario" justify="center">
          <div class="col-md-8 pt-3">
            <h2>Datos del usuario</h2>
            <div class="row">
              <span class="col-12">{{ mensaje }}</span>
              <span class="col-12">{{ instrucciones }}</span>
            </div>
          </div>
          <div class="col-md-8 pt-3">
            <ul class="list-group mb-3">
              <li class="list-group-item">Nombre: {{ usuario.nombre }}</li>
              <li class="list-group-item">Apellido: {{ usuario.apellido }}</li>
              <li class="list-group-item">Email: {{ usuario.email }}</li>
              <li class="list-group-item" v-if="usuario.address">Dirección: {{ usuario.address }}</li>
            </ul>

            <router-link to="/"><v-btn color="primary" block>Volver al inicio</v-btn></router-link>
          </div>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  export default {
    props: ['usuario'],
    data() {
      return {
        mensaje: 'Gracias por finalizar la compra!',
        instrucciones: 'Enviaremos las instrucciones de pago al correo ingresado anteriormente.',
      };
    }
  };
</script>

