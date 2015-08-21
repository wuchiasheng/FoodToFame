console.log(window.location.href);
var url = window.location.href;
var index = url.indexOf("access_token=");
var accessToken = url.substr(index+13);

