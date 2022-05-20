<template>
  <div>
    <HeaderLayout
    @searchedText="userSearchedText"
    />
    <MainLayout
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
  },

  data() {
    return {
      baseUrl:'https://api.themoviedb.org/3/search/multi',
      paramsData:{
        api_key:'0f1363d87e909d71f74133f0ac8e1f7c',
        language: 'it-IT',
        query: ''
      },
      selectedMovieArray:[],
      selectedTvShowArray:[]
      

    }
  },

  methods: {
    requestApi(){
      axios.get(this.baseUrl,{
        params: this.paramsData
      })
      .then(res =>{

        res.data.results.forEach(data =>{
        if(data.media_type === 'movie'){
          this.selectedMovieArray.push(data);
        }else if (data.media_type ==='tv'){
          this.selectedTvShowArray.push(data)
        }
        })
        console.log(this.selectedMovieArray)
        console.log(this.selectedTvShowArray)
      })
      .catch(error =>{
        console.log(error);
      })


    },

    userSearchedText(inputText){
      this.paramsData.query = inputText;
      this.requestApi()
      console.log('--->' , inputText);
    }

  },
  
}
</script>

<style lang="scss">
@import './assets/general'

</style>
