<template>
    <div id='app'>
    <label class="label">filter</label>
        <p class="control flex-center">
        <span class="select">
            <select @click="filterName=''" v-model="filterType">
                <option>Name</option>
                <option>Time</option>
                <option>Venue</option>
            </select>
        </span>
        <input v-if="filterType === 'Name' || filterType === 'Venue'" type="text" v-model="filterName" :placeholder="placeHolderName">
        <input v-else type="date" v-model="filterName" :placeholder="placeHolderName">
        <a class="button is-success" @click="isInAddEventMode = true">
        <i class="fa fa-plus" aria-hidden="true"></i> Add event</a>
        <a v-show="isInAddEventMode === true" class="button is-warning is-active" @click="isInAddEventMode = false">
        <i class="fa fa-undo" aria-hidden="true"></i>back</a>
        <h1 v-show="numOfResult !== 0" class="result">find : {{numOfResult}} results.</h1>
        </p>

     
        <template v-if="isInAddEventMode">
            <event-add @eventAdded="addEvent" @closeAddMode="isInAddEventMode = false"></event-add>
        </template>
        <template v-else>
            <event-details v-if="showDetails" :eventDetails="eventDetails" @closeDetails="showDetails = false"></event-details>
            <event-by-day v-else :events="filterEvent" @sendDetails="sendDetails"></event-by-day>
        </template>
    </div>
</template>

<script>
    import EventFilter from '../../components/events/event-filter/event-filter.vue';
    import EventByDay from '../../components/events/event-by-day/event-by-day.vue';
    import eventDetails from '../../components/events/event-details/event-details.vue';
    import eventAdd from '../../components/events/event-add/event-add.vue';
    import moment from 'moment';


    export default {
        data() {
            return {
                events: [] ,
                eventDetails : {} ,
                showDetails : false ,
                isInAddEventMode : false ,
                filterName : '' ,
                numOfResult : 0 ,
                filterType : 'Name' ,
                placeHolderName : 'Name'
            }
        },
        components: {
            'event-filter': EventFilter,
            'event-by-day': EventByDay ,
            'event-details' : eventDetails ,
            'event-add' : eventAdd
        },
        methods: {
            reloadEvents() {
                this.$http.get('events')
                    .then(res => res.json())
                    .then(events => {
                        this.events = events;
                    });
            } ,
            sendDetails(event) { 
                this.eventDetails = event;
                this.showDetails = true
            } ,
            addEvent(event){
                this.events.push(event);
                this.isInAddEventMode = false;
            } 
        }, 
        computed : {
            filterEvent() {
                // by name
                if(this.filterType === 'Name'){
                    this.placeHolderName = 'find by name ...';
                    if (this.filterName === '') {
                        this.numOfResult = 0;
                        return this.events;
                    } else {
                        let filterArray = this.events.filter(event => {
                            return event.name.includes(this.filterName);
                        });   
                        this.numOfResult = filterArray.length;     
                        return filterArray;
                    }    
                    // by date 
                } else if (this.filterType === 'Time') {
                        if (this.filterName === '') {
                            this.numOfResult = 0;
                            return this.events;
                    }  else {
                        let filterArray = this.events.filter(event => {
                                 let date = moment(event.time).format('YY-MM-DD');
                                 let filterDate = this.filterName.slice(2);
                                 return date === filterDate;
                            });   
                        this.numOfResult = filterArray.length;     
                        return filterArray;
                    }
                    // by venue
                } else if (this.filterType === 'Venue') {
                        this.placeHolderName = 'find by city ...';
                        if (this.filterName === '') {
                            this.numOfResult = 0;
                            return this.events;
                    } else {
                        let filterArray = this.events.filter(event => {
                            return event.venue.city.toLowerCase().includes(this.filterName.toLowerCase());
                        });  
                        this.numOfResult = filterArray.length;     
                        return filterArray;
                    }  
                }
            } 
        },
        created() {
            this.reloadEvents();
        }
    } 
</script>

<style scoped>
    #app {
        padding: 10px;
    } 
    .result {
        color: black;
        font-size : 2em;
        text-align: center;
    }
    .flex-center {
        display:flex;
        justify-content: center;
    }
</style>