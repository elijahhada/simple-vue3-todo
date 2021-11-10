import { createStore } from "vuex"
import axios from "../http-common"

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    setTasksS(state, payload) {
      state.tasks = payload
    },
  },
  actions: {
    async setTasks(state) {
      axios
        .get("tasks")
        .then((res) => {
          state.commit("setTasksS", res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  modules: {},
  getters: {
    getAllTasks: (state) => state.tasks,
  },
})
