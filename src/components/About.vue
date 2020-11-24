<template>
  <section id="about">
    <container>
      <h1>A little about me...</h1>
      <div id="aboutinfo">
        <div>
          <img src="../assets/placeholder.jpg" alt="Itsa me!" />
        </div>
        <article id="summary">
          I am an up and coming junior full Stack developer currently living in
          Las Vegas, NV. After working within the insurance claims world for the
          last 6 years, I've decided to switch up my career plans into
          programming. I have been self-studying using "The Odin Project" over
          the last year along with freecodecamp and a few Udemy courses along
          the way. Constantly applying myself daily while learning new
          technologies and concepts has been a great experience, I think my hard
          work and detemination speak for itself with how far I have come and
          how far I can still go.
        </article>
      </div>
      <h1>Skills and Technologies</h1>
      <div>
        Technologieshere
      </div>
    </container>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About"
};
</script>
<style scoped>
img {
  border-radius: 5px;
  height: 400px;
}
#aboutinfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

#summary {
  width: 350px;
}
</style>
