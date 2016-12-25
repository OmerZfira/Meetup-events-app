<template>
    <form class="compose">
        <p class="control">
            <input class="input" type="text" placeholder="Subject" v-model="email.subject">
        </p>
        <p class="control">
            <textarea class="textarea" placeholder="Email Content" v-model="email.body"></textarea>
        </p>
        <p class="control">
            <button class="button is-primary" @click.prevent="saveEmail">Send</button>
            <button class="button" @click.prevent="$emit('composeEmail',true)">Cancel</button>
        </p>
    </form>
</template>

<script>
    export default {
        data() { 
            return {
                email: {subject:'',body:''},
            }
        },
        methods: {
            saveEmail() {
                this.$http.post('addemail', this.email);
                this.$emit('emailSent', this.email);
            },
        }
    }
</script>

<style scoped>
    .compose {
        position: relative;
        width: 65%;
        padding: 10px;
        color: white;
        background-color: #646768;
    }

    @media screen and (max-width: 590px){
        .compose {
              width: auto;
        }
    }
</style>