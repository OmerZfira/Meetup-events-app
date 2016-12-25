<template>
    <div id='app'>
            <label class="label">Event name</label>
            <p class="control">
                <input class="input" type="text" placeholder="Event name" v-model="newEvent.name">
            </p>
               <label class="label">Link</label>
            <p class="control has-icon has-icon-right">
                <input class="input" type="text" placeholder="Add here link to the event" v-model="newEvent.link">
            </p>
            <label class="label">venue</label>
            <p class="control flex">
                country : <input type="text" v-model="newEvent.venue.country" placeholder="country"> 
                city    : <input type="text" v-model="newEvent.venue.city" placeholder="city">
                adress  : <input type="text" v-model="newEvent.venue.adress" placeholder="adress">   
            </p>
            <label class="label">Status</label>
            <p class="control flex-center">
            <span class="select">
                <select v-model="newEvent.status">
                    <option>upcoming</option>
                    <option>game over!</option>
                </select>
            </span>
            </p>
            <p class="control">
            <label class="label">Time</label>
                <input class="input" type="date" placeholder="" v-model="newEvent.date">
                <input type="time" name="timestamp" step="1" v-model="newEvent.hour">  
            </p>
            <p class="control">
                <label class="label">Description (supporting at html tag)</label>
                <textarea class="textarea" placeholder="Textarea" v-model="newEvent.description"></textarea>
            </p>
            <p class="control">
            </p>
            <p class="control flex-center">
            <button class="button is-primary" @click="addEvent">Save</button>
            <button class="button is-link" @click="$emit('closeAddMode')">Cancel</button>
            </p>
    </div>
</template>

<script>
    export default {
        data() { 
            return {
             newEvent : {
                 name : '' ,
                 link : '' ,
                 venue : {
                     city : '' ,
                     adress : '' ,
                     country : '' 
                 } ,
                 status : '' ,
                 date : '' ,
                 hour : '',
                 description : ''
              }
            } 
        } ,
        methods : {
            addEvent() {
                this.$http.post('addEvent' , this.newEvent)
                .then(res => res.json())
                .then(event => this.updateEvents(event));
            } ,
            updateEvents(eventObj){
                this.$emit('eventAdded' , eventObj);
            } ,

        } 
    }
</script>

<style scoped>
.control.flex {
    color : black;
    font-size: 1.4em;
}
 .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
 }
 .flex-center {
    display: flex;
    justify-content: center;
 } 
 .label {
     font-size : 1.5em;
     color : #4A4A4A;
 }
</style>