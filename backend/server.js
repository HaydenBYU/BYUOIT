const express = require('express');

const app = express();
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the actual origin of your client app
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.post('/', async (request, response) => {
    
    var body = null;
    const fetch = require('node-fetch');
    const url = 'https://api.themoviedb.org/3/search/movie?query='+request.body.query+'&include_adult=false&language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWU5NzY1ZGQ2YWRhN2UxNDJlZDZlNjBjZTEyMDc5ZCIsInN1YiI6IjY1YjNlOWE5NTc1MzBlMDE4M2Q5ZDllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U8lKzHPqlBZJz3N3l-CFnS2sylpBlpPXv4DauV84qdI'
    }
    };
    
    try {
        const res = await fetch(url, options);
        let data = await res.json();
        data = formatData(data)
        response.json(data); 
    } catch (err) {
        console.error('error:', err);
        response.status(500).send('Internal Server Error');}
    

});

function formatData(data){
    let movie;
    let array = [];
    for(i = 0; i < data.results.length && i < 10;i++){
        movie = {movie_id:data.results[i].id,title:data.results[i].title,poster_image_url:data.results[i].poster_path,popularity_summary:data.results[i].popularity + " out of "+data.results[i].vote_count}
        array.push(movie)
    }
    return array;
    // console.log(array)
}

app.listen(8080, () => console.log('Example app is listening on port 8080.'));