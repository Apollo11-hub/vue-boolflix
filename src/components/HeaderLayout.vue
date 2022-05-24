<template>
  <div class="header-container">
    <div class="logo-option-container">
      <div class="logo">
        <img src="https://fontmeme.com/permalink/220524/f340ba250fcd93dcce45f894facc6b93.png" alt="">
      </div>
      <div class="option">
        <span @click="functionToggleFilm()" :class="toggleFilm ? 'active-red' : ''">Film</span>
        <span @click="functionToggleSeries()" :class="toggleSerie ? 'active-red' : ''">Serie</span>
        <span @click="functionToggleTrend()" :class="toggleTrend ? 'active-red' : ''">Nuovi e Popolari</span>
      </div>
    </div>
    <div class="search-bar-container">
      <input
      v-model="searchBarText"
      @keyup.enter="sentTextFunction()"
      class="search-bar" type="search" placeholder="Cerca qui tra tutti i titoli">
      <button @click="sentTextFunction()" class="noselect"></button>
    </div>
    </div>
</template>

<script>

export default {
  name: "HeaderLayout",
  props:{
    selectedTvShowArray: Array,
    selectedMovieArray: Array,
    landingArray:Array,
  },

  data() {
    return {
        searchBarText:"",
        toggleFilm:undefined,
        toggleSerie:undefined,
        toggleTrend:true
    }
  },
  methods: {
    sentTextFunction(){
      this.$emit('searchedText', this.searchBarText.toLowerCase());
      this.searchBarText = ''
    },

    functionToggleFilm(){
      this.toggleFilm =! this.toggleFilm
      if(this.selectedMovieArray.length > 0){
        this.toggleFilm = true
      }
      this.$emit('filmOn', this.toggleFilm)
      },


    functionToggleSeries(){
      this.toggleSerie = !this.toggleSerie
      if(this.selectedTvShowArray.length > 0){
        this.toggleSerie = true
      }
      this.$emit('serieOn', this.toggleSerie)
    },


    functionToggleTrend(){
      this.toggleTrend =! this.toggleTrend
      if(this.selectedTvShowArray.length > 0 && this.selectedMovieArray.length > 0 )
        this.toggleTrend = false
      this.$emit('trendOn', this.toggleTrend)
    }


  },
};
</script>

<style lang="scss" scoped>
@import '../assets/general';
@import '../assets/mixin';
  .header-container{
    display: flex;
    justify-content: space-between;
    .logo-option-container{
      display:flex;
      .logo{
      display:flex;
      align-content:flex-end;
      width: 300px;
      height: 100px;
      img{ 
        margin-top: 10px;
        width: 100%;
      }
    }
    .option{
      display: flex;
      align-items: flex-end;
      color: white;
      span{
        margin: 0 20px;
        &:hover{
          cursor: pointer;
          color:#e50914;
        }

      }
    }
  }
    .search-bar-container{
      @include center;
      .search-bar{
        width: 400px;
        height: 50px;
        font-size: 20px;
        color: white;
        border-radius: 5px;
        border: none;
        background-color: rgb(49, 49, 49);
        resize: none;
        outline: none;
      }

      .noselect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      button {
        width: 150px;
        height: 50px;
        cursor: pointer;
        margin-right: 40px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e50914;
        background-image: linear-gradient(315deg, #e50914 0%, #000000 80%);
        background-size: 200% 100%;
        background-position: left;
        background-repeat: no-repeat;
        transition: 300ms;
      }
      button:before {
        content: 'Search';
        color: rgb(255, 255, 255);
        font-size: 16px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:5px;
        width: 140px;
        height: 40px;
        background-color: #000000;
        background-image: black;
      }
      button:hover {
        background-position: right;
      }

      button:active:before {
        color: #e50914;
      }

      button:focus {
        outline: none;
      }
    }

  }

</style>