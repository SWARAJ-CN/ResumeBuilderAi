
import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"

// add resume
export const addResumeAPI = async (reqBody)=>{
    
    return await commonAPI("POST",`${serverURL}/resume`,reqBody)

}

/// get resume 

export const getAParticularResume = async (resumeId) => {
    return await commonAPI("GET",`${serverURL}/resume/${resumeId}`,"")
}
// update resume
export const updateResume = async(Id,reqBody) => {
    return await commonAPI("put",`${serverURL}/resume/${Id}`,reqBody)
}

// get resume

export const getAllResume = async ()=>{
    return await commonAPI("get",`${serverURL}/resume`,"")
}

// delete resume 

export const deleteResume = async (id)=>{
    return await commonAPI("delete",`${serverURL}/resume/${id}`,"")
}
