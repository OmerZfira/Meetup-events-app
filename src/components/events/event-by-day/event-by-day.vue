<template>
    <div id='app'>
        <h1>event-by-day</h1>
        <event-list></event-list>
    </div>
</template>

<script>
                    // {
                    //     id: "1",
                    //     name: "3 Hours intro session - Fullstack Coding Bootcamp",
                    //     time: 1483456800000 
                    // } 
    import eventList from '../event-list/event-list.vue';
    export default {
        props : {
            events : {
                type : Array
            }
        },
        data() {
            return {
                eventByDay : {
                    '0' : [] ,
                    '1' : [] ,
                    '2' : [] ,
                    '3' : [] ,
                    '4' : [] ,
                    '5' : [] ,
                    '6' : []
                }
            }
        },
        methods : {
            sortArray() {
                events.forEach( event => {

                });
            }
        },
        components: {
            'event-list': eventList
        }
    } 
</script>

<style scoped>
    #app {
        background: purple;
        padding: 50px;
    }
</style>