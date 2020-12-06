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

html {
  width: 100%;
  margin: 0px;
  line-height: normal;
  background-color: rgb(35, 38, 40) !important;
}

body {
  width: 100%;
  margin: 0px;
  line-height: normal;
  background-color: rgb(35, 38, 40);
  overflow-x: hidden;
  overflow-y: hidden;
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

#app::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
