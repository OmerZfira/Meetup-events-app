<template>
    <div class="email-list">
        <place-filter @filter="$emit('filter', $event)"></place-filter>
        <hr>
        <ul>
            <li v-for="email in emails">
                <place-preview :email="email" @click.native="$emit('displayEmail', email.id)"></place-preview>
            </li>
        </ul>
    </div>
</template>

<script>

    import placePreview from './place-preview.vue'
    import placeFilter from './place-filter.vue'

    export default {
        props: {
            emails: {
                required: true,
                type: Array
            }
        },
        components: {
            placePreview,
            placeFilter
        }
    }
</script>

<style scoped>
.email-list {
        border: 1px lightgray outset ;
        flex: 1 1 30%;
        background: #99F0CA;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 5px;
}
email-filter {

}

hr {
    height:1px;
    background: darkgray;
    border:0;
    margin: 5px 0;
}

ul {
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: column;
    justify-content: center;
}

li {
    /*flex: 1 1 40%;*/
    margin: 1px;
}

</style>