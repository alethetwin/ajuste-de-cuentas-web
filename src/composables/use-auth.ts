import AjusteDeCuentasAPI from '@/api/AjusteDeCuentasAPI';
import { computed, ref } from 'vue';

const STORAGE_KEY = 'auth-token';

export function useAuth() {
    const token = ref(localStorage.getItem(STORAGE_KEY));
    const user = ref(JSON.parse(localStorage.getItem('auth-user') || 'null'));

    const isAuthenticated = computed(() => !!token.value);

    async function login(username: string, password: string) {
        const response = await AjusteDeCuentasAPI.POST('/auth/login', {
            body: {
                password: password,
                username: username
            }
        });

        if (response.error) {
            return { success: false, message: response.error.detail || 'Login failed' };
        }

        localStorage.setItem(STORAGE_KEY, response.data.token);
        localStorage.setItem('auth-user', JSON.stringify(response.data.person));
        token.value = response.data.token;
        user.value = response.data.person;

        return { success: true };
    }

    function logout() {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('auth-user');
        token.value = null;
        user.value = null;
        window.location.href = '/auth/login'; // Redirect to login page after logout
    }

    // onMounted(() => {
    //     const storedToken = localStorage.getItem(STORAGE_KEY);
    //     if (storedToken) {
    //         token.value = storedToken;
    //         try {
    //             user.value = JSON.parse(localStorage.getItem('auth-user') || 'null');
    //         } catch {
    //             user.value = null;
    //         }
    //     }
    // });

    return {
        token,
        user,
        isAuthenticated,
        login,
        logout
    };
}
