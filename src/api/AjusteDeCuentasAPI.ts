import createClient, { Middleware } from 'openapi-fetch';
import type { paths } from './ajuste-de-cuentas-v1';

const client = createClient<paths>({ baseUrl: '/api' });

const authMiddleware: Middleware = {
    async onRequest({ request }) {
        const token = localStorage.getItem('auth-token');
        if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
        }
    }
};

client.use(authMiddleware);

export default client;
