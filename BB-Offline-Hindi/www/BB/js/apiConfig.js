// Centralised API configuration and URL builder

window.ApiConfig = (function () {
    // var BASE = 'http://10.0.2.2/abbchmprm';
    // var BASE = 'http://10.0.2.2/abbchmprmtest';
    // var BASE = 'https://abbmath.klp.org.in/abbchmprmtest';
    // var BASE = 'https://abbmath.klp.org.in/abbchmprm';
    var BASE = 'https://abbmath.klp.org.in/abbchmprmlatest';
    var ENDPOINTS = {
        jspoint: '/',
        register: '/register',
        login: '/login',
        getchild: '/getchild',
        savefcmtoken: '/savefcmtoken',
        tracknotificationopen: '/tracknotificationopen',
        userprogress: '/assets/userprogress/userprogress',
        // appupdate: '/AppUpdate/app-update-config.json',
        updateprofile: '/updateprofile',
    };

    return {
        base: BASE,
        endpoint: function (name) {
            return ENDPOINTS[name] || '';
        },
        url: function (name) {
            var ep = ENDPOINTS[name];
            if (!ep) throw new Error('Unknown API endpoint: ' + name);
            return BASE + ep;
        },
        // backward-compatible alias used in some places
        getApiUrl: function (name /*, app */) {
            return this.url(name);
        },

    };
})();