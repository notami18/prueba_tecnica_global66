<template>
  <div>
    <div v-if="!loadingInit">
      <div class="row">
        <div class="center-el">
          <img src="img/pikachu.svg" alt="project-pokedex" srcset="" />
        </div>
        <div class="titulo-principal col-md-12 text-center mt-5">
          <h2>Welcome to Pokédex</h2>
        </div>
        <div class="parrafo col-md-12">
          <h5>
            The digital encyclopedia created by Professor Oak is an invaluable
            tool to Trainers in the Pokémon world.
          </h5>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <a
              @click.prevent="getStarted"
              class="btn btn-danger boton-pokedex"
              href="#"
              role="button"
              >Get started</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-else-if="loadingInit">
      <loading></loading>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapState, mapGetters } from "vuex";
import * as actionTypes from "../enum/action-types";
// eslint-disable-next-line no-unused-vars
import * as routeTypes from "../enum/route-types";
import loading from "../components/loading";
export default {
  name: "home",
  components: {
    loading,
  },
  data() {
    return {
      loadingInit: false,
    };
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      getListData: actionTypes.GET_DATA,
    }),

    async getStarted() {
      this.loadingInit = true;
      let _this = this;
      setTimeout(
        async function() {
          await _this.getListData();
          _this.$router.push({
            path: routeTypes.POKEDEX,
          });
          _this.loadingInit = false;
        },
        1000,
        this
      );
    },
  },
  component: {},
};
</script>
<style lang="css">
.center-el {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
  margin-bottom: 60px;
}

.titulo-principal {
  color: #353535;
  margin-bottom: 30px;
}

.parrafo {
  width: 570px;
  height: 54px;
  left: 291px;
  top: 479px;

  text-align: center;
  margin: auto;
  color: #5e5e5e;
}

body {
  background-color: #f3f3f3;
}

.boton-pokedex {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 20px;

  /* position: absolute; */
  width: 131px;
  height: 44px;
  left: 511px;
  top: 583px;

  background: #f22539;
  border-radius: 60px;
  margin: auto;
  margin-top: 50px;
}
</style>
