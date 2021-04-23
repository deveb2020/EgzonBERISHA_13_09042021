import axios from 'axios'

export default function setAuthorisationToken (token) {
    if (token) {
        axios.defaults.headers.common['Authorisation'] = `Bearer ${token}`
    }else{
        delete axios.defaults.headers.common['Authorisation']
    }
}