export interface IUser {
    "id": number
    "name": string
    "username": string
    "email": string
    "address": {
        [key: string]: string
    },
    "phone": string
    "website": string
    "company": {
        [key: string]: string
    }
}