/**
 * Created by _Hing on 2015/6/27.
 */
//    注销按钮
$('#logout').bind('click',function(){
    delCookie('username');
    window.location = "index.html";
});
function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var cookie = getCookieObj();
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name+"=a; expires=" + date.toGMTString();
}