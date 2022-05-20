<template>
  <div class="main-container">
    <div class="film-container">
      <h1> Risultati Film </h1>
      <ul v-for="movie in selectedMovieArray" :key="`movie-${movie.id}`">
        <li><img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="movie.title"></li>
        <li>{{movie.title}}</li>
        <li>{{movie.original_title}}</li>
        <li>{{movie.original_language}}</li>
        <li>{{movie.vote_average}}</li>
      </ul>
    </div>
    <div class="serie-container">
      <h1> Risultati Serie </h1>
      <ul v-for="serie in selectedTvShowArray" :key="`movie-${serie.id}`">
        <li><img :src="`https://image.tmdb.org/t/p/w200${serie.poster_path}`" :alt="serie.name"></li>
        <li>{{serie.name}}</li>
        <li>{{serie.original_name}}</li>
        <li>{{serie.original_language}}</li>
        <li>{{serie.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>
  
<script>



export default {
  name:'MainLayout',
  props:{
    selectedTvShowArray : Array,
    selectedMovieArray : Array
  },
  mounted() {

  },


  data() {
    return {

    }
  },

  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '../assets/general';
@import '../assets/mixin';
.main-container{
  display: flex;
  h1 , ul , li{
  color:white;
  
  }
}
</style>