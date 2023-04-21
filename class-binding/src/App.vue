<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <!--header-->
  <header class="header">
    <div  class="header-content" >
      <div class="logo">
        <RouterLink to="/">EHM</RouterLink>
      </div>
      <nav>
        <RouterLink to="/"><span>Hjem</span></RouterLink>
        <RouterLink to="/about"><span>CV</span></RouterLink>
        <RouterLink to="/portfolio"><span>Portfolie</span></RouterLink>
        <RouterLink to="/contactme"><span>Kontakt</span></RouterLink>
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
    <h3>© 2023 ester.ooo</h3>
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
  z-index: 2000;
  top: 0;
  transition: 0.3s;
  box-shadow: 2px 2px 20px var(--textcolor);
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
