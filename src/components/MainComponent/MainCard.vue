<template>
    <div 
      @mouseenter="funtionToggleHover()"
      @mouseleave="funtionToggleHover()"
      class=" container-main-card">
      <ul class="container-first-layer">
        <li class="image-container">
          <div
          v-if="fotoShow === false"
          >Foto NON DISPONIBILE</div>
          <img v-else :src="`https://image.tmdb.org/t/p/w300${option.poster_path}`" :alt="option.title">
        </li>
      </ul>
      <ul
      v-if="toggleHover"
      class="container-second-layer">
        <li><h2>{{option.title || option.name}}</h2></li>
        <li><h3>{{option.original_title || option.origina_name}}</h3></li>
        <li class="description">
          <span  v-if="textShow === false">No description avaible</span>
          <span v-else  >{{option.overview}}</span>
        </li>
        <li><lang-flag :iso="option.original_language" :squared="false"/></li>
        <li>
        <star-rating
          :rating="option.vote_average/2"
          :max-rating="5" :star-size="20" 
          :read-only="true"
          :round-start-rating="false"
          inactive-color="#ffffff"
          >
          </star-rating>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:'MainCard',
  props:{
    option: Object
  },

mounted() {

  this.funcitonShowFoto();
  this.funcitonShowDescription();
},

  data() {
    return {
      fotoShow:undefined,
      textShow:undefined,
      toggleHover:false

    }
  },

  methods:{

    funcitonShowFoto(){
      if(this.option.poster_path === null){
        this.fotoShow = false
      }else{
          this.fotoShow = true
      }
      return this.fotoShow
    },

    funcitonShowDescription(){
      if(this.option.overview === ''){
        this.textShow = false
      }else{
          this.textShow = true
      }
      return this.textShow
    },

    funtionToggleHover(){
      this.toggleHover = !this.toggleHover
      // console.log(this.toggleHover = !this.toggleHover)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/general';
@import '../../assets/mixin';
  .container-main-card{
    position: relative;
    top: 0;
    left: 0;
    width: 250px;
    margin-right: 20px;
    cursor: pointer;
    .container-first-layer{
      width: 100%;
      .image-container{
        width: 250px;
        height: 350px;
        @include center;
        border-radius: 10px;
        background-color: lightgray;
        img{
          border-radius: 10px;
          width: 250px;
          height: 350px;
        }
      }
    }
    .container-second-layer{
      position:absolute;
      top: 0;
      left: 0;
      width: 250px;
      height: 350px;
      padding: 5px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      overflow: auto;
      h2{
        
      }
      
      .description{
        max-height: calc(100% - 125px);
        margin: 5px 0 ;
        overflow:auto;
        span{
          overflow: auto;
        }
      }
    }
  }


</style>