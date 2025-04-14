import axios from "axios";



export const callAPI = async (URL:any, method = 'POST', body = null, params = null) => {
  try {
    const base_url = "http://localhost:8000/api/v1";
    // const base_url = "https://trackify-h2hdbjcwcubaf2cm.centralindia-01.azurewebsites.net/api/v1";
    // const base_url = "http://20.244.93.32:8000/api/v1";
    const config = {
      url: base_url + URL,
      method: method,
      data: method !== 'GET' ? body : undefined,
      params: params || undefined,
      withCredentials: true,
      headers : {
        'Authorization': `${localStorage.getItem('access-token')}`
      }
    };

    const response = await axios(config);
    // console.log("response from apiHandler: ", response);

    if(response.data.status === 401){
      console.log("Unauthorized");
      localStorage.removeItem('name');
      window.location.href = '/';
    }
    return {
      status: response.data?.status,
      message: response.data?.message,
      data: response.data?.data ? response.data.data : null,
      error: response.data.error
    };
  } catch (error) {
    console.error("Error",error);
    if(error.response.data.status === 401){
      console.log("Unauthorized");
      localStorage.removeItem('name');
      window.location.href = '/';
    }
    return {
      status: error.response.data?.status || null,
      message: error.response.data?.message || null,
      data: error.response.data?.data ? error.response.data.data : null,
      error: true
    };
  }
};