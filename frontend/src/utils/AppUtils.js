import { API_URL } from "../common/Constants";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return json;
      }
      return json;
    })
  );
};

//     <-------------- Login APIs --------------->

export function apiLogin(loginRequest) {
  return request({
    url: API_URL + "auth/signin/verifyemailormobilenumber",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function apiLoginWithPassword(loginRequest) {
  return request({
    url: API_URL + "auth/signin/byemail",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function apiLoginWithOtp(loginRequest) {
  return request({
    url: API_URL + "auth/signin/bymobileNumber",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

//     <-------------- Signup APIs --------------->

export function apiSignup(signupRequest) {
    return request({
      url: API_URL + "auth/signup/registeremailormobileNumber",
      method: "POST",
      body: JSON.stringify(signupRequest),
    });
  }
  
  export function apiSignupWithPassword(signupRequest) {
    return request({
      url: API_URL + "auth/signup/byemail",
      method: "POST",
      body: JSON.stringify(signupRequest),
    });
  }
  
  export function apiSignupWithOtp(signupRequest) {
    return request({
      url: API_URL + "auth/signup/bymobileNumber",
      method: "POST",
      body: JSON.stringify(signupRequest),
    });
  }
