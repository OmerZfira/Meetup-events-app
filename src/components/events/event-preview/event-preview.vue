<template>
    <div id='app'>
     <div class="card">
     <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://placehold.it/300x225" alt="">
    </figure>
  </div>
  <div class="card-content">
    <div class="media"> 
      <div class="media-left">
        <figure class="image is-32x32">
          <img src="http://placehold.it/64x64" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-5">{{event.id}}</p>
        <p class="subtitle is-6">{{event.id}}</p>
      </div>
    </div>

    <div class="content">
        {{event.name}}
      <br>
      <small>{{new Date(event.time).toTimeString()}}</small>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        props: {
            event: {

            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    #app {
        padding: 10px;
    }
</style>