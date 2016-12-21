<template>
    <div id='app'>
     <h1>Event-center!</h1>
        <event-filter></event-filter>
        <event-by-day></event-by-day>
    </div>
</template>

<script>
    import EventFilter from '../event-filter/event-filter.vue';
    import EventByDay from '../event-by-day/event-by-day.vue';
    export default {
        data() {
            return {

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