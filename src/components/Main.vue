<template>
  <section id="top">
    <container>
      <div id="intro">
        <h2 class="hello">{{ greeting }}.</h2>
        <h2 class="hello">My name is</h2>
        <h1 id="name">Mathew McKinney.</h1>
        <h2 class="hello">I am a Full Stack Developer.</h2>
      </div>
    </container>
  </section>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      greeting: "Hello"
    };
  },
  methods: {
    hello() {
      const greetings = [
        "Bonjour",
        "Hola",
        "Zdravstvuyte",
        "Nǐn hǎo",
        "Konnichiwa",
        "Guten Tag",
        "God dag",
        "Shalom",
        "Goedendag",
        "Anyoung haseyo",
        "Hey",
        "Yo",
        "Hi",
        "Hello"
      ];
      this.greeting = greetings[Math.floor(Math.random() * greetings.length)];
    }
  },
  mounted() {
    setInterval(this.hello, 3000);
  }
};
</script>

<style scoped>
h2 {
  display: inline;
}

#top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#intro {
  text-align: left;
  line-height: normal;
  min-width: 800px;
}

.hello {
  font-size: 3.5rem;
}

.hello:first-child {
  font-size: bold;
  color: white;
  font-size: 4rem;
  margin-right: 20px;
}

#name {
  font-family: "Source Code Pro", monospace;
  font-size: 5rem;
  color: rgb(255, 223, 0);
}
</style>
