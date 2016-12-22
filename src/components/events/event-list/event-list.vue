<template>
    <div id='app'>
        <h1>Event-list!</h1>
        <event-preview></event-preview>
    </div>
</template> 

<script>
    import eventPreview from '../event-preview/event-preview.vue';
    export default {
        data() {
            return {

            }  
        },
        components: {
            'event-preview': eventPreview
        }
    }
</script>

<style scoped>
    #app {
        background: blue;
        padding: 50px;
    }
</style>