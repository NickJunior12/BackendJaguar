import fetch from "node-fetch";

export const ConnetSoffid = async (usuario: any) =>{

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    console.log(data);

    return data;
}