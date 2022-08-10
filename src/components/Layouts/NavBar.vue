<template>
   <nav 
      class="navbar is-success" 
      role="navigation" 
      aria-label="main navigation"
   >
   <div class="container is-max-desktop">   
      <div class="navbar-brand">
         <a class="navbar-item is-size-4 is-family-monospace" href="/">
            <div class="px-2">Noteball</div>
         </a>
         <a 
            @click.prevent="showMobile = !showMobile"
            role="button" 
            class="navbar-burger"
            :class="{'is-active':showMobile}" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample"
         >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a>
      </div>
      <div 
         id="navbarBasicExample" 
         class="navbar-menu"
         :class="{'is-active':showMobile}"
      >
         <div class="navbar-end">
            <RouteLink 
               to="/"
               class="navbar-item"
               active-class="is-active"
            >
               Notes
            </RouteLink>
            <RouteLink 
               to="/stat"
               class="navbar-item"
               active-class="is-active"
            >
               Stat
            </RouteLink>
         </div>
      </div>
   </div>
   </nav>
</template>

<script setup>
   /*
      imports
   */ 
  import {ref} from 'vue'
  
   /*
     mobile nav
   */   
  const showMobile = ref(false)

</script>

<style lang="css">
   
   @media (max-width: 1024px) {
      .navbar-menu{
         position: absolute;
         left: 0;
         width: 100%;
      }  
   }
</style>