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
}
</script>

<style>
h4 {
  margin: 8px 0;
}
</style>
