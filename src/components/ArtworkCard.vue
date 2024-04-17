<script setup>
import { AppState } from "../AppState.js";
import { Art } from "../models/Art.js";
import { artService } from "../services/ArtService.js";
import Pop from "../utils/Pop.js";

defineProps ({art: Art})

async function admireArt(artworkId){
  try {
    await artService.admireArt(artworkId)
  } catch (error) {
    Pop.toast("Couldn't post to Admirers", 'error')
    console.error(error)
  }
}


</script>


<template>
  <RouterLink :to="{name: 'Art Page', params: {artworkId: art.id}}" class="selectable">

    <div  >
      <img :src="art.imgUrls" class="img-fluid" alt="">
      <div class="card px-3">
        <button @click="admireArt(art.id)">SAVE</button>
      {{ art.description }}
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>

</style>