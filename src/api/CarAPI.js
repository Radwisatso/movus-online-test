// Axios
import Axios from "./APIUtils"

export const getCarWMI = (carName) => {
    return new Promise((resolve, reject) => {
        const data = Axios.get(`/${carName}?format=json`)
        setTimeout(() => resolve(data), 0)
    })

}