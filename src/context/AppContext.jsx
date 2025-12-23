import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const AppContext = createContext()

const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])
    
    const [token, setToken] = useState(() => localStorage.getItem('token') || null)

    const [userData,setUserData]=useState(false)


    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
const loadUserProfileData = async () => {
  try {
    const response = await axios.get(
      backendUrl + "/api/user/get-profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = response.data;
    console.log("data", data);

    if (data.success) {
      setUserData(data.userData);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("PROFILE ERROR:", error);

    if (error.response?.status === 401) {
      // token invalid / expired
      setToken(null);
      setUserData(false);
      toast.error("Session expired. Please login again.");
    } else {
      toast.error(error.message);
    }
  }
};


    
    const value = {
        doctors,getDoctorsData,
        currencySymbol,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    }

    useEffect(() => {
        getDoctorsData()
    }, [])

    useEffect(() => {
        if (token) {
          localStorage.setItem('token', token)
        } else {
          localStorage.removeItem('token')
        }
      }, [token])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        }
        else{
            setUserData(false)
        }
        
    }, [token])
    

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export  {AppContextProvider}