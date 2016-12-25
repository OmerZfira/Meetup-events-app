<template>
    <div id='app'>
      <div class="flex-holder">
          <p class="control" @click="$emit('closeDetails')">
              <a class="button is-danger is-outlined">
                  <i class="fa fa-undo" aria-hidden="true"></i> Back
              </a>
          </p>
          <p class="control" @click="isInEditMode = !isInEditMode">
              <a class="button is-info is-outlined">
                  <i class="fa fa-pencil" aria-hidden="true"></i> Edit
              </a>
          </p>
          <p class="control"  v-show="isInEditMode" @click="updateDetails">
          <router-link to="/about">     
              <a class="button is-info is-outlined">
                  <i class="fa fa-pencil" aria-hidden="true"></i>Save
              </a> 
          </router-link>
          </p>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Name -</p>
                
                            <p v-if="!isInEditMode" class="subtitle">{{eventDetails.name}}</p>
                            <input v-else type="text" name="name" v-model="eventDetails.name">
                            
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">When and Where?</p>
                            <p v-if="!isInEditMode" class="subtitle">{{eventDetails.venue.address_1}} - {{eventDetails.venue.address_2}}</p>
                            <div v-else>
                              <input type="text" name="name" v-model="eventDetails.venue.address_1">
                              <input type="text" name="name" v-model="eventDetails.venue.address_2">
                            </div>
                            <p class="subtitle">{{ eventTime }}</p>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <p class="title">for more details -</p>
                        <a v-if="!isInEditMode" class="subtitle" :href="eventDetails.link">{{ eventDetails.link }}</a>
                        <input v-else type="text" name="name" v-model="eventDetails.link">
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Description - </p>
                        <p v-if="!isInEditMode" class="subtitle" v-html="eventDetails.description"></p>
                        <textarea v-else rows="10" cols="80" v-model="eventDetails.description"></textarea>
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
              isInEditMode : false
            }
        } ,
        methods : {
          updateDetails() {
            this.isInEditMode = false;
            this.$http.put('updateEvent' , this.eventUpdate).then(res => console.log('update res : ' , res));
          }
        } ,
        computed: {
          eventTime : function() {
            return moment(this.eventDetails.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
          } ,
          eventUpdate() {
             return {
               id : this.eventDetails.id,
               name : this.eventDetails.name ,
               adress_1 : this.eventDetails.venue.address_1 ,
               adress_2 : this.eventDetails.venue.address_2 ,
               link : this.eventDetails.link ,
               description : this.eventDetails.description
             }
          }
        } 
    }
</script>

<style scoped>

.content {
      max-height:600px; 
      overflow: scroll;
} 
input {
  color: black;
}
textarea {
  color : black;
}
.title {
    font-size: 2.5em;
    text-decoration: underline;
}
.flex-holder{
  display : flex;
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