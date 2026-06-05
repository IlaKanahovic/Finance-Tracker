

export const registerRequest = async (email: string, userName: string, password: string) => {
    const newClient = {
        email: email,
        userName: userName,
        password: password
    }

    const register = await fetch('http://localhost:3001/register', {
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

    const login = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkClient)
    })

    return login.json()
}