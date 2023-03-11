import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
const defaultToken = null;

const AuthProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [isLoading, setIsLoading] = useState (true)
    const [userName, setUserName] = useState('')
    const [token, setToken] = useState(defaultToken);
    const[refresh, setRefresh] = useState(true)
    const navigate = useNavigate()


   useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser')
        const parsedUser = JSON.parse(storedUser)

        if(!storedUser) {
            return navigate('/')
        }

        if(parsedUser.user) {
            setLoggedInUser({ ...parsedUser })
            setIsLoading(false)
        }
    }, [refresh])

    return (
        <AuthContext.Provider value={{isLoading, loggedInUser, setLoggedInUser, userName, setUserName, setToken, refresh, setRefresh}}>
            { children }
        </AuthContext.Provider>

    )
}

export { AuthContext, AuthProvider }