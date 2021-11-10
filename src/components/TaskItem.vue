<template>
  <div class="item-container">
    <input type="checkbox" class="item-check" @click="complete" v-model="task.completed" />
    <p class="item-title" :class="{ 'input-crossed': task.completed }">{{ task.title }}</p>
    <button class="item-trash" @click="remove">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: {
        title: {
          type: String,
        },
        completed: {
          type: Boolean,
        },
      },
    },
  },
  methods: {
    complete() {
      const task = {
        title: this.task.title,
        completed: !this.task.completed,
      }
      this.axios
        .put("tasks/" + this.task.id, task)
        .then((res) => {
          this.$store.dispatch("setTasks")
        })
        .catch((error) => {
          console.log(error)
        })
    },
    remove() {
      if (!confirm("Are you sure?")) {
        return
      }
      this.axios
        .delete("tasks/" + this.task.id)
        .then((res) => {
          this.$store.dispatch("setTasks")
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  background-color: rgba(100, 236, 59, 0.7);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.item-title {
  color: black;
  width: 70%;
  text-align: center;
}

.item-trash {
  font-size: 26px;
  border: none;
  background-color: rgba(54, 10, 10, 0.5);
  color: white;
}

.item-trash:hover {
  cursor: pointer;
  background-color: rgba(54, 10, 10, 0.8);
}

.input-crossed {
  text-decoration: line-through;
}
</style>
