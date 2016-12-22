<template>
    <div class="place-preview">
        <h4>&#187; {{place.venue.name}}</h3>
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
    border: 1px lightgray outset ;
    background: #7aebba;
    display:flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
}

img {
    max-height: 30px;
}

.unMarked>h4 {
    font-weight: normal;
}

.displayed {
    background: #FDFFE7;
    border: 2px lightgray inset ;
}

</style>