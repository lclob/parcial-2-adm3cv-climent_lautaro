<template>
  <v-sheet dark class="elevation-5 py-5" id="carrito" min-height="calc(100vh - 124px)">
    <v-container>
      <div class="text-center">
        <h2 class="mb-5">Carrito</h2>
      </div>
      <v-row justify="center">
        <v-col cols="12" v-if="store.length === 0" class="text-center">
          <p>Aún no se han agregado productos al carrito de compras.</p>
          <v-col md="8" class="mx-auto"><router-link to="/" class="my-10"><v-btn color="primary" dark large block >Ver productos</v-btn></router-link></v-col>
        </v-col>
        <v-col cols="12" v-for="prod in store" :key="prod.id">
          <v-card class="mb-5">
            <v-row align="center" no-gutters class="pa-5">
              <v-col cols="12" md="4">
                <v-img :src="require(`@/assets/img/${prod.imagen}`)" aspect-ratio="1" height="200" contain></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <v-card-text>
                  <h5 class="card-title">{{ prod.titulo }}</h5>
                  <p class="card-text">
                    <small class="text-muted">{{ prod.precio * prod.cantidad }}</small>
                  </p>
                </v-card-text>
                <v-card-text class="ei">
                  <v-row align="center">
                    <v-col cols="6">
                      <span>Cantidad:</span>
                      <span>{{ prod.cantidad }}</span>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn :disabled="prod.cantidad === 1" @click="changeQuantity(prod.id, -1)" color="warning">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-btn @click="deleteProduct(prod.id)" color="error">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                  <v-btn :disabled="prod.cantidad === 5" @click="changeQuantity(prod.id, 1)" color="success">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" v-if="store.length">
          <div class="text-end">
            <h4>Total</h4>
            <h3>{{ getTotalPrice() }}</h3>
          </div>
          <div class="text-center mt-5">
            <router-link to="/formularioEnvio"><v-btn color="primary" dark large block>Pagar</v-btn></router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      store: JSON.parse(localStorage.getItem("carrito")) || [],
    };
  },
  methods: {
    updateCart() {
      this.store = JSON.parse(localStorage.getItem("carrito")) || [];
    },
    getTotalPrice() {
      const totalPrice = this.store.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      return "$" + totalPrice.toLocaleString("en-US");
    },
    deleteProduct(id) {
      this.updateCart();
      this.store = this.store.filter(item => item.id !== id);
      localStorage.setItem("carrito", JSON.stringify(this.store));
    },
    changeQuantity(id, amount) {
      this.updateCart();
      const product = this.store.find(item => item.id === id);
      if (product) {
        product.cantidad += amount;
        localStorage.setItem("carrito", JSON.stringify(this.store));
      }
    }
  }
};
</script>
