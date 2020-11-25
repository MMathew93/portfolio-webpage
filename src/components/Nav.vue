<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="#top">
        <i class="fas fa-chevron-up"></i>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="links">
            <a href="#work">
              Work
            </a>
            <a href="#about">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
.navbar {
  background-color: inherit !important;
  font-size: 22px;
  font-weight: bold;
}

a {
  color: white !important;
  margin: 0 15px;
}

a:hover {
  color: #42b983 !important;
}
</style>
