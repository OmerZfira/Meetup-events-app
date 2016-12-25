<template>
    <div class="place-details">
        <div class="wrapper">
            <section class="place-details-header">
                <button class="btn btn-info" @click="$emit('closeDetails')">&nbsp;<span>Back</span></button>
                <button v-show="showDelete" class="button is-small is-danger fa fa-trash-o" @click="deletePlace">&nbsp;</button>
            </section>
            <section class="place-details-summary">
            <hr>
                <h3>{{displayedPlace.name}}</h3>
                {{displayedPlace.lat}}
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
            computed: {
                showDelete() {
                    if(this.displayedPlace.isDisplayed === true) {
                        return true;
                    }
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
    color: white
}

.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-between;
}

.place-details-header, .place-details-footer {
    align-self: flex-end;
}

hr {
    width: 90%;
}

</style>