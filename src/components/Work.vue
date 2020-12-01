<template>
  <section id="work">
    <div class="container">
      <h1 class="projectstitle">Projects</h1>
      <Carousel />
    </div>
  </section>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  name: "Work",
  components: {
    Carousel
  }
};
</script>

.<style scoped>
#work {
  height: 100vh;
}

.projectstitle {
  color: inherit;
  font-size: 3.5rem;
}
</style>
