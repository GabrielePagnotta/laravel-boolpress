<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
    name: "app",
    components:{
        Header
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
