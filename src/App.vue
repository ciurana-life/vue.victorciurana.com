<template>
  <header>
    <h1>Victor Ciurana</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <router-view/>
  <footer>The footer - &copy; 2021</footer>
</template>

<script>

</script>

<style lang="scss">
// Variables
$padding: 20px;
$primary_color: rgb(111, 17, 219);

// Reset
body, html, ul, li, p {
  padding: 0px;
  margin: 0px;
}
a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: none;
}
li {
  list-style-type: none;
}

// Fill all content
body, html, div#app {
  min-height: 100vh;
}

// Make app wrapper flex
div#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  justify-content: space-between;
}

// Same padding everywhere
header, footer {
  padding: $padding 0;
  text-align: center;
  width: 100%;
}

// Nav
header {
  border-bottom: 1px solid lightgrey;
  a {
    margin: 0 $padding/2;
    &.router-link-exact-active {
      color: $primary_color;
      font-weight: bolder;
    }
  }
}

// Footer
footer {
  border-top: 1px solid lightgrey;
}

</style>
