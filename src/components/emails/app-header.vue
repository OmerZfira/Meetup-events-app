<template>
    <div class="header">
        <h3>Your messages</h3>
        <button class="btn btn-success glyphicon glyphicon-pencil" @click="composeEmail">&nbsp;<span>Compose</span></button>
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
                
            }
        }
    }
</script>

<style scoped>
.header {
    border-radius: 15px 15px 0 0;
    background: #34495D;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: white;
}

.btn-success {
    height: 35px;
    align-self: flex-end;
}
</style>