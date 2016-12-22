<template>
    <div class="progress-bar">
        <!--<bar-filler>part: {{barData[0]}}, total: {{barData[1]}}</bar-filler>-->
        <div class="bar-filler" :style="'width:' + test + '%'">
        <div class="progress-bar-num">{{test}}% of emails read</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            barData: {
                required: true,
                type: Array
            }
        },
        computed:{
            test() {
                if (!this.barData[1]) return 100;
                else return parseInt(100 - this.barData[0] / this.barData[1] * 100)
            }
        }
    }
</script>

<style scoped>
    .progress-bar {
        flex: 3 2 70%;
        background: #3a4144;
        border-radius: 0 0 15px 15px;
        height: 100%;
        
    }

    .bar-filler {
        background: #527f44;
        color: black;
        border-radius: 0 0 15px 15px;
        min-height: 20px;
        transition: width 1.2s ease-in-out;
        height: 100%;
        color: white;
    }

    .progress-bar-num {
        position: absolute;
        margin: 0 35%;
        font-weight: bold;
    }
</style>