
const requiredHttpOptions = {
    url: '/',
    method: 'GET'
},
optionalHttpOptions = {
    saveAccessToken: false,         // tells whether to store access token in storage or not.
    excludeAccessToken: true        // optional: forcefully exclude access token from http request.
},
defaultHttpOptions = {
    ...requiredHttpOptions,
    ...optionalHttpOptions
},
hasMandatoryKeys = (source, target) => {
    return Object.keys(target).reduce((accumulator, key) => {
        return !!(accumulator && key in source);
    }, true);
},
AccessTokenFactory = () => {
    const tokenName = 'access_token';
    return {
        getToken: () => {
            return localStorage.getItem(tokenName);
        },
        setToken: (token) => {
            localStorage.setItem(tokenName, token);
        }
    }
}


const http = (options = defaultHttpOptions) => {
    let fetchOptions = {
        ...options,
        headers: {
            'content-type': 'application/json',
        }
    };

    if(!hasMandatoryKeys(options, requiredHttpOptions)){
        throw new Error('Missing required parameters');
    }
    const accessToken = AccessTokenFactory().getToken();
    const url = fetchOptions.url;
    delete fetchOptions.url;

    if(accessToken && options.excludeAccessToken){      // 
        fetchOptions.headers['Authorization'] = `Bearer ${accessToken}`; 
    }

    if(typeof fetchOptions.body == 'object'){ 
        fetchOptions.body = JSON.stringify(fetchOptions.body); 
    }

    console.log('<<<< http >>>>>', fetchOptions);
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions)
            .then(response => {
                if(response.status == 200){
                    let _data = response.json();
                    if(options.saveAccessToken && _data.token){
                        AccessTokenFactory().setToken(_data.token)
                    }
                    return resolve(_data);
                }else{
                    return reject(response.json());
                }
            })
            .catch(_err => reject(_err));
    });
    // return fetch(url, fetchOptions);
}

export default http;
