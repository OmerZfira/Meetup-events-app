<template>
    <div class="header">
        <h3>Your Places</h3>
        <button class="button is-small compose" @click="addPlace"><span class="fa fa-pencil">  Add a Place</span></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            addPlace() {
                this.$emit('addPlace',false);
            }
        }
    }
</script>

<style scoped>
.header {
    border-radius: 15px 15px 0 0;
    background: #214a5b;
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