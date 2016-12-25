<template>
    <div id='home'>
      <div class="container">
          <h1>Welcome to your meetup organizer!</h1>
          
          <router-link to="/events">
            <a class="closeEvents">View your closest events...</a>
          </router-link>
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
    .container {
        color: #d7dc1b;
        margin: 0 auto;
        font-weight: bold;
        font-size: 4rem;
        margin-top: 1em;
        text-shadow: 0.1em 0.1em 0.05em black;
    }

    .closeEvents {
        font-size: 2.5rem;
        text-shadow: 0.1em 0.1em 0.05em black;
        color: white;
    }
</style>