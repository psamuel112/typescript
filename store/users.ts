import { defineStore } from "pinia";
import { useUsersService } from "~/composables/userApiService";

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: null
    }),
    actions: {
        async fetchUsers() {
            const userService = useUsersService();
            const data = await userService.fetchUsers();
            return data;
        }
    }
}
)