import {urlBase} from "../main";

const axios = require('axios').default;
export function updateRequest(url)  {
    axios.get(url)
}

export function getRequest(url,config)  {
    return axios.get(url,config).then(r => r)
}
export function loginBasic(username,password){
    getRequest(urlBase + "login", {
        auth: {
            username: username,
            password: password
        }, headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }).then(r  =>{
        document.cookie="login=true"
            console.log(r)
    })
}


export  function deleteRequest()  {

}

export function insertRequest()  {

}

