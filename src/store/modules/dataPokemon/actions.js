import serviceDataPokedex from "../../../services/index";
import * as actionTypes from "../../../enum/action-types";
import * as mutationTypes from "../../../enum/mutation-types";

export default {
    async [actionTypes.GET_DATA]({ commit }) {
        const data = await serviceDataPokedex.getData();
        if (data && data.results.length) {
            commit(mutationTypes.GET_DATA_MUTATION, data.results);
        } else {
            commit(mutationTypes.GET_DATA_MUTATION_FAILED, data.results);
        }
    },

    async [actionTypes.GET_DETAIL]({ commit }, name) {
        const data = await serviceDataPokedex.getData(name);
        if (data) {
            commit(mutationTypes.GET_DETAIL_MUTATION, data);
        } else {
            commit(mutationTypes.GET_DETAIL_MUTATION_FAILED, data);
        }
    },
};