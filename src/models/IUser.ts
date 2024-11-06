export interface IUser{
    email: string
    isActivated: boolean,
    id: string,
    role: string,
    name: string,
    info?: string,
    allowReset: boolean,
    bookedParts?: string[]
}