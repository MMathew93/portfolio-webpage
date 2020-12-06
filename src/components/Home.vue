<template>
  <section id="top">
    <div class="container">
      <div id="intro">
        <h2 class="hello">
          <VueTyper
            :text="greetings"
            :repeat="Infinity"
            :shuffle="true"
            initial-action="typing"
            :pre-type-delay="300"
            :type-delay="100"
            :pre-erase-delay="2500"
            :erase-delay="200"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="blink"
          ></VueTyper>
        </h2>
        <h2 class="hello">My name is</h2>
        <h1 id="name">Mathew McKinney.</h1>
        <div>
          <h2 class="hello">
            I am a Full stack Developer.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "Main",
  components: {
    VueTyper
  },
  data() {
    return {
      greeting: "Hello",
      greetings: [
        "Bonjour!",
        "Hola!",
        "Zdravstvuyte!",
        "Nǐn hǎo!",
        "Konnichiwa!",
        "Guten Tag!",
        "God dag!",
        "Shalom!",
        "Goedendag!",
        "Anyoung haseyo!",
        "Hey!",
        "Yo!",
        "Hi!",
        "Hello!"
      ]
    };
  },
  methods: {
    hello() {
      this.greeting = this.greetings[
        Math.floor(Math.random() * this.greetings.length)
      ];
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
  height: 100vh;
}

#intro {
  text-align: left;
  line-height: normal;
  margin: 0 25px;
}

.hello {
  font-size: 3.5rem;
}

::v-deep .typed {
  color: rgb(200, 195, 188) !important;
}

::v-deep .caret {
  width: 3px !important;
  background-color: rgb(200, 195, 188) !important;
  margin-right: 5px !important;
}

#name {
  font-family: "Source Code Pro", monospace;
  font-size: 5rem;
  color: rgb(255, 223, 0);
}

/*Mobile Mix-ins*/
@media screen and (max-width: 800px) {
  .hello {
    font-size: 2rem;
  }

  #name {
    font-size: 3rem;
  }
}

@media screen and (max-width: 360px) {
  .hello {
    font-size: 1.3rem;
  }

  #name {
    font-size: 2rem;
  }
}
</style>
