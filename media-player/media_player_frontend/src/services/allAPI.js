import {commonAPI} from './commonAPI'
import {serverURL} from './baseUrl'

//  api for adding video

export const uploadVideoApi = async(reqBody) => {
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}