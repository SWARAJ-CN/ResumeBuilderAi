
import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"

// add resume
export const addResumeAPI = async (reqBody)=>{
    
    return await commonAPI("POST",`/resume`,reqBody)

}

/// get resume 

export const getAParticularResume = async (resumeId) => {
    return await commonAPI("GET",`/resume/${resumeId}`,"")
}
// update resume
export const updateResume = async(Id,reqBody) => {
    return await commonAPI("put",`/resume/${Id}`,reqBody)
}

// get resume

export const getAllResume = async ()=>{
    return await commonAPI("get",`/resume`,"")
}

// delete resume 

export const deleteResume = async (id)=>{
    return await commonAPI("delete",`/resume/${id}`,"")
}
