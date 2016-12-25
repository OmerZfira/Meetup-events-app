<template>
    <div class="place-preview">
        <h4>{{place.name}}</h4>
    </div>
</template>

<script>
    export default {
        props: {
            place: {
                required: true,
                type: Object
            }
        },
    }
</script>

<style scoped>
    .place-preview {
        border: 1px;
        background-color: white;
        display:flex;
        padding: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        cursor: pointer;
    }

    img {
        max-height: 30px;
    }

</style>