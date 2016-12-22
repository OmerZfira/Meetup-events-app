<template>
    <div class="email-filter">
        <section class="wrapper">
            <input class="search" type="text" v-model.lazy="filter.txt" 
                                @keyup.enter="stringFilter" id="keywords" placeholder="Search">
            <div class="buttons">
                <label for="all">All</label>
                <input type="radio" v-model="filter.readStatus" 
                                    @change="stringFilter" 
                                    :value="all" id="all" />
                <label for="read">Read</label>
                <input type="radio" v-model="filter.readStatus"
                                    @change="stringFilter" 
                                    :value="true" id="read" />
                <label for="unread">Unread</label>
                <input type="radio" v-model="filter.readStatus" 
                                    @change="stringFilter" 
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
            stringFilter() {
                // sends the filter object to list
                this.$emit('filter', this.filter)
            }
        }
    }
</script>

<style scoped>
    label {
        font-size: 0.8em;
    }
    input {
        border-radius: 6px;
        padding: 5px;
        font-size: 0.7rem;
        margin-top: -5em;
    }
    .buttons input,label {
        cursor: pointer;
    }
    .wrapper {
        height: 100%;
    }

    .search {
        width: 100%;
    }
</style>