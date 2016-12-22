<template>
    <div id="app">
            <slot></slot>
            <div class="hold-date">
              <event-preview v-for="event in events" :event="event"></event-preview>
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
        components: {
            'event-preview': eventPreview
        },
        mounted() {
            console.log('events', JSON.parse(JSON.stringify(this.events)));

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
</style>