<template>
    <div id='app'>
     <h1>Event-center!</h1>
        <event-filter></event-filter>
        <event-by-day></event-by-day>
    </div>
</template>

<script>
    import EventFilter from '../../components/events/event-filter/event-filter.vue';
    import EventByDay from '../../components/events/event-by-day/event-by-day.vue';
    
    
    export default {
        data() {

// var d = new Date(1483372800000);
// console.log('d :', d.getDay());
            return {   
                events : [
                    {
                        id: "1",
                        name: "3 Hours intro session - Fullstack Coding Bootcamp",
                        time: 1483456800000 
                    } ,
                    {
                        id: "2",
                        name: "3 Hours intro session - Fullstack Coding Bootcamp",
                        time: 1483123800000 
                    } ,
                    {
                        id: "3",
                        name: "3 Hours intro session - Fullstack Coding Bootcamp",
                        time: 1483765800000 
                    } ,
                ]
            }
        },
        components: {
            'event-filter': EventFilter,
            'event-by-day': EventByDay
        }
    }
</script>

<style scoped>
    #app {
        background: red;
        padding: 50px;
    }
</style>