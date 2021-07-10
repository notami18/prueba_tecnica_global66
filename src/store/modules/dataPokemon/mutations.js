import * as mutationTypes from "../../../enum/mutation-types";

export default {
    [mutationTypes.GET_DATA_MUTATION](state, dataPokedex) {
        let { data } = state;

        data = [];
        data = dataPokedex;
        state.data = data;

        localStorage.favorites = [];
    },

    [mutationTypes.GET_DATA_MUTATION_FAILED](state, dataPokedex) {
        let { data } = state;

        data = [];
        data = dataPokedex;

        state.data = data;
    },

    [mutationTypes.GET_DETAIL_MUTATION](state, detailPokedex) {
        let { detail } = state;

        let type = detailPokedex.types.map(r => r.type.name).join(', ').toUpperCase();

        let info = {
            image: detailPokedex.sprites.other.dream_world.front_default,
            name: detailPokedex.name.toUpperCase(),
            weight: detailPokedex.weight,
            height: detailPokedex.height,
            types: type,
        };
        detail = {};
        detail = info;

        state.detail = detail;
    },

    [mutationTypes.GET_DETAIL_MUTATION_FAILED](state, detailPokedex) {
        let { detail } = state;

        detail = [];
        detail = detailPokedex;

        state.detail = detail;
    },
};