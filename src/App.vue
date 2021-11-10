<template>
  <div class="container">
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TasksList"

export default {
  components: {
    TaskForm,
    TaskList,
  },
}
</script>

<style scoped>
.container {
  width: 400px;
  margin: 0 auto;
}
</style>
