<template>
    <div id='app'>
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <h1>Appsus</h1>
    </a>
  </div>

  <div class="nav-center">
      <router-link to="/" tag="a" active-class="active">
        <a class="nav-item">Home
        </a>
     </router-link>
     <router-link to="/emails" tag="a" active-class="active">
        <a class="nav-item">Emails
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
        </a>
     </router-link>
     <router-link to="/about" tag="a" active-class="active">
        <a class="nav-item">About
        </a>
     </router-link>
  </div>

<span class="hamburger nav-toggle">
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
  h1{
    background: url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px;
  color: red;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 30px;
  font-family: arial, helvetica;
  text-align: center; 
  }

  .nav-center {
    color: #3a4144;
    margin-top: 0.6em;
  }

  a{
    text-decoration: none;
  }
</style>