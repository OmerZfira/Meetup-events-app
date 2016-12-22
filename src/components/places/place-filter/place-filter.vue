<template>
    <div class="place-filter">
        <section class="wrapper">
            <label for="keywords" style="margin-bottom:0">Search by:</label>
            <br>
            <input  type="text" v-model.lazy="filter.txt" 
                                @keyup.enter="streamFilter" id="keywords" placeholder="Search" size="20">
            <div class="buttons">
                <label for="all">All</label>
                <input type="radio" v-model="filter.readStatus" 
                                    @change="streamFilter" 
                                    value="all" id="all" />
                <label for="read">Read</label>
                <input type="radio" v-model="filter.readStatus"
                                    @change="streamFilter" 
                                    :value="true" id="read" />
                <label for="unread">Unread</label>
                <input type="radio" v-model="filter.readStatus" 
                                    @change="streamFilter" 
                                    :value="false" id="unread">
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
                    readStatus: 'all'
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