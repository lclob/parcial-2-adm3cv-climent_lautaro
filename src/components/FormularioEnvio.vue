<template>
  <v-sheet dark class="elevation-5 py-5" min-height="calc(100vh - 124px)">
    <v-container>
      <v-row justify="center">
        <v-col 
        v-if="!datos"
          cols="12" sm="8" md="6"
        >
          <h2 class="text-center">Formulario de pago</h2>
          <p class="text-center mt-2">Se enviarán las instrucciones de pago al correo ingresado a continuación.</p>

          <v-form @submit.prevent="enviarFormulario" ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="usuario.nombre" label="Nombre" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="usuario.apellido" label="Apellido" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model.trim="usuario.email" label="Email" type="email" :rules="emailRules" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select v-model="usuario.entrega" :items="options" item-text="texto" item-value="value" label="Método de entrega" outlined></v-select>
              </v-col>
              <v-col v-if="usuario.entrega === options[1].value" cols="12">
                <v-text-field v-model="usuario.address" label="Dirección" :rules="entregaRules" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <h4>Productos:</h4>
                <v-list dense>
                  <v-list-item v-for="prod in store" :key="prod.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ prod.titulo }}</v-list-item-title>
                      <v-list-item-subtitle>{{ prod.cantidad }} x {{ prod.precio }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12">
                <div class="text-end">
                  <h4>Total: {{ totalFormatted }}</h4>
                </div>
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" :disabled="!valid" color="primary" block>Enviar</v-btn>
              </v-col>
              <v-col cols="12" v-if="alerta">
                <v-alert type="error" dense>Por favor, complete todos los campos obligatorios.</v-alert>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col v-else>
          <DatosUsuario :usuario="usuario"></DatosUsuario>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import DatosUsuario from './DatosUsuario';

export default {
  data() {
    return {
      store: JSON.parse(localStorage.getItem("carrito")) || [],
      valid: true,
      datos: false,
      usuario: {
        nombre: "",
        apellido: "",
        email: "",
        entrega: "A",
        address: ""
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      entregaRules: [
        v => !!v || "Entrega is required"
      ],
      options: [
        { texto: "Retiro en el local", value: "A" },
        { texto: "Envío a domicilio", value: "B" }
      ],
      alerta: false
    };
  },
  computed: {
    totalFormatted() {
      const total = this.store.reduce(
        (accumulator, item) => accumulator + item.precio * item.cantidad,
        0
      );
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }
  },
  components: {
    DatosUsuario
  },  
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    enviarFormulario() {
      if (!this.usuario.nombre || !this.usuario.apellido || !this.usuario.email) {
        this.alerta = true;
      } else {
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
        this.alerta = false;
        this.datos = true;
      }
    }
  }
};
</script>
