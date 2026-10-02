import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { todoApi } from '../api/todoApi' // Step 2で作ったAPIモジュールを読み込む

export const useTodoStore = defineStore('todo', () => {
  // 【State】データ管理
  const todos = ref([])
  const filter = ref('all')
  const isLoading = ref(false) // 通信中かどうかを表すフラグ
  const errorMessage = ref(null) // エラー発生時のメッセージ

  // 【Getters】絞り込み機能（computed）
  const filteredTodos = computed(() => {
    if (filter.value === 'active') {
      return todos.value.filter(todo => !todo.completed)
    } else if (filter.value === 'completed') {
      return todos.value.filter(todo => todo.completed)
    }
    return todos.value
  })

  // 【Actions】APIと通信してデータを操作する非同期関数（async/await）

  // 1. タスク一覧の読み込み (GET)
  const fetchTodos = async () => {
    isLoading.value = true
    errorMessage.value = null
    try {
      todos.value = await todoApi.fetchTodos()
    } catch (error) {
      errorMessage.value = 'タスクの取得に失敗しました。'
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  // 2. タスクの追加 (POST)
  const addTodo = async (text) => {
    try {
      const newTodo = await todoApi.addTodo(text)
      todos.value.push(newTodo) 
    } catch (error) {
      errorMessage.value = 'タスクの追加に失敗しました。'
      console.error(error)
    }
  }

  // 3. 完了状態の切り替え (PATCH)
  const toggleTodo = async (todo) => {
    try {
      const updated = await todoApi.toggleTodo(todo.id, !todo.completed)
      // 配列内の対象タスクの状態を更新
      const index = todos.value.findIndex(t => t.id === todo.id)
      if (index !== -1) {
        todos.value[index] = updated
      }
    } catch (error) {
      errorMessage.value = 'タスクの更新に失敗しました。'
      console.error(error)
    }
  }

  // 4. タスクの削除 (DELETE)
  const deleteTodo = async (id) => {
    try {
      await todoApi.deleteTodo(id)
      todos.value = todos.value.filter(todo => todo.id !== id)
    } catch (error) {
      errorMessage.value = 'タスクの削除に失敗しました。'
      console.error(error)
    }
  }

  const setFilter = (newFilter) => {
    filter.value = newFilter
  }

  return {
    todos,
    filter,
    isLoading,
    errorMessage,
    filteredTodos,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter
  }
})