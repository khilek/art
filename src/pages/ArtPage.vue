<script setup>
import { Art } from "../models/Art.js";


defineProps ({art: Art})




</script>


<template>



<section class="container">
<div class="row">

<div class="col">

 
  {{ art.imgUrls}}

  </div>
</div>


</section>




</template>


<style lang="scss" scoped>

</style>