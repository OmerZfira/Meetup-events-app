<template>
    <div class="email-filter">
        <section class="wrapper">
            <input class="search" type="text" v-model="filter.txt" 
                                  @keyup.enter="stringFilter" 
                                  id="keywords" placeholder="Search"/>
            <div>
            <div class="buttons">
                <input type="radio" v-model="filter.readStatus" 
                                    @change="stringFilter" 
                                    value="all"
                                    id="all"/>
                <label for="unread">All</label>

                <input type="radio" v-model="filter.readStatus"
                                    @change="stringFilter" 
                                    value="favorites"
                                    id="favorites"
                                    />
                <label for="read">Favorites</label>
            </div>
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
     label {
        font-size: 0.8em;
    }
    input {
        border-radius: 6px;
        padding: 5px;
        font-size: 0.7rem;
        margin-top: -5em;
    }
    input,label {
        cursor: pointer;
    }
   
    .buttons {
        cursor: pointer;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .search {
        width: 100%;
    }
</style>