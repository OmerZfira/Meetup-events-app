<template>
    <div id='app'>
     <h1>Event-center!</h1>
        <event-filter></event-filter>
        <event-by-day :events="events"></event-by-day>
    </div>
</template>

<script>
    import EventFilter from '../../components/events/event-filter/event-filter.vue';
    import EventByDay from '../../components/events/event-by-day/event-by-day.vue';


    export default {
        data() {
            return {
                events: []
                    // events : [
                    //     {
                    //         id: "1",
                    //         name: "1 Hours intro session - Fullstack Coding Bootcamp",
                    //         time: 1483456800000 
                    //     } ,
                    //     {
                    //         id: "2",
                    //         name: "1 Hours intro session - Fullstack Coding Bootcamp",
                    //         time: 1483456800001 
                    //     } ,
                    //     {
                    //         id: "3",
                    //         name: "2 Hours intro session - Fullstack Coding Bootcamp",
                    //         time: 1483123800000 
                    //     } ,
                    //     {
                    //         id: "4",
                    //         name: "3 Hours intro session - Fullstack Coding Bootcamp",
                    //         time: 1483765800000 
                    //     } ,
                    // ]
            }
        },
        components: {
            'event-filter': EventFilter,
            'event-by-day': EventByDay
        },
        methods: {
            reloadEvents() {
                this.$http.get('events')
                    .then(res => res.json())
                    .then(events => {
                        this.events = events;
                    });
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