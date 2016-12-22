<template>
    <div id='app'> 
 
        <event-list v-for="(currEvent , key) in eventGruops" :events="currEvent"><h3>{{key}}</h3></event-list>
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
            // sortArrayByDate() {
            //     let obj = {};
            //      this.events = this.events.sort((a, b) => a.time - b.time);
            //      this.events.forEach( event => {
            //         let date = moment(event.time).format('DD-MM-YY');

            //         if(obj[date] === undefined) obj[date] = [event];
            //         else                                    obj[date].push(event);

            //     });
            //     console.log('obj' , obj);
            //     return obj;
            // } 
            // sortArrayByTime() {
            //     this.events = this.events.sort((a, b) => a.time - b.time);
            // }
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
                console.log('eventsGroups', eventGruopsData);
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