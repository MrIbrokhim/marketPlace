<template>
<div class="productsMainDiv">

    <div class="productsTable"  v-for="(product,i) in myJson" :key="product.id">
        <h3 class="vegetableName" ref="name">{{ product.name }}</h3>
          <!--  -->
        <img src='/src/photos/apple.jpg' width="250px" height="150px">
          <!--  -->
          <div class="InforMainDiv" >
            <div class="littleDiv1"><h4 class="infotTip">Type:</h4> <p class="infotTip2" ref="name" > {{ product.type }}</p> <br>  </div>
            <div class="littleDiv2"><h4 class="infotTip">Price</h4> <p class="infotTip2"  >${{ Number(product.price) }}</p> <br></div>
            <div class="littleDiv3"><h4 class="infotTip1">Quantity:</h4> <input type="number" placeholder="0" class="infotTip2ForInput" v-model.number="product.quantity"></div>
          </div>

          <button class="btn" @click="addedTocard(product.name,i)" >Add</button>
     </div>
     
</div>
  <sidebar 
  v-if="showSidebar"
  class="sidebar"
  :toggle="toggleFunc"
  :addedProduct="addedProduct"
  :myJson="myJson"
  :remove="deleteFunc"
  /> 
<button @click="toggleFunc" v-if="!showSidebar" class="cardButton" >Card</button>

 

</template>
<script>

import products from '@/views/products.json'
import sidebar from '@/components/sidebar.vue'
export default{
   data() {
    return {
        quantityTaker:'',
        addedPruducs:[],
        showSidebar:false,
        myJson:products,
        addedProduct:{}
         }
        },
  components:{
    sidebar
  },
  methods:{
     toggleFunc(){
      this.showSidebar =!this.showSidebar;
     },
     addedTocard(name,index){
      if (!this.addedProduct[name]) this.addedProduct[name]=0
      this.addedProduct[name] += this.myJson[index].quantity
      
      },
       deleteFunc(name){
        delete this.addedProduct[name]
        
      }

      
  

}
}
</script>

<style scoped>
.roductsMainDiv{
    position: relative;

}
.productsMainDiv{
 
    background-image:url( '/src/photos/bgForProducts12.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 1293px;
    height: 550px;
    margin-top: -10px;
    position: relative;
    overflow: scroll;
  
}
.productsTable{
   
    border: 2px solid black;
    width: 350px;
    height: 350px;
    top: 40px;
    left: 50px;
    background-color: #f7f7f7;
    display: inline-block;
}
/* Productstable informations */
.infotTip{
    display: inline-block;
  
}
.infotTip1{
    display: inline-block;
    margin-left: -40px;
}
.infotTip2{
    display: inline-block;
    margin-left: 60px;
}
.infotTip2ForInput{
    margin-left: 20px;
    font-size:15px;
    width: 90px;
}

 .littleDiv1{
    margin-left: -170px;
 }
 .littleDiv2{
    margin-top: -30px;
    margin-left: -210px;
 }
 .littleDiv3{
    margin-top: -35px;
    margin-left: -115px;
 }
 .InforMainDiv{
    margin-top: -2px;
    margin-left: 90px;
 }
 .vegetableName{
    border: 1px solid black;
    margin-top:10px;
    text-align-last:center;
    letter-spacing: 9px;
    margin-left: 14px;
    width: 125px;
 }
 .btn{
    width: 70px;
    height: 25px;
    margin-left: 250px;
    text-align-last: center;
    
 }
 
 .bigFakeBasket{
    position: absolute;
    width: 1280px;
    height:300px;
    background-color: #f7f7f7;
    border: 2px solid black;
    overflow: scroll;
     
     
}
.sidebar{
  width: 500px;
  height: 220px;
}
.cardButton{
  margin-top: -1100px;
}
</style>