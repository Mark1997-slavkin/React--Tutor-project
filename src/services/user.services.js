import { httpService } from './http.services'


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USER_BASE_URL = 'users/'


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    /* remove, */
    /* save, */
    getEmptyUser
}




async function getUsers() {
    try {
       
        return await httpService.get(USER_BASE_URL)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting boards')
    }
}

async function getById(userId) {
    try {
     
        const user = await httpService.get(USER_BASE_URL + userId)
        return user
    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting user')
    }
}
//To do
/* async function remove(userId) {
    try {
        
        return await httpService.delete(USER_BASE_URL + userId)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during removing user')
    }
} */


    // To do
/* async function save(user) {
    try {
        if (user._id) {
            
            const updatedUser = await httpService.put(USER_BASE_URL + user._id, user)
            saveLocalUser(updatedUser)
            return updatedUser
        } else {
            return await storageService.post(STORAGE_KEY, user)
        }
    } catch (err) {
        throw new Error(err.message || 'An err occurred during saving user')
    }


} */



async function login(userCred) {
    try {
        const user = await httpService.post(USER_BASE_URL + 'login', userCred)
        if (user) return saveLocalUser(user)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during login')
    }
 

}

async function signup(userCred) {
   
    const user = await httpService.post(USER_BASE_URL , userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
   
}

function getEmptyUser() {
    return {
        password: '',
        email:'',
        first:'',
        middle:'',
        last:'',
        phone:'',
    }
}



function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, likedBooks: user.likedBooks, isAdmin: user.isAdmin }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}