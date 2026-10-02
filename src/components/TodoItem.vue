<script setup>
import { useTodoStore } from '../stores/todoStore'

defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const todoStore = useTodoStore()
</script>

<template>
  <li>
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ done: todo.completed }">{{ todo.text }}</span>
    <button @click="todoStore.deleteTodo(todo.id)" class="delete-btn">削除</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.done {
  text-decoration: line-through;
  color: #888;
}
span {
  flex: 1;
}
.delete-btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>