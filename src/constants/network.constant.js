const ApiConstant = {
    protocol: 'http',
    host: 'localhost',
    port: 3000 
}

const ApiPath = (() => {
    const _path = `${ApiConstant.protocol}://${ApiConstant.host}:${ApiConstant.port}`;
    console.log(`${_path} ---> path`);
    return _path;
})();

export {
    ApiPath
}