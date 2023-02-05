<template>
    <div>
        <h1 v-for="elem in tags">{{ elem.name }}</h1>
    </div>
</template>

<script>


    export default {
        name:'Tags',
        data(){

            return{
              tags:[]
            }

        },
        mounted(){
            this.getTags();
        },
        methods:{
            getTags(){
                axios.get('http://127.0.0.1:8000/api/tags')
                .then( (response) => {
                let responseData = response.data;
                console.log(responseData)
                 this.tags = responseData;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
