export interface IUser{
    email: string
    isActivated: boolean,
    id: string,
    role: string,
    name: string,
    country?: string,
    about?: string,
}