<template>
    <div class="place-list">
        <place-filter @filter="$emit('filter', $event)"></place-filter>
        <hr>
        <ul>
            <li v-for="place in places">
                <place-preview :place="place" @click.native="$emit('displayPlace', place.id)"></place-preview>
            </li>
        </ul>
    </div>
</template>

<script>

    import placePreview from '../place-preview/place-preview.vue'
    import placeFilter from '../place-filter/place-filter.vue'

    export default {
        props: {
            places: {
                required: true,
                type: Array
            }
        },
        components: {
            placePreview,
            placeFilter
        },
    }
</script>

<style scoped>
    .place-list {
            border: 1px;
            flex: 1 1 30%;
            background-color: #85b1c4;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 13px;
            height: auto;
            border-radius: 0 0 0 5px;
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
        margin: 1px;
    }

</style>