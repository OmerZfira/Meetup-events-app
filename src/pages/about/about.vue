<template>
    <div id="about">
        <div>
             <br>
             <div class="images">
                <img class="image" src="../../assets/adir.jpg"/>
                <img class="image" src="../../assets/omer.jpg"/>
                <img class="image" src="../../assets/me.jpg"/>
             </div>
             
        </div>   
    </div> 
</template>

<script>
    export default {
        data() { 
            return {
             
            }
        }
    }
</script>

<style scoped>
    .images {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .image {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        border: 3px solid black;
    }
</style>