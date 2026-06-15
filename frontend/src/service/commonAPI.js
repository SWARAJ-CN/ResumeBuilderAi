import axios from "axios";
import axiosInstance from "./axiosinstance";



const commonAPI = async (httpMethod,url,data) => {

const reqConfig = {
  method: httpMethod,
  url,
  data: data,
}

// return  await axios(reqConfig).then(res=>{
//     return res
// }).catch(err=>{
//     return err
// })

try {
    const response = await axiosInstance(reqConfig)
    return response
} catch (error) {
    throw error
}

}

export default commonAPI