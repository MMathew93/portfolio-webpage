<template>
  <div id="top">
    <div id="intro">
      <h2 class="hello">{{ greeting }}.</h2>
      <h2 class="hello">My name is</h2>
      <h1 id="name">Mathew McKinney.</h1>
      <h2 class="hello">I am a</h2>
      <h6 class="status">Jr.</h6>
      <h2 class="hello">Full Stack Developer.</h2>
      <h6 class="status">(in training)</h6>
    </div>
  </div>
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
h2,
h6 {
  display: inline;
}

#top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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

.status {
  margin: 0 3px;
}
</style>
