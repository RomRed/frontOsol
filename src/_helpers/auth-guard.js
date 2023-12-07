
import router from '@/router'

export function AuthGuard(to){
    let token = localStorage.getItem('token');
    console.log(token)

    if(token){
        return true
    }


    router.push('/login');
    alert('tes pas co mon gros !')
}


