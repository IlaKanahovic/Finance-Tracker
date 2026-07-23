import { getTokenToLS } from "./api"

export const registerRequest = async (email: string, userName: string, password: string) => {
    const newClient = {
        email: email,
        userName: userName,
        password: password
    }

    const register = await fetch('https://finance-tracker-backend-production-e1c9.up.railway.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient)
    })

    return register.json()
}

export const loginRequest = async (email: string, password: string) => {
    const checkClient = {
        email: email,
        password: password
    }

    const login = await fetch('https://finance-tracker-backend-production-e1c9.up.railway.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkClient)
    })

    return login.json()
}

export const editUserName = async (name: string) => {
    const edit = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getTokenToLS()
        },
        body: JSON.stringify({ userName: name })
    })

    return edit
}

export const editEmail = async (email: string, password: string) => {
    const edit = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/email`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getTokenToLS()
        },
        body: JSON.stringify({ email: email, password: password })
    })

    return edit
}

export const editPassword = async (currentPassword: string, newPassword: string) => {
    const edit = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getTokenToLS()
        },
        body: JSON.stringify({ currentPassword: currentPassword, newPassword: newPassword })
    })

    return edit
}

export const deleteAccount = async () => {
    const deleteAccount = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/accountdelete`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })

    return deleteAccount
}