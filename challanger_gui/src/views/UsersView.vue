<template>
    <div class="container">
        <div class="row">
            <h2></h2>
        </div>
        <div v-else class="row">
            <spinner-comp/>
        </div>
        
    </div>
</template>

<script>
import spinnerComp from '../components/spinnerComp.vue'
    export default {
  components: { spinnerComp },
        
        computed:{
            Users(){
                return this.$store.state.Users
            }
        }
    }
</script>

<style scoped>

</style>