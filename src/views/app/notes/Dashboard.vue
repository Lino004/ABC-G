<template>
  <div>
    <banner title="Carnet de notes" />
    <div class="tab-menu">
      <div class="tab">
        
        <i class="fas fa-users"></i>
        <p>Carnet de note par matière</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .tab-menu {
    width: calc(100% + 120px);
    background-size: cover;
    position: relative;
    padding: 40px;
    left: -60px;
    top: -45px;
    overflow: hidden;
    background-color: white;
  }
</style>
<script>
import Banner from '@/components/Common/Banner'
export default {
  components: { Banner }
}
</script>