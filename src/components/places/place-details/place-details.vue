<template>
    <div class="place-details">
        <div class="wrapper" v-if="displayedPlace.isUnarchived">
            <section class="place-details-header">
                <button class="btn btn-danger glyphicon glyphicon-trash" @click="deletePlace">&nbsp;<span>Delete</span></button>
            </section>
            <section class="place-details-summary">
            <hr>
                <h3>{{displayedPlace.subject}}</h3>
                {{displayedPlace.body}}
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
        }
    }

</script>

<style scoped>
.place-details {
    flex: 3 2 50%;
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