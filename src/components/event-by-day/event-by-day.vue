<template>
    <div id='app'>
        <h1>event-by-day</h1>
        <event-list></event-list>
    </div>
</template>

<script>
    import eventList from '../event-list/event-list.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            'event-list': eventList
        }
    }
</script>

<style scoped lang="sass">
    #app {
        background: purple;
        padding: 50px;
    }
</style>