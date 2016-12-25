<template>
    <div class="header">
        <h3>INBOX</h3>
        <button class="button is-small compose" @click="composeEmail"><span class="fa fa-pencil">  COMPOSE</span></button>
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
    margin-right: 1em;
    margin-top: 0.7em;
}

</style>