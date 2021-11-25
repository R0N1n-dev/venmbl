<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>Welcome to LAND</vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Products</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Services</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0
    };
  }
};
</script>

<style>
a {
  font-size: 2rem;
}
</style>
