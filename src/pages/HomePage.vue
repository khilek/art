<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { artService } from "../services/ArtService.js";
import Pop from "../utils/Pop.js";
import { Art } from "../models/Art.js";



const myArtwork = computed(()=> AppState.myArtwork)

onMounted(()=>{
  getArt()
})



async function getArt(){
  try {
    await artService.getArt()

  } catch (error) {
    Pop.toast ("Couldn't get Artwork", 'error')
    console.error(error)
  }
}

async function changePage(pageNumber){
  try {
    await artService.changePage(pageNumber)
  } catch (error) {
    Pop.toast("Couldn't not change page", 'error')
    console.error(error)
  }
}



</script>

<template>

<div class="container-fluid">

    <!-- <div class="col-3 p-2" v-for="image in myArtwork" :key="image.slug">
      <img :src="image.imgUrls" class="img-fluid" alt="">
      <div class="card px-3">
{{ image.description }}
</div>
    </div> -->
<section class="row d-flex justify-content-between m-3">
  <div class="col-4">
    <button :disabled="AppState.currentPage == 1" class="btn btn-primary w-100" @click="changePage(AppState.currentPage - 1)">Previous Page</button>
  </div>
  <div class="col-4 text-center">Page {{ AppState.currentPage }} of {{ AppState.Pages }}</div>
  <div class="col-4">
    <button :disabled="AppState.currentPage == AppState.Pages" class="btn btn-primary w-100" @click="changePage(AppState.currentPage + 1)">Next Page</button>
  </div>
</section>


    <div class="artwork row">
      <ArtworkCard v-for="image in myArtwork" :key="image.slug" :art="image" class="col-3 mt-2 p-2"/>
    </div>

    
</div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
