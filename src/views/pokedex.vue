<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <input
          class="form-control search-custom"
          type="text"
          placeholder="Search ..."
          aria-label="default input example"
        />
      </div>
      <div class="col-md-12">
        <div v-for="(pokemon, index) in dataPokedex" :key="index">
          <div class="row">
            <div class="card card-custom">
              <div class="card-body row">
                <div class="col-xs-6 col-md-6">
                  <a @click="showInfo(pokemon.pokemonName)">
                    <h4 class="card-title name-pokemon">
                      {{ pokemon.pokemonName }}
                    </h4>
                  </a>
                </div>
                <div class="col-xs-6 col-md-6 text-end">
                  <a @click.prevent="changeFavorite(index)">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="22" cy="22" r="22" fill="#F5F5F5" />
                      <path
                        :class="
                          pokemon.favorite
                            ? 'start-color-check'
                            : 'start-color-default'
                        "
                        d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <footer-pokemon v-on:selectFavorites="selectFavorites"></footer-pokemon>
    </div>
    <div class="row">
      <div v-if="showModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">...</h5>
                    <img
                      style="width: 190px;"
                      :src="getDataDetail.image"
                      alt="pokemon"
                      srcset=""
                    />
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" @click="showModal = false"
                        >&times;</span
                      >
                    </button>
                  </div>
                  <div class="modal-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <h5><strong>Name:</strong> {{ getDataDetail.name }}</h5>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          <strong>Weight:</strong> {{ getDataDetail.weight }}
                        </h5>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          <strong>Height:</strong> {{ getDataDetail.height }}
                        </h5>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          <strong>Types:</strong> {{ getDataDetail.types }}
                        </h5>
                      </li>
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <div class="row">
                      <div class="col-xs-6 col-md-6">
                        <a
                          @click.prevent="clipboard(getDataDetail)"
                          class="btn btn-danger boton-share"
                          href="#"
                          role="button"
                          >Share to my friend</a
                        >
                      </div>
                      <div class="col-xs-6 col-md-6 text-end">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="22" cy="22" r="22" fill="#F5F5F5" />
                          <path
                            class="start-color-check"
                            d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapState, mapGetters } from "vuex";
// eslint-disable-next-line no-unused-vars
import * as actionTypes from "../enum/action-types";
import footerPokemon from "../components/footer";
export default {
  name: "pokedex",
  components: {
    footerPokemon,
  },
  data() {
    return {
      dataPokedex: [],
      datalocalfavorite: [],
      showModal: false,
    };
  },
  async mounted() {
    this.dataPokedex = this.getDataPokedex.map((x) => {
      return {
        pokemonName: x.name.toUpperCase(),
        favorite: false,
      };
    });

    await this.getListData();
  },
  methods: {
    ...mapActions({
      getListData: actionTypes.GET_DATA,
      getListDetail: actionTypes.GET_DETAIL,
    }),

    changeFavorite(i) {
      this.checkFavorite = true;
      this.dataPokedex[i].favorite = true;

      this.datalocalfavorite.push(this.dataPokedex[i]);
    
      localStorage.favorites = JSON.stringify(this.datalocalfavorite);

      console.log(this.dataPokedex[i]);
      return;
    },

    selectFavorites() {
      this.dataPokedex = [];
      this.dataPokedex = JSON.parse(localStorage.favorites);
    },

    async showInfo(name) {
      await this.getListDetail(name.toLowerCase());
      this.showModal = true;
    },

    clipboard(data) {
      const share = `Name: ${data.name}, Weight: ${data.weight}, Height: ${data.height}`;

      this.copyStringToClipboard(share);
    },

    copyStringToClipboard(str) {
      var el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
  computed: {
    ...mapGetters(["getDataPokedex", "getDataDetail"]),
  },
};
</script>
<style lang="css">
.card-custom {
  background: #ffffff;
  border-radius: 5px;

  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  width: 800px;
}

.card {
  /* height: 60px;
  width: 570px;
  left: 0px;
  top: 0px; */
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  /* float: none;
  margin-bottom: 10px; */
}

.search-custom {
  width: 798px;
  height: 50px;
  left: 291px;
  top: calc(50% - 50px / 2 - 290px);

  /* Composing/Neutral/White */

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;

  margin: auto;
  margin-top: 35px;
  margin-bottom: 40px;

  padding: 2rem 1rem;
}


.name-pokemon {
  margin-top: 10px;
  cursor: pointer;
}

.start-color-default {
  fill: #bfbfbf;
  cursor: pointer;
}

.start-color-check {
  fill: #eca539;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-header {
  background-image: url("../../public/img/paisaje.svg");
  /* padding-bottom: 176px; */
}

.boton-share {
  /* display: flex; */
  /* flex-direction: row; */
  align-items: center;
  /* padding: 11px 20px; */

  /* position: absolute; */
  width: 195px;
  height: 44px;
  left: 30px;
  top: calc(50% - 44px / 2 + 211px);

  background: #f22539;
  border-radius: 60px;

  padding: 11px, 20px, 11px, 20px;
  /* margin-top: 24px; */
}
</style>
