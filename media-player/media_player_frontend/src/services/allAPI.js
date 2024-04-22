import {commonAPI} from './commonAPI'
import { serverUrl } from './baseUrl'

//  api for adding video

export const uploadVideoApi = async(reqBody) => {
    return await commonAPI('POST',`${serverUrl}/videos`,reqBody)
}

//  api to get uploaded videos

export const getUploadVideoApi = async() => {
    return await commonAPI('GET',`${serverUrl}/videos`, "")
}

//  api to delete a video

export const deleteUploadVideoApi = async(id) => {
    return await commonAPI('DELETE',`${serverUrl}/videos/${id}`,{})
}

//  api to add history
export const addToHistory = async(reqBody) => {
    return await commonAPI('POST', `${serverUrl}/history`,reqBody)
}

//  api to get all video from history

export const getAllVideoHistoryApi = async() => {
    return await commonAPI('GET', `${serverUrl}/history`,"")
}

//  api to delete a video watch history

export const deleteVideoHistoryApi = async(id) => {
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

// api to add category 

export const addCategoryApi = async(reqBody) => {
    return await commonAPI('POST', `${serverUrl}/category`,reqBody)
}

//  api to get all category

export const getAllCategoryApi = async() => {
    return await commonAPI('GET', `${serverUrl}/category`,'')
}

//  api to delete a category

export const deleteCategoryApi = async(id) => {
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})
}

//  api to get a particular video
export const getAVideoApi = async(id) => {
    return await commonAPI('GET',`${serverUrl}/videos/${id}`,"")
}

// api to update the category
export const updateCategoryApi = async(id,reqBody) => {
    return await commonAPI('PUT', `${serverUrl}/category/${id}`,reqBody)
}

