(function() {
    var a = {
        site_id: '13780',
        sub_id: '1',
        ws_domain: 'ws-gateway.com'
    };
    var b = function(b) {
        var d = {
            server_data: null
        };
        var e = {
            route: 'init',
            site_id: a.site_id,
            sub_id: a.sub_id,
            enabled: 1,
            page_url: document.location.href,
            origin: location.protocol + '//' + document.location.host
        };
        var f = c.encrypt_data(e);
        c.ws(d, f, function(a) {
            d.server_data = JSON.parse(a);
            b(d);
        });
    };
    var c = {
        encrypt_data: function(a) {
            var b = JSON.stringify(a);
            var d = window.btoa(b);
            d = c.generate_random_string() + d + c.generate_random_string();
            d = d.replace(/\//g, '-');
            return d;
        },
        generate_random_string: function() {
            var a = '';
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var c = 0; c < 5; c++) a += b.charAt(Math.floor(Math.random() * b.length));
            return a;
        },
        ws: function(b, d, e) {
            var f = new Date().getTime() + c.generate_random_string();
            var g = '';
            if (window.location.protocol == 'https:') g = 'wss://' + a.ws_domain;
            else g = 'ws://' + a.ws_domain;
            var h = document.createElement('iframe');
            h.setAttribute('src', 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3E<script>var ws=new WebSocket("' + g + '");ws.onopen=function(){ws.send("' + d + '");};ws.onmessage=function(msg){window.parent.postMessage("' + f + '|" + msg.data,"' + window.location.href + '");ws.close();}</script>%3C/body%3E%3C/html%3E');
            h.setAttribute('style', 'height: 0px !important; width: 0px !important; display: none !important;');
            document.body.appendChild(h);

            function i(a) {
                var b = a.data.split('|')[0];
                var c = a.data.split('|')[1];
                if (b == undefined || c == undefined || b != f) return;
                window.removeEventListener('message', i);
                e(c);
                document.body.removeChild(h);
            }
            window.addEventListener('message', i, false);
        },
        get_widget_data: function(b, d, e, f) {
            var g = {
                route: 'get_contentad_data',
                stid: a.site_id,
                sbid: a.sub_id,
                pvid: b.server_data.pvid,
                uid: b.server_data.uid,
                pid: d,
                page_url: document.location.href,
                origin: location.protocol + '//' + document.location.host,
                provider: f == undefined ? 'contentad' : f,
                source: 'ws'
            };
            var h = c.encrypt_data(g);
            c.ws(b, h, function(a) {
                var b = JSON.parse(a);
                e(b);
            });
        },
        set_cookie: function(a, b, c) {
            if (c) {
                var d = new Date();
                d.setTime(d.getTime() + (c * 60 * 1000));
                var e = '; expires=' + d.toGMTString();
            } else var e = '';
            document.cookie = a + '=' + b + e + '; path=/';
        },
        get_cookie: function(a) {
            var b = a + '=';
            var c = document.cookie.split(';');
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                while (e.charAt(0) == ' ') e = e.substring(1, e.length);
                if (e.indexOf(b) == 0) return e.substring(b.length, e.length);
            }
            return null;
        },
        clear_cookie: function(a) {
            c.set_cookie(a, '', -1);
        },
        init_leavepage_event: function(a, b, d) {
            if (b == null) b = {
                limitX: screen.width,
                limitY: 15,
                timeTillActive: 5000,
                times_per_pageview: 1,
                times_per_session: 1,
                session_time: 60
            };
            var e = 'impo_stitial';
            var f = new Date().getTime();
            var g = b.times_per_pageview;
            window.addEventListener('mousemove', function(a) {
                var h = new Date().getTime() - f;
                if ((a.clientY <= b.limitY) && (a.clientX <= b.limitX) && (h >= b.timeTillActive)) {
                    if (g <= 0) return;
                    var i = c.get_cookie(e) == null ? 0 : parseInt(c.get_cookie(e));
                    if (i >= b.times_per_session) return;
                    g--;
                    i++;
                    c.set_cookie(e, i, b.session_time);
                    d();
                }
            }, false);
        },
        effects: {
            fade_in: function(a, b, c) {
                if (!a) return;
                a.style = 'opacity:0;filter:alpha(opacity=0);display:inline-block !important;visibility:visible !important;';
                if (b) {
                    var d = 0;
                    var e = setInterval(function() {
                        d += 50 / b;
                        if (d >= c) {
                            clearInterval(e);
                            d = c;
                        }
                        a.style.opacity = d;
                        a.style.filter = 'alpha(opacity=' + d * 100 + ')';
                    }, 50);
                } else {
                    a.style.opacity = c;
                    a.style.filter = 'alpha(opacity=' + c + ')';
                }
            },
            fade_out: function(a, b) {
                if (!a) return;
                if (b) {
                    var c = a.style.opacity;
                    var d = setInterval(function() {
                        c -= 50 / b;
                        if (c <= 0) {
                            clearInterval(d);
                            c = 0;
                            a.style.display = 'none';
                            a.style.visibility = 'hidden';
                        }
                        a.style.opacity = c;
                        a.style.filter = 'alpha(opacity=' + c * 100 + ')';
                    }, 50);
                } else {
                    a.style.opacity = 0;
                    a.style.filter = 'alpha(opacity=0)';
                    a.style.display = 'none';
                    a.style.visibility = 'hidden';
                }
            }
        },
        b_popup: function(a) {
            var b = document.createElement("style");
            b.type = 'text/css';
            b.innerHTML = '.impo-b-overlay{display:none;position:fixed;height:100%;width:100%;left: 0;top: 0;background:#000;opacity: 0.7;filter: alpha(opacity=70);z-index:1;}';
            b.innerHTML += '.impo-b-stitial{display:none;position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);z-index: 9999}';
            document.body.appendChild(b);
            var d = document.createElement('div');
            d.className = 'impo-b-overlay';
            document.body.appendChild(d);
            var e = document.createElement('div');
            e.className = 'impo-b-stitial';
            e.innerHTML = a;
            document.body.appendChild(e);
            var f = document.getElementsByClassName('impo-b-stitial')[0];
            var g = document.getElementsByClassName('impo-b-overlay')[0];
            var h = document.getElementsByClassName('impo-b-close')[0];
            var i = function() {
                c.effects.fade_out(f, 1500);
                c.effects.fade_out(g, 1500);
            };
            h.addEventListener('click', function(a) {
                i();
            });
            g.addEventListener('click', function(a) {
                i();
            });
            c.effects.fade_in(g, 1000, 0.7);
            c.effects.fade_in(f, 1000, 1);
        },
        get_random_int: function(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        },
        generate_css_class_name: function(a) {
            var b = '';
            var c = 'abcdefghijklmnopqrstuvwxyz';
            for (var d = 0; d < a; d++) b += c.charAt(Math.floor(Math.random() * c.length));
            return b;
        }
    };
    var d = {
        native: function(a) {
            var b = function(a) {
                var b = Array.prototype.slice.call(document.querySelectorAll(a));
                b.forEach(function(a) {
                    a.parentNode.removeChild(a);
                });
            };
            var d = function(a) {
                function b(a) {
                    var b;
                    while ((b = a.lastChild)) a.removeChild(b);
                }
                var c = Array.prototype.slice.call(document.querySelectorAll(a));
                c.forEach(function(a) {
                    b(a);
                });
            };
            var e = function(b, d) {
                var e = [].slice.call(document.querySelectorAll(b));
                if (e.length > 0) c.get_widget_data(a, d, function(a) {
                    e.forEach(function(b) {
                        b.insertAdjacentHTML('afterend', a.html);
                        b.parentNode.removeChild(b);
                    });
                }, 'dozenlikes');
            };
            var f = function(b, d, e, f, g, h) {
                var i = false;
                var j = [].slice.call(document.querySelectorAll(b));
                if (j.length > d) {
                    i = true;
                    c.get_widget_data(a, e, function(a) {
                        j[d].insertAdjacentHTML(f, a.html);
                        if (typeof h === typeof Function) h();
                    }, g);
                }
                return i;
            };
            f('.container-content', 0, 'footer', 'afterBegin', 'contentad', function() {});
            f('.similar', 0, 'right', 'afterBegin', 'contentad', function() {});
            if (window.location.pathname == "/") return;
        }
    };
    b(function(a) {
        for (var b in d) d[b](a);
    });
})();