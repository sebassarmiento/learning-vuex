<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
}

*{
  box-sizing: border-box;
}

*:focus{
  outline: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
