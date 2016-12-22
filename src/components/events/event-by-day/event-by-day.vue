<template>
    <div id='app'> 
 
        <event-list v-for="(currEvent , key) in eventGruops" :events="currEvent"><h1>{{key}}</h1></event-list>
    </div>
</template> 

<script>
    import eventList from '../event-list/event-list.vue';
    import moment from 'moment';

    export default {
        props: {
            events: {

            }
        },
        data() {
            return {

            }
        },
        methods: {
             
        },
        computed: {
            eventGruops: function() {
                let eventGruopsData = {};
                this.events.sort((a, b) => a.time - b.time);

                this.events.forEach(event => {
                    let date = moment(event.time).format('DD-MM-YY');

                    if (eventGruopsData[date] === undefined) eventGruopsData[date] = [event];
                    else eventGruopsData[date].push(event);
                });
                return eventGruopsData;
            }
        },
        components: {
            'event-list': eventList
        }
    }
</script>

<style scoped>
    #app {
        padding: 10px;
        overflow-x: scroll;
    }
</style>