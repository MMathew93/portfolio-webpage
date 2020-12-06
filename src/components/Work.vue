<template>
  <section
    id="work"
    data-aos="fade-in"
    data-aos-easing="ease"
    class="aos-init"
    data-aos-duration="3000"
  >
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

<style scoped>
#work {
  height: 100vh;
}

.projectstitle {
  color: inherit;
  font-size: 3.5rem;
  padding: 25px;
}

/*Mobile Mix-ins*/
@media screen and (max-width: 600px) {
  .projectstitle {
    font-size: 2.3rem;
  }
}
</style>