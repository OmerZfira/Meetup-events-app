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
                                    value= "all"
                                    id="all"
                                    />
                <label for="all">All</label>

                <input type="radio" v-model="filter.readStatus"
                                    @change="stringFilter" 
                                    value="read"
                                    id="read"
                                    />
                <label for="read">Read</label>

                <input type="radio" v-model="filter.readStatus" 
                                    @change="stringFilter" 
                                    value="unread"
                                    id="unread"/>
                <label for="unread">Unread</label>
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
                    // Because the v-model is filter.readStatus it should start with radiobutton equals to 'all'
                    readStatus: 'all'
                }
            }
        },
        methods: {
            stringFilter() {
                // sends the filter object to list
                this.$emit('filter', this.filter)
            },
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

    .wrapper {
        height: 100%;
    }

    .search {
        width: 100%;
    }
</style>