<template>
    <div class="email-details">
            <section class="email-details-header">
                <button v-show="showDelete" class="button is-small is-danger fa fa-trash-o" @click="deleteEmail">&nbsp;<span></span></button>
            </section>
            <section class="email-details-summary">
                <hr>
                <h1>{{displayedEmail.subject}}</h1>
                <hr>
                <br>
                <p>{{displayedEmail.body}}</p>
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
        data() { 
            return {
            }
        },
        methods: {
            deleteEmail() {
                this.$emit('deleteEmail', this.displayedEmail.id);
                this.displayedEmail.isDisplayed = false;
            },
        },
        computed: {
            showDelete() {
                if(this.displayedEmail.isDisplayed === true) {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
    .email-details-summary > h1{
        font-size: 2rem;
    }

    .email-details {
        background: white;
        flex: 3 2 50%;
        padding: 20px;  
        background-color: black;
        width: 50%;
        color: white;
        opacity: 0.8;
        height: auto;
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

    @media screen and (max-width: 590px){
        .email-details {
              width: 100%;
    }
}
</style>