import httpClient from "../http-client";

export const currentUserRequest = async (): Promise<unknown> => {
    const response = await httpClient.get('/api/me');
    return response.data;
};

export const logoutRequest = async (): Promise<unknown> => {
    const response = await httpClient.post('/api/logout');
    return response.data;
};