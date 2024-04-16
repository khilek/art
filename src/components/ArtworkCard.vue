<script setup>
import { AppState } from "../AppState.js";
import { Art } from "../models/Art.js";

defineProps ({art: Art})


</script>


<template>
    <div  >
      <img :src="art.imgUrls" class="img-fluid" alt="">
      <div class="card px-3">
      {{ art.description }}
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>