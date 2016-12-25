<template>
    <div id='app'>
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <img src="./img/hadas-img.jpg" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">
      <router-link to="/" tag="a" active-class="active">
        <a class="nav-item">Home
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/emails" tag="a" active-class="active">
        <a class="nav-item">Emails
          <span class="icon">
            <i class="fa fa-envelope"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/events" tag="a" active-class="active">
        <a class="nav-item">Events
          <span class="icon"></span>
            <i class="fa fa-rocket"></i>
          </span>
        </a>
     </router-link>
     <router-link to="/places" tag="a" active-class="active">
        <a class="nav-item">Places
          <span class="icon">
            <i class="fa fa-map"></i>
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

    #app {
          max-width: 1200px;
              margin: auto;
    }

    .nav-item img {
      max-height: 58px;
      border-radius: 50%;
}
   .nav-center {
     align-items: center;
   }
</style>