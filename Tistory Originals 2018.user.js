// ==UserScript==
// @name         Tistory Originals 2018
// @namespace    https://github.com/VirtuallyJesse/Tistory-Originals-2018
// @version      1.0
// @description  Redirect tistory image urls to the original resolution
// @author       VirtuallyJesse
// @include      *://t1.daumcdn.net/cfile/tistory/*
// @include      *://*.daum.net/image/*
// @exclude      *://t1.daumcdn.net/cfile/tistory/*?original
// @run-at       document-start
// @grant        none
// ==/UserScript==

var url = window.location.toString();
if (url.includes("/image/")) {
   window.location = url.replace('/image/', '/original/');
}
else {
    window.location.replace( url + "?original" );
}