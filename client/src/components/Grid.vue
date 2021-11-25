<template>
  <div class="grid">
      <div id="red">Red</div>
      <div id="green">Green</div>
      <div id="blue">Blue</div>
      <div id="purple">Purple</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.grid{
    display: grid;
    grid-template-columns: repeat(1fr, 4);
    grid-template-rows: 20vh;
    
}

</style>