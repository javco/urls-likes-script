function likeCookie (path)
{
	document.cookie = 'likes-pages='+path+'; expires='+60*60*24*365+'; path=/';
}

function readLikeCookie() {
    var cookieName = 'likes-pages' + "=";
    var numCookies = document.cookie.split(';');
    for(var i=0;i < numCookies.length;i++) {
       var valCookie = numCookies[i];
       while (valCookie.charAt(0)==' ') {valCookie = valCookie.substring(1,valCookie.length); }
       if (valCookie.indexOf(cookieName) == 0) {return valCookie.substring(cookieName.length,valCookie.length);}
    }
    return null;
}