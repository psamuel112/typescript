<template>
  <div class="landing-page">
    <div class="vh-100 d-flex align-items-center justify-content-center text-center">
      <div class="content">
        <h1 class="display-3 fw-bold mb-4">Welcome to My Project</h1>
        <p class="lead mb-5">
          This project is built with TypeScript, Bootstrap, Vuetify, and Pinia, offering a smooth experience for
          managing users and navigating through user details. Dive into exploring how these technologies are integrated
          to create a seamless interface for handling user data.
        </p>
        <v-btn class="px-8 py-2" color="primary" flat @click="exploreUsers">Explore Users</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const exploreUsers = () => {
  console.log("check")
  router.push('/users')
}
</script>
<style scoped>
.landing-page {
  background: linear-gradient(135deg, #6c757d, #007bff);
  color: white;
  padding: 0 20px;
}
</style>