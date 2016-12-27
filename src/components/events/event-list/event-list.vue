<template>
    <div id="app">
            <slot></slot>
            <div class="hold-date">
              <event-preview v-for="event in events" :event="event" @sendDetails="$emit('sendDetails' , $event)"></event-preview>
           </div>
      </div>
</template>

<script>
    import eventPreview from '../event-preview/event-preview.vue';
    export default {
        props: {
            events: {

            }
        },
        data() {
            return {

            }
        },
        methods :{
            
        } ,
        components: {
            'event-preview': eventPreview
        }
    }
</script>

<style scoped>

    #app {
        display: flex;
        flex-direction: column;
    }
    
    .hold-date {
        display: flex;
    }

    ::-webkit-scrollbar {
    width: 12px;

}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    background : red;

}
::-webkit-scrollbar-corner {
  display : none;

}
.notification.is-success { 
    background-color: #2ccf66;
} 
</style>