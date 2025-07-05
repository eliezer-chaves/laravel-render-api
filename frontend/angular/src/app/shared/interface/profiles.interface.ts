export interface iProfileOption {
    value: string;
    label: string;
}

export const PROFILE_OPTIONS: iProfileOption[] = [
    { value: 'admin', label: 'Administrador' },
    { value: 'user', label: 'Usuário' },
    { value: 'guest', label: 'Convidado' }
];
