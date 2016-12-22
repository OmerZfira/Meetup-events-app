<template>
    <div class="email-preview" :class="{isRead: email.isRead, currEmail: email.isDisplayed}">
        <h4>   {{email.subject}}</h3>
    </div>
</template>
<script>

    export default {
        props: {
            email: {
                required: true,
                type: Object
            }
        },
    }
</script>

<style scoped>
    .email-preview {
        border: 1px ;
        background-color: #646768;
        display:flex;
        padding: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }

    img {
        max-height: 30px;
    }

    .isRead {
        font-weight: normal;
        color: grey;
        background-color: #3a4144;
    }

    .currEmail {
        border: 2px solid yellow ;
        
    }
</style>