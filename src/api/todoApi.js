import axios from 'axios'

// 擬似サーバー（json-server）のエンドポイントURL
const API_URL = 'http://localhost:3001/todos'

export const todoApi = {
  // 1. GET: タスク一覧を取得する
  async fetchTodos() {
    const response = await axios.get(API_URL)
    return response.data
  },

  // 2. POST: 新しいタスクを追加する
  async addTodo(text) {
    const response = await axios.post(API_URL, {
      text: text,
      completed: false
    })
    return response.data
  },

  // 3. PATCH: タスクの完了/未完了の状態を更新する
  async toggleTodo(id, completed) {
    const response = await axios.patch(`${API_URL}/${id}`, {
      completed: completed
    })
    return response.data
  },

  // 4. DELETE: 指定したIDのタスクを削除する
  async deleteTodo(id) {
    await axios.delete(`${API_URL}/${id}`)
  }
}