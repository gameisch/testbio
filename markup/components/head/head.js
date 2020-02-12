function showHide(elementId) {
    let propEl = document.getElementById(elementId);
    $(propEl).prev().toggleClass('showProp');
    $(propEl).toggleClass('showProp');
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent( matches[1] ) : 'undefined';
}

function setCookie(name, value, options) {
    options = options || {};
    let expires = options.expires;

    if (typeof expires === 'number' && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    let propName;
    for (propName in options) {
        if (options.hasOwnProperty(propName)) {
            updatedCookie += '; ' + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }
        }
    }
    document.cookie = updatedCookie;
}