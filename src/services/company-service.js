// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://localhost:4000",
//   // timeout: 1000,
//   // headers: {'Authorization': 'Bearer yourtokenhere'}
// });

// export const fetchData = async () => {
//   try {
//     const response = await apiClient.get("/data");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// async createCompany(company){
//     try {
//         const response = await apiClient.post("/company", formData);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }
// export const CreateCompany = async (formData) => {
//   console.log("Inside service call ==?? ");
//   try {
//     const response = await apiClient.post("/company", formData);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// axios.post("http://localhost:4000/company", formData).then((response) => {
//   console.log(response);
// });

// const axiosClient = axios.create({
//     baseURL: `http://localhost:4000`,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   });

//   axiosClient.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       let res = error.response;
//       if (res.status == 401) {
//         window.location.href = “https://example.com/login”;
//       }
//       console.error(“Looks like there was a problem. Status Code: “ + res.status);
//       return Promise.reject(error);
//     }
//   );

// export function getProduct(){
//     return axiosClient.get('/product');
// }

// export function addCompany(data) {
//   // axios.post("http://localhost:4000/company", formData).then((response) => {
//   //   console.log(response);
//   // });
//   console.log("Inside service call ==?? ");
//   return axios.post("/company", data);
// }
