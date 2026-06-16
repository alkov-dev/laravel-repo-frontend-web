
export interface LoginFormValues {
    email: string;
    password: string;
}

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface AuthResponse {
    user: {
        id: number;
        name: string;
        email: string;
    };
    token: string;
}



