<template>
  <div>
    <div class="text-center p-4 footer">
      <div class="text-center">
        <a @click="getAllPokemon" class="btn boton-footer-all" href="#" role="button"
          ><i class="fa fa-th-list" aria-hidden="true"></i> All</a
        >
        <a
          @click="getFavorites"
          class="btn boton-footer-favorite"
          href="#"
          role="button"
          ><i class="fa fa-star" aria-hidden="true"></i> Favorites</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getFavorites() {
      this.$emit("selectFavorites");
    },

    getAllPokemon(){
      this.$emit("getAll");
    }
  },
};
</script>
<style lang="css">
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);

  height: 80px;
  border-radius: 0px;
}

.boton-footer-all {
  position: absolute;
  height: 44px;
  left: 25.26%;
  right: 50.87%;
  top: calc(50% - 44px / 2);
  color: White;
  background: #f22539;
  border-radius: 60px;
}

.boton-footer-favorite {
  position: absolute;
  height: 44px;
  left: 50.87%;
  right: 25.26%;
  top: calc(50% - 44px / 2);

  background: #bfbfbf;
  border-radius: 60px;
}
</style>
