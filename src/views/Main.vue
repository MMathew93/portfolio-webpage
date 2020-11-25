<template>
  <div class="columns">
    <Nav />
    <div class="column"></div>
    <div class="column is-three-quarters">
      <Home />
      <Work />
      <About />
      <Footer />
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Home from "@/components/Home.vue";
import Work from "@/components/Work.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Main",
  components: {
    Nav,
    Home,
    Work,
    About,
    Footer
  }
};
</script>

<style></style>
