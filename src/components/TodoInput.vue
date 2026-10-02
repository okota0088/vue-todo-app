<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
// ref関数でnewTofoTextをリアクティブ(変更を監視する状態)にする。
const newTodoText = ref('')
// 
const handleSubmit = () => {
  if (newTodoText.value.trim() === '') return
  todoStore.addTodo(newTodoText.value) // Storeの関数を呼び出す
  newTodoText.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="add-form">
    <input v-model="newTodoText" placeholder="新しいタスクを入力..." />
    <button :disabled="todoStore.isLoading" type="submit">追加</button>
  </form>
</template>

<style scoped>
.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>