import axios from 'axios'
export default function(config){
  const axiosInstance = axios.create({
    baseURL:'',

  });
  // 请求拦截
  axiosInstance.interceptors.request.use(
    configure =>{
      return configure;
    },
    err =>{
      return err;
    }
  );
  axiosInstance.interceptors.response.use(
    res =>{
      return res.data;
    },
    err =>{
      return err;
    }
  );

  return axiosInstance(config);
}