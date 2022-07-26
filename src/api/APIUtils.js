import axios from "axios";

const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/"

const Axios = axios.create({
    baseURL: url
})  


export default Axios