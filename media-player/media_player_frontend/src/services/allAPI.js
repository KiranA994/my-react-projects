import {commonAPI} from './commonAPI'
import { serverUrl } from './baseUrl'

//  api for adding video

export const uploadVideoApi = async(reqBody) => {
    return await commonAPI('POST',`${serverUrl}/videos`,reqBody)
}