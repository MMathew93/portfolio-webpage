<template>
  <b-navbar class="navbar is-fixed-top">
    <template slot="brand">
      <b-navbar-item class="navbar-item" href="#top">
        <i class="fas fa-chevron-up"></i>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="links">
          <a href="#work">
            Work
          </a>
          <a href="#about">
            About
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
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

.navbar-menu {
  width: auto;
  float: right;
  background-color: rgb(35, 38, 40) !important;
}

a {
  color: white !important;
  margin: 0 15px;
}

a:hover {
  color: #42b983 !important;
}

/*Mobile Mix-ins*/
@media screen and (max-width: 600px) {
  .navbar {
    background-color: rgb(35, 38, 40) !important;
    font-size: 14px;
  }
}
</style>
