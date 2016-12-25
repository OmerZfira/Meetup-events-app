<template>
    <div class="place-filter">
        <section class="wrapper">
            <label for="keywords" style="margin-bottom:0">Search by:</label>
            <br>
            <input  type="text" v-model.lazy="filter.txt" 
                                @keyup.enter="streamFilter" id="keywords" placeholder="Search" size="20">
            <div class="buttons">
                <label for="all">All</label>
                <input type="radio" v-model="filter.type" 
                                    @change="streamFilter" 
                                    value="all" id="all" />
                <label for="favorites">Favorites</label>
                <input type="radio" v-model="filter.type"
                                    @change="streamFilter" 
                                    value="favorites" id="favorites" />
                <label for="upcoming">Upcoming</label>
                <input type="radio" v-model="filter.type" 
                                    @change="streamFilter" 
                                    value="upcoming" id="upcoming">
            </div>
        </section>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                filter: {
                    txt: '',
                    type: 'all'
                }
            }
        },
        methods: {
            streamFilter() {
                this.$emit('filter', this.filter)
            }
        }
    }
</script>

<style scoped>
.place-filter {
    min-height: 50px;
}

label {
    font-size: 0.8em;
}

input {
    font-size: 0.6em;
}
.buttons input,label {
    cursor: pointer;
}



</style>