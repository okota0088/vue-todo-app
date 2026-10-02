<script setup>
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todoStore'
const todoStore = useTodoStore()
// 画面表示時にサーバーからデータを入手
onMounted(() => {
  todoStore.fetchTodos()
})
</script>

<template>
  <div>
    <h2>ToDo一覧</h2>
    <!-- 1. 通信エラー時の表示 -->
    <p v-if="todoStore.errorMessage" class="error-msg">
      {{ todoStore.errorMessage }}
    </p>

    <!-- 2. ローディング中の表示 -->
    <p v-if="todoStore.isLoading">データを読み込み中...</p>
    <!-- 3. タスク表示エリア -->
    <div v-else>
      <!-- タスク追加フォームやリスト表示を配置 -->
      <!-- 例: <button @click="todoStore.toggleTodo(todo)"> などで呼び出し -->
      <TodoInput />
      <TodoList />
    </div>
   
  </div>
</template>