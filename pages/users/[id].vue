<template>
  <div class="container py-5">
    <div class="mb-4">
        <button class="btn btn-outline-primary" @click="allUsers">
            &lt; Back to Users
        </button>
      </div>  
    <h1 class="text-center mb-4">User Details</h1>
    <div v-if="user" class="user-details">
      <h3>{{ user.name }}</h3>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
      <p>Phone Number: {{ user.phone }}</p>
      <p>Suite: {{ user.suite }}</p>
      <p>Company: {{ user.company.name }}</p>
      <p>Moto: {{ user.company.catchPhrase }}</p>
      <p>
        Website:
        <a :href="'http://' + user.website" target="_blank" class="text-primary">{{ user.website }}</a>
      </p>
    </div>
    <!-- Loader -->
    <loader v-else message="Loading user details..." />
  </div>
</template>
<script lang="ts" setup>
import loader from '~/component/common/loader.vue';
import { useUsersStore } from '~/store/users';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
interface user {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone?: string;
  suite?: string; 
  company: {
    name: string;
    catchPhrase: string;
  };
  website: string;
}

const route = useRoute();
const router = useRouter();
const users = useUsersStore();
const user = ref<user | null>(null);
async function fetchUserById(id: number) {
  try {
    const allUsers = await users.fetchUsers();
    user.value = allUsers.find((u: user) => u.id === id) || null;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}
onMounted(() => {
  const userId = Number(route.params.id);
  fetchUserById(userId);
});
const allUsers = () => {
    router.push("/users")
}
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
