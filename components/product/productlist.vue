<template>
<!-- <v-item-group>
      <v-container>
    <input type="text" v-model="$store.state.maximum">
    <input type="range" v-model="$store.state.maximum" min="0" max="200">
       <v-row> 
          
 
              

            <productpreview v-for="item in product" v-bind:key="item.id" v-bind:isadmin="isadmin" :id="item.id" :img="item.img"
      :productname="item.productname" :productdetail="item.productdetail" :productprice="item.productprice" :stock="item.stock" 
      v-on:addingitem="$emit('addingcitem',item)" v-if="item.productprice<=$store.state.maximum">
            </productpreview>
              
            
          
      </v-row>  
      </v-container>
</v-item-group> -->
  

    

    
    <!-- <input type="text" v-model="$store.state.maximum">
    <input type="range" v-model="$store.state.maximum" min="0" max="200">
       <v-row> -->
          
 
              <v-row>

            <productpreview v-for="item in product" v-bind:key="item.id" v-bind:isadmin="isadmin" :id="item.id" :img="item.img"
      :productname="item.productname" :productdetail="item.productdetail" :productprice="item.productprice" :stock="item.stock" 
      v-on:addingitem="$emit('addingcitem',item)" @deleter="$emit('deleter',item)">
              </productpreview>   
            
       <!-- v-if="item.productprice<=$store.state.maximum"> -->
            
      <!-- </v-row>   -->
   
              </v-row>
</template>
<script>
import productpreview from '@/components/product/productpreview';
export default {
    components:{
        productpreview
    },
    props:{
      isadmin:{
        type: Boolean,
        default: false
      },
      product:{
        type: Array,
        required: true
      }
    }
}
</script>