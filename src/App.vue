<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import $ from "jquery";
import Main from "@/views/Main.vue";

export default {
  name: "App",
  components: {
    Main
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

html,
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-y: hidden;
  padding: 0 !important;
  line-height: normal;
  background-color: rgb(35, 38, 40);
  scroll-behavior: smooth;
  position: absolute;
}

section {
  display: flex !important;
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
