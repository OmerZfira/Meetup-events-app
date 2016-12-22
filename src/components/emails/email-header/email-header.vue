<template>
    <div class="header">
        <h3>INBOX</h3>
        <button class="compose" @click="composeEmail">COMPOSE</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            composeEmail() {
                
                this.$emit('composeEmail')
            }
        }
    }
</script>

<style scoped>
.header {
    border-radius: 15px 15px 0 0;
    background: #3a4144;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: white;
}

.btn-success {
    height: 35px;
    align-self: flex-end;
}

h3{
    margin: 1em;
    font-size: 1rem;
}

.compose{
    color: #3a4144;
    font-size: 0.8rem;
    margin: 1em;
    width: 100px;
    height: 20px;
}
</style>