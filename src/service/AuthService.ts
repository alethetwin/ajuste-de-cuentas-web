export const AuthService = {
    async login(username: string, password: string) {
        if (response.error) {
            throw new Error(response.error.detail || 'Login failed');
        }

        return response.data;
    }
};
