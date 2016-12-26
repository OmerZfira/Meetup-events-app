<template>
    <form class="placeAdd">
        <p class="control">
            <input class="input" type="text" placeholder="Place name" v-model="place.name">
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="latitude" v-model="place.lat">
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="longitude" v-model="place.long">
        </p>
        <p>
            <input type="radio" v-model="place.type" 
                                value= "all"
                                id="all"/>
            <label for="all">All</label>
            <input type="radio" v-model="place.type" 
                                value= "favorites"
                                id="favorites"/>
            <label for="favorites">Favorites</label>
        </p>
        <p class="control">
            <textarea class="textarea" placeholder="Tags (please seperate by commas)" v-model="place.tags"></textarea>
        </p>
        <p class="control">
            <button class="button is-primary" @click.prevent="savePlace">Save</button>
            <button class="button" @click.prevent="$emit('addPlace',true)">Cancel</button>
        </p>
    </form>
</template>

<script>
    export default {
        data() { 
            return {
                place: {
                    name:'',
                    lat:'',
                    long:'',
                    type:'all',
                    tags: ''
                }
            }
        },
        methods: {
            savePlace() {
                this.$http.post('addplace', this.place);
                this.$emit('placeSaved', this.place);
            },
            stringFilter() {
                // sends the filter object to list
                this.$emit('filter', this.filter)
            }
        }
    }
</script>

<style scoped>
    .placeAdd {
        position: relative;
        width: 65%;
        padding: 10px;
        color: white;
        background-color: #646768;
    }

    @media screen and (max-width: 590px){
        .placeAdd {
              width: auto;
        }
    }
</style>