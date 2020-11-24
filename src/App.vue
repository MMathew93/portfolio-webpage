<template>
  <div id="app">
    <Nav />
    <Main />
    <Work />
    <About />
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import Work from "@/components/Work.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Main,
    Work,
    About,
    Footer
  },
  mounted() {
    $(function() {
      $("#nav a").on("click", function() {
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top
          },
          500
        );
      });
    });
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(35, 38, 40);
  color: rgb(200, 195, 188);
  height: 100%;
}

section {
  display: inline-block;
  width: 100%;
  height: 100vh;
}

container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
