<template>
    <div class="container py-5">
        <div class="mb-4">
            <button class="btn btn-outline-primary" @click="home">
                &lt; Home
            </button>
        </div>
        <h1 class="text-center mb-5">All Users</h1>
        <div v-if="isError === true" class="alert alert-danger">
            <h4 class="alert-heading">Error!</h4>
            <p>There was an error loading the users. Please try again later.</p>
        </div>
        <div class="row g-4">
            <div class="col-sm-6 col-md-4" v-for="(user, index) in userData" :key="user.id">
                <div class="card h-100 border-primary shadow-sm" @click="navigateTo(user.id)">
                    <div class="card-body">
                        <h5 class="card-title">Name: {{ user.name }}</h5>
                        <p class="card-text">Email: {{ user.email }}</p>
                        <p class="card-text">Address: {{ user.address.street }}, {{ user.address.city }}</p>
                    </div>
                </div>
            </div>
        </div>
        <loadingOverlay :isLoading="isLoading" />
    </div>
</template>
<script lang="ts" setup>
import loadingOverlay from '~/component/common/loadingOverlay.vue';
import { useUsersStore } from '~/store/users';
import { ref, onMounted } from 'vue';
const router = useRouter();
const users = useUsersStore();
const userData = ref<userData[] | null>(null)
const isLoading = ref(true);
const isError = ref(false);
interface userData {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    }
}
async function fetchUsers() {
    isLoading.value = true;
    isError.value = false;
    try {
        console.log('started')
        const data = await users.fetchUsers();
        userData.value = data;
        console.log("users", userData)
    }
    catch (error) {
        console.log('err')
        isError.value = true
    }
    finally {
        console.log('err')
        isLoading.value = false;
    }
}
onMounted(() => {
    fetchUsers();
});

const navigateTo = (id: number) => {
    router.push(`/users/${id}`);
}
const home = () => {
    router.push("/home")
}
</script>

<style scoped>
.user-card {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (max-width: 1200px) {
    .user-card {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .user-card {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 580px) {
    .user-card {
        grid-template-columns: 1fr;
    }
}
</style>
