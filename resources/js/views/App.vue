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



        }
    }

}

</script>

<style lang="scss" scoped>

</style>
