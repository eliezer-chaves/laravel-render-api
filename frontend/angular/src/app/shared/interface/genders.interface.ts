export interface iGenderOption {
    value: string;
    label: string;
}

export const GENDER_OPTIONS: iGenderOption[] = [
    { value: 'male', label: 'Homem' },
    { value: 'female', label: 'Mulher' },
    { value: 'other', label: 'Outro' },
    { value: 'not_specified', label: 'Prefiro não informar' }
];
