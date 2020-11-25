<template>
  <footer id="footer">
    <div class="social">
      <span class="icon">
        <a class="links" href="https://www.facebook.com/mathew.mckinney">
          <i class="fab fa-facebook"></i>
        </a>
      </span>
      <span class="icon">
        <a class="links" href="https://twitter.com/CallMeLyndexer">
          <i class="fab fa-twitter"></i>
        </a>
      </span>
      <span class="icon">
        <a class="links" href="https://github.com/MMathew93">
          <i class="fab fa-github-alt"></i>
        </a>
      </span>
      <span class="icon">
        <a class="links" href="mailto:mckinney.m93@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
#footer {
  display: flex;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 30;
  width: 100%;
  background-color: rgb(35, 38, 40);
}

.social {
  display: flex;
  justify-content: space-between;
  margin: 5px;
  width: auto;
  padding: 5px;
}
.icon {
  font-size: 25px;
  margin: 0 15px;
}
.links {
  color: inherit !important;
}
</style>
