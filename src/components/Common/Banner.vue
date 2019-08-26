<template>
  <div class="banner">
    <h1 class="font-weight-bold text-white">{{title}}</h1>
  </div>
</template>

<style scoped>
  .banner {
    background-image: url(../../assets/images/school-banner.png);
    background-blend-mode: overlay;
    width: calc(100% + 120px);
    background-size: cover;
    background-position: -100px center;
    position: relative;
    padding: 40px;
    left: -60px;
    top: -45px;
    overflow: hidden;
    background-color: #00000060;
  }
</style>

<script>
export default {
  props: ['title']
}
</script>