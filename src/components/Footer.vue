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
  margin-top: auto;
  display: flex;
  justify-content: center;
}

.social {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 5px;
}
.icon {
  font-size: 25px;
}
.links {
  color: inherit !important;
}
</style>
