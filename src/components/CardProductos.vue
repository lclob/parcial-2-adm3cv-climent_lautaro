<template>
  <v-sheet dark rounded class="elevation-5 py-5" id="home" min-height="calc(100vh - 124px)">
    <v-container>
      <div class="text-start">
        <h2 class="mb-5">Productos</h2>
      </div>
      <v-row justify="start">
        <v-card v-for="producto in productos" :key="producto.id" class="mx-auto" max-width="280">
          <v-img :src="require(`@/assets/img/${producto.imagen}`)" :alt="'imagen de ' + producto.titulo" height="300px"></v-img>
          <v-card-title>{{ producto.titulo }}</v-card-title>
          <v-spacer></v-spacer>
          <span>{{ formatPrice(producto.precio) }}</span>
          <v-card-text>{{ producto.descripcion }}</v-card-text>
          <v-card-actions>
            <v-btn color="orange lighten-2" text v-if="!producto.isSelected" @click="agregarCarrito(producto.id)">
              Agregar al carrito
            </v-btn>
            <v-btn color="green lighten-2" text v-else>
              Agregado al carrito
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    productos: [
      {
        id: 0,
        titulo: 'Rusty The Keg 6',
        precio: 60000,
        descripcion: 'La tabla Keg es una tabla robusta diseñada entre Rusty Preisendorfer y Wade Carmichael...',
        imagen: 'tabla1.webp',
        cantidad: 1,
        isSelected: false
      },
      {
        id: 1,
        titulo: 'Rusty Shiv 6',
        precio: 50000,
        descripcion: 'Hace el trabajo muy bine  en los días de olas pequeñas y más grandes...',
        imagen: 'tabla2.webp',
        cantidad: 1,
        isSelected: false
      },
      {
        id: 2,
        titulo: 'Rusty 1984 6',
        precio: 70000,
        descripcion: 'La tabla de Occy(Marco Jay Luciano Occhilupo) del 84 donde la rompe en  El Raging Bull...',
        imagen: 'tabla3.webp',
        cantidad: 1,
        isSelected: false
      },
      {
        id: 3,
        titulo: 'Rusty Moby Fish 6',
        precio: 90000,
        descripcion: 'Hace apróximadamente 20 años, se hizo la primera tabla Moby...',
        imagen: 'tabla4.webp',
        cantidad: 1,
        isSelected: false
      }
    ],
    store: JSON.parse(localStorage.getItem("carrito")) || [],
  }),
  mounted() {
    this.store.forEach(p => {
      if (p.isSelected) {
        this.productos[p.id].isSelected = true;
      }
    });
    console.log("Se ha montado el componente");
  },
  methods: {
    agregarCarrito(id) {
      this.actualizarCarrito();
      const data = this.productos.find(item => item.id === id);
      if (data && !data.isSelected) {
        data.isSelected = true;
        this.store.push(data);
        localStorage.setItem("carrito", JSON.stringify(this.store));
      }
    },
    actualizarCarrito() {
      this.store = JSON.parse(localStorage.getItem("carrito")) || [];
    },
    formatPrice(price) {
      return "$" + price.toLocaleString("en-US");
    }
  }
};
</script>
