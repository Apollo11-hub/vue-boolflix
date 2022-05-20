<template>
  <div class="header-container">
    <div class="logo"></div>
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

  data() {
    return {
        searchBarText:"",
    }
  },
  methods: {
    sentTextFunction(){
      this.$emit('searchedText', this.searchBarText.toLowerCase());
      this.searchBarText = ''

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
    .logo{
      width: 100px;
      height: 100px;
      background-color: white;
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