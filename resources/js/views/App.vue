<template>
    <div>
       <prova :info="Posts"/>
       <ul>
        <li v-for="elem in Posts" :key="elem.id">
        {{ elem.title }}</li>
       </ul>
    </div>
</template>

<script>
import prova from '../components/prova.vue'


export default {
    name: "app",
    components:{
        prova
    },
    data() {
        return {
            Posts: []
        };
    },
    mounted() {


        this.getPosts();
    },

    methods:{
        getPosts(){

            axios.get('http://127.0.0.1:8000/api/posts')
            .then( (response) => {

            let responseData = response.data
             this.Posts = responseData
            });

        }
    }

}

</script>

<style lang="scss" scoped>

</style>
