import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let _nutritionixApi = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "98c1664f4c5fb71de1f861c494d6af29",
    "x-app-id": "68fad3dc"
  }
});

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com",
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    logs: [],
    activeLog: {},
    foodItems: []
  },
  mutations: {
    setAllLogs(state, logs) {
      state.logs = logs;
    },
    setActiveLog(state, log) {
      state.activeLog = log;
    },
    addLog(state, log) {
      state.logs.push(log);
    },
    searchFood(state, foodInfo) {
      debugger;
      state.foodItems.push(foodInfo.foods[0]);
      console.log("searchFood Mutation says", foodInfo.foods[0]);
    }
  },
  actions: {
    async getAllLogs({ commit, dispatch }) {
      let res = await _sandbox.get("api/jennyandlevi/logs");
      commit("setAllLogs", res.data.data);
    },
    async getActiveLog({ commit, dispatch }, id) {
      let res = await _sandbox.get("api/jennyandlevi/logs/" + id);
      commit("setActiveLog", res.data.data);
    },
    async createLog({ commit, dispatch }, log) {
      let res = await _sandbox.post("api/jennyandlevi/logs", log);
      commit("addLog", res.data.data);
    },
    async searchFood({ commit, dispatch }, food) {
      // debugger;
      let res = await _nutritionixApi.post("", { query: food.query });
      commit("searchFood", res.data);
    }
  },
  modules: {}
});
