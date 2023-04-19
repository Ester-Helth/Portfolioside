<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <!--header-->
  <header class="header">
    <div  class="header-content" >
      <div class="logo">
        EHM
      </div>
      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/about">CV</RouterLink>
        <RouterLink to="/portfolio">Portfolie</RouterLink>
        <RouterLink to="/contactme">Kontakt</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>

  

  <!--footer-->
  <footer>
    <p>© 2023 ester.ooo</p>
  </footer>
  
</template>

<script setup>



  
</script>

<style scoped>
  @import url("https://use.typekit.net/bgl2fij.css"); /*adobe fonts*/
 
/*header*/
.header {
  width: 100vw;
  height: 100px;
  background-color: var(--fifthcolor);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 200;
  top: 0;
  transition: 0.3s;
}

.header-content {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

nav {
  text-align: center;
  padding: 0;
  margin: 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--textcolor);
}

nav a:first-of-type {
  border: 0;
}

/* scroll effect on header */




@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: left;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}

/*footer*/
footer {
  width: 100%;
  height: 60px;
  background-color: var(--textcolor);
  display: flex;
  align-items: center;
}
</style>
