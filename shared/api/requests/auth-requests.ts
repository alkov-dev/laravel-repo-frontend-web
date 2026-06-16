import httpClient from "../http-client";
import { AuthResponse, LoginFormValues, RegisterFormValues } from "../types/api";

async function ensureCsrf() {
    try {
        await httpClient.get('/sanctum/csrf-cookie');
    } catch (e) {
        // ignore — caller will handle errors from the actual request
    }
}

export const loginRequest = async ({ data, url }: { data: LoginFormValues, url: string }): Promise<AuthResponse> => {
    await ensureCsrf();
    const response = await httpClient.post(url, data);
    return response.data;
};

export const registerRequest = async ({ data, url }: { data: RegisterFormValues, url: string }): Promise<AuthResponse> => {
    await ensureCsrf();
    const response = await httpClient.post(url, data);
    return response.data;
};