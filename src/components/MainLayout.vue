<template>
  <div class="main-container">

    <h1 v-if="trendOnOff">Nuovi e Popolari:</h1>

<vueper-slides v-else
  class="no-shadow"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
</vueper-slides>

    <!-- TREND CARD -->
    <div
    v-if="trendOnOff"
    class="card-container">
      <MainCard
        v-for="option in landingArray"
        :key="`data-${option.id}`"
        :option="option"
      />
    </div>

    <!-- FILM CARD -->
    <h1 v-if="serieOnOff">Risultati Film:</h1>
    <div
    v-if="serieOnOff "
    class="card-container">
      <MainCard
        v-for="option in selectedMovieArray"
        :key="`data-${option.id}`"
        :option="option"
      />
    </div> 

    <!-- SERIE CARD -->
    <h1 v-if="filmOnOff">Risultati Serie Tv:</h1>
    <div
    v-if="filmOnOff"
    class="card-container">
      <MainCard
        v-for="option in selectedTvShowArray"
        :key="`data-${option.id}`"
        :option="option"
      />
    </div>
    <!-- NESSUN FILTRO IMPOSTATO -->
    <div v-else-if="!filmOnOff && !serieOnOff && !trendOnOff">
      <p>Seleziona un filtro <br>Oppure<br> Ricerca un contenuto</p>
    </div>
  </div>
</template>

<script>
import MainCard from "./MainComponent/MainCard.vue";
// import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "MainLayout",
  components: {
    MainCard,
    // VueperSlides, VueperSlide
  },
  props: {
    selectedTvShowArray: Array,
    selectedMovieArray: Array,
    landingArray:Array,
    filmOnOff:Boolean,
    serieOnOff:Boolean,
    trendOnOff:Boolean
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/general";
@import "../assets/mixin";
.main-container {
  padding: 50px;
  height: calc(100vh - 100px);
  overflow: scroll;
  color: white;
  h1{
    margin-bottom: 20px;
  }
  p{
    @include center;
    font-size: 75px;
  }
  .card-container{
    display:flex;

  }
}
</style>