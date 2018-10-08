// ==UserScript==
// @name         Tistory Originals 2018
// @namespace    https://github.com/VirtuallyJesse/Tistory-Originals-2018
// @version      1.0
// @description  Redirect tistory image urls to the original resolution
// @author       VirtuallyJesse
// @include      *://t1.daumcdn.net/cfile/tistory/*
// @exclude      *://t1.daumcdn.net/cfile/tistory/*?original
// @run-at       document-start
// @grant        none
// ==/UserScript==

var url = window.document.location + "";
window.location.replace( url + "?original" );
