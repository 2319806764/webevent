//每次调用$.gte等时会先调用此函数。在这个函数中我们可以使用提供的配置属性


$.ajaxPrefilter(function(options){
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    if(options.url.indexOf('/my/')!==-1){
        options.headers = {
            Authorization:localStorage.getItem('token') || ''
        }
    }
})
