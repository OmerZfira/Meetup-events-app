<template>
    <div id='app'>
     <h1>Event-center!</h1>
        <event-filter></event-filter>
        <event-details v-if="showDetails" :eventDetails="eventDetails" @closeDetails="showDetails = false"></event-details>
        <event-by-day v-else :events="events" @sendDetails="sendDetails"></event-by-day>
    </div>
</template>

<script>
    import EventFilter from '../../components/events/event-filter/event-filter.vue';
    import EventByDay from '../../components/events/event-by-day/event-by-day.vue';
    import eventDetails from '../../components/events/event-details/event-details.vue'


    export default {
        data() {
            return {
                events: [] ,
                eventDetails : {} ,
                showDetails : false
            }
        },
        components: {
            'event-filter': EventFilter,
            'event-by-day': EventByDay ,
            'event-details' : eventDetails
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
        created() {
            this.reloadEvents();
        },
    } 
</script>

<style scoped>
    #app {
        padding: 10px;
    }
</style>