import HTTPStatusCode from 'http-status-codes';
import { CustomApiError } from '../errors/index.js';
const checkPermission=(requestUser,resourceUserId)=>{

    if(requestUser.userId === resourceUserId.toString())return;
    throw new CustomApiError('Your are not authorized to perform this action',HTTPStatusCode.FORBIDDEN)
}
export default checkPermission;