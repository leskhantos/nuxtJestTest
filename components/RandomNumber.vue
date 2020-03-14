<template>
    <div>
      <span>{{ randomNumber }}</span>
      <button @click="randomize">generate</button>
    </div>
</template>

<script>
    export default {
        name: "RandomNumber",
      props:{
          minNum:{
            type: Number,
            default:1
          },
          maxNum:{
            type: Number,
            default: 10
          }
      },
      data(){
          return{
            randomNumber:0
          }
      },
      methods:{
          randomize(){
            this.randomNumber = Math.random() * (this.maxNum - this.minNum) + this.minNum
          }
      }
    }
</script>

<style scoped>

</style>
