<template>
  <section id="carousel">
    <b-carousel
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
      :indicator-inside="false"
      :autoplay="false"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="hero is-large">
          <div class="hero-body">
            <img :src="`${carousel.gif}`" />
          </div>
        </section>
        <div class="button-box">
          <a class="button is-link" :href="`${carousel.demo}`">Demo</a>
          <a class="button is-link" :href="`${carousel.source}`">Source Code</a>
        </div>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      arrow: true,
      arrowBoth: true,
      arrowHover: true,
      carousels: [
        {
          name: "PhotoTagApp",
          gif: "https://i.imgur.com/oTzN7VY.gif",
          demo: "https://where-s-waldo-cf908.web.app/#/",
          source:
            "https://github.com/MMathew93/Photo-Tagging-App/tree/master/photo-tagging-app"
        },
        {
          name: "WeatherApp",
          gif: "https://i.imgur.com/bmtieJt.gif",
          demo: "#",
          source: "https://github.com/MMathew93/Weather-App"
        },
        {
          name: "BattleshipApp",
          gif: "https://i.imgur.com/n3kdxUc.gif",
          demo: "#",
          source:
            "https://github.com/MMathew93/Battle-Ship/tree/master/battle-ship"
        },
        {
          name: "BlogUserApp",
          gif: "https://i.imgur.com/ittvW8m.gif",
          demo: "#",
          source: "https://github.com/MMathew93/Blog-Project"
        },
        {
          name: "Discordbot",
          gif: "https://i.imgur.com/NwYJ8ID.gif",
          demo: "#",
          source: "https://github.com/MMathew93/heh-bot"
        },
        {
          name: "MembersOnlyApp",
          gif: "https://i.imgur.com/Y3ucToS.gif",
          demo: "#",
          source: "https://github.com/MMathew93/members-only"
        }
      ]
    };
  },
  methods: {
    getGif() {
      return `/assets/work gifs/0.gif`;
    }
  }
};
</script>

<style scoped>
#carousel {
  width: 100%;
}

.carousel {
  width: 100%;
  margin: 0 20px;
}

.hero-body {
  padding: 0 !important;
}

.is-link {
  max-width: 200px;
}
</style>
