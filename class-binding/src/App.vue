<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <!--header-->
  <header id="header">
    <div class="header-content">
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
    
  </footer>
  
</template>

<script setup>


  
</script>

<style scoped>
/*header*/

header {
  width: 100%;
  height: 100px;
  background-color: var(--fifthcolor);
  display: flex;
  justify-content: center;
}

.header-content {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;

    display: flex;
  }
}

/*footer*/
footer {
  width: 100%;
  height: 120px;
  background-color: var(--secondcolor);
  
}
</style>
