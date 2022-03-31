import fetch from "node-fetch";

export const ConnetSoffid = async (usuario: any) =>{

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    console.log(data);

    return data;
}

export const TokenSoffid = async(code:any, nonce: any) => {

  const str = "hunbeh.jaguar-ep.com:Kiol4762";
  const buff = Buffer.from(str, 'utf-8');
  const base64 = buff.toString('base64');

  console.log('validamos el base 64 de usuario y contrasenia');
  console.log(base64);


  const response = await fetch("https://hunbeh.jaguar-ep.com/token", {
    method: 'POST', // *GET, POST, PUT, DELETE
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      "Authorization": 'Basic ' + base64
    },
    
    body: JSON.stringify("{'grant_type': 'authorization_code', 'code': '"+code+"' }") 
  });

  console.log('Obtención del response directo del servicio');
  console.log(response);

  return response;
}

export const AuthorizationSoffid = async (usuario: any, pass: any) => {

    const response = await fetch("https://hunbeh.jaguar-ep.com/openidresponse", {
        method: 'POST', // *GET, POST, PUT, DELETE
        
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          "Authorization": 'Basic dGVzdDp0ZXN0'
          
        },
        
        body: JSON.stringify("{'username':'xxx', 'password': 'xxx'}") 
      });

      console.log('Obtención del response directo del servicio');
      console.log(response);

      return response;

}