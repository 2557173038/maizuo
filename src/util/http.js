//对于数据请求的封装  第一种
import axios from "axios"
// function HttpforList() {
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3496314",
//         headers: {
//             "X-Client-Info":
//                 '{"a":"3000","ch":"1002","v":"5.2.1","e":"16595812192273064196767745","bc":"110100"}',
//             "X-Host": "mall.film-ticket.film.list",
//         },

//     })
// }

// function Httpfordatail(id) {
//     return axios({
//         url: `https://m.maizuo.com/gateway?filmId=${id}&k=7881107`,

//         headers: {
//           "X-Client-Info":
//             '{"a":"3000","ch":"1002","v":"5.2.1","e":"16595812192273064196767745"}',
//           "X-Host": "mall.film-ticket.film.info",
//         },
//     })
// }

// export default {
//     HttpforList,
//     Httpfordatail
// }


//2.封装

import { Toast } from 'vant';
// Vue.use(Toast);害人的东西

const http = axios.create({
    baseURL: 'https://m.maizuo.com/',
    timeout: 1000,
    headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16595812192273064196767745","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
    }
  });

  // 在发请求之前拦截 -----showLoading
  http.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config)
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:0,
    });
    return config
      
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  // 在成功后拦截 ------hideLoading
  http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.clear()
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear()
    return Promise.reject(error);
  });

  export default http
