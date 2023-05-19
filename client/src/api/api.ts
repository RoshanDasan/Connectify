import axios, { AxiosResponse } from "axios";

export const axiosPost = (endPoint: string, values: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:5000/api/auth/${endPoint}`, values)
      .then((response: AxiosResponse<any>) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error: any) => {
        console.error(error);
        reject(false);
      });
  });
};
