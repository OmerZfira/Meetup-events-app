<template>
    <div class="header">
        <h3>Your Places</h3>
        
        <button class="button is-small is-primary compose" @click="addPlace"><span class="fa fa-plus"></span>Add a Place</button>
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
    border-radius: 5px 5px 0 0;
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
    font-family: 'Arial';
    margin-right: 1em;
    margin-top: 0.7em;
}

</style>