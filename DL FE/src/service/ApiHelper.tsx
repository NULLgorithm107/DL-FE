import axios from "axios";



export const callAPI = async (URL:any, method = 'POST', body:any = null, params:any = null) => {
  try {
    // const base_url = "http://localhost:5002/api";
    const base_url = "http://10.145.136.43:5002/api";
    // const base_url = "https://trackify-h2hdbjcwcubaf2cm.centralindia-01.azurewebsites.net/api/v1";
    // const base_url = "http://20.244.93.32:8000/api/v1";
    const config = {
      url: base_url + URL,
      method: method,
      data:  body,
      params: params || undefined,
      headers: {
        contentType: 'application/json'
      }
    };

    const response = await axios(config);
    // console.log("response from apiHandler: ", response);

    if(response.data.status === 401){
      console.log("Unauthorized");
      localStorage.removeItem('name');
      window.location.href = '/';
    }
    return response.data ? response.data : null;
  } catch (error:any) {
    return null;
  }
};