
export interface IUserDto{
    email: string;
    id: string;
    isActivated?: boolean | null | undefined;
    activationLink?: string;
    password?: string;
    _id?: string;
    role: string;
    name: string;
    info: string;
    allowReset: boolean;
    resetPasswordLink: string;
    bookedParts?: string[]
}
