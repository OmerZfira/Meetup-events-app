<template>
    <div class="compose">
        <label class="label">Subject</label>
        <p class="control">
            <input class="input" type="text" placeholder="Text input" v-model="email.subject">
        </p>
        <p class="control">
        <textarea class="textarea" placeholder="Textarea" v-model="email.body"></textarea>
        </p>
        <p class="control">
        <button class="button is-primary" @click="sendEmail">Submit</button>
        <button class="button is-link">Cancel</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() { 
            return {
                email: {subject:'',body:''}
            }
        },
        methods: {
            sendEmail() {
                this.$emit('emailSent', this.email);
            }
        }
    }
</script>

<style scoped>
    .compose {
        position: relative;
        width: 67%;
    }
</style>