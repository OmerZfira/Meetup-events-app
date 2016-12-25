<template>
    <div id='home'>
      <div class="container">
        <div class="jumbotron">
          <h1>CodingAcademy Vue JS</h1>
          <p>Only for badass developers</p>
        </div>
      </div>
    </div>
</template>

<script>
    import eventCenter from '../event-center/event-center.vue'; 
    export default {
        data: () => {
            return { 
                items: []
            }
        },
        methods: {

        },
        components: {
            'event-center': eventCenter
        }
    }
</script>

<style scoped>
    h1 {
        color: lightblue;
    }
</style>