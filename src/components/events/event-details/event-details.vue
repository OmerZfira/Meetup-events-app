<template>
    <div id='app'>

         <p class="control" @click="$emit('closeDetails')">
           <a class="button is-danger is-outlined">
           <i class="fa fa-undo" aria-hidden="true"></i>
             Back
          </a>
          </p>
        <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Name -</p>
          <p class="subtitle">{{eventDetails.name}}</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">When and Where?</p>
          <p class="subtitle">{{eventDetails.venue.address_1}} - {{eventDetails.venue.address_2}}</p>
          <p class="subtitle">{{ eventTime }}</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">for more details -</p>
        <a class="subtitle" :href="eventDetails.link">{{ eventDetails.link }}</a>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Description - </p>
       <p class="subtitle" v-html="eventDetails.description"></p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
    </div> 
</template>

<script>
    import moment from 'moment';
    export default {
        props : ['eventDetails'] ,
        data() {
            return {

            }
        } ,
        computed: {
          eventTime : function() {
            return moment(this.eventDetails.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
          } 
        } 
    }
</script>

<style scoped>

.content {
      max-height:600px; 
      overflow: scroll;
}
.title {
    font-size: 2.5em;
    text-decoration: underline;
}


::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-corner {
  display : none;
}
.notification.is-success {
    background-color: #2ccf66;
} 

</style>