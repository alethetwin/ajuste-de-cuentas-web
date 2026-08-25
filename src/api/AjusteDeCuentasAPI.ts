import createClient from 'openapi-fetch';
import type { paths } from './ajuste-de-cuentas-v1';

export default createClient<paths>({ baseUrl: '/api' });
