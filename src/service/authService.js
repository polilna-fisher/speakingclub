import $api from "../http";

// export default class AuthService{
//     static async login(email, password):Promise<AxiosResponse<AuthResponse>>{
//         return $api.post<AuthResponse>()
//     }
// static async logout(): Promise<void>{
//     return $api.post('/logout')
// }
// }

export default class AuthService{


    static async login(email, password){
    return $api.post('/login', {email, password})
}

    static async registration(email, password){
        return $api.post('/registration', {email, password})
    }

    static async logout(){
        return $api.post('/logout')
    }

}


