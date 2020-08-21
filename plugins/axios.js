export default function ({ $axios, redirect }) {
    // $axios.default.withCredentials = true;

    // request interceptor
    $axios.interceptors.request.use(
        config => {
            // do something before request is sent
            return config
        },
        error => {
            // do something with request error
            return Promise.reject(error)
        }
    )
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })

    // response interceptor
    $axios.interceptors.response.use(
        /**
         * Determine the request status by custom code
         * Here is just an example
         * You can also judge the status by HTTP Status Code
         */
        response => {
            return response;
            const res = response.data
            if (res.code === 20000) {
                return res
            } else {
                redirect('/404')
                // if the custom code is not 200, it is judged as an error.
            }
            return Promise.reject(new Error(res.msg || 'Error'))
        },
        error => {
            console.log('err' + error) // for debug
            return Promise.reject(error)
        }
    )
    $axios.onError(error => {
        // if (error.response.status === 500) {
            // redirect('/sorry')
        // }

        // return true;
        // const code = parseInt(error.response && error.response.status);
        // switch (code) {
        //     //错误代码
        //     case 401:
        //         sessionStorage.clear();
        //         redirect('/login')
        //         break;
        //     case 403:
        //         sessionStorage.clear();
        //         redirect('/login')
        //         break;
        //     case 404:
        //         sessionStorage.clear();
        //         break;
        //     case 500:
        //         Message.error("Server exception");
        //         break;
        //     case 502:
        //         Message.error("Bad Gateway");
        //         break;
        //     case 503:
        //         Message.error(error.message);
        //         break;
        //     case 504:
        //         Message.error(error.message);
        //         break;
        //     default:
        //         break;
        // }
    })
}