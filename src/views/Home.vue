<template>

    <div class="div">
    <div class="mainHomeDiv">
      <h1>{{ txt }}</h1>
    </div>
</div>
    
</template>


<script>
  export default{
        data(){
            return{
                txt:'Online service'
            }
        }

   }
</script>

<style scoped>
.mainHomeDiv{

    margin-top:202px;
    background-image: url('/src/photos/bg1.png');
    background-size:100%;
    background-repeat:no-repeat;
    width:1290px;
    height:540px;
    background-position: center;
    margin: 0 auto;

     
      
}
.div{
    margin-top: -10px;
}
h1{
    padding-left: -1010px;
    color:white;
    font-size: 70px;
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    padding-top: 240px;
    padding-bottom: 100px;
    text-shadow: 2px 2px 4px #000000;       
}
</style>
