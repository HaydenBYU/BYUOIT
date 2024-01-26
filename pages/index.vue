<template>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Search Page</title>
</head>
<body>
  <div id="app">
    <input v-model="searchTerm" type="text" placeholder="Enter search term">
    <button @click="search">Search</button>
    <div v-if="searchResult">
      <h2>Search Result:</h2>
      <pre>{{ searchResult }}</pre>
    </div>
  </div>

  
</body>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script src="app.js"></script>
<script>
export default {
  name: 'IndexPage',
}
</script>
