function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}();

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function n() {
        t(this, n), this.data = {};
    }
    return e(n, [ {
        key: "setConfig",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.data = Object.assign({}, this.data, t);
        }
    }, {
        key: "getConfig",
        value: function(t) {
            return t ? this.data[t] : this.data;
        }
    } ]), n;
}(), a = new n();

a.Config = n, exports.default = a;