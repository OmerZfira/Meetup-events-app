<template>
    <div class="email-preview" :class="{unMarked: email.isRead, displayed: email.isDisplayed}">
        <img :src="imgUrl" alt="mail-icon" />
        <h4>&#187; {{email.subject}}</h3>
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
        computed: {
            imgUrl() {
                return (this.email.isRead) ? '../assets/mail-read.png' : '../assets/mail.png';
            }
        },
    }
</script>

<style scoped>
.email-preview {
    border: 1px lightgray outset ;
    background: #7aebba;
    display:flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
}

img {
    max-height: 30px;
}

.unMarked>h4 {
    font-weight: normal;
}

.displayed {
    background: #FDFFE7;
    border: 2px lightgray inset ;
}

</style>