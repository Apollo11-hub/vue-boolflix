<template>
  <div>
    <HeaderLayout
    @searchedText="userSearchedText"
    @serieOn="toggleSerie"
    @filmOn="toggleFilm"
    @trendOn="toggleTrend"
    :selectedMovieArray="selectedMovieArray"
    :selectedTvShowArray="selectedTvShowArray"
    :landingArray="landingArray"
    />
    <MainLayout
    :selectedMovieArray="selectedMovieArray"
    :selectedTvShowArray="selectedTvShowArray"
    :landingArray="landingArray"
    :filmOnOff="filmOnOff"
    :serieOnOff="serieOnOff"
    :trendOnOff="trendOnOff"
    />

  </div>
</template>

<script>
import axios from 'axios';
import MainLayout from './components/MainLayout.vue'
import HeaderLayout from './components/HeaderLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    HeaderLayout
  },

  mounted() {
    this.requestApi()
  },

  data() {
    return {
      baseUrl:'https://api.themoviedb.org/3/search/',
      paramsData:{
        api_key:'0f1363d87e909d71f74133f0ac8e1f7c',
        language: 'it-IT',
        query: ''
      },
      selectedMovieArray:[],
      selectedTvShowArray:[],
      landingArray:[],
      filmOnOff:false,
      serieOnOff:false,
      trendOnOff:true,

    }
  },

  methods: {
    requestApi(type = ''){
      const landingPage ="https://api.themoviedb.org/3/trending/all/day?api_key=0f1363d87e909d71f74133f0ac8e1f7c"
      if(type === ''){
        axios.get(landingPage).then(res =>{
          this.landingArray = res.data.results
          console.log('landing' , this.landingArray);
        })
      }else{
        axios.get(this.baseUrl + type ,{
          params:this.paramsData
        })
        .then(res =>{
          if (type === 'movie') {
            this.selectedMovieArray = res.data.results
          }else if(type === 'tv'){
            this.selectedTvShowArray = res.data.results
          }
        })
        
      .catch(error =>{
        console.log("error----->" , error.message);
      })

  } 
},

    userSearchedText(inputText){
      this.paramsData.query = inputText;
      // this.trendOnOff = false,
      this.requestApi('movie')
      this.requestApi('tv')
      console.log('--->' , inputText);
    },

    toggleSerie(parametro){
      this.filmOnOff = parametro
      console.log('Film', this.filmOnOff);
    },

    toggleFilm(parametr){
      this.serieOnOff = parametr
      console.log('Serie' , this.serieOnOff);
    },

    toggleTrend(paramet){
      this.trendOnOff = paramet
      console.log('trend' , this.trendOnOff);
    },

  },
  
}
</script>

<style lang="scss">
@import './assets/general';
h1{
  color:white;
}

</style>
