<template>
  <nav id="nav">
    <div class="nav-links">
      <a href="#work" id="linkPortfolio" @click="smoothScroll">Work</a>
      <a href="#about" id="linkAbout" @click="smoothScroll">About</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
#nav {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 24px;
  color: white;
  margin: 0 15px;
}

#nav a:hover {
  color: #42b983;
}
</style>
