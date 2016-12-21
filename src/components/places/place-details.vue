<template>
    <div class="email-details">
        <div class="wrapper" v-if="displayedEmail.isUnarchived">
            <section class="email-details-header">
                <button class="btn btn-danger glyphicon glyphicon-trash" @click="deleteEmail">&nbsp;<span>Delete</span></button>
            </section>
            <section class="email-details-summary">
            <hr>
                <h3>{{displayedEmail.subject}}</h3>
                {{displayedEmail.body}}
            <hr>
            </section>
            <section class="email-details-footer">
            </section>
        </div>
    </div>
</template>

<script>


    export default {
        props: {
            displayedEmail: {
                required: true,
                type: Object
            }
        },
        methods: {
            deleteEmail() {
                this.$emit('deleteEmail', this.displayedEmail.id)
                this.displayedEmail.isUnarchived = false;
            },
        }
    }

</script>

<style scoped>
.email-details {
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

.email-details-header, .email-details-footer {
    align-self: flex-end;
}

hr {
    width: 90%;
}

</style>