<template>
  <div class="home">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Main,
    Footer
  }
};
</script>
