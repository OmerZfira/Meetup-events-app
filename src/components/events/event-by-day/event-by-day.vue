<template>
    <div id='app'> 
        <div class="list" v-for="(currEvent , key) in eventGruops">
            <h1>{{key}}</h1>
            <a href="#" class="arrow left"></a>
            <event-list :events="currEvent" @sendDetails="$emit('sendDetails' , $event)"></event-list>
            <a href="#" class="arrow right"></a>
         </div>
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
       h1{
    font-size: 3em;
    font-weight: 500;
    margin: 20px;
    background: gainsboro;
    opacity: 0.8;
    text-align: center;
    border-radius: 5px;
    font-family: cursive;
   }

.arrow {
  position: absolute;
  top: 50%;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border-top: .4rem solid black;
  border-right: .4rem solid black;
  box-shadow: 0 0 0 lightgray;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}
.list {
    position: relative;
    padding-right: 30px;
    padding-left: 30px;
}
.arrow.left {
  left: 0;
  -webkit-transform: translate3d(0, -50%, 0) rotate(-135deg);
          transform: translate3d(0, -50%, 0) rotate(-135deg);
}
.arrow.right {
  right: 0;
  -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
          transform: translate3d(0, -50%, 0) rotate(45deg);
}
.arrow:hover {
  border-top: .4rem solid orange;
  border-right: .4rem solid orange;
  box-shadow: .2rem -.2rem 0 black;
}
.arrow:hover.left {
  left: -.2rem;
}
.arrow:hover.right {
  right: -.2rem;
}


</style>