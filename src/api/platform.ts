import myAxios from "../utils/request";


export function getProjectList(){
   return  myAxios.get('/platform/projectList')
}

export function getSnapList(){
    return  myAxios.get('/platform/history')
 }