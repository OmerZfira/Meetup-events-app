<template>
    <div id='app'>
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">
      <router-link to="/" tag="a" active-class="active">
        <a class="nav-item">Home
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/emails" tag="a" active-class="active">
        <a class="nav-item">Emails
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/events" tag="a" active-class="active">
        <a class="nav-item">Events
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/places" tag="a" active-class="active">
        <a class="nav-item">Places
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
     </router-link>
  </div>

  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div class="nav-right nav-menu">
    <span class="nav-item">
      <a class="button" >
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Places</span>
      </a>
      <a class="button is-primary" href="#">
        <span class="icon">
          <i class="fa fa-download"></i>
        </span>
        <span>Event</span>
      </a>
    </span>
  </div>
</nav>
    </div> 
</template>

<script>
    export default {
        data() { 
            return {
             
            }
        }
    }
</script> 

<style scoped>
  
</style>