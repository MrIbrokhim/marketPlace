<template>
    <div class="bigFakeBasket">

<div class="fakeBasket"  >
    <table style="width:100%">
  <tr >
    <th>Name</th>
    <th>Cost</th>
    <th>Quantities</th>
    <th>Total</th>
  </tr>
  <tr v-for="(quantity,key,i) in addedProduct" :key="i">
    <td>{{ key}}</td>
    <td> ${{ getPrice(key) }}</td>
    <td>{{ quantity }}</td>
    <td>${{ quantity * getPrice(key)}} </td>
    <td><button @click="remove(key)">X</button></td>
</tr> 
<h1>Your payment:${{ calculateTotal() }}</h1>
  <button @click="toggle">X</button>
</table>
     
    </div>
</div>
</template>
<script>
    export default{
      props:['toggle','addedProduct','myJson','remove'],
      methods:{
        getPrice(name){
          const product=this.myJson.find((p)=>{
          return p.name===name
          })
          return product.price
        },
        totalPrice(){
           return this.getPrice*this.addedProduct.quantity
        },
        calculateTotal(){
          const total=Object.entries(this.addedProduct).reduce((acc,curr,index)=>{
            return acc + (curr[1]* this.getPrice(curr[0]))
          },0)
          return total
        }
      }
    }
   
</script>
<style>
.bigFakeBasket{
    margin-top: -550px; 
    margin-left: 790px;
    width: 500px;
    height:1001px;
    background-color: #f7f7f7;
    border: 12px solid black;
     
     
     
 }
 table, th, td {
  border:1px solid black;
}
</style>