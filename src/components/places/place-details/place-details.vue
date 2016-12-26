<template>
    <div class="place-details">
        <div class="wrapper">
            <section class="place-details-header">
                <button class="button is-small is-info" @click="$emit('closeDetails')"><span class="fa fa-arrow-left"></span>Back</button>
                <button v-show="showDelete" class="deleteBtn button is-small is-danger fa fa-trash-o" @click="deletePlace"></button>
            </section>
            <section class="place-details-summary">
            <hr>
                <h3>{{displayedPlace.name}}</h3>
                    {{displayedPlace.tags}}
            <hr>
            </section>
            <section class="place-details-footer">
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            displayedPlace: {
                required: true,
                type: Object
            }
        },
        methods: {
            deletePlace() {
                this.$emit('deletePlace', this.displayedPlace.id)
                this.displayedPlace.isUnarchived = false;
            },
        },
        computed: {
            showDelete() {
                if(this.displayedPlace.isDisplayed === true) {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
    .place-details {
        flex: 1 1 30%;
        padding: 10px;  
        background: black;
        opacity: 0.8;
        color: white;
        border-radius: 0 0 0 5px;
    }

    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: space-between;
    }

    .deleteBtn {
        align-self: flex-end;
    }

</style>