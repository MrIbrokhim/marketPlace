<template>
  <nav class="navigation">
    <router-link  class="routers" to="/home">Home</router-link> |
    <router-link  class="routers2" to="/Products">Products</router-link>
    
    
   
  </nav>
  <router-view/>
</template>



   
 
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aqua;
  height: 625px;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navigation{
  background-color: rgb(197, 217, 197);
  color: rgb(29, 27, 27);
   
}
.routers{
  color: rgb(26, 21, 21);
  text-decoration: none;  
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}
.routers2{
  color: rgb(26, 21, 21);
  text-decoration: none;  
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
 
    
}
</style>
