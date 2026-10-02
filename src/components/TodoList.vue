<script setup>
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <div>
    <div class="filter-buttons">
      <button 
        :class="{ active: todoStore.filter === 'all' }" 
        @click="todoStore.setFilter('all')"
      >
        すべて
      </button>
      <button 
        :class="{ active: todoStore.filter === 'active' }" 
        @click="todoStore.setFilter('active')"
      >
        未完了
      </button>
      <button 
        :class="{ active: todoStore.filter === 'completed' }" 
        @click="todoStore.setFilter('completed')"
      >
        完了済み
      </button>
    </div>

    <ul>
      <TodoItem 
        v-for="todo in todoStore.filteredTodos" 
        :key="todo.id" 
        :todo="todo" 
      />
    </ul>
  </div>
</template>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}
.filter-buttons button {
  padding: 4px 12px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 4px;
}
.filter-buttons button.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}
ul {
  list-style: none;
  padding: 0;
}
</style>