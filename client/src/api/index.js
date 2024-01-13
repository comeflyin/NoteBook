import axios from 'axios';
import { showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if(response.status !== 200) { // 程序错误
      showFailToast('服务端异常，请稍后重试');   
    }else{
      if(response.data.code !== "8000") { // 逻辑错误
        showFailToast(response.data.msg);
        return Promise.reject(response.data);
      }else{
        return response.data;
      }
    }
   
  }
);

export default axios