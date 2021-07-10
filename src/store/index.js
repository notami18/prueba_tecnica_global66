import Vue from "vue";
import Vuex from "vuex";

import dataPokemon from "./modules/dataPokemon";

import initialStateDataPokemon from "./modules/dataPokemon/initialState";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dataPokemon
    },
    mutations: {
        RESET(state) {
            state.dataPokemon = {...initialStateDataPokemon };
        }
    }
});