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
      <input type="hidden" name="" :value="event.id">
      <div class="media-content"> 

        <p v-if="!isInEditMode" class="title is-5">{{event.name}}</p>
        <input v-else type="text" name="name" v-model="event.name">

        <p v-if="!isInEditMode" class="subtitle is-6" :contenteditable="isInEditMode">{{event.status}}</p>
        <input v-else  type="text" name="status" v-model="event.status">

      </div>
    </div>

    <div class="content" :contenteditable="isInEditMode">
        {{event.name}}
      <br>
        <small v-if="!isInEditMode" :contenteditable="isInEditMode">{{event.venue.address_1}}</small>
        <input v-else type="text" name="adress" v-model="event.venue.address_1">
    </div>
        <a class="button is-primary"  @click.stop="sendDetails">More details</a>
        <a class="button is-success" @click.stop="isInEditMode = !isInEditMode"> Edit</a>
        <a class="button is-success" v-show="isInEditMode" @click ="updateDetails">Save</a>
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
              isInEditMode : false ,
              test : 'hidden' ,
            }
        } ,
        methods: {
          sendDetails(){     
            this.$emit('sendDetails' , this.event);    
          } ,
          updateDetails() {
            this.$http.put('updateEvent' , this.currEvent).then(res => console.log('res' , res));
            this.isInEditMode = false;
          }
        } ,
        computed: {
          currEvent(){
           return {
                  id : this.event.id ,
                  name : this.event.name,
                  status: this.event.status ,
                  adress : this.event.address_1 
                 }
              } 
            }
        }
</script>

<style scoped>
    #app {
        padding: 10px;
    }
    .card {
      height: 100%;
      cursor: pointer;
    }
    .down-prev {
      display: flex;
      justify-content: space-between;
    }
</style>