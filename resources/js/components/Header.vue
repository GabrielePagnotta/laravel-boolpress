<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">
        <img class="width" src="https://www.pskitservices.com/wp-content/uploads/2021/03/imageedit_1_2408629393-2.png" alt="laravel-logo">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{ name: 'posts' }">Posts List</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'tags' }">Tags</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    name: "Header",
    components: { RouterLink }
}
</script>

<style lang="scss" scoped>

</style>
