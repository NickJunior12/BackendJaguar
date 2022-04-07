import fetch from "node-fetch";
import axios from "axios";
import qs  from "qs";

export const ConnetSoffid = async () =>{

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    console.log(data);

    return data;
}

export const TokenSoffid = async() => {

  const str = "hunbeh.jaguar-ep.com:Kiol4762";
  const buff = Buffer.from(str, 'utf-8');
  const base64 = buff.toString('base64');

  console.log('validamos el base 64 de usuario y contrasenia');
  console.log(base64);

  // 'grant_type=authorization_code&code=1Zf7O3A2/7HF0wZ3EKgDnPqeDZmDzLhM4WCh4Kb5YvAkpOT+'

  const response = await fetch("https://idp.jaguar-ep.com/token", {
    method: 'POST',
    headers: {
      'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
    },
    body: 'grant_type=authorization_code&code=urqEnPHeKW6LVRQGvxgU8t0TfwEhjx4mKEdvY+68dQX7ZSoY'
    });

  console.log('Obtención del response directo del servicio');
  console.log(response);

  console.log('Response body');
  console.log(response.body);

  console.log('Response header');
  console.log(response.headers);

  console.log('Response status');
  console.log(response.status);

  return response;
}

export const GetUserInfo = async(token: string) =>{

  const NombreUsuario = await axios({
    method: 'get',
    url: 'https://idp.jaguar-ep.com/userinfo',
    headers: {
      'Authorization': 'Bearer ' + encodeURIComponent(token),
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    const resp = JSON.stringify(response.data);
        console.log("Nombre de usuario");
        console.log(resp);
        return resp;
  })
  .catch((error) => {
    console.log("Error nuevo");
    console.log(error);
    return error;
  });

  console.log("Nombre de Usuario");
  console.log(NombreUsuario);

  return NombreUsuario;
}

export const GetToken = async (code:string) => {


  const TokenJwt = await axios({
    method: 'post',
    url: 'https://idp.jaguar-ep.com/token',
    headers: {
      'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'grant_type=authorization_code&code='+encodeURIComponent(code)
  })
  .then((response) => {
    const resp = JSON.stringify(response.data);
        console.log("Nueva respuesta");
        console.log(resp);
        console.log("Despues de la resp");
        return resp;
  })
  .catch((error) => {
    console.log("Error nuevo");
    console.log(error);
    console.log("Despues del error");
    return error;
  });

  console.log("TokenJwt");
  console.log(TokenJwt);

  return TokenJwt;

  // const tokenSoffid = await axios({
  //   method: 'post',
  //   url: 'https://idp.jaguar-ep.com/token',
  //   headers: {
  //     'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data: 'grant_type=authorization_code&code='+code
  // })
  // .then((response) => {
  //   const resp = JSON.stringify(response.data);
  //   console.log("Nueva respuesta");
  //   console.log(resp);
  //   return resp;
  // })
  // .catch((error) => {
  //   console.log("Error nuevo");
  //   console.log(error.message);
  //   return error.message;
  // });

  // return tokenSoffid;

  // axios({
  //     method: 'post',
  //     url: 'https://idp.jaguar-ep.com/token',
  //     headers: {
  //       'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     data: 'grant_type=authorization_code&code='+code
  //   })
  //   .then((response) => {
  //     const resp = JSON.stringify(response.data);
  //         console.log("Nueva respuesta");
  //         console.log(resp);
  //         console.log("Despues de la resp");
  //         return resp;
  //   })
  //   .catch((error) => {
  //     console.log("Error nuevo");
  //     console.log(error);
  //     console.log("Despues del error");
  //     return error;
  //   });
}