import IndexPage from 'index.vue'
new Vue({
    el: '#app',
    components:{
      IndexPage
    },
    data: {
      searchTerm: '',
      searchResult: null,
    },
    methods: {
      search() {
        // Perform your POST request here
        const url = 'http://localhost:8080'; // Replace with your server endpoint
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: this.searchTerm }),
        };
  
        fetch(url, options)
          .then(response => response.json())
          .then(data => {
            this.searchResult = data;
          })
          .catch(error => {
            console.error('Error:', error);
            this.searchResult = null;
          });
      },
    },
  });