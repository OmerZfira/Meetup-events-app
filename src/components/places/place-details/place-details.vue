<template>
    <div class="place-details">
        <div class="wrapper">
            <section class="place-details-header">
                <button class="btn btn-info" @click="$emit('closeDetails')">&nbsp;<span>Back</span></button>
                <button class="btn btn-danger glyphicon glyphicon-trash" @click="deletePlace">&nbsp;<span>Delete</span></button>
            </section>
            <section class="place-details-summary">
            <hr>
                <h3>{{displayedPlace.venue.name}}</h3>
                {{displayedPlace.venue.lat}}
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
                this.$emit('deletePlace', this.displayedPlace.venue.id)
                this.displayedPlace.isUnarchived = false;
            },
        }
    }

</script>

<style scoped>
.place-details {
    flex: 1 1 30%;
    padding: 10px;  
    background: red;
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