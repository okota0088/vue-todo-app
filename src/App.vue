<script setup>
// スクリプト内の処理はほとんど不要になります

</script>

<template>
  <div class="todo-app">
    <h1>ToDo App</h1>
    
    <!-- ナビゲーションメニュー（リンク） -->
    <nav>
      <router-link to="/">ホーム</router-link> | 
      <router-link to="/about">使い方</router-link>
    </nav>

    <!-- 現在のルート（URL）に応じたコンポーネントがここに表示される -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 450px;
  margin: 40px auto;
  padding: 20px;
  font-family: sans-serif;
}

nav {
  margin-bottom: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

/* 現在開いているページのリンクを強調 */
nav a.router-link-exact-active {
  color: #42b883;
}

main {
  margin-top: 20px;
}
</style>