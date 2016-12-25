<template>
    <div id='app'>
     <h1>Event-center!</h1> 
        <input type="text" v-model="filterName">
        <a class="button is-success is-large" @click="isInAddEventMode = !isInAddEventMode">Add event</a>
        <template v-if="isInAddEventMode">
            <event-add></event-add>
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


    export default {
        data() {
            return {
                events: [] ,
                eventDetails : {} ,
                showDetails : false ,
                isInAddEventMode : false ,
                filterName : ''
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
            } 
        }, 
        computed : {
            filterEvent() {
                if (this.filterName === '') {
                    return this.events;
                } else {
                    let filterArray = this.events.filter(event => {
                        return event.name.includes(this.filterName);
                    });        
                    return filterArray;
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
</style>