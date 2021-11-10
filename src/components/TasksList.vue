<template>
  <h4>All Tasks</h4>
  <div>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue"

export default {
  components: {
    TaskItem,
  },
  mounted: function () {
    this.$store.dispatch("setTasks")
  },
  computed: {
    tasks() {
      return this.$store.getters.getAllTasks
    },
  },
  // data: function () {
  //   return {
  //     tasks: [],
  //   }
  // },
  // methods: {
  //   getAll() {
  //     this.axios
  //       .get("tasks")
  //       .then((res) => {
  //         this.tasks = res.data
  //         console.log(res.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   },
  // },
  // mounted: function () {
  //   this.getAll()
  // },
}
</script>

<style>
h4 {
  margin: 8px 0;
}
</style>
