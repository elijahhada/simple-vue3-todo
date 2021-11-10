<template>
  <div class="form-container">
    <h3 class="form-title">Add new todo</h3>
    <div class="flex-container">
      <label class="custom-field">
        <input
          type="text"
          required
          v-model="task"
          :class="{ 'red-input': !isValid }"
          @input="validate"
        />
        <span class="placeholder">Enter todo</span>
        <span v-if="!isValid" class="error-message">Field is required</span>
      </label>
      <button class="form-btn" @click="addItem">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      task: "",
      isValid: true,
    }
  },
  methods: {
    addItem() {
      if (this.task.length < 3) {
        this.isValid = false
        return
      }
      const task = {
        title: this.task,
      }
      this.axios
        .post("tasks", task)
        .then((res) => {
          this.$store.dispatch("setTasks")
          this.task = ""
        })
        .catch((error) => {
          console.log(error)
        })
    },
    validate() {
      if (this.task.length > 2) {
        this.isValid = true
      }
    },
  },
}
</script>

<style scoped>
.form-container {
  width: 100%;
  background-color: rgba(100, 236, 59, 0.7);
  padding: 10px 0 20px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.form-title {
  text-align: center;
  color: rgb(0, 0, 0);
}

.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form-btn {
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: white;
  background-color: #0500005e;
  border: none;
  margin-top: 15px;
}

.form-btn:hover {
  cursor: pointer;
  background-color: #050000b7;
}

.custom-field {
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
}

.custom-field input {
  border: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 100%;
  outline: none;
  font-size: 14px;
}

.custom-field .placeholder {
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: #aaa;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
}

.custom-field input:valid + .placeholder,
.custom-field input:focus + .placeholder {
  top: 10px;
  font-size: 10px;
  color: #222;
}

.error-message {
  position: absolute;
  color: red;
}

.red-input {
  border: red 1px solid !important;
}
</style>
