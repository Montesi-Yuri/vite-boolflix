<script>

export default{
    data(){
        return{
            flag:'fi fi-'
        }
    },
    props:{
        nation: String
    }
}

</script>

<template>
   <span :class="flag + nation" ></span>
</template>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";


</style>