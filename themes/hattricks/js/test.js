function addLoadEvent(t) {
    var e = window.onload;
    "function" != typeof window.onload ? window.onload = t : window.onload = function () {
      e && e(), t()
    }
  }! function () {
    "use strict";
    var t = "undefined" == typeof window ? global : window;
    if ("function" != typeof t.require) {
      var e = {},
        r = {},
        i = {}.hasOwnProperty,
        n = {},
        o = function (t, e) {
          var r = 0;
          e && (e.indexOf(!1) && (r = "components/".length), e.indexOf("/", r) > 0 && (e = e.substring(r, e.indexOf("/", r))));
          var i = n[t + "/index.js"] || n[e + "/deps/" + t + "/index.js"];
          return i ? "components/" + i.substring(0, i.length - ".js".length) : t
        },
        s = function () {
          var t = /^\.\.?(\/|$)/;
          return function (e, r) {
            var i, n, o = [];
            i = (t.test(r) ? e + "/" + r : r).split("/");
            for (var s = 0, a = i.length; a > s; s++) n = i[s], ".." === n ? o.pop() : "." !== n && "" !== n && o.push(n);
            return o.join("/")
          }
        }(),
        a = function (t) {
          return t.split("/").slice(0, -1).join("/")
        },
        l = function (e) {
          return function (r) {
            var i = s(a(e), r);
            return t.require(i, e)
          }
        },
        u = function (t, e) {
          var i = {
            id: t,
            exports: {}
          };
          return r[t] = i, e(i.exports, l(t), i), i.exports
        },
        c = function (t, n) {
          var a = s(t, ".");
          if (null == n && (n = "/"), a = o(t, n), i.call(r, a)) return r[a].exports;
          if (i.call(e, a)) return u(a, e[a]);
          var l = s(a, "./index");
          if (i.call(r, l)) return r[l].exports;
          if (i.call(e, l)) return u(l, e[l]);
          throw new Error('Cannot find module "' + t + '" from "' + n + '"')
        };
      c.alias = function (t, e) {
        n[e] = t
      }, c.register = c.define = function (t, r) {
        if ("object" == typeof t)
          for (var n in t) i.call(t, n) && (e[n] = t[n]);
        else e[t] = r
      }, c.list = function () {
        var t = [];
        for (var r in e) i.call(e, r) && t.push(r);
        return t
      }, c.brunch = !0, t.require = c
    }
  }(),
  function (t) {
    for (var e, r = function () {}, i = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); e = i.pop();) t[e] = t[e] || r
  }(window.console = window.console || {}),
  function () {
    for (var t = 0, e = 0, r = ["ms", "moz", "webkit", "o"]; e < r.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[r[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r[e] + "CancelAnimationFrame"] || window[r[e] + "CancelRequestAnimationFrame"];
    window.msRequestAnimationFrame && (window.requestAnimationFrame = function (t) {
      return window.msRequestAnimationFrame(function () {
        t(+new Date)
      })
    }), window.requestAnimationFrame || (window.requestAnimationFrame = function (e, r) {
      var i = Date.now(),
        n = 1e3 / 60,
        o = window.setTimeout(function () {
          e(i + n)
        }, n);
      return t = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
      clearTimeout(t)
    })
  }();
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function () {
  return {
    load: function (t, e) {
      e = e || document;
      var r = e.createElement("link");
      r.type = "text/css", r.rel = "stylesheet", r.href = t, e.getElementsByTagName("head")[0].appendChild(r)
    },
    inject: function (t, e) {
      e = e || document;
      var r = document.createElement("style");
      r.type = "text/css", r.innerHTML = t, e.getElementsByTagName("head")[0].appendChild(r)
    }
  }
}(), dat.utils.common = function () {
  var t = Array.prototype.forEach,
    e = Array.prototype.slice;
  return {
    BREAK: {},
    extend: function (t) {
      return this.each(e.call(arguments, 1), function (e) {
        for (var r in e) this.isUndefined(e[r]) || (t[r] = e[r])
      }, this), t
    },
    defaults: function (t) {
      return this.each(e.call(arguments, 1), function (e) {
        for (var r in e) this.isUndefined(t[r]) && (t[r] = e[r])
      }, this), t
    },
    compose: function () {
      var t = e.call(arguments);
      return function () {
        for (var r = e.call(arguments), i = t.length - 1; i >= 0; i--) r = [t[i].apply(this, r)];
        return r[0]
      }
    },
    each: function (e, r, i) {
      if (e)
        if (t && e.forEach && e.forEach === t) e.forEach(r, i);
        else if (e.length === e.length + 0)
        for (var n = 0, o = e.length; o > n && !(n in e && r.call(i, e[n], n) === this.BREAK); n++);
      else
        for (n in e)
          if (r.call(i, e[n], n) === this.BREAK) break
    },
    defer: function (t) {
      setTimeout(t, 0)
    },
    toArray: function (t) {
      return t.toArray ? t.toArray() : e.call(t)
    },
    isUndefined: function (t) {
      return void 0 === t
    },
    isNull: function (t) {
      return null === t
    },
    isNaN: function (t) {
      return t !== t
    },
    isArray: Array.isArray || function (t) {
      return t.constructor === Array
    },
    isObject: function (t) {
      return t === Object(t)
    },
    isNumber: function (t) {
      return t === t + 0
    },
    isString: function (t) {
      return t === t + ""
    },
    isBoolean: function (t) {
      return !1 === t || !0 === t
    },
    isFunction: function (t) {
      return "[object Function]" === Object.prototype.toString.call(t)
    }
  }
}(), dat.controllers.Controller = function (t) {
  var e = function (t, e) {
    this.initialValue = t[e], this.domElement = document.createElement("div"), this.object = t, this.property = e, this.__onFinishChange = this.__onChange = void 0
  };
  return t.extend(e.prototype, {
    onChange: function (t) {
      return this.__onChange = t, this
    },
    onFinishChange: function (t) {
      return this.__onFinishChange = t, this
    },
    setValue: function (t) {
      return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
    },
    getValue: function () {
      return this.object[this.property]
    },
    updateDisplay: function () {
      return this
    },
    isModified: function () {
      return this.initialValue !== this.getValue()
    }
  }), e
}(dat.utils.common), dat.dom.dom = function (t) {
  function e(e) {
    return "0" === e || t.isUndefined(e) ? 0 : (e = e.match(i), t.isNull(e) ? 0 : parseFloat(e[1]))
  }
  var r = {};
  t.each({
    HTMLEvents: ["change"],
    MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
    KeyboardEvents: ["keydown"]
  }, function (e, i) {
    t.each(e, function (t) {
      r[t] = i
    })
  });
  var i = /(\d+(\.\d+)?)px/,
    n = {
      makeSelectable: function (t, e) {
        void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
          return !1
        } : function () {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
      },
      makeFullscreen: function (e, r, i) {
        t.isUndefined(r) && (r = !0), t.isUndefined(i) && (i = !0), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0)
      },
      fakeEvent: function (e, i, n, o) {
        n = n || {};
        var s = r[i];
        if (!s) throw Error("Event type " + i + " not supported.");
        var a = document.createEvent(s);
        switch (s) {
        case "MouseEvents":
          a.initMouseEvent(i, n.bubbles || !1, n.cancelable || !0, window, n.clickCount || 1, 0, 0, n.x || n.clientX || 0, n.y || n.clientY || 0, !1, !1, !1, !1, 0, null);
          break;
        case "KeyboardEvents":
          s = a.initKeyboardEvent || a.initKeyEvent, t.defaults(n, {
            cancelable: !0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: void 0,
            charCode: void 0
          }), s(i, n.bubbles || !1, n.cancelable, window, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, n.keyCode, n.charCode);
          break;
        default:
          a.initEvent(i, n.bubbles || !1, n.cancelable || !0)
        }
        t.defaults(a, o), e.dispatchEvent(a)
      },
      bind: function (t, e, r, i) {
        return t.addEventListener ? t.addEventListener(e, r, i || !1) : t.attachEvent && t.attachEvent("on" + e, r), n
      },
      unbind: function (t, e, r, i) {
        return t.removeEventListener ? t.removeEventListener(e, r, i || !1) : t.detachEvent && t.detachEvent("on" + e, r), n
      },
      addClass: function (t, e) {
        if (void 0 === t.className) t.className = e;
        else if (t.className !== e) {
          var r = t.className.split(/ +/); - 1 == r.indexOf(e) && (r.push(e), t.className = r.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
        }
        return n
      },
      removeClass: function (t, e) {
        if (e) {
          if (void 0 !== t.className)
            if (t.className === e) t.removeAttribute("class");
            else {
              var r = t.className.split(/ +/),
                i = r.indexOf(e); - 1 != i && (r.splice(i, 1), t.className = r.join(" "))
            }
        } else t.className = void 0;
        return n
      },
      hasClass: function (t, e) {
        return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
      },
      getWidth: function (t) {
        return t = getComputedStyle(t), e(t["border-left-width"]) + e(t["border-right-width"]) + e(t["padding-left"]) + e(t["padding-right"]) + e(t.width)
      },
      getHeight: function (t) {
        return t = getComputedStyle(t), e(t["border-top-width"]) + e(t["border-bottom-width"]) + e(t["padding-top"]) + e(t["padding-bottom"]) + e(t.height)
      },
      getOffset: function (t) {
        var e = {
          left: 0,
          top: 0
        };
        if (t.offsetParent)
          do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent);
        return e
      },
      isActive: function (t) {
        return t === document.activeElement && (t.type || t.href)
      }
    };
  return n
}(dat.utils.common), dat.controllers.OptionController = function (t, e, r) {
  var i = function (t, n, o) {
    i.superclass.call(this, t, n);
    var s = this;
    if (this.__select = document.createElement("select"), r.isArray(o)) {
      var a = {};
      r.each(o, function (t) {
        a[t] = t
      }), o = a
    }
    r.each(o, function (t, e) {
      var r = document.createElement("option");
      r.innerHTML = e, r.setAttribute("value", t), s.__select.appendChild(r)
    }), this.updateDisplay(), e.bind(this.__select, "change", function () {
      s.setValue(this.options[this.selectedIndex].value)
    }), this.domElement.appendChild(this.__select)
  };
  return i.superclass = t, r.extend(i.prototype, t.prototype, {
    setValue: function (t) {
      return t = i.superclass.prototype.setValue.call(this, t), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
    },
    updateDisplay: function () {
      return this.__select.value = this.getValue(), i.superclass.prototype.updateDisplay.call(this)
    }
  }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function (t, e) {
  function r(t) {
    return t = t.toString(), -1 < t.indexOf(".") ? t.length - t.indexOf(".") - 1 : 0
  }
  var i = function (t, n, o) {
    i.superclass.call(this, t, n), o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, e.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = r(this.__impliedStep)
  };
  return i.superclass = t, e.extend(i.prototype, t.prototype, {
    setValue: function (t) {
      return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && 0 != t % this.__step && (t = Math.round(t / this.__step) * this.__step), i.superclass.prototype.setValue.call(this, t)
    },
    min: function (t) {
      return this.__min = t, this
    },
    max: function (t) {
      return this.__max = t, this
    },
    step: function (t) {
      return this.__impliedStep = this.__step = t, this.__precision = r(t), this
    }
  }), i
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function (t, e, r) {
  var i = function (t, n, o) {
    function s() {
      var t = parseFloat(c.__input.value);
      r.isNaN(t) || c.setValue(t)
    }

    function a(t) {
      var e = u - t.clientY;
      c.setValue(c.getValue() + e * c.__impliedStep), u = t.clientY
    }

    function l() {
      e.unbind(window, "mousemove", a), e.unbind(window, "mouseup", l)
    }
    this.__truncationSuspended = !1, i.superclass.call(this, t, n, o);
    var u, c = this;
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", s), e.bind(this.__input, "blur", function () {
      s(), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
    }), e.bind(this.__input, "mousedown", function (t) {
      e.bind(window, "mousemove", a), e.bind(window, "mouseup", l), u = t.clientY
    }), e.bind(this.__input, "keydown", function (t) {
      13 === t.keyCode && (c.__truncationSuspended = !0, this.blur(), c.__truncationSuspended = !1)
    }), this.updateDisplay(), this.domElement.appendChild(this.__input)
  };
  return i.superclass = t, r.extend(i.prototype, t.prototype, {
    updateDisplay: function () {
      var t, e = this.__input;
      if (this.__truncationSuspended) t = this.getValue();
      else {
        t = this.getValue();
        var r = Math.pow(10, this.__precision);
        t = Math.round(t * r) / r
      }
      return e.value = t, i.superclass.prototype.updateDisplay.call(this)
    }
  }), i
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common), dat.controllers.NumberControllerSlider = function (t, e, r, i, n) {
  function o(t, e, r, i, n) {
    return i + (t - e) / (r - e) * (n - i)
  }
  var s = function (t, r, i, n, a) {
    function l(t) {
      t.preventDefault();
      var r = e.getOffset(c.__background),
        i = e.getWidth(c.__background);
      return c.setValue(o(t.clientX, r.left, r.left + i, c.__min, c.__max)), !1
    }

    function u() {
      e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", u), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
    }
    s.superclass.call(this, t, r, {
      min: i,
      max: n,
      step: a
    });
    var c = this;
    this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", function (t) {
      e.bind(window, "mousemove", l), e.bind(window, "mouseup", u), l(t)
    }), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
  };
  return s.superclass = t, s.useDefaultStyles = function () {
    r.inject(n)
  }, i.extend(s.prototype, t.prototype, {
    updateDisplay: function () {
      var t = (this.getValue() - this.__min) / (this.__max - this.__min);
      return this.__foreground.style.width = 100 * t + "%", s.superclass.prototype.updateDisplay.call(this)
    }
  }), s
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), dat.controllers.FunctionController = function (t, e, r) {
  var i = function (t, r, n) {
    i.superclass.call(this, t, r);
    var o = this;
    this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === n ? "Fire" : n, e.bind(this.__button, "click", function (t) {
      return t.preventDefault(), o.fire(), !1
    }), e.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
  };
  return i.superclass = t, r.extend(i.prototype, t.prototype, {
    fire: function () {
      this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
    }
  }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function (t, e, r) {
  var i = function (t, r) {
    i.superclass.call(this, t, r);
    var n = this;
    this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", function () {
      n.setValue(!n.__prev)
    }, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
  };
  return i.superclass = t, r.extend(i.prototype, t.prototype, {
    setValue: function (t) {
      return t = i.superclass.prototype.setValue.call(this, t), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
    },
    updateDisplay: function () {
      return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, i.superclass.prototype.updateDisplay.call(this)
    }
  }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function (t) {
  return function (e) {
    if (1 == e.a || t.isUndefined(e.a)) {
      for (e = e.hex.toString(16); 6 > e.length;) e = "0" + e;
      return "#" + e
    }
    return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
  }
}(dat.utils.common), dat.color.interpret = function (t, e) {
  var r, i, n = [{
    litmus: e.isString,
    conversions: {
      THREE_CHAR_HEX: {
        read: function (t) {
          return t = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i), null === t ? !1 : {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
          }
        },
        write: t
      },
      SIX_CHAR_HEX: {
        read: function (t) {
          return t = t.match(/^#([A-F0-9]{6})$/i), null === t ? !1 : {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString())
          }
        },
        write: t
      },
      CSS_RGB: {
        read: function (t) {
          return t = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/), null === t ? !1 : {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3])
          }
        },
        write: t
      },
      CSS_RGBA: {
        read: function (t) {
          return t = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/), null === t ? !1 : {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3]),
            a: parseFloat(t[4])
          }
        },
        write: t
      }
    }
  }, {
    litmus: e.isNumber,
    conversions: {
      HEX: {
        read: function (t) {
          return {
            space: "HEX",
            hex: t,
            conversionName: "HEX"
          }
        },
        write: function (t) {
          return t.hex
        }
      }
    }
  }, {
    litmus: e.isArray,
    conversions: {
      RGB_ARRAY: {
        read: function (t) {
          return 3 != t.length ? !1 : {
            space: "RGB",
            r: t[0],
            g: t[1],
            b: t[2]
          }
        },
        write: function (t) {
          return [t.r, t.g, t.b]
        }
      },
      RGBA_ARRAY: {
        read: function (t) {
          return 4 != t.length ? !1 : {
            space: "RGB",
            r: t[0],
            g: t[1],
            b: t[2],
            a: t[3]
          }
        },
        write: function (t) {
          return [t.r, t.g, t.b, t.a]
        }
      }
    }
  }, {
    litmus: e.isObject,
    conversions: {
      RGBA_OBJ: {
        read: function (t) {
          return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a) ? {
            space: "RGB",
            r: t.r,
            g: t.g,
            b: t.b,
            a: t.a
          } : !1
        },
        write: function (t) {
          return {
            r: t.r,
            g: t.g,
            b: t.b,
            a: t.a
          }
        }
      },
      RGB_OBJ: {
        read: function (t) {
          return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) ? {
            space: "RGB",
            r: t.r,
            g: t.g,
            b: t.b
          } : !1
        },
        write: function (t) {
          return {
            r: t.r,
            g: t.g,
            b: t.b
          }
        }
      },
      HSVA_OBJ: {
        read: function (t) {
          return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a) ? {
            space: "HSV",
            h: t.h,
            s: t.s,
            v: t.v,
            a: t.a
          } : !1
        },
        write: function (t) {
          return {
            h: t.h,
            s: t.s,
            v: t.v,
            a: t.a
          }
        }
      },
      HSV_OBJ: {
        read: function (t) {
          return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) ? {
            space: "HSV",
            h: t.h,
            s: t.s,
            v: t.v
          } : !1
        },
        write: function (t) {
          return {
            h: t.h,
            s: t.s,
            v: t.v
          }
        }
      }
    }
  }];
  return function () {
    i = !1;
    var t = 1 < arguments.length ? e.toArray(arguments) : arguments[0];
    return e.each(n, function (n) {
      return n.litmus(t) ? (e.each(n.conversions, function (n, o) {
        return r = n.read(t), !1 === i && !1 !== r ? (i = r, r.conversionName = o, r.conversion = n, e.BREAK) : void 0
      }), e.BREAK) : void 0
    }), i
  }
}(dat.color.toString, dat.utils.common), dat.GUI = dat.gui.GUI = function (t, e, r, i, n, o, s, a, l, u, c, h, d, p, f) {
  function m(t, e, r, o) {
    if (void 0 === e[r]) throw Error("Object " + e + ' has no property "' + r + '"');
    o.color ? e = new c(e, r) : (e = [e, r].concat(o.factoryArgs), e = i.apply(t, e)), o.before instanceof n && (o.before = o.before.__li), y(t, e), p.addClass(e.domElement, "c"), r = document.createElement("span"), p.addClass(r, "property-name"), r.innerHTML = e.property;
    var s = document.createElement("div");
    return s.appendChild(r), s.appendChild(e.domElement), o = g(t, s, o.before), p.addClass(o, P.CLASS_CONTROLLER_ROW), p.addClass(o, typeof e.getValue()), v(t, o, e), t.__controllers.push(e), e
  }

  function g(t, e, r) {
    var i = document.createElement("li");
    return e && i.appendChild(e), r ? t.__ul.insertBefore(i, params.before) : t.__ul.appendChild(i), t.onResize(), i
  }

  function v(t, e, r) {
    if (r.__li = e, r.__gui = t, f.extend(r, {
        options: function (e) {
          return 1 < arguments.length ? (r.remove(), m(t, r.object, r.property, {
            before: r.__li.nextElementSibling,
            factoryArgs: [f.toArray(arguments)]
          })) : f.isArray(e) || f.isObject(e) ? (r.remove(), m(t, r.object, r.property, {
            before: r.__li.nextElementSibling,
            factoryArgs: [e]
          })) : void 0
        },
        name: function (t) {
          return r.__li.firstElementChild.firstElementChild.innerHTML = t, r
        },
        listen: function () {
          return r.__gui.listen(r), r
        },
        remove: function () {
          return r.__gui.remove(r), r
        }
      }), r instanceof l) {
      var i = new a(r.object, r.property, {
        min: r.__min,
        max: r.__max,
        step: r.__step
      });
      f.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
        var e = r[t],
          n = i[t];
        r[t] = i[t] = function () {
          var t = Array.prototype.slice.call(arguments);
          return e.apply(r, t), n.apply(i, t)
        }
      }), p.addClass(e, "has-slider"), r.domElement.insertBefore(i.domElement, r.domElement.firstElementChild)
    } else if (r instanceof a) {
      var n = function (e) {
        return f.isNumber(r.__min) && f.isNumber(r.__max) ? (r.remove(), m(t, r.object, r.property, {
          before: r.__li.nextElementSibling,
          factoryArgs: [r.__min, r.__max, r.__step]
        })) : e
      };
      r.min = f.compose(n, r.min), r.max = f.compose(n, r.max)
    } else r instanceof o ? (p.bind(e, "click", function () {
      p.fakeEvent(r.__checkbox, "click")
    }), p.bind(r.__checkbox, "click", function (t) {
      t.stopPropagation()
    })) : r instanceof s ? (p.bind(e, "click", function () {
      p.fakeEvent(r.__button, "click")
    }), p.bind(e, "mouseover", function () {
      p.addClass(r.__button, "hover")
    }), p.bind(e, "mouseout", function () {
      p.removeClass(r.__button, "hover")
    })) : r instanceof c && (p.addClass(e, "color"), r.updateDisplay = f.compose(function (t) {
      return e.style.borderLeftColor = r.__color.toString(), t
    }, r.updateDisplay), r.updateDisplay());
    r.setValue = f.compose(function (e) {
      return t.getRoot().__preset_select && r.isModified() && w(t.getRoot(), !0), e
    }, r.setValue)
  }

  function y(t, e) {
    var r = t.getRoot(),
      i = r.__rememberedObjects.indexOf(e.object);
    if (-1 != i) {
      var n = r.__rememberedObjectIndecesToControllers[i];
      if (void 0 === n && (n = {}, r.__rememberedObjectIndecesToControllers[i] = n), n[e.property] = e, r.load && r.load.remembered) {
        if (r = r.load.remembered, r[t.preset]) r = r[t.preset];
        else {
          if (!r.Default) return;
          r = r.Default
        }
        r[i] && void 0 !== r[i][e.property] && (i = r[i][e.property], e.initialValue = i, e.setValue(i))
      }
    }
  }

  function _(t) {
    var e = t.__save_row = document.createElement("li");
    p.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), p.addClass(e, "save-row");
    var r = document.createElement("span");
    r.innerHTML = "&nbsp;", p.addClass(r, "button gears");
    var i = document.createElement("span");
    i.innerHTML = "Save", p.addClass(i, "button"), p.addClass(i, "save");
    var n = document.createElement("span");
    n.innerHTML = "New", p.addClass(n, "button"), p.addClass(n, "save-as");
    var o = document.createElement("span");
    o.innerHTML = "Revert", p.addClass(o, "button"), p.addClass(o, "revert");
    var s = t.__preset_select = document.createElement("select");
    if (t.load && t.load.remembered ? f.each(t.load.remembered, function (e, r) {
        E(t, r, r == t.preset)
      }) : E(t, "Default", !1), p.bind(s, "change", function () {
        for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
        t.preset = this.value
      }), e.appendChild(s), e.appendChild(r), e.appendChild(i), e.appendChild(n), e.appendChild(o), S) {
      var a = function () {
          l.style.display = t.useLocalStorage ? "block" : "none"
        },
        e = document.getElementById("dg-save-locally"),
        l = document.getElementById("dg-local-explain");
      e.style.display = "block", e = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(document.location.href + ".isLocal") && e.setAttribute("checked", "checked"), a(), p.bind(e, "change", function () {
        t.useLocalStorage = !t.useLocalStorage, a()
      })
    }
    var u = document.getElementById("dg-new-constructor");
    p.bind(u, "keydown", function (t) {
      !t.metaKey || 67 !== t.which && 67 != t.keyCode || R.hide()
    }), p.bind(r, "click", function () {
      u.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), R.show(), u.focus(), u.select()
    }), p.bind(i, "click", function () {
      t.save()
    }), p.bind(n, "click", function () {
      var e = prompt("Enter a new preset name.");
      e && t.saveAs(e)
    }), p.bind(o, "click", function () {
      t.revert()
    })
  }

  function x(t) {
    function e(e) {
      return e.preventDefault(), n = e.clientX, p.addClass(t.__closeButton, P.CLASS_DRAG), p.bind(window, "mousemove", r), p.bind(window, "mouseup", i), !1
    }

    function r(e) {
      return e.preventDefault(), t.width += n - e.clientX, t.onResize(), n = e.clientX, !1
    }

    function i() {
      p.removeClass(t.__closeButton, P.CLASS_DRAG), p.unbind(window, "mousemove", r), p.unbind(window, "mouseup", i)
    }
    t.__resize_handle = document.createElement("div"), f.extend(t.__resize_handle.style, {
      width: "6px",
      marginLeft: "-3px",
      height: "200px",
      cursor: "ew-resize",
      position: "absolute"
    });
    var n;
    p.bind(t.__resize_handle, "mousedown", e), p.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
  }

  function b(t, e) {
    t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
  }

  function T(t, e) {
    var r = {};
    return f.each(t.__rememberedObjects, function (i, n) {
      var o = {};
      f.each(t.__rememberedObjectIndecesToControllers[n], function (t, r) {
        o[r] = e ? t.initialValue : t.getValue()
      }), r[n] = o
    }), r
  }

  function E(t, e, r) {
    var i = document.createElement("option");
    i.innerHTML = e, i.value = e, t.__preset_select.appendChild(i), r && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
  }

  function w(t, e) {
    var r = t.__preset_select[t.__preset_select.selectedIndex];
    r.innerHTML = e ? r.value + "*" : r.value
  }

  function C(t) {
    0 != t.length && h(function () {
      C(t)
    }), f.each(t, function (t) {
      t.updateDisplay()
    })
  }
  t.inject(r);
  var S;
  try {
    S = "localStorage" in window && null !== window.localStorage
  } catch (A) {
    S = !1
  }
  var R, M, F = !0,
    D = !1,
    O = [],
    P = function (t) {
      function e() {
        var t = r.getRoot();
        t.width += 1, f.defer(function () {
          --t.width
        })
      }
      var r = this;
      this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), p.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = f.defaults(t, {
        autoPlace: !0,
        width: P.DEFAULT_WIDTH
      }), t = f.defaults(t, {
        resizable: t.autoPlace,
        hideable: t.autoPlace
      }), f.isUndefined(t.load) ? t.load = {
        preset: "Default"
      } : t.preset && (t.load.preset = t.preset), f.isUndefined(t.parent) && t.hideable && O.push(this), t.resizable = f.isUndefined(t.parent) && t.resizable, t.autoPlace && f.isUndefined(t.scrollable) && (t.scrollable = !0);
      var i, n = S && "true" === localStorage.getItem(document.location.href + ".isLocal");
      if (Object.defineProperties(this, {
          parent: {
            get: function () {
              return t.parent
            }
          },
          scrollable: {
            get: function () {
              return t.scrollable
            }
          },
          autoPlace: {
            get: function () {
              return t.autoPlace
            }
          },
          preset: {
            get: function () {
              return r.parent ? r.getRoot().preset : t.load.preset
            },
            set: function (e) {
              for (r.parent ? r.getRoot().preset = e : t.load.preset = e, e = 0; e < this.__preset_select.length; e++) this.__preset_select[e].value == this.preset && (this.__preset_select.selectedIndex = e);
              r.revert()
            }
          },
          width: {
            get: function () {
              return t.width
            },
            set: function (e) {
              t.width = e, b(r, e)
            }
          },
          name: {
            get: function () {
              return t.name
            },
            set: function (e) {
              t.name = e, s && (s.innerHTML = t.name)
            }
          },
          closed: {
            get: function () {
              return t.closed
            },
            set: function (e) {
              t.closed = e, t.closed ? p.addClass(r.__ul, P.CLASS_CLOSED) : p.removeClass(r.__ul, P.CLASS_CLOSED), this.onResize(), r.__closeButton && (r.__closeButton.innerHTML = e ? P.TEXT_OPEN : P.TEXT_CLOSED)
            }
          },
          load: {
            get: function () {
              return t.load
            }
          },
          useLocalStorage: {
            get: function () {
              return n
            },
            set: function (t) {
              S && ((n = t) ? p.bind(window, "unload", i) : p.unbind(window, "unload", i), localStorage.setItem(document.location.href + ".isLocal", t))
            }
          }
        }), f.isUndefined(t.parent)) {
        if (t.closed = !1, p.addClass(this.domElement, P.CLASS_MAIN), p.makeSelectable(this.domElement, !1), S && n) {
          r.useLocalStorage = !0;
          var o = localStorage.getItem(document.location.href + ".gui");
          o && (t.load = JSON.parse(o))
        }
        this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = P.TEXT_CLOSED, p.addClass(this.__closeButton, P.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
          r.closed = !r.closed
        })
      } else {
        void 0 === t.closed && (t.closed = !0);
        var s = document.createTextNode(t.name);
        p.addClass(s, "controller-name"), o = g(r, s), p.addClass(this.__ul, P.CLASS_CLOSED), p.addClass(o, "title"), p.bind(o, "click", function (t) {
          return t.preventDefault(), r.closed = !r.closed, !1
        }), t.closed || (this.closed = !1)
      }
      t.autoPlace && (f.isUndefined(t.parent) && (F && (M = document.createElement("div"), p.addClass(M, "dg"), p.addClass(M, P.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(M), F = !1), M.appendChild(this.domElement), p.addClass(this.domElement, P.CLASS_AUTO_PLACE)), this.parent || b(r, t.width)), p.bind(window, "resize", function () {
        r.onResize()
      }), p.bind(this.__ul, "webkitTransitionEnd", function () {
        r.onResize()
      }), p.bind(this.__ul, "transitionend", function () {
        r.onResize()
      }), p.bind(this.__ul, "oTransitionEnd", function () {
        r.onResize()
      }), this.onResize(), t.resizable && x(this), this.saveToLocalStorageIfPossible = i = function () {
        S && "true" === localStorage.getItem(document.location.href + ".isLocal") && localStorage.setItem(document.location.href + ".gui", JSON.stringify(r.getSaveObject()))
      }, r.getRoot(), t.parent || e()
    };
  return P.toggleHide = function () {
    D = !D, f.each(O, function (t) {
      t.domElement.style.zIndex = D ? -999 : 999, t.domElement.style.opacity = D ? 0 : 1
    })
  }, P.CLASS_AUTO_PLACE = "a", P.CLASS_AUTO_PLACE_CONTAINER = "ac", P.CLASS_MAIN = "main", P.CLASS_CONTROLLER_ROW = "cr", P.CLASS_TOO_TALL = "taller-than-window", P.CLASS_CLOSED = "closed", P.CLASS_CLOSE_BUTTON = "close-button", P.CLASS_DRAG = "drag", P.DEFAULT_WIDTH = 245, P.TEXT_CLOSED = "Close Controls", P.TEXT_OPEN = "Open Controls", p.bind(window, "keydown", function (t) {
    "text" === document.activeElement.type || 72 !== t.which && 72 != t.keyCode || P.toggleHide()
  }, !1), f.extend(P.prototype, {
    add: function (t, e) {
      return m(this, t, e, {
        factoryArgs: Array.prototype.slice.call(arguments, 2)
      })
    },
    addColor: function (t, e) {
      return m(this, t, e, {
        color: !0
      })
    },
    remove: function (t) {
      this.__ul.removeChild(t.__li), this.__controllers.splice(this.__controllers.indexOf(t), 1);
      var e = this;
      f.defer(function () {
        e.onResize()
      })
    },
    destroy: function () {
      this.autoPlace && M.removeChild(this.domElement)
    },
    addFolder: function (t) {
      if (void 0 !== this.__folders[t]) throw Error('You already have a folder in this GUI by the name "' + t + '"');
      var e = {
        name: t,
        parent: this
      };
      return e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]), e = new P(e), this.__folders[t] = e, t = g(this, e.domElement), p.addClass(t, "folder"), e
    },
    open: function () {
      this.closed = !1
    },
    close: function () {
      this.closed = !0
    },
    onResize: function () {
      var t = this.getRoot();
      if (t.scrollable) {
        var e = p.getOffset(t.__ul).top,
          r = 0;
        f.each(t.__ul.childNodes, function (e) {
          t.autoPlace && e === t.__save_row || (r += p.getHeight(e))
        }), window.innerHeight - e - 20 < r ? (p.addClass(t.domElement, P.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (p.removeClass(t.domElement, P.CLASS_TOO_TALL), t.__ul.style.height = "auto")
      }
      t.__resize_handle && f.defer(function () {
        t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
      }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
    },
    remember: function () {
      if (f.isUndefined(R) && (R = new d, R.domElement.innerHTML = e), this.parent) throw Error("You can only call remember on a top level GUI.");
      var t = this;
      f.each(Array.prototype.slice.call(arguments), function (e) {
        0 == t.__rememberedObjects.length && _(t), -1 == t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
      }), this.autoPlace && b(this, this.width)
    },
    getRoot: function () {
      for (var t = this; t.parent;) t = t.parent;
      return t
    },
    getSaveObject: function () {
      var t = this.load;
      return t.closed = this.closed, 0 < this.__rememberedObjects.length && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = T(this)), t.folders = {}, f.each(this.__folders, function (e, r) {
        t.folders[r] = e.getSaveObject()
      }), t
    },
    save: function () {
      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = T(this), w(this, !1), this.saveToLocalStorageIfPossible()
    },
    saveAs: function (t) {
      this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = T(this, !0)), this.load.remembered[t] = T(this), this.preset = t, E(this, t, !0), this.saveToLocalStorageIfPossible()
    },
    revert: function (t) {
      f.each(this.__controllers, function (e) {
        this.getRoot().load.remembered ? y(t || this.getRoot(), e) : e.setValue(e.initialValue)
      }, this), f.each(this.__folders, function (t) {
        t.revert(t)
      }), t || w(this.getRoot(), !1)
    },
    listen: function (t) {
      var e = 0 == this.__listening.length;
      this.__listening.push(t), e && C(this.__listening)
    }
  }), P
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", dat.controllers.factory = function (t, e, r, i, n, o, s) {
  return function (a, l, u, c) {
    var h = a[l];
    return s.isArray(u) || s.isObject(u) ? new t(a, l, u) : s.isNumber(h) ? s.isNumber(u) && s.isNumber(c) ? new r(a, l, u, c) : new e(a, l, {
      min: u,
      max: c
    }) : s.isString(h) ? new i(a, l) : s.isFunction(h) ? new n(a, l, "") : s.isBoolean(h) ? new o(a, l) : void 0
  }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (t, e, r) {
  var i = function (t, r) {
    function n() {
      o.setValue(o.__input.value)
    }
    i.superclass.call(this, t, r);
    var o = this;
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", n), e.bind(this.__input, "change", n), e.bind(this.__input, "blur", function () {
      o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
    }), e.bind(this.__input, "keydown", function (t) {
      13 === t.keyCode && this.blur()
    }), this.updateDisplay(), this.domElement.appendChild(this.__input)
  };
  return i.superclass = t, r.extend(i.prototype, t.prototype, {
    updateDisplay: function () {
      return e.isActive(this.__input) || (this.__input.value = this.getValue()), i.superclass.prototype.updateDisplay.call(this)
    }
  }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function (t, e, r, i, n) {
  function o(t, e, r, i) {
    t.style.background = "", n.each(l, function (n) {
      t.style.cssText += "background: " + n + "linear-gradient(" + e + ", " + r + " 0%, " + i + " 100%); "
    })
  }

  function s(t) {
    t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
  }
  var a = function (t, l) {
    function u(t) {
      p(t), e.bind(window, "mousemove", p), e.bind(window, "mouseup", c)
    }

    function c() {
      e.unbind(window, "mousemove", p), e.unbind(window, "mouseup", c)
    }

    function h() {
      var t = i(this.value);
      !1 !== t ? (m.__color.__state = t, m.setValue(m.__color.toOriginal())) : this.value = m.__color.toString()
    }

    function d() {
      e.unbind(window, "mousemove", f), e.unbind(window, "mouseup", d)
    }

    function p(t) {
      t.preventDefault();
      var r = e.getWidth(m.__saturation_field),
        i = e.getOffset(m.__saturation_field),
        n = (t.clientX - i.left + document.body.scrollLeft) / r;
      return t = 1 - (t.clientY - i.top + document.body.scrollTop) / r, t > 1 ? t = 1 : 0 > t && (t = 0), n > 1 ? n = 1 : 0 > n && (n = 0), m.__color.v = t, m.__color.s = n, m.setValue(m.__color.toOriginal()), !1
    }

    function f(t) {
      t.preventDefault();
      var r = e.getHeight(m.__hue_field),
        i = e.getOffset(m.__hue_field);
      return t = 1 - (t.clientY - i.top + document.body.scrollTop) / r, t > 1 ? t = 1 : 0 > t && (t = 0), m.__color.h = 360 * t, m.setValue(m.__color.toOriginal()), !1
    }
    a.superclass.call(this, t, l), this.__color = new r(this.getValue()), this.__temp = new r(0);
    var m = this;
    this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function (t) {
      13 === t.keyCode && h.call(this)
    }), e.bind(this.__input, "blur", h), e.bind(this.__selector, "mousedown", function (t) {
      e.addClass(this, "drag").bind(window, "mouseup", function (t) {
        e.removeClass(m.__selector, "drag")
      })
    });
    var g = document.createElement("div");
    n.extend(this.__selector.style, {
      width: "122px",
      height: "102px",
      padding: "3px",
      backgroundColor: "#222",
      boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
    }), n.extend(this.__field_knob.style, {
      position: "absolute",
      width: "12px",
      height: "12px",
      border: this.__field_knob_border + (.5 > this.__color.v ? "#fff" : "#000"),
      boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
      borderRadius: "12px",
      zIndex: 1
    }), n.extend(this.__hue_knob.style, {
      position: "absolute",
      width: "15px",
      height: "2px",
      borderRight: "4px solid #fff",
      zIndex: 1
    }), n.extend(this.__saturation_field.style, {
      width: "100px",
      height: "100px",
      border: "1px solid #555",
      marginRight: "3px",
      display: "inline-block",
      cursor: "pointer"
    }), n.extend(g.style, {
      width: "100%",
      height: "100%",
      background: "none"
    }), o(g, "top", "rgba(0,0,0,0)", "#000"), n.extend(this.__hue_field.style, {
      width: "15px",
      height: "100px",
      display: "inline-block",
      border: "1px solid #555",
      cursor: "ns-resize"
    }), s(this.__hue_field), n.extend(this.__input.style, {
      outline: "none",
      textAlign: "center",
      color: "#fff",
      border: 0,
      fontWeight: "bold",
      textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
    }), e.bind(this.__saturation_field, "mousedown", u), e.bind(this.__field_knob, "mousedown", u), e.bind(this.__hue_field, "mousedown", function (t) {
      f(t), e.bind(window, "mousemove", f), e.bind(window, "mouseup", d)
    }), this.__saturation_field.appendChild(g), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
  };
  a.superclass = t, n.extend(a.prototype, t.prototype, {
    updateDisplay: function () {
      var t = i(this.getValue());
      if (!1 !== t) {
        var e = !1;
        n.each(r.COMPONENTS, function (r) {
          return n.isUndefined(t[r]) || n.isUndefined(this.__color.__state[r]) || t[r] === this.__color.__state[r] ? void 0 : (e = !0, {})
        }, this), e && n.extend(this.__color.__state, t)
      }
      n.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
      var s = .5 > this.__color.v || .5 < this.__color.s ? 255 : 0,
        a = 255 - s;
      n.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + "px",
        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
        backgroundColor: this.__temp.toString(),
        border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
      }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, o(this.__saturation_field, "left", "#fff", this.__temp.toString()), n.extend(this.__input.style, {
        backgroundColor: this.__input.value = this.__color.toString(),
        color: "rgb(" + s + "," + s + "," + s + ")",
        textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
      })
    }
  });
  var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
  return a
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (t, e, r, i) {
  function n(t, e, r) {
    Object.defineProperty(t, e, {
      get: function () {
        return "RGB" === this.__state.space ? this.__state[e] : (s(this, e, r), this.__state[e])
      },
      set: function (t) {
        "RGB" !== this.__state.space && (s(this, e, r), this.__state.space = "RGB"), this.__state[e] = t
      }
    })
  }

  function o(t, e) {
    Object.defineProperty(t, e, {
      get: function () {
        return "HSV" === this.__state.space ? this.__state[e] : (a(this), this.__state[e])
      },
      set: function (t) {
        "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[e] = t
      }
    })
  }

  function s(t, r, n) {
    if ("HEX" === t.__state.space) t.__state[r] = e.component_from_hex(t.__state.hex, n);
    else {
      if ("HSV" !== t.__state.space) throw "Corrupted color state";
      i.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
    }
  }

  function a(t) {
    var r = e.rgb_to_hsv(t.r, t.g, t.b);
    i.extend(t.__state, {
      s: r.s,
      v: r.v
    }), i.isNaN(r.h) ? i.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = r.h
  }
  var l = function () {
    if (this.__state = t.apply(this, arguments), !1 === this.__state) throw "Failed to interpret color arguments";
    this.__state.a = this.__state.a || 1
  };
  return l.COMPONENTS = "r g b h s v hex a".split(" "), i.extend(l.prototype, {
    toString: function () {
      return r(this)
    },
    toOriginal: function () {
      return this.__state.conversion.write(this)
    }
  }), n(l.prototype, "r", 2), n(l.prototype, "g", 1), n(l.prototype, "b", 0), o(l.prototype, "h"), o(l.prototype, "s"), o(l.prototype, "v"), Object.defineProperty(l.prototype, "a", {
    get: function () {
      return this.__state.a
    },
    set: function (t) {
      this.__state.a = t
    }
  }), Object.defineProperty(l.prototype, "hex", {
    get: function () {
      return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
    },
    set: function (t) {
      this.__state.space = "HEX", this.__state.hex = t
    }
  }), l
}(dat.color.interpret, dat.color.math = function () {
  var t;
  return {
    hsv_to_rgb: function (t, e, r) {
      var i = t / 60 - Math.floor(t / 60),
        n = r * (1 - e),
        o = r * (1 - i * e);
      return e = r * (1 - (1 - i) * e), t = [[r, e, n], [o, r, n], [n, r, e], [n, o, r], [e, n, r], [r, n, o]][Math.floor(t / 60) % 6], {
        r: 255 * t[0],
        g: 255 * t[1],
        b: 255 * t[2]
      }
    },
    rgb_to_hsv: function (t, e, r) {
      var i = Math.min(t, e, r),
        n = Math.max(t, e, r),
        i = n - i;
      return 0 == n ? {
        h: NaN,
        s: 0,
        v: 0
      } : (t = (t == n ? (e - r) / i : e == n ? 2 + (r - t) / i : 4 + (t - e) / i) / 6, 0 > t && (t += 1), {
        h: 360 * t,
        s: i / n,
        v: n / 255
      })
    },
    rgb_to_hex: function (t, e, r) {
      return t = this.hex_with_component(0, 2, t), t = this.hex_with_component(t, 1, e), t = this.hex_with_component(t, 0, r)
    },
    component_from_hex: function (t, e) {
      return t >> 8 * e & 255
    },
    hex_with_component: function (e, r, i) {
      return i << (t = 8 * r) | e & ~(255 << t)
    }
  }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function () {
  return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
    window.setTimeout(t, 1e3 / 60)
  }
}(), dat.dom.CenteredDiv = function (t, e) {
  var r = function () {
    this.backgroundElement = document.createElement("div"), e.extend(this.backgroundElement.style, {
      backgroundColor: "rgba(0,0,0,0.8)",
      top: 0,
      left: 0,
      display: "none",
      zIndex: "1000",
      opacity: 0,
      WebkitTransition: "opacity 0.2s linear",
      transition: "opacity 0.2s linear"
    }), t.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), e.extend(this.domElement.style, {
      position: "fixed",
      display: "none",
      zIndex: "1001",
      opacity: 0,
      WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
      transition: "transform 0.2s ease-out, opacity 0.2s linear"
    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var r = this;
    t.bind(this.backgroundElement, "click", function () {
      r.hide()
    })
  };
  return r.prototype.show = function () {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), e.defer(function () {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
    })
  }, r.prototype.hide = function () {
    var e = this,
      r = function () {
        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", t.unbind(e.domElement, "webkitTransitionEnd", r), t.unbind(e.domElement, "transitionend", r), t.unbind(e.domElement, "oTransitionEnd", r)
      };
    t.bind(this.domElement, "webkitTransitionEnd", r), t.bind(this.domElement, "transitionend", r), t.bind(this.domElement, "oTransitionEnd", r), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
  }, r.prototype.layout = function () {
    this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px"
  }, r
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
var Handlebars = {};
! function (t, e) {
  t.VERSION = "1.0.0", t.COMPILER_REVISION = 4, t.REVISION_CHANGES = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: ">= 1.0.0"
  }, t.helpers = {}, t.partials = {};
  var r = Object.prototype.toString,
    i = "[object Function]",
    n = "[object Object]";
  t.registerHelper = function (e, i, o) {
    if (r.call(e) === n) {
      if (o || i) throw new t.Exception("Arg not supported with multiple helpers");
      t.Utils.extend(this.helpers, e)
    } else o && (i.not = o), this.helpers[e] = i
  }, t.registerPartial = function (e, i) {
    r.call(e) === n ? t.Utils.extend(this.partials, e) : this.partials[e] = i
  }, t.registerHelper("helperMissing", function (t) {
    if (2 === arguments.length) return e;
    throw new Error("Missing helper: '" + t + "'")
  }), t.registerHelper("blockHelperMissing", function (e, n) {
    var o = n.inverse || function () {},
      s = n.fn,
      a = r.call(e);
    return a === i && (e = e.call(this)), e === !0 ? s(this) : e === !1 || null == e ? o(this) : "[object Array]" === a ? e.length > 0 ? t.helpers.each(e, n) : o(this) : s(e)
  }), t.K = function () {}, t.createFrame = Object.create || function (e) {
    t.K.prototype = e;
    var r = new t.K;
    return t.K.prototype = null, r
  }, t.logger = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,
    methodMap: {
      0: "debug",
      1: "info",
      2: "warn",
      3: "error"
    },
    log: function (e, r) {
      if (t.logger.level <= e) {
        var i = t.logger.methodMap[e];
        "undefined" != typeof console && console[i] && console[i].call(console, r)
      }
    }
  }, t.log = function (e, r) {
    t.logger.log(e, r)
  }, t.registerHelper("each", function (e, n) {
    var o, s = n.fn,
      a = n.inverse,
      l = 0,
      u = "",
      c = r.call(e);
    if (c === i && (e = e.call(this)), n.data && (o = t.createFrame(n.data)), e && "object" == typeof e)
      if (e instanceof Array)
        for (var h = e.length; h > l; l++) o && (o.index = l), u += s(e[l], {
          data: o
        });
      else
        for (var d in e) e.hasOwnProperty(d) && (o && (o.key = d), u += s(e[d], {
          data: o
        }), l++);
    return 0 === l && (u = a(this)), u
  }), t.registerHelper("if", function (e, n) {
    var o = r.call(e);
    return o === i && (e = e.call(this)), !e || t.Utils.isEmpty(e) ? n.inverse(this) : n.fn(this)
  }), t.registerHelper("unless", function (e, r) {
    return t.helpers["if"].call(this, e, {
      fn: r.inverse,
      inverse: r.fn
    })
  }), t.registerHelper("with", function (e, n) {
    var o = r.call(e);
    return o === i && (e = e.call(this)), t.Utils.isEmpty(e) ? void 0 : n.fn(e)
  }), t.registerHelper("log", function (e, r) {
    var i = r.data && null != r.data.level ? parseInt(r.data.level, 10) : 1;
    t.log(i, e)
  });
  var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
  t.Exception = function (t) {
    for (var e = Error.prototype.constructor.apply(this, arguments), r = 0; r < o.length; r++) this[o[r]] = e[o[r]]
  }, t.Exception.prototype = new Error, t.SafeString = function (t) {
    this.string = t
  }, t.SafeString.prototype.toString = function () {
    return this.string.toString()
  };
  var s = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
    a = /[&<>"'`]/g,
    l = /[&<>"'`]/,
    u = function (t) {
      return s[t] || "&amp;"
    };
  t.Utils = {
    extend: function (t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
    },
    escapeExpression: function (e) {
      return e instanceof t.SafeString ? e.toString() : null == e || e === !1 ? "" : (e = e.toString(), l.test(e) ? e.replace(a, u) : e)
    },
    isEmpty: function (t) {
      return t || 0 === t ? "[object Array]" === r.call(t) && 0 === t.length ? !0 : !1 : !0
    }
  }, t.VM = {
    template: function (e) {
      var r = {
        escapeExpression: t.Utils.escapeExpression,
        invokePartial: t.VM.invokePartial,
        programs: [],
        program: function (e, r, i) {
          var n = this.programs[e];
          return i ? n = t.VM.program(e, r, i) : n || (n = this.programs[e] = t.VM.program(e, r)), n
        },
        merge: function (e, r) {
          var i = e || r;
          return e && r && (i = {}, t.Utils.extend(i, r), t.Utils.extend(i, e)), i
        },
        programWithDepth: t.VM.programWithDepth,
        noop: t.VM.noop,
        compilerInfo: null
      };
      return function (i, n) {
        n = n || {};
        var o = e.call(r, t, i, n.helpers, n.partials, n.data),
          s = r.compilerInfo || [],
          a = s[0] || 1,
          l = t.COMPILER_REVISION;
        if (a !== l) {
          if (l > a) {
            var u = t.REVISION_CHANGES[l],
              c = t.REVISION_CHANGES[a];
            throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + u + ") or downgrade your runtime to an older version (" + c + ")."
          }
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + s[1] + ")."
        }
        return o
      }
    },
    programWithDepth: function (t, e, r) {
      var i = Array.prototype.slice.call(arguments, 3),
        n = function (t, n) {
          return n = n || {}, e.apply(this, [t, n.data || r].concat(i))
        };
      return n.program = t, n.depth = i.length, n
    },
    program: function c(t, e, r) {
      var c = function (t, i) {
        return i = i || {}, e(t, i.data || r)
      };
      return c.program = t, c.depth = 0, c
    },
    noop: function () {
      return ""
    },
    invokePartial: function (r, i, n, o, s, a) {
      var l = {
        helpers: o,
        partials: s,
        data: a
      };
      if (r === e) throw new t.Exception("The partial " + i + " could not be found");
      if (r instanceof Function) return r(n, l);
      if (t.compile) return s[i] = t.compile(r, {
        data: a !== e
      }), s[i](n, l);
      throw new t.Exception("The partial " + i + " could not be compiled when running in runtime-only mode")
    }
  }, t.template = t.VM.template
}(Handlebars),
function (t) {
  "use strcit";

  function e() {
    var t, e, r = arguments[0] || {},
      i = 1,
      n = arguments.length;
    for ("object" != typeof r && "function" != typeof r && (r = {}); n > i; i++)
      if (null !== (t = arguments[i]))
        for (e in t) void 0 !== t[e] && (r[e] = t[e]);
    return r
  }

  function r(t, r) {
    this.xhr = new XMLHttpRequest, this.options = e({
      method: "GET",
      dataType: "application/json; charset=utf-8",
      success: function () {},
      fail: function () {},
      params: null,
      elem: null
    }, r || {}), this.sendParams = null;
    var i = "",
      n = 0;
    for (var o in this.options.params) i += 0 == n ? "" : "&", i += o + "=" + this.options.params[o], n++;
    if ("POST" == this.options.method && (this.sendParams = i), "GET" == this.options.method && "" != i && (t += "?" + i), this.xhr.onreadystatechange = this.onreadystatechange.bind(this), this.xhr.open(this.options.method, t, !0), this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this.options.elem) {
      var s = new FormData(this.options.elem);
      this.xhr.send(s)
    } else "POST" == this.options.method ? this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded") : this.xhr.setRequestHeader("Content-type", this.options.dataType), this.xhr.send(this.sendParams);
    return this
  }
  r.prototype = {
    onreadystatechange: function () {
      this.checkRequest()
    },
    checkRequest: function () {
      4 != this.xhr.readyState || 200 != this.xhr.status && 0 != this.xhr.status ? this.xhr.readyState < 4 && 404 == this.xhr.status && this.options.fail(this.xhr.responseText) : this.options.success(this.xhr.responseText)
    },
    then: function (t, e) {
      return "undefined" != typeof t && (this.options.success = t), "undefined" != typeof e && (this.options.fail = e), this.checkRequest(), this
    },
    abort: function () {
      this.xhr.onreadystatechange = null, this.xhr.abort()
    }
  }, t.$xhr = {
    post: function (t, e) {
      var e = e || {};
      return e.method = "POST", new r(t, e)
    },
    get: function (t, e) {
      var e = e || {};
      return e.method = "GET", new r(t, e)
    }
  }
}(window), Array.prototype.filter || (Array.prototype.filter = function (t) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError;
    var e = Object(this),
      r = e.length >>> 0;
    if (r > e.length || "function" != typeof t) throw new TypeError;
    for (var i = [], n = arguments.length >= 2 ? arguments[1] : void 0, o = 0; r > o; o++)
      if (o in e) {
        var s = e[o];
        t.call(n, s, o, e) && i.push(s)
      }
    return i
  }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
    var r, i;
    if (null == this) throw new TypeError(" this vaut null ou n est pas dÃ©fini");
    var n = Object(this),
      o = n.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " n est pas une fonction");
    for (arguments.length > 1 && (r = e), i = 0; o > i;) {
      var s;
      i in n && (s = n[i], t.call(r, s, i, n)), i++
    }
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
    var r;
    if (null == this) throw new TypeError('"this" vaut null ou n est pas dÃ©fini');
    var i = Object(this),
      n = i.length >>> 0;
    if (0 === n) return -1;
    var o = +e || 0;
    if (Math.abs(o) === 1 / 0 && (o = 0), o >= n) return -1;
    for (r = Math.max(o >= 0 ? o : n - Math.abs(o), 0); n > r;) {
      if (r in i && i[r] === t) return r;
      r++
    }
    return -1
  }), Array.prototype.map || (Array.prototype.map = function (t, e) {
    var r, i, n;
    if (null == this) throw new TypeError(" this est null ou non dÃ©fini");
    var o = Object(this),
      s = o.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " n est pas une fonction");
    for (arguments.length > 1 && (r = e), i = new Array(s), n = 0; s > n;) {
      var a, l;
      n in o && (a = o[n], l = t.call(r, a, n, o), i[n] = l), n++
    }
    return i
  }), "undefined" == typeof CameraTag && (CameraTag = function () {}, CameraTag = new function () {
    var self = this;
    self.version = "5";
    var appServer = "cameratag.com";
    self.cameras = {}, self.players = {}, self.uploaders = {};
    var callbacks = {},
      settingUp = !1,
      $, ct_jQuery = null,
      jQueryPreInstalled = window.jQuery && jQuery.fn && /^[1-9]/.test(jQuery.fn.jquery) || !1,
      jQueryInjected = !1,
      ct_swfobject, ct_jwplayer, swfObjectInjected = !1,
      jwplayerInjected = !1,
      evaporateInjected = !1,
      allow_play_count = !0;
    "undefined" == typeof CT_i18n && (CT_i18n = []), CT_i18n[0] = CT_i18n[0] || "To record this video using your mobile phone please visit <<url>> in your mobile browser", CT_i18n[1] = CT_i18n[1] || "Your mobile device does not support video uploading", CT_i18n[2] = CT_i18n[2] || "Please make sure you have Flash Player 11 or higher installed", CT_i18n[3] = CT_i18n[3] || "Unable to embed video recorder. Please make sure you have Flash Player 11 or higher installed", CT_i18n[4] = CT_i18n[4] || "choose a method below to submit your video", CT_i18n[5] = CT_i18n[5] || "record from webcam", CT_i18n[6] = CT_i18n[6] || "upload a file", CT_i18n[7] = CT_i18n[7] || "record from phone", CT_i18n[8] = CT_i18n[8] || "wave to the camera", CT_i18n[9] = CT_i18n[9] || "recording in", CT_i18n[10] = CT_i18n[10] || "uploading...", CT_i18n[11] = CT_i18n[11] || "click to stop recording", CT_i18n[12] = CT_i18n[12] || "click to skip review", CT_i18n[13] = CT_i18n[13] || "Accept", CT_i18n[14] = CT_i18n[14] || "Re-record", CT_i18n[15] = CT_i18n[15] || "Review Recording", CT_i18n[16] = CT_i18n[16] || "please wait while we push pixels", CT_i18n[17] = CT_i18n[17] || "published", CT_i18n[18] = CT_i18n[18] || "Enter your <b>mobile phone number</b> below and we will text you a link for mobile recording", CT_i18n[19] = CT_i18n[19] || "Send Mobile Link", CT_i18n[20] = CT_i18n[20] || "cancel", CT_i18n[21] = CT_i18n[21] || "Check your phone for mobile recording instructions", CT_i18n[22] = CT_i18n[22] || "or point your mobile browser to", CT_i18n[23] = CT_i18n[23] || "drop file to upload", CT_i18n[24] = CT_i18n[24] || "sending your message", CT_i18n[25] = CT_i18n[25] || "please enter your phone number!", CT_i18n[26] = CT_i18n[26] || "that does not appear to be a valid phone number", CT_i18n[27] = CT_i18n[27] || "Unable to send SMS.", CT_i18n[28] = CT_i18n[28] || "No Camera Detected", CT_i18n[29] = CT_i18n[29] || "No Microphone Detected", CT_i18n[30] = CT_i18n[30] || "Camera Access Denied", CT_i18n[31] = CT_i18n[31] || "Lost connection to server", CT_i18n[32] = CT_i18n[32] || "Playback failed", CT_i18n[33] = CT_i18n[33] || "Unable To Connect", CT_i18n[34] = CT_i18n[34] || "Unable to publish your recording.", CT_i18n[35] = CT_i18n[35] || "Unable to submit form data.", CT_i18n[36] = CT_i18n[36] || "uploading your video", CT_i18n[37] = CT_i18n[37] || "buffering video playback", CT_i18n[38] = CT_i18n[38] || "publishing", CT_i18n[39] = CT_i18n[39] || "connecting...", CT_i18n[40] = CT_i18n[40] || "negotiating firewall...", self.setup = function () {
      return jQueryReady() ? settingUp ? void raise("called setup while camera already setting up") : (settingUp = !0, instantiateCameras(), instantiatePlayers(), instantiateUploaders(), void(settingUp = !1)) : void setTimeout(self.setup, 30)
    };
    var jQueryReady = function () {
        if (jQueryPreInstalled) return ct_jQuery = jQuery, $ = ct_jQuery, !0;
        if (ct_jQuery) return !0;
        if (window.jQuery && jQuery.fn && /^[1-9]/.test(jQuery.fn.jquery)) return ct_jQuery = jQuery.noConflict(!0), $ = ct_jQuery, !0;
        if (ct_jQuery || jQueryInjected) return !1;
        var t = document.createElement("script");
        return t.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", document.body.insertBefore(t, document.body.firstChild), jQueryInjected = !0, !1
      },
      swfObjectReady = function () {
        if ("object" == typeof swfobject) return ct_swfobject = swfobject, !0;
        if (swfObjectInjected) return !1;
        var t = document.createElement("script");
        t.src = "//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js", document.body.insertBefore(t, document.body.firstChild), swfObjectInjected = !0
      },
      evaporateReady = function () {
        if ("function" == typeof Evaporate) return !0;
        if (evaporateInjected) return !1;
        var t = document.createElement("script");
        return t.src = "//" + appServer + "/" + self.version + "/evaporate.js", document.body.insertBefore(t, document.body.firstChild), evaporateInjected = !0, !1
      },
      jwplayerReady = function () {
        if ("function" == typeof jwplayer) return ct_jwplayer = jwplayer, !0;
        if (jwplayerInjected) return !1;
        var t = document.createElement("script");
        return t.src = "//" + appServer + "/api/v" + self.version + "/js/jwplayer.js", document.body.insertBefore(t, document.body.firstChild), jwplayerInjected = !0, !1
      },
      new_video = function (t, e) {
        $.ajax({
          url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + t + "/new_video.json",
          type: "get",
          dataType: "jsonp",
          timeout: 5e3,
          success: function (t) {
            if (void 0 != t.camera) {
              var r = {};
              r.uuid = generateUUID(), r.formats = {}, t.camera.formats && $(t.camera.formats).each(function (t, e) {
                r.formats[e.name] = {}
              }), e({
                success: !0,
                camera: t.camera,
                video: r,
                videoServer: t.videoServer
              })
            } else e({
              success: !1,
              message: t.error
            })
          },
          error: function (t, r, i) {
            e({
              success: !1,
              message: "error initializing recorder"
            })
          }
        })
      },
      generateUUID = function () {
        var t = (new Date).getTime(),
          e = "v-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var r = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16), ("x" == e ? r : 3 & r | 8).toString(16)
          });
        return e
      },
      instantiateCameras = function () {
        $("camera").each(function (t, e) {
          new CameraTagRecorder(e)
        })
      },
      instantiatePlayers = function () {
        $("video").each(function (t, e) {
          ($(e).attr("data-uuid") || $(e).attr("data-video-id")) && new CameraTagPlayer(e)
        })
      },
      instantiateUploaders = function () {
        $("uploader").each(function (t, e) {
          new Uploader($(e))
        })
      };
    self.observe = function (t, e, r, i) {
      i = i || !1, callbacks[t] || (callbacks[t] = {}), callbacks[t][e] || (callbacks[t][e] = []), i ? callbacks[t][e].splice(0, 0, r) : callbacks[t][e].push(r)
    }, self.fire = function (t, e, r) {
      callbacks[t] || (callbacks[t] = {}), callbacks[t][e] || (callbacks[t][e] = []), setTimeout(function () {
        fire_handlers(t, e, r)
      }, 1)
    };
    var fire_handlers = function (t, e, r) {
      for (i = 0; i < callbacks[t][e].length; i++) try {
        callbacks[t][e][i](r)
      } catch (n) {}
    };
    self.stopObserving = function (t, e, r) {
      for (callbacks[t] || (callbacks[t] = {}), callbacks[t][e] || (callbacks[t][e] = []), i = 0; i < callbacks[t][e].length; i++) callbacks[t][e][i] == r && callbacks[t][e].splice(i, 1)
    };
    var publish_on_server = function (t, e, r, i, n, o) {
      $.ajax({
        url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + t + "/videos/" + e + "/publish.json",
        type: "get",
        dataType: "jsonp",
        timeout: 5e3,
        data: {
          publish_type: r,
          server: i,
          referer: window.location.toString(),
          version: self.version,
          signature: n,
          signature_expiration: o
        },
        success: function (t) {
          t.uuid ? self.fire(e, "published", t) : self.fire(e, "publishFailed", {
            success: !1,
            video_uuid: e,
            message: t
          })
        },
        error: function () {
          self.fire(e, "publishFailed", {
            success: !1,
            video_uuid: e,
            message: "unkown error"
          })
        }
      })
    };
    self.prototype = self, CameraTagRecorder = function (t) {
      var e, r, i, n, o, s, a, l, u, c, h, d, p, f, m, g, v, y, _, x, b, T, E, w, C, S, A, R, M, F, D, O, P, L, B, k, I, N, j, U, z, G, H, X, W, Y, q, V, Q, K, Z = this,
        J = $(t).attr("data-uuid") || $(t).attr("data-app-id") || $(t).attr("id"),
        tt = $(t).attr("data-signature"),
        et = $(t).attr("data-signature-expiration"),
        rt = {},
        it = {},
        nt = {},
        ot = $(t).attr("id") || $(t).attr("data-uuid"),
        st = 0,
        at = 0,
        lt = parseInt(1e8 * Math.random()),
        ut = $(t).attr("data-video-uuid");
      Z.connect = function () {}, Z.play = function () {}, Z.record = function () {}, Z.stopRecording = function () {}, Z.stopPlayback = function () {}, Z.showFlashSettings = function () {};
      var ct, ht = !1,
        dt = !1,
        pt = 0,
        ft = !1,
        mt = [],
        gt = !1,
        vt = !1,
        yt = "webcam";
      CameraTag.cameras[ot] = Z;
      var _t = function () {
          return swfObjectReady() && evaporateReady() ? (clearTimeout(s), clearTimeout(a), clearInterval(i), pt = 0, st = 0, ft = !1, mt = [], gt = !1, yt = "webcam", ht && Z.disconnect(), void new_video(J, function (t) {
            return t.success ? (rt = t.camera, it = t.video, ut && (it.uuid = ut), nt = t.plan, f = t.videoServer, n = t.ul_policy, o = t.ul_signature, CameraTag.observe(it.uuid, "published", function (t) {
              it.uuid == t.uuid && (ct = "published", Ft(), Z.loadInterface(X), ht && Z.disconnect(), CameraTag.fire(ot, "published", it), M && Ot())
            }, !0), CameraTag.observe(it.uuid, "publishFailed", function (t) {
              it.uuid == t.video_uuid && Rt(CT_i18n[34] + t.message.error)
            }, !0)) : mt.push(t.message), vt || xt(), !c && vt && (O.setUUID(it.uuid), O.setVideoServer(f), O.showNothing(), CameraTag.fire(ot, "cameraReset")), mt.length > 0 ? void Rt(mt[0]) : void Z.loadInterface(P, !0)
          })) : void setTimeout(_t, 30)
        },
        xt = function () {
          return e = $(t).attr("name") || ot, inline_styles = $(t).attr("style"), p = $(t).attr("class") || rt.className || "", d = rt.formats && rt.formats[0].fps || 24, rt.formats ? (g = rt.formats[0].height < 360 ? rt.formats[0].width : rt.formats[0].width / 2, m = rt.formats[0].height < 360 ? rt.formats[0].height : rt.formats[0].height / 2, v = rt.formats[0].width, y = rt.formats[0].height) : (g = 300, m = 200, v = 300, y = 200), h = $(t).attr("data-sources") || "record,upload,sms", h = h.replace(" ", "").split(","), _ = $(t).attr("data-maxlength") || $(t).attr("data-max-length") || rt.maxLength || 30, r = $(t).attr("data-cssurl") || rt.cssURL || "//" + appServer + "/" + CameraTag.version + "/cameratag.css", T = $(t).attr("data-videobitrate"), rt.formats && (T = T || rt.formats[0].videoBitRate), l = wt(), u = Ct(), c = l && u && rt.allowMobileUploads, CT_i18n[0] = $(t).attr("data-txt-message") || CT_i18n[0], x = "false" == $(t).attr("data-autopreview") || "false" == $(t).attr("data-preview-on-recording") || 0 == rt.autoPreview || !1, S = "false" != $(t).attr("data-publish-on-upload"), b = "true" == $(t).attr("data-skip-font-awesome"), A = "false" != $(t).attr("data-upload-on-select"), C = "false" != $(t).attr("data-record-on-connect"), E = "true" == $(t).attr("data-skip-auto-detect") || "false" == $(t).attr("data-detect-camera"), R = "false" != $(t).attr("data-mirror-recording"), M = "true" == $(t).attr("data-poll-for-processed") || rt.poll_for_processed, w = $(t).attr("data-pre-roll-length") ? parseInt($(t).attr("data-pre-roll-length")) : 5, Et(), Bt(), l && !c && mt.push(CT_i18n[1]), mt.length > 0 ? void Rt(mt.join("\n")) : void(l && CameraTag.fire(ot, "initialized"))
        },
        bt = function () {
          var t = {
              videoServer: f,
              videoUUID: it.uuid,
              cameraUUID: rt.uuid,
              domID: ot,
              maxLength: _,
              hResolution: v,
              vResolution: y,
              fps: d,
              videoBitRate: T,
              skipAutoDetect: E,
              flipRecordPreview: R
            },
            e = {
              allowfullscreen: "true",
              allowscriptaccess: "always",
              wmode: "transparent"
            },
            r = {
              id: ot + "_swf",
              name: ot + "_swf"
            };
          swfobject.embedSWF("//" + appServer + "/" + CameraTag.version + "/camera.swf?" + lt, ot + "_swf_placeholder", "100%", "100%", "11.1.0", "https://" + appServer + "/" + CameraTag.version + "/expressInstall.swf", t, e, r, Tt), swfobject.getFlashPlayerVersion().major < 11 && mt.push(CT_i18n[2])
        },
        Tt = function (t) {
          if (O = $("#" + ot + "_swf")[0], void 0 == O && 1 == t.success) {
            swfobject.getFlashPlayerVersion().major + "." + swfobject.getFlashPlayerVersion().minor;
            mt.push(CT_i18n[2])
          }
        };
      Z.remove = function () {
        clearTimeout(s), clearTimeout(a), clearInterval(i), pt = 0, st = 0, ft = !1, mt = [], gt = !1, ht && Z.disconnect(), Z.uploader.destroy(), D.remove(), delete CameraTag.cameras[ot], delete callbacks[ot]
      }, Z.getState = function () {
        return ct
      }, Z.embed_callback = function (t) {
        O = $("#" + ot + "_swf")[0], void 0 == O && mt.push(CT_i18n[3])
      };
      var Et = function () {
          if (document.createStyleSheet) document.createStyleSheet(r), b || document.createStyleSheet("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
          else {
            var i = $('<link href="' + r + '" media="all" rel="stylesheet" type="text/css" />');
            if ($("head").append(i), !b) {
              var n = $('<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" media="all" rel="stylesheet" type="text/css" />');
              $("head").append(n)
            }
          }
          if (D = $('<div id="' + ot + '" class="camera_tag"></div>'), D.css({
              width: g + "px",
              height: m + "px"
            }), D.attr("style", inline_styles), D.addClass(p), $(t).replaceWith(D), l || (D.append("<div id='" + ot + "_swf_placeholder'></div>"), bt(), Lt()), F = parseInt($(D).height() / 14), 12 > F && (F = 12), P = $("#" + ot + "-start-screen").addClass("cameratag_screen"), 0 == P.length) {
            P = $('<div id="' + ot + '_start_screen" style="font-size:' + F + 'px" class="cameratag_screen cameratag_start"></div>');
            var o = $('<a class="cameratag_select_prompt">' + CT_i18n[4] + "</a>");
            if (P.append(o), -1 != h.indexOf("record") && !c) {
              var s = $('<a class="cameratag_primary_link cameratag_record_link cameratag_record"><span class="cameratag_action_icon">&#61501;</span><br><span class="cameratag_prompt_label">' + CT_i18n[5] + "</span></a>");
              P.append(s)
            }
            if (-1 != h.indexOf("upload") && !c) {
              var a = $('<a id="' + ot + '_upload_link" class="cameratag_primary_link cameratag_upload_link cameratag_upload"><span class="cameratag_action_icon">&#61678;</span><br><span class="cameratag_prompt_label">' + CT_i18n[6] + "</span></a>");
              P.append(a)
            }
            if (-1 != h.indexOf("sms") || c) {
              var u = $('<a class="cameratag_primary_link cameratag_sms_link"><span class="cameratag_action_icon">&#61707;</span><br><span class="cameratag_prompt_label">' + CT_i18n[7] + "</span></a>");
              P.append(u)
            }
            if (!c) {
              var d = $('<img class="cameratag_settings_btn" src="//cameratag.com/assets/gear.png">');
              P.append(d)
            }
          }
          if (D.append(P), $(P).css("position", "absolute"), W = $("#" + ot + "-error-screen").addClass("cameratag_screen"), 0 == W.length) {
            W = $('<div class="cameratag_screen cameratag_error"></div>'), Y = $('<div class="cameratag_error_message"></div>'), W.append(Y);
            var d = $('<img class="cameratag_settings_btn" src="//cameratag.com/assets/gear.png">');
            W.append(d)
          } else Y = $(".cameratag_error_message");
          if (D.append(W), k = $("#" + ot + "-camera-detection-screen").addClass("cameratag_screen"), 0 == k.length && (k = $("#" + ot + "camera-detection-screen").addClass("cameratag_screen")), 0 == k.length) {
            k = $('<div class="cameratag_screen cameratag_detect"></div>');
            var f = $('<div class="cameratag_prompt">' + CT_i18n[8] + "</div>");
            k.append(f)
          }
          if (D.append(k), I = $("#" + ot + "-countdown-screen").addClass("cameratag_screen"), N = I.find(".cameratag_countdown_status"), 0 == I.length) {
            I = $('<div class="cameratag_screen cameratag_count"></div>');
            var v = $('<div class="cameratag_prompt">' + CT_i18n[9] + " </div>");
            N = $('<div class="cameratag_countdown_status"></div>'), I.append(N), I.append(v)
          }
          if (D.append(I), j = $("#" + ot + "-upload-screen").addClass("cameratag_screen"), U = j.find(".cameratag_upload_status"), 0 == j.length) {
            j = $('<div class="cameratag_screen cameratag_upload"></div>');
            var y = $('<div class="cameratag_prompt">' + CT_i18n[10] + "</div>");
            U = $('<div class="cameratag_upload_status"></div>'), j.append(U), j.append(y)
          }
          if (D.append(j), B = $("#" + ot + "-recording-screen").addClass("cameratag_screen"), at = B.find(".cameratag_record_timer_prompt"), 0 == B.length) {
            B = $('<div class="cameratag_screen cameratag_recording cameratag_stop_recording"></div>');
            var x = $('<div class="cameratag_prompt">' + CT_i18n[11] + "</div>");
            at = $('<span class="cameratag_record_timer_prompt">(' + _ + ")</span>");
            var T = $('<img src="//' + appServer + '/assets/recording.gif"/>');
            x.append(at), B.append(x), B.append(T)
          }
          if (D.append(B), L = $("#" + ot + "-playback-screen").addClass("cameratag_screen"), 0 == L.length) {
            L = $('<div class="cameratag_screen cameratag_playback cameratag_stop_playback"></div>');
            var E = $('<div class="cameratag_prompt">' + CT_i18n[12] + "</div>");
            L.append(E)
          }
          if (D.append(L), z = $("#" + ot + "-accept-screen").addClass("cameratag_screen"), 0 == z.length) {
            z = $('<div class="cameratag_screen cameratag_accept"></div>');
            var w = $('<a class="cameratag_accept_btn cameratag_publish"><span class="button_label">&#10003; ' + CT_i18n[13] + "</span></a>"),
              C = $('<a class="cameratag_rerecord_btn cameratag_record"><span class="button_label">&#9851; ' + CT_i18n[14] + "</span></a>"),
              S = $('<a class="cameratag_play_btn cameratag_play"><span class="button_label">&#8629; ' + CT_i18n[15] + "</span></a>");
            z.append(w), z.append(C), z.append(S)
          }
          if (D.append(z), G = $("#" + ot + "-wait-screen").addClass("cameratag_screen"), H = G.find(".cameratag_wait_message"), 0 == G.length) {
            G = $('<div class="cameratag_screen cameratag_wait"></div>');
            var A = $('<div class="cameratag_spinner"><img src="//' + appServer + '/assets/loading.gif"/><br/><span class="cameratag_wait_message">' + CT_i18n[16] + "</span></div>");
            G.append(A), H = G.find(".cameratag_wait_message")
          }
          if (D.append(G), X = $("#" + ot + "-completed-screen").addClass("cameratag_screen"), 0 == X.length) {
            X = $('<div class="cameratag_screen cameratag_completed"></div>'), Q = $('<div class="cameratag_thumb_bg"></div>');
            var R = $('<div class="cameratag_checkmark"><span class="check">&#10004;</span> ' + CT_i18n[17] + "</div>");
            X.append(Q), X.append(R)
          }
          if (D.append(X), q = $("#" + ot + "-sms-screen").addClass("cameratag_screen"), V = q.find(".cameratag_sms_input"), 0 == q.length) {
            q = $('<div class="cameratag_screen cameratag_sms"></div>');
            var M = $('<div class="cameratag_sms_prompt">' + CT_i18n[18] + "<br/></div>");
            V = $('<input class="cameratag_sms_input" type="text"/>');
            var O = $('<br/><a href="javascript:" class="cameratag_send_sms">' + CT_i18n[19] + '</a>&nbsp;&nbsp;<a href="javascript:" class="cameratag_goto_start">' + CT_i18n[20] + "</a>");
            M.append(V), M.append(O), q.append(M)
          }
          D.append(q), K = $("#" + ot + "-check-phone-screen").addClass("cameratag_screen"), 0 == K.length && (K = $('<div class="cameratag_screen cameratag_check_phone"><div class="cameratag_check_phone_prompt">' + CT_i18n[21] + '</div><div class="cameratag_check_phone_url">' + CT_i18n[22] + " http://" + appServer + "/m/" + it.short_code + "</div></div>")), D.append(K), Z.loadInterface(P, !0), D.append("<input id='" + e + "_video_uuid' type='hidden' name='" + e + "[video_uuid]' value=''>"), $(rt.formats).each(function (t, r) {
            D.append("<input id='" + e + "_" + r.name + "_video' type='hidden' name='" + e + "[" + r.name + "][video]' value=''>"), D.append("<input id='" + e + "_" + r.name + "_mp4' type='hidden' name='" + e + "[" + r.name + "][mp4]' value=''>"), D.append("<input id='" + e + "_" + r.name + "_webm' type='hidden' name='" + e + "[" + r.name + "][webm]' value=''>"), D.append("<input id='" + e + "_" + r.name + "_thumb' type='hidden' name='" + e + "[" + r.name + "][thumb]' value=''>"), D.append("<input id='" + e + "_" + r.name + "_small_thumb' type='hidden' name='" + e + "[" + r.name + "][small_thumb]' value=''>")
          }), c ? Z.uploader = Dt(P) : P.find(".cameratag_upload").length > 0 && (Z.uploader = Dt(P.find(".cameratag_upload")[0])), l || (D.find(".cameratag_record").click(function () {
            Z.record()
          }), D.find(".cameratag_stop_recording").click(function () {
            Z.stopRecording()
          }), D.find(".cameratag_stop_playback").click(function () {
            Z.stopPlayback()
          }), D.find(".cameratag_play").click(function () {
            Z.play()
          }), D.find(".cameratag_publish").click(function () {
            Z.publish()
          }), D.find(".cameratag_goto_start").click(function () {
            Z.loadInterface(P, !0)
          }), D.find(".cameratag_send_sms").click(function () {
            Z.send_sms(V.val())
          }), D.find(".cameratag_sms_link").click(function () {
            Z.loadInterface(q)
          }), D.find(".cameratag_settings_btn").click(function (t) {
            t.stopPropagation(), Z.showFlashSettings()
          }))
        },
        wt = function () {
          return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
        },
        Ct = function () {
          if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
          var t = document.createElement("input");
          return t.type = "file", !t.disabled
        },
        St = function (t, e) {
          pt >= t ? (pt = 0, I.hide(), e(), CameraTag.fire(ot, "countdownFinished")) : (N.html(t - pt), pt += 1, setTimeout(function () {
            St(t, e)
          }, 1e3))
        };
      Z.loadInterface = function (t, e, r) {
        D.find(".cameratag_screen").hide(), e ? D.find(".cameratag_alternatives").show() : D.find(".cameratag_alternatives").hide(), "none" != t && t.css("display", "block")
      };
      var At = function () {
          st += 1;
          var t = _ - st;
          at.html("(" + t + ")"), 0 == t && (CameraTag.fire(ot, "recordingTimeOut"), clearInterval(i), Z.stopRecording())
        },
        Rt = function (t) {
          Y.html(t), Z.loadInterface(W, !0)
        };
      Z.publish = function () {
        if (!gt) throw "Camera not ready to publish. Please wait for the 'readyToPublish' event.";
        CameraTag.fire(ot, "publishing"), Mt(CT_i18n[38]), publish_on_server(rt.uuid, it.uuid, yt, f, tt, et)
      };
      var Mt = function (t) {
          t = t || "please wait", H.html(t), Z.loadInterface(G)
        },
        Ft = function () {
          $("#" + e + "_video_uuid").val(it.uuid), $(rt.formats).each(function (t, r) {
            var i = "//" + appServer + "/videos/" + it.uuid + "/" + r.name + "/mp4.mp4";
            if (rt.create_webm) var n = "//" + appServer + "/videos/" + it.uuid + "/" + r.name + "/webm.webm";
            else var n = "";
            $("#" + e + "_" + r.name + "_video").val(i), it.formats[r.name].video_url = i, $("#" + e + "_" + r.name + "_mp4").val(i), it.formats[r.name].mp4_url = i, $("#" + e + "_" + r.name + "_webm").val(n), it.formats[r.name].webm_url = n;
            var o = "//" + appServer + "/videos/" + it.uuid + "/" + r.name + "/thumb.png";
            $("#" + e + "_" + r.name + "_thumb").val(o), it.formats[r.name].thumb_url = o;
            var s = "//" + appServer + "/videos/" + it.uuid + "/" + r.name + "/small_thumb.png";
            $("#" + e + "_" + r.name + "_small_thumb").val(s), it.formats[r.name].small_thumb_url = s
          })
        };
      Z.addVideoData = function (t) {
        if ("object" == typeof t) {
          var e = JSON.stringify(t);
          $.ajax({
            url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + rt.uuid + "/videos/" + it.uuid + "/form_data.json",
            data: {
              form_data: e
            },
            type: "get",
            dataType: "jsonp",
            timeout: 5e3,
            success: function (t) {
              return !0
            },
            error: function () {
              return Rt(CT_i18n[35]), !1
            }
          })
        }
      }, Z.reset = function () {
        _t()
      }, Z.setLength = function (t) {
        _ = t, at.html("(" + t + ")")
      }, Z.send_sms = function (t) {
        return "" == t ? void alert(CT_i18n[25]) : (Mt(CT_i18n[24]), void $.ajax({
          url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + rt.uuid + "/videos/" + it.uuid + "/sms",
          data: {
            number: t,
            message: CT_i18n[0]
          },
          type: "get",
          dataType: "jsonp",
          timeout: 5e3,
          success: function (t) {
            t.success ? (Z.loadInterface(K), CameraTag.fire(ot, "smsSent")) : (Z.loadInterface(q), alert(CT_i18n[26]))
          },
          error: function () {
            return Rt(CT_i18n[27]), !1
          }
        }))
      }, Z.getVideo = function () {
        return it
      }, Z.restart_upload = function () {
        Z.uploader.restart_upload()
      }, Z.destroy = function () {
        ct = "disconnecting", O && ht && O.disconnect(), delete CameraTag.cameras[ot], D.remove()
      };
      var Dt = function (t) {
          var e = new Evaporate({
            signerUrl: "//" + appServer + "/api/v" + CameraTag.version + "/videos/upload_signature",
            aws_key: "AKIAJCHWZMZ35EB62V2A",
            bucket: "assets.cameratag.com",
            aws_url: "https://d2az0z6s4nrieh.cloudfront.net",
            cloudfront: !0
          });
          upload_input = $('<input id="upload_file" style="position:absolute;" type="file" accept="video/mp4,video/m4v,video/x-flv,video/flv,video/wmv,video/mpg,video/quicktime,video/webm,video/x-ms-wmv,video/ogg,video/avi,video/mov,video/x-m4v,video/*" capture>'), $(P).append(upload_input), setTimeout(function () {
            $(upload_input).css({
              left: $(t).offset().left - $(t).offsetParent().offset().left,
              top: $(t).offset().top - $(t).offsetParent().offset().top,
              width: $(t).width(),
              height: $(t).height(),
              opacity: 0
            }), $(t).css({
              zIndex: 1
            }), $(t).click(function () {
              $(upload_input).click()
            })
          }, 500), $("#upload_file").change(function (t) {
            files = t.target.files, ct = "uploading", ft = !0, CameraTag.fire(ot, "uploadStarted"), j.show(), P.css("left", "-10000px"), P.css("right", "10000px");
            var r = navigator.userAgent.toLowerCase().indexOf("android") > -1;
            r ? U.html("...") : U.html("0%"), e.add({
              name: "recordings/" + it.uuid + ".flv",
              file: files[0],
              notSignedHeadersAtInitiate: {
                "Cache-Control": "max-age=3600"
              },
              xAmzHeadersAtInitiate: {
                "x-amz-acl": "public-read"
              },
              signParams: {},
              complete: function () {
                gt = !0, yt = "upload", CameraTag.fire(ot, "readyToPublish"), P.css("left", "0px"), P.css("right", "0px"), S ? (Mt(CT_i18n[38]), publish_on_server(rt.uuid, it.uuid, "upload", f, tt, et)) : Z.loadInterface(X)
              },
              progress: function (t) {
                CameraTag.fire(ot, "UploadProgress", t), U.html((100 * t).toFixed(1) + "%")
              }
            }), $(t.target).val("")
          })
        },
        Ot = function () {
          M && $.ajax({
            url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + rt.uuid + "/videos/" + it.uuid + ".json",
            type: "get",
            dataType: "jsonp",
            timeout: 5e3,
            data: {
              referer: window.location.toString()
            },
            success: function (t) {
              t.formats && t.formats[0] && "COMPLETED" == t.formats[0].state ? CameraTag.fire(ot, "processed") : s = setTimeout(Ot, 2e3)
            },
            error: function () {
              s = setTimeout(Ot, 2e3)
            }
          })
        },
        Pt = function () {
          $.ajax({
            url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + rt.uuid + "/videos/" + it.uuid + ".json",
            type: "get",
            dataType: "jsonp",
            timeout: 5e3,
            data: {
              referer: window.location.toString()
            },
            success: function (t) {
              "published" == t.state ? (CameraTag.fire(it.uuid, "published", t), clearInterval(a)) : a = setTimeout(function () {
                Pt()
              }, 4e3)
            },
            error: function () {
              a = setTimeout(function () {
                Pt()
              }, 4e3)
            }
          })
        },
        Lt = function () {
          Z.play = function () {
            ht && O.startPlayback()
          }, Z.showFlashSettings = function () {
            Z.loadInterface("none"), O.showFlashSettings()
          }, Z.record = function () {
            ht ? (CameraTag.fire(ot, "countdownStarted"), O.showRecorder(), St(w, Z.record_without_countdown)) : (Z.loadInterface("none"), Z.connect())
          }, Z.showRecorder = function () {
            O.showRecorder()
          }, Z.showPlayer = function () {
            O.showPlayer()
          }, Z.record_without_countdown = function () {
            if (!dt) throw "Camera not ready to record. Please observe 'readyToRecord' event before recording";
            ct = "recording", O.showRecorder(), O.startRecording()
          }, Z.stopPlayback = function () {
            ht && O.stopPlayback()
          }, Z.stopRecording = function () {
            clearInterval(i), ht && O.stopRecording()
          }, Z.connect = function () {
            O.connect()
          }, Z.disconnect = function () {
            ct = "disconnecting", O.disconnect()
          }
        },
        Bt = function () {
          CameraTag.observe(ot, "initialized", function () {
            vt = !0, ct = "initialized"
          }, !0), CameraTag.observe(ot, "connecting", function () {
            Mt(CT_i18n[39])
          }, !0), CameraTag.observe(ot, "connecting2", function () {
            Mt(CT_i18n[40])
          }, !0), CameraTag.observe(ot, "securityDialogOpen", function () {
            Z.loadInterface("none")
          }, !0), CameraTag.observe(ot, "securityDialogClosed", function () {
            Z.loadInterface(k)
          }, !0), CameraTag.observe(ot, "settingsDialogClosed", function () {
            Z.loadInterface(P, !0)
          }, !0), CameraTag.observe(ot, "detectingCamera", function () {
            Z.loadInterface(k)
          }, !0), CameraTag.observe(ot, "noCamera", function () {
            Rt(CT_i18n[28])
          }, !0), CameraTag.observe(ot, "noMic", function () {
            Rt(CT_i18n[29])
          }, !0), CameraTag.observe(ot, "readyToRecord", function () {
            dt = !0, C && Z.record()
          }, !0), CameraTag.observe(ot, "cameraDenied", function () {
            Rt(CT_i18n[30])
          }, !0), CameraTag.observe(ot, "serverConnected", function () {
            ht = !0
          }, !0), CameraTag.observe(ot, "serverDisconnected", function () {
            ht = !1, dt = !1, "disconnecting" != ct && "published" != ct && "readyToPublish" != ct && (Z.stopRecording(), O.showNothing(), Rt(CT_i18n[31]), setTimeout(function () {
              Z.loadInterface(P)
            }, 2e3))
          }, !0), CameraTag.observe(ot, "playbackFailed", function () {
            Rt(CT_i18n[32])
          }, !0), CameraTag.observe(ot, "serverError", function () {
            Rt(CT_i18n[33])
          }, !0), CameraTag.observe(ot, "waitingForCameraActivity", function () {}, !0), CameraTag.observe(ot, "countdownStarted", function () {
            Z.loadInterface(I)
          }, !0), CameraTag.observe(ot, "countdownFinished", function () {}, !0), CameraTag.observe(ot, "recordingStarted", function () {
            st = 0, i = setInterval(function () {
              At()
            }, 1e3), Z.loadInterface(B)
          }, !0), CameraTag.observe(ot, "recordingStopped", function () {
            clearInterval(i), x ? (O.showPlayer(), Z.loadInterface(z)) : Z.play()
          }, !0), CameraTag.observe(ot, "bufferingUp", function () {
            Mt(CT_i18n[36])
          }, !0), CameraTag.observe(ot, "bufferingDown", function () {
            Mt(CT_i18n[37])
          }, !0), CameraTag.observe(ot, "recordingTimeOut", function () {}, !0), CameraTag.observe(ot, "playbackStarted", function () {
            Z.loadInterface(L)
          }, !0), CameraTag.observe(ot, "playbackStopped", function () {
            Z.loadInterface(z)
          }, !0), CameraTag.observe(ot, "publishing", function () {
            ct = "publishing"
          }, !0), CameraTag.observe(ot, "uploadStarted", function () {
            ft = !0
          }, !0), CameraTag.observe(ot, "uploadAborted", function () {
            ft = !1
          }, !0), CameraTag.observe(ot, "readyToPublish", function () {
            gt = !0, ct = "readyToPublish"
          }, !0), CameraTag.observe(ot, "smsSent", function () {
            Pt()
          }, !0), CameraTag.observe(ot, "published", function () {}, !0), CameraTag.observe(ot, "publishFailed", function (t) {
            Rt(CT_i18n[34])
          }, !0), CameraTag.observe(ot, "processed", function () {
            ct = "processed", $(".cameratag_thumb_bg").css({
              backgroundImage: "url(//" + appServer + "/videos/" + it.uuid + "/" + rt.formats[0].name + "/thumb.png)"
            })
          }, !0)
        };
      _t()
    }, CameraTagPlayer = function (video_el) {
      var video_el = $(video_el),
        new_video_tag, jwplayerInjected = !1,
        uuids, self = this,
        dom_id = video_el.attr("id") || uuid,
        height, width, player_id, jw_player_instance, user_options = {},
        playlist, setup = function () {
          return jwplayerReady() ? ("" != video_el.attr("data-uuid") && "[" == video_el.attr("data-uuid")[0] ? uuids = eval(video_el.attr("data-uuid")) : "" != video_el.attr("data-uuid") ? uuids = [video_el.attr("data-uuid")] : alert("no video uuids found"), user_options = video_el.attr("data-options") ? JSON.parse(video_el.attr("data-options")) : {}, void build_playlist_array(uuids, user_options.image)) : void setTimeout(setup, 30)
        },
        build_playlist_array = function (t, e) {
          playlist = [], $(t).each(function (r, i) {
            $.ajax({
              url: "//" + appServer + "/api/v" + CameraTag.version + "/videos/" + i + ".json",
              type: "get",
              dataType: "jsonp",
              timeout: 5e3,
              data: {
                referer: window.location.toString()
              },
              success: function (r) {
                var i, n = find_format_by_name(r, video_el.attr("data-format")) || r.formats[0];
                if (n) {
                  if ("COMPLETED" == n.state) i = n.mp4_url;
                  else {
                    if (!n.flv_url) return;
                    i = n.flv_url
                  }
                  playlist.push({
                    image: e || n.thumbnail_url,
                    sources: [{
                      file: i
                    }],
                    height: n.height,
                    width: n.width,
                    uuid: r.uuid
                  }), playlist.length == t.length && init_jwplayer()
                } else playlist.push({
                  image: "https://cameratag.com/videos/v-4f03e790-f640-0131-cc78-12313914f10b/720p/thumb.png",
                  sources: [{
                    file: "https://cameratag.com/videos/v-4f03e790-f640-0131-cc78-12313914f10b/720p/mp4.mp4"
                  }],
                  uuid: r.uuid
                }), playlist.length == t.length && init_jwplayer()
              },
              error: function () {
                playlist.push({
                  image: "https://cameratag.com/videos/v-4f03e790-f640-0131-cc78-12313914f10b/720p/small_thumb.png",
                  sources: [{
                    file: "https://cameratag.com/videos/v-4f03e790-f640-0131-cc78-12313914f10b/720p/mp4.mp4"
                  }],
                  uuid: "v-4f03e790-f640-0131-cc78-12313914f10b"
                }), playlist.length == t.length && init_jwplayer()
              }
            })
          })
        },
        find_format_by_name = function (t, e) {
          var r = $.grep(t.formats, function (t) {
            return t.name == e
          });
          return r[0]
        },
        init_jwplayer = function () {
          player_id = video_el.attr("id"), jwplayer.key = "ziVL9s0pxpESKa4mUW9KADbRrkb59LC2qGEI9Q==";
          var t = {
            skin: "glow",
            abouttext: "powered by CameraTag",
            aboutlink: "http://www.cameratag.com",
            playlist: playlist,
            primary: "flash"
          };
          playlist.length > 1 && (t.listbar = {
            position: "right",
            size: 120
          }), combined_options = $.extend({}, t, user_options), jw_player_instance = jwplayer(player_id).setup(combined_options), CameraTag.players[player_id] = jw_player_instance, setup_player_events()
        },
        setup_player_events = function () {
          jw_player_instance.onReady(function () {
            CameraTag.fire(player_id, "ready", {})
          }), jw_player_instance.onSetupError(function (t, e) {
            CameraTag.fire(player_id, "setupError", {
              fallback: t,
              message: e
            })
          }), jw_player_instance.onPlaylist(function (t) {
            CameraTag.fire(player_id, "playlist", {
              playlist: t
            })
          }), jw_player_instance.onPlaylistItem(function (t, e) {
            CameraTag.fire(player_id, "playlistItem", {
              index: t,
              playlist: e
            })
          }), jw_player_instance.onPlaylistComplete(function () {
            CameraTag.fire(player_id, "playlistComplete", {})
          }), jw_player_instance.onBufferChange(function (t) {
            CameraTag.fire(player_id, "bufferChange", {
              buffer: t
            })
          }), jw_player_instance.onPlay(function () {
            CameraTag.fire(player_id, "play", {}), allow_play_count && ($.ajax({
              url: "//" + appServer + "/api/v" + CameraTag.version + "/cameras/" + camera.uuid + "/videos/" + jw_player_instance.getPlaylistItem().uuid + "/play_count",
              type: "get",
              dataType: "jsonp",
              timeout: 5e3,
              success: function () {}
            }), allow_play_count = !1, setTimeout(function () {
              allow_play_count = !0
            }, 3e3))
          }), jw_player_instance.onPause(function (t) {
            CameraTag.fire(player_id, "pause", {
              oldstate: t
            })
          }), jw_player_instance.onBuffer(function () {
            CameraTag.fire(player_id, "buffer", {})
          }), jw_player_instance.onIdle(function () {
            CameraTag.fire(player_id, "idle", {})
          }), jw_player_instance.onComplete(function () {
            CameraTag.fire(player_id, "complete", {})
          }), jw_player_instance.onError(function (t) {
            CameraTag.fire(player_id, "error", {
              message: t
            })
          }), jw_player_instance.onSeek(function (t, e) {
            CameraTag.fire(player_id, "seek", {
              position: t,
              offset: e
            })
          }), jw_player_instance.onTime(function (t, e) {
            CameraTag.fire(player_id, "time", {
              duration: t,
              position: e
            })
          }), jw_player_instance.onMute(function (t) {
            CameraTag.fire(player_id, "mute", {
              muted: t
            })
          }), jw_player_instance.onVolume(function (t) {
            CameraTag.fire(player_id, "volume", {
              volume: t
            })
          }), jw_player_instance.onFullscreen(function (t) {
            CameraTag.fire(player_id, "fullscreen", {
              fullscreen: t
            })
          }), jw_player_instance.onResize(function (t, e) {
            CameraTag.fire(player_id, "resize", {
              width: t,
              height: e
            })
          }), jw_player_instance.onQualityLevels(function (t) {
            CameraTag.fire(player_id, "levels", {
              levels: t
            })
          }), jw_player_instance.onQualityChange(function (t) {
            CameraTag.fire(player_id, "qualityChange", {
              currentQuality: t
            })
          }), jw_player_instance.onCaptionsList(function (t) {
            CameraTag.fire(player_id, "captionsList", {
              tracks: t
            })
          }), jw_player_instance.onCaptionsChange(function (t) {
            CameraTag.fire(player_id, "captionsChange", {
              track: t
            })
          }), jw_player_instance.onControls(function (t) {
            CameraTag.fire(player_id, "controls", {
              controls: t
            })
          }), jw_player_instance.onDisplayClick(function () {
            CameraTag.fire(player_id, "displayClick", {})
          }), jw_player_instance.onAdClick(function (t) {
            CameraTag.fire(player_id, "adClick", {
              tag: t
            })
          }), jw_player_instance.onAdCompanions(function (t, e) {
            CameraTag.fire(player_id, "adCompanions", {
              tag: t,
              companions: e
            })
          }), jw_player_instance.onAdComplete(function (t) {
            CameraTag.fire(player_id, "adComplete", {
              tag: t
            })
          }), jw_player_instance.onAdSkipped(function (t) {
            CameraTag.fire(player_id, "adSkipped", {
              tag: t
            })
          }), jw_player_instance.onAdError(function (t, e) {
            CameraTag.fire(player_id, "adError", {
              tag: t,
              message: e
            })
          }), jw_player_instance.onAdImpression(function (t) {
            CameraTag.fire(player_id, "adImpression", {
              tag: t
            })
          }), jw_player_instance.onAdTime(function (t, e, r) {
            CameraTag.fire(player_id, "adTime", {
              tag: t,
              position: e,
              duration: r
            })
          }), jw_player_instance.onBeforePlay(function () {
            CameraTag.fire(player_id, "beforePlay", {})
          }), jw_player_instance.onBeforeComplete(function () {
            CameraTag.fire(player_id, "beforeComplete", {})
          }), jw_player_instance.onMeta(function (t) {
            CameraTag.fire(player_id, "metadata", {
              metadata: t
            })
          })
        };
      setup()
    }
  }, Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
    var e = this.length >>> 0,
      r = Number(arguments[1]) || 0;
    for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += e); e > r; r++)
      if (r in this && this[r] === t) return r;
    return -1
  })), Date.now || (Date.now = function () {
    return (new Date).getTime()
  }),
  function () {
    var t, e, r, i, n, o, s, a, l = [].slice,
      u = {}.hasOwnProperty,
      c = function (t, e) {
        function r() {
          this.constructor = t
        }
        for (var i in e) u.call(e, i) && (t[i] = e[i]);
        return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
      };
    s = function () {}, e = function () {
      function t() {}
      return t.prototype.addEventListener = t.prototype.on, t.prototype.on = function (t, e) {
        return this._callbacks = this._callbacks || {}, this._callbacks[t] || (this._callbacks[t] = []), this._callbacks[t].push(e), this
      }, t.prototype.emit = function () {
        var t, e, r, i, n, o;
        if (i = arguments[0], t = 2 <= arguments.length ? l.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, r = this._callbacks[i])
          for (n = 0, o = r.length; o > n; n++) e = r[n], e.apply(this, t);
        return this
      }, t.prototype.removeListener = t.prototype.off, t.prototype.removeAllListeners = t.prototype.off, t.prototype.removeEventListener = t.prototype.off, t.prototype.off = function (t, e) {
        var r, i, n, o, s;
        if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
        if (i = this._callbacks[t], !i) return this;
        if (1 === arguments.length) return delete this._callbacks[t], this;
        for (n = o = 0, s = i.length; s > o; n = ++o)
          if (r = i[n], r === e) {
            i.splice(n, 1);
            break
          }
        return this
      }, t
    }(), t = function (t) {
      function r(t, e) {
        var n, o, s;
        if (this.element = t, this.version = r.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        if (r.instances.push(this), this.element.dropzone = this, n = null != (s = r.optionsForElement(this.element)) ? s : {}, this.options = i({}, this.defaultOptions, n, null != e ? e : {}), this.options.forceFallback || !r.isBrowserSupported()) return this.options.fallback.call(this);
        if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (o = this.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = r.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = r.getElements(this.options.clickable, "clickable")), this.init()
      }
      var i, n;
      return c(r, t), r.prototype.Emitter = e, r.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], r.prototype.defaultOptions = {
        url: null,
        method: "post",
        withCredentials: !1,
        parallelUploads: 2,
        uploadMultiple: !1,
        maxFilesize: 256,
        paramName: "file",
        createImageThumbnails: !0,
        maxThumbnailFilesize: 10,
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        filesizeBase: 1e3,
        maxFiles: null,
        filesizeBase: 1e3,
        params: {},
        clickable: !0,
        ignoreHiddenFiles: !0,
        acceptedFiles: null,
        acceptedMimeTypes: null,
        autoProcessQueue: !0,
        autoQueue: !0,
        addRemoveLinks: !1,
        previewsContainer: null,
        capture: null,
        dictDefaultMessage: "Drop files here to upload",
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
        dictInvalidFileType: "You can't upload files of this type.",
        dictResponseError: "Server responded with {{statusCode}} code.",
        dictCancelUpload: "Cancel upload",
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
        dictRemoveFile: "Remove file",
        dictRemoveFileConfirmation: null,
        dictMaxFilesExceeded: "You can not upload any more files.",
        accept: function (t, e) {
          return e()
        },
        init: function () {
          return s
        },
        forceFallback: !1,
        fallback: function () {
          var t, e, i, n, o, s;
          for (this.element.className = "" + this.element.className + " dz-browser-not-supported", s = this.element.getElementsByTagName("div"), n = 0, o = s.length; o > n; n++) t = s[n], /(^| )dz-message($| )/.test(t.className) && (e = t, t.className = "dz-message");
          return e || (e = r.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e)), i = e.getElementsByTagName("span")[0], i && (i.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
        },
        resize: function (t) {
          var e, r, i;
          return e = {
            srcX: 0,
            srcY: 0,
            srcWidth: t.width,
            srcHeight: t.height
          }, r = t.width / t.height, e.optWidth = this.options.thumbnailWidth, e.optHeight = this.options.thumbnailHeight, null == e.optWidth && null == e.optHeight ? (e.optWidth = e.srcWidth, e.optHeight = e.srcHeight) : null == e.optWidth ? e.optWidth = r * e.optHeight : null == e.optHeight && (e.optHeight = 1 / r * e.optWidth), i = e.optWidth / e.optHeight, t.height < e.optHeight || t.width < e.optWidth ? (e.trgHeight = e.srcHeight, e.trgWidth = e.srcWidth) : r > i ? (e.srcHeight = t.height, e.srcWidth = e.srcHeight * i) : (e.srcWidth = t.width, e.srcHeight = e.srcWidth / i), e.srcX = (t.width - e.srcWidth) / 2, e.srcY = (t.height - e.srcHeight) / 2, e
        },
        drop: function (t) {
          return this.element.classList.remove("dz-drag-hover")
        },
        dragstart: s,
        dragend: function (t) {
          return this.element.classList.remove("dz-drag-hover")
        },
        dragenter: function (t) {
          return this.element.classList.add("dz-drag-hover")
        },
        dragover: function (t) {
          return this.element.classList.add("dz-drag-hover")
        },
        dragleave: function (t) {
          return this.element.classList.remove("dz-drag-hover")
        },
        paste: s,
        reset: function () {
          return this.element.classList.remove("dz-started")
        },
        addedfile: function (t) {
          var e, i, n, o, s, a, l, u, c, h, d, p, f;
          if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
            for (t.previewElement = r.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement), h = t.previewElement.querySelectorAll("[data-dz-name]"), o = 0, l = h.length; l > o; o++) e = h[o], e.textContent = t.name;
            for (d = t.previewElement.querySelectorAll("[data-dz-size]"), s = 0, u = d.length; u > s; s++) e = d[s], e.innerHTML = this.filesize(t.size);
            for (this.options.addRemoveLinks && (t._removeLink = r.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), t.previewElement.appendChild(t._removeLink)), i = function (e) {
                return function (i) {
                  return i.preventDefault(), i.stopPropagation(), t.status === r.UPLOADING ? r.confirm(e.options.dictCancelUploadConfirmation, function () {
                    return e.removeFile(t)
                  }) : e.options.dictRemoveFileConfirmation ? r.confirm(e.options.dictRemoveFileConfirmation, function () {
                    return e.removeFile(t)
                  }) : e.removeFile(t)
                }
              }(this), p = t.previewElement.querySelectorAll("[data-dz-remove]"), f = [], a = 0, c = p.length; c > a; a++) n = p[a], f.push(n.addEventListener("click", i));
            return f
          }
        },
        removedfile: function (t) {
          var e;
          return t.previewElement && null != (e = t.previewElement) && e.parentNode.removeChild(t.previewElement), this._updateMaxFilesReachedClass()
        },
        thumbnail: function (t, e) {
          var r, i, n, o;
          if (t.previewElement) {
            for (t.previewElement.classList.remove("dz-file-preview"), o = t.previewElement.querySelectorAll("[data-dz-thumbnail]"), i = 0, n = o.length; n > i; i++) r = o[i], r.alt = t.name, r.src = e;
            return setTimeout(function (e) {
              return function () {
                return t.previewElement.classList.add("dz-image-preview")
              }
            }(this), 1)
          }
        },
        error: function (t, e) {
          var r, i, n, o, s;
          if (t.previewElement) {
            for (t.previewElement.classList.add("dz-error"), "String" != typeof e && e.error && (e = e.error), o = t.previewElement.querySelectorAll("[data-dz-errormessage]"), s = [], i = 0, n = o.length; n > i; i++) r = o[i], s.push(r.textContent = e);
            return s
          }
        },
        errormultiple: s,
        processing: function (t) {
          return t.previewElement && (t.previewElement.classList.add("dz-processing"), t._removeLink) ? t._removeLink.textContent = this.options.dictCancelUpload : void 0
        },
        processingmultiple: s,
        uploadprogress: function (t, e, r) {
          var i, n, o, s, a;
          if (t.previewElement) {
            for (s = t.previewElement.querySelectorAll("[data-dz-uploadprogress]"), a = [], n = 0, o = s.length; o > n; n++) i = s[n], "PROGRESS" === i.nodeName ? a.push(i.value = e) : a.push(i.style.width = "" + e + "%");
            return a
          }
        },
        totaluploadprogress: s,
        sending: s,
        sendingmultiple: s,
        success: function (t) {
          return t.previewElement ? t.previewElement.classList.add("dz-success") : void 0
        },
        successmultiple: s,
        canceled: function (t) {
          return this.emit("error", t, "Upload canceled.")
        },
        canceledmultiple: s,
        complete: function (t) {
          return t._removeLink && (t._removeLink.textContent = this.options.dictRemoveFile), t.previewElement ? t.previewElement.classList.add("dz-complete") : void 0
        },
        completemultiple: s,
        maxfilesexceeded: s,
        maxfilesreached: s,
        queuecomplete: s,
        previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
      }, i = function () {
        var t, e, r, i, n, o, s;
        for (i = arguments[0], r = 2 <= arguments.length ? l.call(arguments, 1) : [], o = 0, s = r.length; s > o; o++) {
          e = r[o];
          for (t in e) n = e[t], i[t] = n
        }
        return i
      }, r.prototype.getAcceptedFiles = function () {
        var t, e, r, i, n;
        for (i = this.files, n = [], e = 0, r = i.length; r > e; e++) t = i[e], t.accepted && n.push(t);
        return n
      }, r.prototype.getRejectedFiles = function () {
        var t, e, r, i, n;
        for (i = this.files, n = [], e = 0, r = i.length; r > e; e++) t = i[e], t.accepted || n.push(t);
        return n
      }, r.prototype.getFilesWithStatus = function (t) {
        var e, r, i, n, o;
        for (n = this.files, o = [], r = 0, i = n.length; i > r; r++) e = n[r], e.status === t && o.push(e);
        return o
      }, r.prototype.getQueuedFiles = function () {
        return this.getFilesWithStatus(r.QUEUED)
      }, r.prototype.getUploadingFiles = function () {
        return this.getFilesWithStatus(r.UPLOADING)
      }, r.prototype.getActiveFiles = function () {
        var t, e, i, n, o;
        for (n = this.files, o = [], e = 0, i = n.length; i > e; e++) t = n[e], (t.status === r.UPLOADING || t.status === r.QUEUED) && o.push(t);
        return o
      }, r.prototype.init = function () {
        var t, e, i, n, o, s, a;
        for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(r.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (i = function (t) {
            return function () {
              return t.hiddenFileInput && document.body.removeChild(t.hiddenFileInput), t.hiddenFileInput = document.createElement("input"), t.hiddenFileInput.setAttribute("type", "file"), (null == t.options.maxFiles || t.options.maxFiles > 1) && t.hiddenFileInput.setAttribute("multiple", "multiple"), t.hiddenFileInput.className = "dz-hidden-input", null != t.options.acceptedFiles && t.hiddenFileInput.setAttribute("accept", t.options.acceptedFiles), null != t.options.capture && t.hiddenFileInput.setAttribute("capture", t.options.capture), t.hiddenFileInput.style.visibility = "hidden", t.hiddenFileInput.style.position = "absolute", t.hiddenFileInput.style.top = "0", t.hiddenFileInput.style.left = "0", t.hiddenFileInput.style.height = "0", t.hiddenFileInput.style.width = "0", document.body.appendChild(t.hiddenFileInput), t.hiddenFileInput.addEventListener("change", function () {
                var e, r, n, o;
                if (r = t.hiddenFileInput.files, r.length)
                  for (n = 0, o = r.length; o > n; n++) e = r[n], t.addFile(e);
                return i()
              })
            }
          }(this))(), this.URL = null != (s = window.URL) ? s : window.webkitURL, a = this.events, n = 0, o = a.length; o > n; n++) t = a[n], this.on(t, this.options[t]);
        return this.on("uploadprogress", function (t) {
          return function () {
            return t.updateTotalUploadProgress()
          }
        }(this)), this.on("removedfile", function (t) {
          return function () {
            return t.updateTotalUploadProgress()
          }
        }(this)), this.on("canceled", function (t) {
          return function (e) {
            return t.emit("complete", e)
          }
        }(this)), this.on("complete", function (t) {
          return function (e) {
            return 0 === t.getUploadingFiles().length && 0 === t.getQueuedFiles().length ? setTimeout(function () {
              return t.emit("queuecomplete")
            }, 0) : void 0
          }
        }(this)), e = function (t) {
          return t.stopPropagation(), t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }, this.listeners = [{
          element: this.element,
          events: {
            dragstart: function (t) {
              return function (e) {
                return t.emit("dragstart", e)
              }
            }(this),
            dragenter: function (t) {
              return function (r) {
                return e(r), t.emit("dragenter", r)
              }
            }(this),
            dragover: function (t) {
              return function (r) {
                var i;
                try {
                  i = r.dataTransfer.effectAllowed
                } catch (n) {}
                return r.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", e(r), t.emit("dragover", r)
              }
            }(this),
            dragleave: function (t) {
              return function (e) {
                return t.emit("dragleave", e)
              }
            }(this),
            drop: function (t) {
              return function (r) {
                return e(r), t.drop(r)
              }
            }(this),
            dragend: function (t) {
              return function (e) {
                return t.emit("dragend", e)
              }
            }(this)
          }
        }], this.clickableElements.forEach(function (t) {
          return function (e) {
            return t.listeners.push({
              element: e,
              events: {
                click: function (i) {
                  return e !== t.element || i.target === t.element || r.elementInside(i.target, t.element.querySelector(".dz-message")) ? t.hiddenFileInput.click() : void 0
                }
              }
            })
          }
        }(this)), this.enable(), this.options.init.call(this)
      }, r.prototype.destroy = function () {
        var t;
        return this.disable(), this.removeAllFiles(!0), (null != (t = this.hiddenFileInput) ? t.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, r.instances.splice(r.instances.indexOf(this), 1)
      }, r.prototype.updateTotalUploadProgress = function () {
        var t, e, r, i, n, o, s, a;
        if (i = 0, r = 0, t = this.getActiveFiles(), t.length) {
          for (a = this.getActiveFiles(), o = 0, s = a.length; s > o; o++) e = a[o], i += e.upload.bytesSent, r += e.upload.total;
          n = 100 * i / r
        } else n = 100;
        return this.emit("totaluploadprogress", n, r, i)
      }, r.prototype._getParamName = function (t) {
        return "function" == typeof this.options.paramName ? this.options.paramName(t) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + t + "]" : "")
      }, r.prototype.getFallbackForm = function () {
        var t, e, i, n;
        return (t = this.getExistingFallback()) ? t : (i = '<div class="dz-fallback">', this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"), i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', e = r.createElement(i), "FORM" !== this.element.tagName ? (n = r.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), n.appendChild(e)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != n ? n : e)
      }, r.prototype.getExistingFallback = function () {
        var t, e, r, i, n, o;
        for (e = function (t) {
            var e, r, i;
            for (r = 0, i = t.length; i > r; r++)
              if (e = t[r], /(^| )fallback($| )/.test(e.className)) return e
          }, o = ["div", "form"], i = 0, n = o.length; n > i; i++)
          if (r = o[i], t = e(this.element.getElementsByTagName(r))) return t
      }, r.prototype.setupEventListeners = function () {
        var t, e, r, i, n, o, s;
        for (o = this.listeners, s = [], i = 0, n = o.length; n > i; i++) t = o[i], s.push(function () {
          var i, n;
          i = t.events, n = [];
          for (e in i) r = i[e], n.push(t.element.addEventListener(e, r, !1));
          return n
        }());
        return s
      }, r.prototype.removeEventListeners = function () {
        var t, e, r, i, n, o, s;
        for (o = this.listeners, s = [], i = 0, n = o.length; n > i; i++) t = o[i], s.push(function () {
          var i, n;
          i = t.events, n = [];
          for (e in i) r = i[e], n.push(t.element.removeEventListener(e, r, !1));
          return n
        }());
        return s
      }, r.prototype.disable = function () {
        var t, e, r, i, n;
        for (this.clickableElements.forEach(function (t) {
            return t.classList.remove("dz-clickable")
          }), this.removeEventListeners(), i = this.files, n = [], e = 0, r = i.length; r > e; e++) t = i[e], n.push(this.cancelUpload(t));
        return n
      }, r.prototype.enable = function () {
        return this.clickableElements.forEach(function (t) {
          return t.classList.add("dz-clickable")
        }), this.setupEventListeners()
      }, r.prototype.filesize = function (t) {
        var e, r, i, n, o, s, a, l;
        for (s = ["TB", "GB", "MB", "KB", "b"], i = n = null, r = a = 0, l = s.length; l > a; r = ++a)
          if (o = s[r], e = Math.pow(this.options.filesizeBase, 4 - r) / 10, t >= e) {
            i = t / Math.pow(this.options.filesizeBase, 4 - r), n = o;
            break
          }
        return i = Math.round(10 * i) / 10, "<strong>" + i + "</strong> " + n
      }, r.prototype._updateMaxFilesReachedClass = function () {
        return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
      }, r.prototype.drop = function (t) {
        var e, r;
        t.dataTransfer && (this.emit("drop", t), e = t.dataTransfer.files, e.length && (r = t.dataTransfer.items, r && r.length && null != r[0].webkitGetAsEntry ? this._addFilesFromItems(r) : this.handleFiles(e)))
      }, r.prototype.paste = function (t) {
        var e, r;
        if (null != (null != t && null != (r = t.clipboardData) ? r.items : void 0)) return this.emit("paste", t), e = t.clipboardData.items, e.length ? this._addFilesFromItems(e) : void 0
      }, r.prototype.handleFiles = function (t) {
        var e, r, i, n;
        for (n = [], r = 0, i = t.length; i > r; r++) e = t[r], n.push(this.addFile(e));
        return n
      }, r.prototype._addFilesFromItems = function (t) {
        var e, r, i, n, o;
        for (o = [], i = 0, n = t.length; n > i; i++) r = t[i], null != r.webkitGetAsEntry && (e = r.webkitGetAsEntry()) ? e.isFile ? o.push(this.addFile(r.getAsFile())) : e.isDirectory ? o.push(this._addFilesFromDirectory(e, e.name)) : o.push(void 0) : null != r.getAsFile && (null == r.kind || "file" === r.kind) ? o.push(this.addFile(r.getAsFile())) : o.push(void 0);
        return o
      }, r.prototype._addFilesFromDirectory = function (t, e) {
        var r, i;
        return r = t.createReader(), i = function (t) {
          return function (r) {
            var i, n, o;
            for (n = 0, o = r.length; o > n; n++) i = r[n], i.isFile ? i.file(function (r) {
              return t.options.ignoreHiddenFiles && "." === r.name.substring(0, 1) ? void 0 : (r.fullPath = "" + e + "/" + r.name, t.addFile(r))
            }) : i.isDirectory && t._addFilesFromDirectory(i, "" + e + "/" + i.name)
          }
        }(this), r.readEntries(i, function (t) {
          return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(t) : void 0
        })
      }, r.prototype.accept = function (t, e) {
        return t.size > 1024 * this.options.maxFilesize * 1024 ? e(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(t.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : r.isValidFile(t, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (e(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", t)) : this.options.accept.call(this, t, e) : e(this.options.dictInvalidFileType)
      }, r.prototype.addFile = function (t) {
        return t.upload = {
          progress: 0,
          total: t.size,
          bytesSent: 0
        }, this.files.push(t), t.status = r.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, function (e) {
          return function (r) {
            return r ? (t.accepted = !1, e._errorProcessing([t], r)) : (t.accepted = !0, e.options.autoQueue && e.enqueueFile(t)), e._updateMaxFilesReachedClass()
          }
        }(this))
      }, r.prototype.enqueueFiles = function (t) {
        var e, r, i;
        for (r = 0, i = t.length; i > r; r++) e = t[r], this.enqueueFile(e);
        return null
      }, r.prototype.enqueueFile = function (t) {
        if (t.status !== r.ADDED || t.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
        return t.status = r.QUEUED, this.options.autoProcessQueue ? setTimeout(function (t) {
          return function () {
            return t.processQueue()
          }
        }(this), 0) : void 0
      }, r.prototype._thumbnailQueue = [], r.prototype._processingThumbnail = !1, r.prototype._enqueueThumbnail = function (t) {
        return this.options.createImageThumbnails && t.type.match(/image.*/) && t.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(t), setTimeout(function (t) {
          return function () {
            return t._processThumbnailQueue()
          }
        }(this), 0)) : void 0
      }, r.prototype._processThumbnailQueue = function () {
        return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (t) {
          return function () {
            return t._processingThumbnail = !1, t._processThumbnailQueue()
          }
        }(this)))
      }, r.prototype.removeFile = function (t) {
        return t.status === r.UPLOADING && this.cancelUpload(t), this.files = a(this.files, t), this.emit("removedfile", t), 0 === this.files.length ? this.emit("reset") : void 0
      }, r.prototype.removeAllFiles = function (t) {
        var e, i, n, o;
        for (null == t && (t = !1), o = this.files.slice(), i = 0, n = o.length; n > i; i++) e = o[i], (e.status !== r.UPLOADING || t) && this.removeFile(e);
        return null
      }, r.prototype.createThumbnail = function (t, e) {
        var r;
        return r = new FileReader, r.onload = function (i) {
          return function () {
            return "image/svg+xml" === t.type ? (i.emit("thumbnail", t, r.result), void(null != e && e())) : i.createThumbnailFromUrl(t, r.result, e)
          }
        }(this), r.readAsDataURL(t)
      }, r.prototype.createThumbnailFromUrl = function (t, e, r) {
        var i;
        return i = document.createElement("img"), i.onload = function (e) {
          return function () {
            var n, s, a, l, u, c, h, d;
            return t.width = i.width, t.height = i.height, a = e.options.resize.call(e, t), null == a.trgWidth && (a.trgWidth = a.optWidth), null == a.trgHeight && (a.trgHeight = a.optHeight), n = document.createElement("canvas"), s = n.getContext("2d"), n.width = a.trgWidth, n.height = a.trgHeight, o(s, i, null != (u = a.srcX) ? u : 0, null != (c = a.srcY) ? c : 0, a.srcWidth, a.srcHeight, null != (h = a.trgX) ? h : 0, null != (d = a.trgY) ? d : 0, a.trgWidth, a.trgHeight), l = n.toDataURL("image/png"), e.emit("thumbnail", t, l), null != r ? r() : void 0
          }
        }(this), null != r && (i.onerror = r), i.src = e
      }, r.prototype.processQueue = function () {
        var t, e, r, i;
        if (e = this.options.parallelUploads, r = this.getUploadingFiles().length, t = r, !(r >= e) && (i = this.getQueuedFiles(), i.length > 0)) {
          if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - r));
          for (; e > t;) {
            if (!i.length) return;
            this.processFile(i.shift()), t++
          }
        }
      }, r.prototype.processFile = function (t) {
        return this.processFiles([t])
      }, r.prototype.processFiles = function (t) {
        var e, i, n;
        for (i = 0, n = t.length; n > i; i++) e = t[i], e.processing = !0, e.status = r.UPLOADING, this.emit("processing", e);
        return this.options.uploadMultiple && this.emit("processingmultiple", t), this.uploadFiles(t)
      }, r.prototype._getFilesWithXhr = function (t) {
        var e, r;
        return r = function () {
          var r, i, n, o;
          for (n = this.files, o = [], r = 0, i = n.length; i > r; r++) e = n[r], e.xhr === t && o.push(e);
          return o
        }.call(this)
      }, r.prototype.cancelUpload = function (t) {
        var e, i, n, o, s, a, l;
        if (t.status === r.UPLOADING) {
          for (i = this._getFilesWithXhr(t.xhr), n = 0, s = i.length; s > n; n++) e = i[n], e.status = r.CANCELED;
          for (t.xhr.abort(), o = 0, a = i.length; a > o; o++) e = i[o], this.emit("canceled", e);
          this.options.uploadMultiple && this.emit("canceledmultiple", i)
        } else((l = t.status) === r.ADDED || l === r.QUEUED) && (t.status = r.CANCELED, this.emit("canceled", t), this.options.uploadMultiple && this.emit("canceledmultiple", [t]));
        return this.options.autoProcessQueue ? this.processQueue() : void 0
      }, n = function () {
        var t, e;
        return e = arguments[0], t = 2 <= arguments.length ? l.call(arguments, 1) : [], "function" == typeof e ? e.apply(this, t) : e
      }, r.prototype.uploadFile = function (t) {
        return this.uploadFiles([t])
      }, r.prototype.uploadFiles = function (t) {
        var e, o, s, a, l, u, c, h, d, p, f, m, g, v, y, _, x, b, T, E, w, C, S, A, R, M, F, D, O, P, L, B, k, I;
        for (T = new XMLHttpRequest, E = 0, A = t.length; A > E; E++) e = t[E], e.xhr = T;
        m = n(this.options.method, t), x = n(this.options.url, t), T.open(m, x, !0), T.withCredentials = !!this.options.withCredentials, y = null, s = function (r) {
          return function () {
            var i, n, o;
            for (o = [], i = 0, n = t.length; n > i; i++) e = t[i], o.push(r._errorProcessing(t, y || r.options.dictResponseError.replace("{{statusCode}}", T.status), T));
            return o
          }
        }(this), _ = function (r) {
          return function (i) {
            var n, o, s, a, l, u, c, h, d;
            if (null != i)
              for (o = 100 * i.loaded / i.total, s = 0, u = t.length; u > s; s++) e = t[s], e.upload = {
                progress: o,
                total: i.total,
                bytesSent: i.loaded
              };
            else {
              for (n = !0, o = 100, a = 0, c = t.length; c > a; a++) e = t[a], (100 !== e.upload.progress || e.upload.bytesSent !== e.upload.total) && (n = !1), e.upload.progress = o, e.upload.bytesSent = e.upload.total;
              if (n) return
            }
            for (d = [], l = 0, h = t.length; h > l; l++) e = t[l], d.push(r.emit("uploadprogress", e, o, e.upload.bytesSent));
            return d
          }
        }(this), T.onload = function (e) {
          return function (i) {
            var n;
            if (t[0].status !== r.CANCELED && 4 === T.readyState) {
              if (y = T.responseText, T.getResponseHeader("content-type") && ~T.getResponseHeader("content-type").indexOf("application/json")) try {
                y = JSON.parse(y)
              } catch (o) {
                i = o, y = "Invalid JSON response from server."
              }
              return _(), 200 <= (n = T.status) && 300 > n ? e._finished(t, y, i) : s()
            }
          }
        }(this), T.onerror = function (e) {
          return function () {
            return t[0].status !== r.CANCELED ? s() : void 0
          }
        }(this), v = null != (O = T.upload) ? O : T, v.onprogress = _, u = {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          "X-Requested-With": "XMLHttpRequest"
        }, this.options.headers && i(u, this.options.headers);
        for (a in u) l = u[a], T.setRequestHeader(a, l);
        if (o = new FormData, this.options.params) {
          P = this.options.params;
          for (f in P) b = P[f], o.append(f, b)
        }
        for (w = 0, R = t.length; R > w; w++) e = t[w], this.emit("sending", e, T, o);
        if (this.options.uploadMultiple && this.emit("sendingmultiple", t, T, o), "FORM" === this.element.tagName)
          for (L = this.element.querySelectorAll("input, textarea, select, button"), C = 0, M = L.length; M > C; C++)
            if (h = L[C], d = h.getAttribute("name"), p = h.getAttribute("type"), "SELECT" === h.tagName && h.hasAttribute("multiple"))
              for (B = h.options, S = 0, F = B.length; F > S; S++) g = B[S], g.selected && o.append(d, g.value);
            else(!p || "checkbox" !== (k = p.toLowerCase()) && "radio" !== k || h.checked) && o.append(d, h.value);
        for (c = D = 0, I = t.length - 1; I >= 0 ? I >= D : D >= I; c = I >= 0 ? ++D : --D) o.append(this._getParamName(c), t[c], t[c].name);
        return T.send(o)
      }, r.prototype._finished = function (t, e, i) {
        var n, o, s;
        for (o = 0, s = t.length; s > o; o++) n = t[o], n.status = r.SUCCESS, this.emit("success", n, e, i), this.emit("complete", n);
        return this.options.uploadMultiple && (this.emit("successmultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
      }, r.prototype._errorProcessing = function (t, e, i) {
        var n, o, s;
        for (o = 0, s = t.length; s > o; o++) n = t[o], n.status = r.ERROR, this.emit("error", n, e, i), this.emit("complete", n);
        return this.options.uploadMultiple && (this.emit("errormultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
      }, r
    }(e), t.version = "4.0.1", t.options = {}, t.optionsForElement = function (e) {
      return e.getAttribute("id") ? t.options[r(e.getAttribute("id"))] : void 0
    }, t.instances = [], t.forElement = function (t) {
      if ("string" == typeof t && (t = document.querySelector(t)), null == (null != t ? t.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
      return t.dropzone
    }, t.autoDiscover = !0, t.discover = function () {
      var e, r, i, n, o, s;
      for (document.querySelectorAll ? i = document.querySelectorAll(".dropzone") : (i = [], e = function (t) {
          var e, r, n, o;
          for (o = [], r = 0, n = t.length; n > r; r++) e = t[r], /(^| )dropzone($| )/.test(e.className) ? o.push(i.push(e)) : o.push(void 0);
          return o
        }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), s = [], n = 0, o = i.length; o > n; n++) r = i[n], t.optionsForElement(r) !== !1 ? s.push(new t(r)) : s.push(void 0);
      return s
    }, t.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], t.isBrowserSupported = function () {
      var e, r, i, n, o;
      if (e = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if ("classList" in document.createElement("a"))
          for (o = t.blacklistedBrowsers, i = 0, n = o.length; n > i; i++) r = o[i], r.test(navigator.userAgent) && (e = !1);
        else e = !1;
      else e = !1;
      return e
    }, a = function (t, e) {
      var r, i, n, o;
      for (o = [], i = 0, n = t.length; n > i; i++) r = t[i], r !== e && o.push(r);
      return o
    }, r = function (t) {
      return t.replace(/[\-_](\w)/g, function (t) {
        return t.charAt(1).toUpperCase()
      })
    }, t.createElement = function (t) {
      var e;
      return e = document.createElement("div"), e.innerHTML = t, e.childNodes[0]
    }, t.elementInside = function (t, e) {
      if (t === e) return !0;
      for (; t = t.parentNode;)
        if (t === e) return !0;
      return !1
    }, t.getElement = function (t, e) {
      var r;
      if ("string" == typeof t ? r = document.querySelector(t) : null != t.nodeType && (r = t), null == r) throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector or a plain HTML element.");
      return r
    }, t.getElements = function (t, e) {
      var r, i, n, o, s, a, l, u;
      if (t instanceof Array) {
        n = [];
        try {
          for (o = 0, a = t.length; a > o; o++) i = t[o], n.push(this.getElement(i, e))
        } catch (c) {
          r = c, n = null
        }
      } else if ("string" == typeof t)
        for (n = [], u = document.querySelectorAll(t), s = 0, l = u.length; l > s; s++) i = u[s], n.push(i);
      else null != t.nodeType && (n = [t]);
      if (null == n || !n.length) throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
      return n
    }, t.confirm = function (t, e, r) {
      return window.confirm(t) ? e() : null != r ? r() : void 0
    }, t.isValidFile = function (t, e) {
      var r, i, n, o, s;
      if (!e) return !0;
      for (e = e.split(","), i = t.type, r = i.replace(/\/.*$/, ""), o = 0, s = e.length; s > o; o++)
        if (n = e[o], n = n.trim(), "." === n.charAt(0)) {
          if (-1 !== t.name.toLowerCase().indexOf(n.toLowerCase(), t.name.length - n.length)) return !0
        } else if (/\/\*$/.test(n)) {
        if (r === n.replace(/\/.*$/, "")) return !0
      } else if (i === n) return !0;
      return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
      return this.each(function () {
        return new t(this, e)
      })
    }), "undefined" != typeof module && null !== module ? module.exports = t : window.Dropzone = t, t.ADDED = "added", t.QUEUED = "queued", t.ACCEPTED = t.QUEUED, t.UPLOADING = "uploading", t.PROCESSING = t.UPLOADING, t.CANCELED = "canceled", t.ERROR = "error", t.SUCCESS = "success", n = function (t) {
      var e, r, i, n, o, s, a, l, u, c;
      for (a = t.naturalWidth, s = t.naturalHeight, r = document.createElement("canvas"), r.width = 1, r.height = s, i = r.getContext("2d"), i.drawImage(t, 0, 0), n = i.getImageData(0, 0, 1, s).data, c = 0, o = s, l = s; l > c;) e = n[4 * (l - 1) + 3], 0 === e ? o = l : c = l, l = o + c >> 1;
      return u = l / s, 0 === u ? 1 : u
    }, o = function (t, e, r, i, o, s, a, l, u, c) {
      var h;
      return h = n(e), t.drawImage(e, r, i, o, s, a, l, u, c / h)
    }, i = function (t, e) {
      var r, i, n, o, s, a, l, u, c;
      if (n = !1, c = !0, i = t.document, u = i.documentElement, r = i.addEventListener ? "addEventListener" : "attachEvent", l = i.addEventListener ? "removeEventListener" : "detachEvent", a = i.addEventListener ? "" : "on", o = function (r) {
          return "readystatechange" !== r.type || "complete" === i.readyState ? (("load" === r.type ? t : i)[l](a + r.type, o, !1), !n && (n = !0) ? e.call(t, r.type || r) : void 0) : void 0
        }, s = function () {
          var t;
          try {
            u.doScroll("left")
          } catch (e) {
            return t = e, void setTimeout(s, 50)
          }
          return o("poll")
        }, "complete" !== i.readyState) {
        if (i.createEventObject && u.doScroll) {
          try {
            c = !t.frameElement
          } catch (h) {}
          c && s()
        }
        return i[r](a + "DOMContentLoaded", o, !1), i[r](a + "readystatechange", o, !1), t[r](a + "load", o, !1)
      }
    }, t._autoDiscoverFunction = function () {
      return t.autoDiscover ? t.discover() : void 0
    }
  }.call(this), Function.prototype.bind || (Function.prototype.bind = function (t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - ce qui est Ã  lier ne peut Ãªtre appelÃ©");
    var e = Array.prototype.slice.call(arguments, 1),
      r = this,
      i = function () {},
      n = function () {
        return r.apply(this instanceof i ? this : t, e.concat(Array.prototype.slice.call(arguments)))
      };
    return i.prototype = this.prototype, n.prototype = new i, n
  }), Object.create || (Object.create = function (t) {
    function e() {}
    if (arguments.length > 1) throw new Error("Object.create implementation only accepts the first parameter.");
    return e.prototype = t, new e
  }), Object.keys || (Object.keys = function () {
    "use strict";
    var t = Object.prototype.hasOwnProperty,
      e = !{
        toString: null
      }.propertyIsEnumerable("toString"),
      r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      i = r.length;
    return function (n) {
      if ("object" != typeof n && ("function" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
      var o, s, a = [];
      for (o in n) t.call(n, o) && a.push(o);
      if (e)
        for (s = 0; i > s; s++) t.call(n, r[s]) && a.push(r[s]);
      return a
    }
  }()), "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
  }), ! function () {
    "use strict";
    var t = "undefined" != typeof window ? window : global;
    if ("function" != typeof t.require) {
      var e = {},
        r = {},
        i = function (t, e) {
          return {}.hasOwnProperty.call(t, e)
        },
        n = function (t, e) {
          var r, i, n = [];
          r = /^\.\.?(\/|$)/.test(e) ? [t, e].join("/").split("/") : e.split("/");
          for (var o = 0, s = r.length; s > o; o++) i = r[o], ".." === i ? n.pop() : "." !== i && "" !== i && n.push(i);
          return n.join("/")
        },
        o = function (t) {
          return t.split("/").slice(0, -1).join("/")
        },
        s = function (e) {
          return function (r) {
            var i = o(e),
              s = n(i, r);
            return t.require(s, e)
          }
        },
        a = function (t, e) {
          var i = {
            id: t,
            exports: {}
          };
          return r[t] = i, e(i.exports, s(t), i), i.exports
        },
        l = function (t, o) {
          var s = n(t, ".");
          if (null == o && (o = "/"), i(r, s)) return r[s].exports;
          if (i(e, s)) return a(s, e[s]);
          var l = n(s, "./index");
          if (i(r, l)) return r[l].exports;
          if (i(e, l)) return a(l, e[l]);
          throw new Error('Cannot find module "' + t + '" from "' + o + '"')
        },
        u = function (t, r) {
          if ("object" == typeof t)
            for (var n in t) i(t, n) && (e[n] = t[n]);
          else e[t] = r
        },
        c = function () {
          var t = [];
          for (var r in e) i(e, r) && t.push(r);
          return t
        };
      t.require = l, t.require.define = u, t.require.register = u, t.require.list = c, t.require.brunch = !0
    }
  }(),
  function (t, e) {
    "use strict";
    var r = !1,
      i = function () {
        this.width = t.innerWidth || e.documentElement.clientWidth, this.height = t.innerHeight || e.documentElement.clientHeight, this.pixelRatio = t.devicePixelRatio || 1
      },
      n = function (t) {
        this.viewport = t, this.maxWidth = 1 / 0, this.maxHeight = 1 / 0, this.maxPixelRatio = 1, this.candidates = []
      };
    n.prototype = {
      constructor: n,
      parseImage: function (t) {
        var e = /[^\s]+/,
          r = /\s(\d+)h/,
          i = /\s(\d+)w/,
          n = /\s(\d+((\.\d+)?))x/,
          o = t.getAttribute("srcset");
        o && (t.setAttribute("srcset-opt", o), t.removeAttribute("srcset"));
        var s = t.getAttribute("srcset-opt"),
          a = this.candidates;
        if (s) {
          var l, u = s.split(","),
            c = u.length;
          for (l = 0; c > l; l += 1) {
            var h = u[l].match(e)[0],
              d = r.test(u[l]) ? parseInt(u[l].match(r)[1], 10) : 1 / 0,
              p = i.test(u[l]) ? parseInt(u[l].match(i)[1], 10) : 1 / 0,
              f = n.test(u[l]) ? parseFloat(u[l].match(n)[1]) : 1;
            a.push({
              src: h,
              height: d,
              width: p,
              pixelRatio: f
            })
          }
        }
        return this
      },
      getBestCandidate: function (t) {
        var e = this.candidates,
          r = t.width,
          i = t.height,
          n = t.pixelRatio,
          o = function (t) {
            var r, i = e.length,
              n = e[0];
            for (r = 0; i > r; r += 1) t(e[r], n) && (n = e[r]);
            return n
          },
          s = function (t) {
            var r, i = e.length;
            for (r = i - 1; r >= 0; r -= 1) t(e[r]) && e.splice(r, 1)
          };
        if (0 === e.length) return null;
        var a = o(function (t, e) {
          return t.width > e.width
        });
        s(function (t) {
          return t.width < r
        }), 0 === e.length && (e = [a]);
        var l = o(function (t, e) {
          return t.height > e.height
        });
        s(function (t) {
          return t.height < i
        }), 0 === e.length && (e = [l]);
        var u = o(function (t, e) {
          return t.pixelRatio > e.pixelRatio
        });
        s(function (t) {
          return t.pixelRatio < n
        }), 0 === e.length && (e = [u]);
        var c = o(function (t, e) {
          return t.width < e.width
        });
        s(function (t) {
          return t.width > c.width
        });
        var h = o(function (t, e) {
          return t.height < e.height
        });
        s(function (t) {
          return t.height > h.height
        });
        var d = o(function (t, e) {
          return t.pixelRatio < e.pixelRatio
        });
        return s(function (t) {
          return t.pixelRatio > d.pixelRatio
        }), e[0]
      }
    };
    var o, s = function () {
        if (!r) {
          var t, e = new i,
            o = document.querySelectorAll("img"),
            s = o.length;
          for (t = 0; s > t; t += 1) {
            var a = new n,
              l = o[t],
              u = a.parseImage(l).getBestCandidate(e);
            u && (l.src = u.src)
          }
        }
      },
      a = function (e, r) {
        t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent && "DOMContentLoaded" !== e && t.attachEvent("on" + e, r)
      };
    a("DOMContentLoaded", function () {
      s(), t.removeEventListener("load", s, !1)
    }), a("load", s), a("resize", function () {
      o && t.clearTimeout(o), o = t.setTimeout(s, 50)
    }), t.srcset = s
  }(window, document), ! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var e;
      e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t()
    }
  }(function () {
    var t;
    return function e(t, r, i) {
      function n(s, a) {
        if (!r[s]) {
          if (!t[s]) {
            var l = "function" == typeof require && require;
            if (!a && l) return l(s, !0);
            if (o) return o(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw u.code = "MODULE_NOT_FOUND", u
          }
          var c = r[s] = {
            exports: {}
          };
          t[s][0].call(c.exports, function (e) {
            var r = t[s][1][e];
            return n(r ? r : e)
          }, c, c.exports, e, t, r, i)
        }
        return r[s].exports
      }
      for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
      return n
    }({
      1: [function (t, e, r) {
        (function (r) {
          t("./polyfill");
          var i = e.exports = t("./core");
          i.extras = t("./extras"), i.filters = t("./filters"), i.interaction = t("./interaction"), i.loaders = t("./loaders"), i.mesh = t("./mesh"), i.loader = new i.loaders.Loader, Object.assign(i, t("./deprecation")), r.PIXI = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {
        "./core": 29,
        "./deprecation": 78,
        "./extras": 85,
        "./filters": 102,
        "./interaction": 117,
        "./loaders": 120,
        "./mesh": 126,
        "./polyfill": 130
      }],
      2: [function (e, r, i) {
        (function (e) {
          ! function () {
            function i(t) {
              var e = !1;
              return function () {
                if (e) throw new Error("Callback was already called.");
                e = !0, t.apply(n, arguments)
              }
            }
            var n, o, s = {};
            n = this, null != n && (o = n.async), s.noConflict = function () {
              return n.async = o, s
            };
            var a = Object.prototype.toString,
              l = Array.isArray || function (t) {
                return "[object Array]" === a.call(t)
              },
              u = function (t, e) {
                if (t.forEach) return t.forEach(e);
                for (var r = 0; r < t.length; r += 1) e(t[r], r, t)
              },
              c = function (t, e) {
                if (t.map) return t.map(e);
                var r = [];
                return u(t, function (t, i, n) {
                  r.push(e(t, i, n))
                }), r
              },
              h = function (t, e, r) {
                return t.reduce ? t.reduce(e, r) : (u(t, function (t, i, n) {
                  r = e(r, t, i, n)
                }), r)
              },
              d = function (t) {
                if (Object.keys) return Object.keys(t);
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(r);
                return e
              };
            "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function (t) {
              setImmediate(t)
            } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function (t) {
              setImmediate(t)
            }, s.setImmediate = s.nextTick) : (s.nextTick = function (t) {
              setTimeout(t, 0)
            }, s.setImmediate = s.nextTick), s.each = function (t, e, r) {
              function n(e) {
                e ? (r(e), r = function () {}) : (o += 1, o >= t.length && r())
              }
              if (r = r || function () {}, !t.length) return r();
              var o = 0;
              u(t, function (t) {
                e(t, i(n))
              })
            }, s.forEach = s.each, s.eachSeries = function (t, e, r) {
              if (r = r || function () {}, !t.length) return r();
              var i = 0,
                n = function () {
                  e(t[i], function (e) {
                    e ? (r(e), r = function () {}) : (i += 1, i >= t.length ? r() : n())
                  })
                };
              n()
            }, s.forEachSeries = s.eachSeries, s.eachLimit = function (t, e, r, i) {
              var n = p(e);
              n.apply(null, [t, r, i])
            }, s.forEachLimit = s.eachLimit;
            var p = function (t) {
                return function (e, r, i) {
                  if (i = i || function () {}, !e.length || 0 >= t) return i();
                  var n = 0,
                    o = 0,
                    s = 0;
                  ! function a() {
                    if (n >= e.length) return i();
                    for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function (t) {
                      t ? (i(t), i = function () {}) : (n += 1, s -= 1, n >= e.length ? i() : a())
                    })
                  }()
                }
              },
              f = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [s.each].concat(e))
                }
              },
              m = function (t, e) {
                return function () {
                  var r = Array.prototype.slice.call(arguments);
                  return e.apply(null, [p(t)].concat(r))
                }
              },
              g = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [s.eachSeries].concat(e))
                }
              },
              v = function (t, e, r, i) {
                if (e = c(e, function (t, e) {
                    return {
                      index: e,
                      value: t
                    }
                  }), i) {
                  var n = [];
                  t(e, function (t, e) {
                    r(t.value, function (r, i) {
                      n[t.index] = i, e(r)
                    })
                  }, function (t) {
                    i(t, n)
                  })
                } else t(e, function (t, e) {
                  r(t.value, function (t) {
                    e(t)
                  })
                })
              };
            s.map = f(v), s.mapSeries = g(v), s.mapLimit = function (t, e, r, i) {
              return y(e)(t, r, i)
            };
            var y = function (t) {
              return m(t, v)
            };
            s.reduce = function (t, e, r, i) {
              s.eachSeries(t, function (t, i) {
                r(e, t, function (t, r) {
                  e = r, i(t)
                })
              }, function (t) {
                i(t, e)
              })
            }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function (t, e, r, i) {
              var n = c(t, function (t) {
                return t
              }).reverse();
              s.reduce(n, e, r, i)
            }, s.foldr = s.reduceRight;
            var _ = function (t, e, r, i) {
              var n = [];
              e = c(e, function (t, e) {
                return {
                  index: e,
                  value: t
                }
              }), t(e, function (t, e) {
                r(t.value, function (r) {
                  r && n.push(t), e()
                })
              }, function (t) {
                i(c(n.sort(function (t, e) {
                  return t.index - e.index
                }), function (t) {
                  return t.value
                }))
              })
            };
            s.filter = f(_), s.filterSeries = g(_), s.select = s.filter, s.selectSeries = s.filterSeries;
            var x = function (t, e, r, i) {
              var n = [];
              e = c(e, function (t, e) {
                return {
                  index: e,
                  value: t
                }
              }), t(e, function (t, e) {
                r(t.value, function (r) {
                  r || n.push(t), e()
                })
              }, function (t) {
                i(c(n.sort(function (t, e) {
                  return t.index - e.index
                }), function (t) {
                  return t.value
                }))
              })
            };
            s.reject = f(x), s.rejectSeries = g(x);
            var b = function (t, e, r, i) {
              t(e, function (t, e) {
                r(t, function (r) {
                  r ? (i(t), i = function () {}) : e()
                })
              }, function (t) {
                i()
              })
            };
            s.detect = f(b), s.detectSeries = g(b), s.some = function (t, e, r) {
              s.each(t, function (t, i) {
                e(t, function (t) {
                  t && (r(!0), r = function () {}), i()
                })
              }, function (t) {
                r(!1)
              })
            }, s.any = s.some, s.every = function (t, e, r) {
              s.each(t, function (t, i) {
                e(t, function (t) {
                  t || (r(!1), r = function () {}), i()
                })
              }, function (t) {
                r(!0)
              })
            }, s.all = s.every, s.sortBy = function (t, e, r) {
              s.map(t, function (t, r) {
                e(t, function (e, i) {
                  e ? r(e) : r(null, {
                    value: t,
                    criteria: i
                  })
                })
              }, function (t, e) {
                if (t) return r(t);
                var i = function (t, e) {
                  var r = t.criteria,
                    i = e.criteria;
                  return i > r ? -1 : r > i ? 1 : 0
                };
                r(null, c(e.sort(i), function (t) {
                  return t.value
                }))
              })
            }, s.auto = function (t, e) {
              e = e || function () {};
              var r = d(t),
                i = r.length;
              if (!i) return e();
              var n = {},
                o = [],
                a = function (t) {
                  o.unshift(t)
                },
                c = function (t) {
                  for (var e = 0; e < o.length; e += 1)
                    if (o[e] === t) return void o.splice(e, 1)
                },
                p = function () {
                  i--, u(o.slice(0), function (t) {
                    t()
                  })
                };
              a(function () {
                if (!i) {
                  var t = e;
                  e = function () {}, t(null, n)
                }
              }), u(r, function (r) {
                var i = l(t[r]) ? t[r] : [t[r]],
                  o = function (t) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    if (i.length <= 1 && (i = i[0]), t) {
                      var o = {};
                      u(d(n), function (t) {
                        o[t] = n[t]
                      }), o[r] = i, e(t, o), e = function () {}
                    } else n[r] = i, s.setImmediate(p)
                  },
                  f = i.slice(0, Math.abs(i.length - 1)) || [],
                  m = function () {
                    return h(f, function (t, e) {
                      return t && n.hasOwnProperty(e)
                    }, !0) && !n.hasOwnProperty(r)
                  };
                if (m()) i[i.length - 1](o, n);
                else {
                  var g = function () {
                    m() && (c(g), i[i.length - 1](o, n))
                  };
                  a(g)
                }
              })
            }, s.retry = function (t, e, r) {
              var i = 5,
                n = [];
              "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i;
              var o = function (i, o) {
                for (var a = function (t, e) {
                    return function (r) {
                      t(function (t, i) {
                        r(!t || e, {
                          err: t,
                          result: i
                        })
                      }, o)
                    }
                  }; t;) n.push(a(e, !(t -= 1)));
                s.series(n, function (t, e) {
                  e = e[e.length - 1], (i || r)(e.err, e.result)
                })
              };
              return r ? o() : o
            }, s.waterfall = function (t, e) {
              if (e = e || function () {}, !l(t)) {
                var r = new Error("First argument to waterfall must be an array of functions");
                return e(r)
              }
              if (!t.length) return e();
              var i = function (t) {
                return function (r) {
                  if (r) e.apply(null, arguments), e = function () {};
                  else {
                    var n = Array.prototype.slice.call(arguments, 1),
                      o = t.next();
                    n.push(o ? i(o) : e), s.setImmediate(function () {
                      t.apply(null, n)
                    })
                  }
                }
              };
              i(s.iterator(t))()
            };
            var T = function (t, e, r) {
              if (r = r || function () {}, l(e)) t.map(e, function (t, e) {
                t && t(function (t) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  r.length <= 1 && (r = r[0]), e.call(null, t, r)
                })
              }, r);
              else {
                var i = {};
                t.each(d(e), function (t, r) {
                  e[t](function (e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    n.length <= 1 && (n = n[0]), i[t] = n, r(e)
                  })
                }, function (t) {
                  r(t, i)
                })
              }
            };
            s.parallel = function (t, e) {
              T({
                map: s.map,
                each: s.each
              }, t, e)
            }, s.parallelLimit = function (t, e, r) {
              T({
                map: y(e),
                each: p(e)
              }, t, r)
            }, s.series = function (t, e) {
              if (e = e || function () {}, l(t)) s.mapSeries(t, function (t, e) {
                t && t(function (t) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  r.length <= 1 && (r = r[0]), e.call(null, t, r)
                })
              }, e);
              else {
                var r = {};
                s.eachSeries(d(t), function (e, i) {
                  t[e](function (t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    n.length <= 1 && (n = n[0]), r[e] = n, i(t)
                  })
                }, function (t) {
                  e(t, r)
                })
              }
            }, s.iterator = function (t) {
              var e = function (r) {
                var i = function () {
                  return t.length && t[r].apply(null, arguments), i.next()
                };
                return i.next = function () {
                  return r < t.length - 1 ? e(r + 1) : null
                }, i
              };
              return e(0)
            }, s.apply = function (t) {
              var e = Array.prototype.slice.call(arguments, 1);
              return function () {
                return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
              }
            };
            var E = function (t, e, r, i) {
              var n = [];
              t(e, function (t, e) {
                r(t, function (t, r) {
                  n = n.concat(r || []), e(t)
                })
              }, function (t) {
                i(t, n)
              })
            };
            s.concat = f(E), s.concatSeries = g(E), s.whilst = function (t, e, r) {
              t() ? e(function (i) {
                return i ? r(i) : void s.whilst(t, e, r)
              }) : r()
            }, s.doWhilst = function (t, e, r) {
              t(function (i) {
                if (i) return r(i);
                var n = Array.prototype.slice.call(arguments, 1);
                e.apply(null, n) ? s.doWhilst(t, e, r) : r()
              })
            }, s.until = function (t, e, r) {
              t() ? r() : e(function (i) {
                return i ? r(i) : void s.until(t, e, r)
              })
            }, s.doUntil = function (t, e, r) {
              t(function (i) {
                if (i) return r(i);
                var n = Array.prototype.slice.call(arguments, 1);
                e.apply(null, n) ? r() : s.doUntil(t, e, r)
              })
            }, s.queue = function (t, e) {
              function r(t, e, r, i) {
                return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function () {
                  t.drain && t.drain()
                }) : void u(e, function (e) {
                  var n = {
                    data: e,
                    callback: "function" == typeof i ? i : null
                  };
                  r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                })
              }
              void 0 === e && (e = 1);
              var n = 0,
                o = {
                  tasks: [],
                  concurrency: e,
                  saturated: null,
                  empty: null,
                  drain: null,
                  started: !1,
                  paused: !1,
                  push: function (t, e) {
                    r(o, t, !1, e)
                  },
                  kill: function () {
                    o.drain = null, o.tasks = []
                  },
                  unshift: function (t, e) {
                    r(o, t, !0, e)
                  },
                  process: function () {
                    if (!o.paused && n < o.concurrency && o.tasks.length) {
                      var e = o.tasks.shift();
                      o.empty && 0 === o.tasks.length && o.empty(), n += 1;
                      var r = function () {
                          n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process()
                        },
                        s = i(r);
                      t(e.data, s)
                    }
                  },
                  length: function () {
                    return o.tasks.length
                  },
                  running: function () {
                    return n
                  },
                  idle: function () {
                    return o.tasks.length + n === 0
                  },
                  pause: function () {
                    o.paused !== !0 && (o.paused = !0, o.process())
                  },
                  resume: function () {
                    o.paused !== !1 && (o.paused = !1, o.process())
                  }
                };
              return o
            }, s.priorityQueue = function (t, e) {
              function r(t, e) {
                return t.priority - e.priority
              }

              function i(t, e, r) {
                for (var i = -1, n = t.length - 1; n > i;) {
                  var o = i + (n - i + 1 >>> 1);
                  r(e, t[o]) >= 0 ? i = o : n = o - 1
                }
                return i
              }

              function n(t, e, n, o) {
                return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function () {
                  t.drain && t.drain()
                }) : void u(e, function (e) {
                  var a = {
                    data: e,
                    priority: n,
                    callback: "function" == typeof o ? o : null
                  };
                  t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                })
              }
              var o = s.queue(t, e);
              return o.push = function (t, e, r) {
                n(o, t, e, r)
              }, delete o.unshift, o
            }, s.cargo = function (t, e) {
              var r = !1,
                i = [],
                n = {
                  tasks: i,
                  payload: e,
                  saturated: null,
                  empty: null,
                  drain: null,
                  drained: !0,
                  push: function (t, r) {
                    l(t) || (t = [t]), u(t, function (t) {
                      i.push({
                        data: t,
                        callback: "function" == typeof r ? r : null
                      }), n.drained = !1, n.saturated && i.length === e && n.saturated()
                    }), s.setImmediate(n.process)
                  },
                  process: function o() {
                    if (!r) {
                      if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0);
                      var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                        a = c(s, function (t) {
                          return t.data
                        });
                      n.empty && n.empty(), r = !0, t(a, function () {
                        r = !1;
                        var t = arguments;
                        u(s, function (e) {
                          e.callback && e.callback.apply(null, t)
                        }), o()
                      })
                    }
                  },
                  length: function () {
                    return i.length
                  },
                  running: function () {
                    return r
                  }
                };
              return n
            };
            var w = function (t) {
              return function (e) {
                var r = Array.prototype.slice.call(arguments, 1);
                e.apply(null, r.concat([function (e) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && u(r, function (e) {
                    console[t](e)
                  }))
                }]))
              }
            };
            s.log = w("log"), s.dir = w("dir"), s.memoize = function (t, e) {
              var r = {},
                i = {};
              e = e || function (t) {
                return t
              };
              var n = function () {
                var n = Array.prototype.slice.call(arguments),
                  o = n.pop(),
                  a = e.apply(null, n);
                a in r ? s.nextTick(function () {
                  o.apply(null, r[a])
                }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function () {
                  r[a] = arguments;
                  var t = i[a];
                  delete i[a];
                  for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments)
                }])))
              };
              return n.memo = r, n.unmemoized = t, n
            }, s.unmemoize = function (t) {
              return function () {
                return (t.unmemoized || t).apply(null, arguments)
              }
            }, s.times = function (t, e, r) {
              for (var i = [], n = 0; t > n; n++) i.push(n);
              return s.map(i, e, r)
            }, s.timesSeries = function (t, e, r) {
              for (var i = [], n = 0; t > n; n++) i.push(n);
              return s.mapSeries(i, e, r)
            }, s.seq = function () {
              var t = arguments;
              return function () {
                var e = this,
                  r = Array.prototype.slice.call(arguments),
                  i = r.pop();
                s.reduce(t, r, function (t, r, i) {
                  r.apply(e, t.concat([function () {
                    var t = arguments[0],
                      e = Array.prototype.slice.call(arguments, 1);
                    i(t, e)
                  }]))
                }, function (t, r) {
                  i.apply(e, [t].concat(r))
                })
              }
            }, s.compose = function () {
              return s.seq.apply(null, Array.prototype.reverse.call(arguments))
            };
            var C = function (t, e) {
              var r = function () {
                var r = this,
                  i = Array.prototype.slice.call(arguments),
                  n = i.pop();
                return t(e, function (t, e) {
                  t.apply(r, i.concat([e]))
                }, n)
              };
              if (arguments.length > 2) {
                var i = Array.prototype.slice.call(arguments, 2);
                return r.apply(this, i)
              }
              return r
            };
            s.applyEach = f(C), s.applyEachSeries = g(C), s.forever = function (t, e) {
              function r(i) {
                if (i) {
                  if (e) return e(i);
                  throw i
                }
                t(r)
              }
              r()
            }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function () {
              return s
            }) : n.async = s
          }()
        }).call(this, e("_process"))
      }, {
        _process: 4
      }],
      3: [function (t, e, r) {
        (function (t) {
          function e(t, e) {
            for (var r = 0, i = t.length - 1; i >= 0; i--) {
              var n = t[i];
              "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), r--)
            }
            if (e)
              for (; r--; r) t.unshift("..");
            return t
          }

          function i(t, e) {
            if (t.filter) return t.filter(e);
            for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]);
            return r
          }
          var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function (t) {
              return n.exec(t).slice(1)
            };
          r.resolve = function () {
            for (var r = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
              var s = o >= 0 ? arguments[o] : t.cwd();
              if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
              s && (r = s + "/" + r, n = "/" === s.charAt(0))
            }
            return r = e(i(r.split("/"), function (t) {
              return !!t
            }), !n).join("/"), (n ? "/" : "") + r || "."
          }, r.normalize = function (t) {
            var n = r.isAbsolute(t),
              o = "/" === s(t, -1);
            return t = e(i(t.split("/"), function (t) {
              return !!t
            }), !n).join("/"), t || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t
          }, r.isAbsolute = function (t) {
            return "/" === t.charAt(0)
          }, r.join = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return r.normalize(i(t, function (t, e) {
              if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
              return t
            }).join("/"))
          }, r.relative = function (t, e) {
            function i(t) {
              for (var e = 0; e < t.length && "" === t[e]; e++);
              for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
              return e > r ? [] : t.slice(e, r - e + 1)
            }
            t = r.resolve(t).substr(1), e = r.resolve(e).substr(1);
            for (var n = i(t.split("/")), o = i(e.split("/")), s = Math.min(n.length, o.length), a = s, l = 0; s > l; l++)
              if (n[l] !== o[l]) {
                a = l;
                break
              }
            for (var u = [], l = a; l < n.length; l++) u.push("..");
            return u = u.concat(o.slice(a)), u.join("/")
          }, r.sep = "/", r.delimiter = ":", r.dirname = function (t) {
            var e = o(t),
              r = e[0],
              i = e[1];
            return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
          }, r.basename = function (t, e) {
            var r = o(t)[2];
            return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
          }, r.extname = function (t) {
            return o(t)[3]
          };
          var s = "b" === "ab".substr(-1) ? function (t, e, r) {
            return t.substr(e, r)
          } : function (t, e, r) {
            return 0 > e && (e = t.length + e), t.substr(e, r)
          }
        }).call(this, t("_process"))
      }, {
        _process: 4
      }],
      4: [function (t, e, r) {
        function i() {
          if (!a) {
            a = !0;
            for (var t, e = s.length; e;) {
              t = s, s = [];
              for (var r = -1; ++r < e;) t[r]();
              e = s.length
            }
            a = !1
          }
        }

        function n() {}
        var o = e.exports = {},
          s = [],
          a = !1;
        o.nextTick = function (t) {
          s.push(t), a || setTimeout(i, 0)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = n, o.addListener = n, o.once = n, o.off = n, o.removeListener = n, o.removeAllListeners = n, o.emit = n, o.binding = function (t) {
          throw new Error("process.binding is not supported")
        }, o.cwd = function () {
          return "/"
        }, o.chdir = function (t) {
          throw new Error("process.chdir is not supported")
        }, o.umask = function () {
          return 0
        }
      }, {}],
      5: [function (e, r, i) {
        (function (e) {
          ! function (n) {
            function o(t) {
              throw RangeError(L[t])
            }

            function s(t, e) {
              for (var r = t.length; r--;) t[r] = e(t[r]);
              return t
            }

            function a(t, e) {
              return s(t.split(P), e).join(".")
            }

            function l(t) {
              for (var e, r, i = [], n = 0, o = t.length; o > n;) e = t.charCodeAt(n++), e >= 55296 && 56319 >= e && o > n ? (r = t.charCodeAt(n++), 56320 == (64512 & r) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--)) : i.push(e);
              return i
            }

            function u(t) {
              return s(t, function (t) {
                var e = "";
                return t > 65535 && (t -= 65536, e += I(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += I(t)
              }).join("")
            }

            function c(t) {
              return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : E
            }

            function h(t, e) {
              return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
            }

            function d(t, e, r) {
              var i = 0;
              for (t = r ? k(t / A) : t >> 1, t += k(t / e); t > B * C >> 1; i += E) t = k(t / B);
              return k(i + (B + 1) * t / (t + S))
            }

            function p(t) {
              var e, r, i, n, s, a, l, h, p, f, m = [],
                g = t.length,
                v = 0,
                y = M,
                _ = R;
              for (r = t.lastIndexOf(F), 0 > r && (r = 0), i = 0; r > i; ++i) t.charCodeAt(i) >= 128 && o("not-basic"), m.push(t.charCodeAt(i));
              for (n = r > 0 ? r + 1 : 0; g > n;) {
                for (s = v, a = 1, l = E; n >= g && o("invalid-input"), h = c(t.charCodeAt(n++)), (h >= E || h > k((T - v) / a)) && o("overflow"), v += h * a, p = _ >= l ? w : l >= _ + C ? C : l - _, !(p > h); l += E) f = E - p, a > k(T / f) && o("overflow"), a *= f;
                e = m.length + 1, _ = d(v - s, e, 0 == s), k(v / e) > T - y && o("overflow"), y += k(v / e), v %= e, m.splice(v++, 0, y)
              }
              return u(m)
            }

            function f(t) {
              var e, r, i, n, s, a, u, c, p, f, m, g, v, y, _, x = [];
              for (t = l(t), g = t.length, e = M, r = 0, s = R, a = 0; g > a; ++a) m = t[a], 128 > m && x.push(I(m));
              for (i = n = x.length, n && x.push(F); g > i;) {
                for (u = T, a = 0; g > a; ++a) m = t[a], m >= e && u > m && (u = m);
                for (v = i + 1, u - e > k((T - r) / v) && o("overflow"), r += (u - e) * v, e = u, a = 0; g > a; ++a)
                  if (m = t[a], e > m && ++r > T && o("overflow"), m == e) {
                    for (c = r, p = E; f = s >= p ? w : p >= s + C ? C : p - s, !(f > c); p += E) _ = c - f, y = E - f, x.push(I(h(f + _ % y, 0))), c = k(_ / y);
                    x.push(I(h(c, 0))), s = d(r, v, i == n), r = 0, ++i
                  }++r, ++e
              }
              return x.join("")
            }

            function m(t) {
              return a(t, function (t) {
                return D.test(t) ? p(t.slice(4).toLowerCase()) : t
              })
            }

            function g(t) {
              return a(t, function (t) {
                return O.test(t) ? "xn--" + f(t) : t
              })
            }
            var v = "object" == typeof i && i,
              y = "object" == typeof r && r && r.exports == v && r,
              _ = "object" == typeof e && e;
            (_.global === _ || _.window === _) && (n = _);
            var x, b, T = 2147483647,
              E = 36,
              w = 1,
              C = 26,
              S = 38,
              A = 700,
              R = 72,
              M = 128,
              F = "-",
              D = /^xn--/,
              O = /[^ -~]/,
              P = /\x2E|\u3002|\uFF0E|\uFF61/g,
              L = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
              B = E - w,
              k = Math.floor,
              I = String.fromCharCode;
            if (x = {
                version: "1.2.4",
                ucs2: {
                  decode: l,
                  encode: u
                },
                decode: p,
                encode: f,
                toASCII: g,
                toUnicode: m
              }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function () {
              return x
            });
            else if (v && !v.nodeType)
              if (y) y.exports = x;
              else
                for (b in x) x.hasOwnProperty(b) && (v[b] = x[b]);
            else n.punycode = x
          }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {}],
      6: [function (t, e, r) {
        "use strict";

        function i(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.exports = function (t, e, r, o) {
          e = e || "&", r = r || "=";
          var s = {};
          if ("string" != typeof t || 0 === t.length) return s;
          var a = /\+/g;
          t = t.split(e);
          var l = 1e3;
          o && "number" == typeof o.maxKeys && (l = o.maxKeys);
          var u = t.length;
          l > 0 && u > l && (u = l);
          for (var c = 0; u > c; ++c) {
            var h, d, p, f, m = t[c].replace(a, "%20"),
              g = m.indexOf(r);
            g >= 0 ? (h = m.substr(0, g), d = m.substr(g + 1)) : (h = m, d = ""), p = decodeURIComponent(h), f = decodeURIComponent(d), i(s, p) ? n(s[p]) ? s[p].push(f) : s[p] = [s[p], f] : s[p] = f
          }
          return s
        };
        var n = Array.isArray || function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        }
      }, {}],
      7: [function (t, e, r) {
        "use strict";

        function i(t, e) {
          if (t.map) return t.map(e);
          for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i));
          return r
        }
        var n = function (t) {
          switch (typeof t) {
          case "string":
            return t;
          case "boolean":
            return t ? "true" : "false";
          case "number":
            return isFinite(t) ? t : "";
          default:
            return ""
          }
        };
        e.exports = function (t, e, r, a) {
          return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), function (s) {
            var a = encodeURIComponent(n(s)) + r;
            return o(t[s]) ? i(t[s], function (t) {
              return a + encodeURIComponent(n(t))
            }).join(e) : a + encodeURIComponent(n(t[s]))
          }).join(e) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t)) : ""
        };
        var o = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          },
          s = Object.keys || function (t) {
            var e = [];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
            return e
          }
      }, {}],
      8: [function (t, e, r) {
        "use strict";
        r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode")
      }, {
        "./decode": 6,
        "./encode": 7
      }],
      9: [function (t, e, r) {
        function i() {
          this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function n(t, e, r) {
          if (t && u(t) && t instanceof i) return t;
          var n = new i;
          return n.parse(t, e, r), n
        }

        function o(t) {
          return l(t) && (t = n(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
        }

        function s(t, e) {
          return n(t, !1, !0).resolve(e)
        }

        function a(t, e) {
          return t ? n(t, !1, !0).resolveObject(e) : e
        }

        function l(t) {
          return "string" == typeof t
        }

        function u(t) {
          return "object" == typeof t && null !== t
        }

        function c(t) {
          return null === t
        }

        function h(t) {
          return null == t
        }
        var d = t("punycode");
        r.parse = n, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = i;
        var p = /^([a-z0-9.+-]+:)/i,
          f = /:[0-9]*$/,
          m = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
          g = ["{", "}", "|", "\\", "^", "`"].concat(m),
          v = ["'"].concat(g),
          y = ["%", "/", "?", ";", "#"].concat(v),
          _ = ["/", "?", "#"],
          x = 255,
          b = /^[a-z0-9A-Z_-]{0,63}$/,
          T = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
          E = {
            javascript: !0,
            "javascript:": !0
          },
          w = {
            javascript: !0,
            "javascript:": !0
          },
          C = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
          },
          S = t("querystring");
        i.prototype.parse = function (t, e, r) {
          if (!l(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
          var i = t;
          i = i.trim();
          var n = p.exec(i);
          if (n) {
            n = n[0];
            var o = n.toLowerCase();
            this.protocol = o, i = i.substr(n.length)
          }
          if (r || n || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var s = "//" === i.substr(0, 2);
            !s || n && w[n] || (i = i.substr(2), this.slashes = !0)
          }
          if (!w[n] && (s || n && !C[n])) {
            for (var a = -1, u = 0; u < _.length; u++) {
              var c = i.indexOf(_[u]); - 1 !== c && (-1 === a || a > c) && (a = c)
            }
            var h, f;
            f = -1 === a ? i.lastIndexOf("@") : i.lastIndexOf("@", a), -1 !== f && (h = i.slice(0, f), i = i.slice(f + 1), this.auth = decodeURIComponent(h)), a = -1;
            for (var u = 0; u < y.length; u++) {
              var c = i.indexOf(y[u]); - 1 !== c && (-1 === a || a > c) && (a = c)
            } - 1 === a && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
            var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!m)
              for (var g = this.hostname.split(/\./), u = 0, A = g.length; A > u; u++) {
                var R = g[u];
                if (R && !R.match(b)) {
                  for (var M = "", F = 0, D = R.length; D > F; F++) M += R.charCodeAt(F) > 127 ? "x" : R[F];
                  if (!M.match(b)) {
                    var O = g.slice(0, u),
                      P = g.slice(u + 1),
                      L = R.match(T);
                    L && (O.push(L[1]), P.unshift(L[2])), P.length && (i = "/" + P.join(".") + i), this.hostname = O.join(".");
                    break
                  }
                }
              }
            if (this.hostname = this.hostname.length > x ? "" : this.hostname.toLowerCase(), !m) {
              for (var B = this.hostname.split("."), k = [], u = 0; u < B.length; ++u) {
                var I = B[u];
                k.push(I.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(I) : I)
              }
              this.hostname = k.join(".")
            }
            var N = this.port ? ":" + this.port : "",
              j = this.hostname || "";
            this.host = j + N, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
          }
          if (!E[o])
            for (var u = 0, A = v.length; A > u; u++) {
              var U = v[u],
                z = encodeURIComponent(U);
              z === U && (z = escape(U)), i = i.split(U).join(z)
            }
          var G = i.indexOf("#"); - 1 !== G && (this.hash = i.substr(G), i = i.slice(0, G));
          var H = i.indexOf("?");
          if (-1 !== H ? (this.search = i.substr(H), this.query = i.substr(H + 1), e && (this.query = S.parse(this.query)), i = i.slice(0, H)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), C[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var N = this.pathname || "",
              I = this.search || "";
            this.path = N + I
          }
          return this.href = this.format(), this
        }, i.prototype.format = function () {
          var t = this.auth || "";
          t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
          var e = this.protocol || "",
            r = this.pathname || "",
            i = this.hash || "",
            n = !1,
            o = "";
          this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && u(this.query) && Object.keys(this.query).length && (o = S.stringify(this.query));
          var s = this.search || o && "?" + o || "";
          return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || C[e]) && n !== !1 ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function (t) {
            return encodeURIComponent(t)
          }), s = s.replace("#", "%23"), e + n + r + s + i
        }, i.prototype.resolve = function (t) {
          return this.resolveObject(n(t, !1, !0)).format()
        }, i.prototype.resolveObject = function (t) {
          if (l(t)) {
            var e = new i;
            e.parse(t, !1, !0), t = e
          }
          var r = new i;
          if (Object.keys(this).forEach(function (t) {
              r[t] = this[t]
            }, this), r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
          if (t.slashes && !t.protocol) return Object.keys(t).forEach(function (e) {
            "protocol" !== e && (r[e] = t[e])
          }), C[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
          if (t.protocol && t.protocol !== r.protocol) {
            if (!C[t.protocol]) return Object.keys(t).forEach(function (e) {
              r[e] = t[e]
            }), r.href = r.format(), r;
            if (r.protocol = t.protocol, t.host || w[t.protocol]) r.pathname = t.pathname;
            else {
              for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
              t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/")
            }
            if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
              var o = r.pathname || "",
                s = r.search || "";
              r.path = o + s
            }
            return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
          }
          var a = r.pathname && "/" === r.pathname.charAt(0),
            u = t.host || t.pathname && "/" === t.pathname.charAt(0),
            d = u || a || r.host && t.pathname,
            p = d,
            f = r.pathname && r.pathname.split("/") || [],
            n = t.pathname && t.pathname.split("/") || [],
            m = r.protocol && !C[r.protocol];
          if (m && (r.hostname = "", r.port = null, r.host && ("" === f[0] ? f[0] = r.host : f.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), d = d && ("" === n[0] || "" === f[0])), u) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, f = n;
          else if (n.length) f || (f = []), f.pop(), f = f.concat(n), r.search = t.search, r.query = t.query;
          else if (!h(t.search)) {
            if (m) {
              r.hostname = r.host = f.shift();
              var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
              g && (r.auth = g.shift(), r.host = r.hostname = g.shift())
            }
            return r.search = t.search, r.query = t.query, c(r.pathname) && c(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
          }
          if (!f.length) return r.pathname = null, r.path = r.search ? "/" + r.search : null, r.href = r.format(), r;
          for (var v = f.slice(-1)[0], y = (r.host || t.host) && ("." === v || ".." === v) || "" === v, _ = 0, x = f.length; x >= 0; x--) v = f[x], "." == v ? f.splice(x, 1) : ".." === v ? (f.splice(x, 1), _++) : _ && (f.splice(x, 1), _--);
          if (!d && !p)
            for (; _--; _) f.unshift("..");
          !d || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), y && "/" !== f.join("/").substr(-1) && f.push("");
          var b = "" === f[0] || f[0] && "/" === f[0].charAt(0);
          if (m) {
            r.hostname = r.host = b ? "" : f.length ? f.shift() : "";
            var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
            g && (r.auth = g.shift(), r.host = r.hostname = g.shift())
          }
          return d = d || r.host && f.length, d && !b && f.unshift(""), f.length ? r.pathname = f.join("/") : (r.pathname = null, r.path = null), c(r.pathname) && c(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
        }, i.prototype.parseHost = function () {
          var t = this.host,
            e = f.exec(t);
          e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }
      }, {
        punycode: 5,
        querystring: 8
      }],
      10: [function (t, e, r) {
        "use strict";

        function i(t, e, r) {
          r = r || 2;
          var i = e && e.length,
            a = i ? e[0] * r : t.length,
            l = o(t, n(t, 0, a, r, !0)),
            u = [];
          if (!l) return u;
          var h, d, p, f, m, g, v;
          if (i && (l = c(t, e, l, r)), t.length > 80 * r) {
            h = p = t[0], d = f = t[1];
            for (var y = r; a > y; y += r) m = t[y], g = t[y + 1], h > m && (h = m), d > g && (d = g), m > p && (p = m), g > f && (f = g);
            v = Math.max(p - h, f - d)
          }
          return s(t, l, u, r, h, d, v), u
        }

        function n(t, e, r, i, n) {
          var o, s, a, l = 0;
          for (o = e, s = r - i; r > o; o += i) l += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
          if (n === l > 0)
            for (o = e; r > o; o += i) a = C(o, a);
          else
            for (o = r - i; o >= e; o -= i) a = C(o, a);
          return a
        }

        function o(t, e, r) {
          r || (r = e);
          var i, n = e;
          do
            if (i = !1, _(t, n.i, n.next.i) || 0 === y(t, n.prev.i, n.i, n.next.i)) {
              if (n.prev.next = n.next, n.next.prev = n.prev, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ), n = r = n.prev, n === n.next) return null;
              i = !0
            } else n = n.next;
          while (i || n !== r);
          return r
        }

        function s(t, e, r, i, n, c, h, d) {
          if (e) {
            d || void 0 === n || p(t, e, n, c, h);
            for (var f, m, g = e; e.prev !== e.next;)
              if (f = e.prev, m = e.next, a(t, e, n, c, h)) r.push(f.i / i), r.push(e.i / i), r.push(m.i / i), m.prev = f, f.next = m, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), e = m.next, g = m.next;
              else if (e = m, e === g) {
              d ? 1 === d ? (e = l(t, e, r, i), s(t, e, r, i, n, c, h, 2)) : 2 === d && u(t, e, r, i, n, c, h) : s(t, o(t, e), r, i, n, c, h, 1);
              break
            }
          }
        }

        function a(t, e, r, i, n) {
          var o = e.prev.i,
            s = e.i,
            a = e.next.i,
            l = t[o],
            u = t[o + 1],
            c = t[s],
            h = t[s + 1],
            d = t[a],
            p = t[a + 1],
            f = l * h - u * c,
            g = l * p - u * d,
            v = d * h - p * c,
            y = f - g - v;
          if (0 >= y) return !1;
          var _, x, b, T, E, w, C, S = p - u,
            A = l - d,
            R = u - h,
            M = c - l;
          if (void 0 !== r) {
            var F = c > l ? d > l ? l : d : d > c ? c : d,
              D = h > u ? p > u ? u : p : p > h ? h : p,
              O = l > c ? l > d ? l : d : c > d ? c : d,
              P = u > h ? u > p ? u : p : h > p ? h : p,
              L = m(F, D, r, i, n),
              B = m(O, P, r, i, n);
            for (C = e.nextZ; C && C.z <= B;)
              if (_ = C.i, C = C.nextZ, _ !== o && _ !== a && (x = t[_], b = t[_ + 1], T = S * x + A * b - g, T >= 0 && (E = R * x + M * b + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w))))) return !1;
            for (C = e.prevZ; C && C.z >= L;)
              if (_ = C.i, C = C.prevZ, _ !== o && _ !== a && (x = t[_], b = t[_ + 1], T = S * x + A * b - g, T >= 0 && (E = R * x + M * b + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w))))) return !1
          } else
            for (C = e.next.next; C !== e.prev;)
              if (_ = C.i, C = C.next, x = t[_], b = t[_ + 1], T = S * x + A * b - g, T >= 0 && (E = R * x + M * b + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w)))) return !1; return !0
        }

        function l(t, e, r, i) {
          var n = e;
          do {
            var o = n.prev,
              s = n.next.next;
            if (o.i !== s.i && x(t, o.i, n.i, n.next.i, s.i) && T(t, o, s) && T(t, s, o)) {
              r.push(o.i / i), r.push(n.i / i), r.push(s.i / i), o.next = s, s.prev = o;
              var a = n.prevZ,
                l = n.nextZ && n.nextZ.nextZ;
              a && (a.nextZ = l), l && (l.prevZ = a), n = e = s
            }
            n = n.next
          } while (n !== e);
          return n
        }

        function u(t, e, r, i, n, a, l) {
          var u = e;
          do {
            for (var c = u.next.next; c !== u.prev;) {
              if (u.i !== c.i && v(t, u, c)) {
                var h = w(u, c);
                return u = o(t, u, u.next), h = o(t, h, h.next), s(t, u, r, i, n, a, l), void s(t, h, r, i, n, a, l)
              }
              c = c.next
            }
            u = u.next
          } while (u !== e)
        }

        function c(t, e, r, i) {
          var s, a, l, u, c, d = [];
          for (s = 0, a = e.length; a > s; s++) l = e[s] * i, u = a - 1 > s ? e[s + 1] * i : t.length, c = o(t, n(t, l, u, i, !1)), c && d.push(g(t, c));
          for (d.sort(function (e, r) {
              return t[e.i] - t[r.i]
            }), s = 0; s < d.length; s++) h(t, d[s], r), r = o(t, r, r.next);
          return r
        }

        function h(t, e, r) {
          if (r = d(t, e, r)) {
            var i = w(r, e);
            o(t, i, i.next)
          }
        }

        function d(t, e, r) {
          var i, n, o, s = r,
            a = e.i,
            l = t[a],
            u = t[a + 1],
            c = -(1 / 0);
          do {
            if (n = s.i, o = s.next.i, u <= t[n + 1] && u >= t[o + 1]) {
              var h = t[n] + (u - t[n + 1]) * (t[o] - t[n]) / (t[o + 1] - t[n + 1]);
              l >= h && h > c && (c = h, i = t[n] < t[o] ? s : s.next)
            }
            s = s.next
          } while (s !== r);
          if (!i) return null;
          var d, p, f, m, g, v, y = t[i.i],
            _ = t[i.i + 1],
            x = l * _ - u * y,
            b = l * u - u * c,
            E = u - u,
            w = l - c,
            C = u - _,
            S = y - l,
            A = x - b - (c * _ - u * y),
            R = 0 >= A ? -1 : 1,
            M = i,
            F = 1 / 0;
          for (s = i.next; s !== M;) d = t[s.i], p = t[s.i + 1], f = l - d, f >= 0 && d >= y && (m = (E * d + w * p - b) * R, m >= 0 && (g = (C * d + S * p + x) * R, g >= 0 && A * R - m - g >= 0 && (v = Math.abs(u - p) / f, F > v && T(t, s, e) && (i = s, F = v)))), s = s.next;
          return i
        }

        function p(t, e, r, i, n) {
          var o = e;
          do null === o.z && (o.z = m(t[o.i], t[o.i + 1], r, i, n)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next; while (o !== e);
          o.prevZ.nextZ = null, o.prevZ = null, f(o)
        }

        function f(t) {
          var e, r, i, n, o, s, a, l, u = 1;
          do {
            for (r = t, t = null, o = null, s = 0; r;) {
              for (s++, i = r, a = 0, e = 0; u > e && (a++, i = i.nextZ); e++);
              for (l = u; a > 0 || l > 0 && i;) 0 === a ? (n = i, i = i.nextZ, l--) : 0 !== l && i ? r.z <= i.z ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, l--) : (n = r, r = r.nextZ, a--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
              r = i
            }
            o.nextZ = null, u *= 2
          } while (s > 1);
          return t
        }

        function m(t, e, r, i, n) {
          return t = 1e3 * (t - r) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 1e3 * (e - i) / n, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
        }

        function g(t, e) {
          var r = e,
            i = e;
          do t[r.i] < t[i.i] && (i = r), r = r.next; while (r !== e);
          return i
        }

        function v(t, e, r) {
          return !b(t, e, e.i, r.i) && T(t, e, r) && T(t, r, e) && E(t, e, e.i, r.i)
        }

        function y(t, e, r, i) {
          var n = (t[r + 1] - t[e + 1]) * (t[i] - t[r]) - (t[r] - t[e]) * (t[i + 1] - t[r + 1]);
          return n > 0 ? 1 : 0 > n ? -1 : 0
        }

        function _(t, e, r) {
          return t[e] === t[r] && t[e + 1] === t[r + 1]
        }

        function x(t, e, r, i, n) {
          return y(t, e, r, i) !== y(t, e, r, n) && y(t, i, n, e) !== y(t, i, n, r)
        }

        function b(t, e, r, i) {
          var n = e;
          do {
            var o = n.i,
              s = n.next.i;
            if (o !== r && s !== r && o !== i && s !== i && x(t, o, s, r, i)) return !0;
            n = n.next
          } while (n !== e);
          return !1
        }

        function T(t, e, r) {
          return -1 === y(t, e.prev.i, e.i, e.next.i) ? -1 !== y(t, e.i, r.i, e.next.i) && -1 !== y(t, e.i, e.prev.i, r.i) : -1 === y(t, e.i, r.i, e.prev.i) || -1 === y(t, e.i, e.next.i, r.i)
        }

        function E(t, e, r, i) {
          var n = e,
            o = !1,
            s = (t[r] + t[i]) / 2,
            a = (t[r + 1] + t[i + 1]) / 2;
          do {
            var l = n.i,
              u = n.next.i;
            t[l + 1] > a != t[u + 1] > a && s < (t[u] - t[l]) * (a - t[l + 1]) / (t[u + 1] - t[l + 1]) + t[l] && (o = !o), n = n.next
          } while (n !== e);
          return o
        }

        function w(t, e) {
          var r = new S(t.i),
            i = new S(e.i),
            n = t.next,
            o = e.prev;
          return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
        }

        function C(t, e) {
          var r = new S(t);
          return e ? (r.next = e.next, r.prev = e, e.next.prev = r, e.next = r) : (r.prev = r, r.next = r), r
        }

        function S(t) {
          this.i = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null
        }
        e.exports = i
      }, {}],
      11: [function (t, e, r) {
        "use strict";

        function i(t, e, r) {
          this.fn = t, this.context = e, this.once = r || !1
        }

        function n() {}
        var o = "function" != typeof Object.create ? "~" : !1;
        n.prototype._events = void 0, n.prototype.listeners = function (t, e) {
          var r = o ? o + t : t,
            i = this._events && this._events[r];
          if (e) return !!i;
          if (!i) return [];
          if (this._events[r].fn) return [this._events[r].fn];
          for (var n = 0, s = this._events[r].length, a = new Array(s); s > n; n++) a[n] = this._events[r][n].fn;
          return a
        }, n.prototype.emit = function (t, e, r, i, n, s) {
          var a = o ? o + t : t;
          if (!this._events || !this._events[a]) return !1;
          var l, u, c = this._events[a],
            h = arguments.length;
          if ("function" == typeof c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), h) {
            case 1:
              return c.fn.call(c.context), !0;
            case 2:
              return c.fn.call(c.context, e), !0;
            case 3:
              return c.fn.call(c.context, e, r), !0;
            case 4:
              return c.fn.call(c.context, e, r, i), !0;
            case 5:
              return c.fn.call(c.context, e, r, i, n), !0;
            case 6:
              return c.fn.call(c.context, e, r, i, n, s), !0
            }
            for (u = 1, l = new Array(h - 1); h > u; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l)
          } else {
            var d, p = c.length;
            for (u = 0; p > u; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), h) {
            case 1:
              c[u].fn.call(c[u].context);
              break;
            case 2:
              c[u].fn.call(c[u].context, e);
              break;
            case 3:
              c[u].fn.call(c[u].context, e, r);
              break;
            default:
              if (!l)
                for (d = 1, l = new Array(h - 1); h > d; d++) l[d - 1] = arguments[d];
              c[u].fn.apply(c[u].context, l)
            }
          }
          return !0
        }, n.prototype.on = function (t, e, r) {
          var n = new i(e, r || this),
            s = o ? o + t : t;
          return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
        }, n.prototype.once = function (t, e, r) {
          var n = new i(e, r || this, !0),
            s = o ? o + t : t;
          return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
        }, n.prototype.removeListener = function (t, e, r, i) {
          var n = o ? o + t : t;
          if (!this._events || !this._events[n]) return this;
          var s = this._events[n],
            a = [];
          if (e)
            if (s.fn)(s.fn !== e || i && !s.once || r && s.context !== r) && a.push(s);
            else
              for (var l = 0, u = s.length; u > l; l++)(s[l].fn !== e || i && !s[l].once || r && s[l].context !== r) && a.push(s[l]);
          return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n], this
        }, n.prototype.removeAllListeners = function (t) {
          return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null), this) : this
        }, n.prototype.off = n.prototype.removeListener, n.prototype.addListener = n.prototype.on, n.prototype.setMaxListeners = function () {
          return this
        }, n.prefixed = o, e.exports = n
      }, {}],
      12: [function (t, e, r) {
        "use strict";

        function i(t) {
          if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
        }
        e.exports = Object.assign || function (t, e) {
          for (var r, n, o = i(t), s = 1; s < arguments.length; s++) {
            r = arguments[s], n = Object.keys(Object(r));
            for (var a = 0; a < n.length; a++) o[n[a]] = r[n[a]]
          }
          return o
        }
      }, {}],
      13: [function (e, r, i) {
        (function (e) {
          ! function () {
            function i(t) {
              var e = !1;
              return function () {
                if (e) throw new Error("Callback was already called.");
                e = !0, t.apply(n, arguments)
              }
            }
            var n, o, s = {};
            n = this, null != n && (o = n.async), s.noConflict = function () {
              return n.async = o, s
            };
            var a = Object.prototype.toString,
              l = Array.isArray || function (t) {
                return "[object Array]" === a.call(t)
              },
              u = function (t, e) {
                if (t.forEach) return t.forEach(e);
                for (var r = 0; r < t.length; r += 1) e(t[r], r, t)
              },
              c = function (t, e) {
                if (t.map) return t.map(e);
                var r = [];
                return u(t, function (t, i, n) {
                  r.push(e(t, i, n))
                }), r
              },
              h = function (t, e, r) {
                return t.reduce ? t.reduce(e, r) : (u(t, function (t, i, n) {
                  r = e(r, t, i, n)
                }), r)
              },
              d = function (t) {
                if (Object.keys) return Object.keys(t);
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(r);
                return e
              };
            "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function (t) {
              setImmediate(t)
            } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function (t) {
              setImmediate(t)
            }, s.setImmediate = s.nextTick) : (s.nextTick = function (t) {
              setTimeout(t, 0)
            }, s.setImmediate = s.nextTick), s.each = function (t, e, r) {
              function n(e) {
                e ? (r(e), r = function () {}) : (o += 1, o >= t.length && r())
              }
              if (r = r || function () {}, !t.length) return r();
              var o = 0;
              u(t, function (t) {
                e(t, i(n))
              })
            }, s.forEach = s.each, s.eachSeries = function (t, e, r) {
              if (r = r || function () {}, !t.length) return r();
              var i = 0,
                n = function () {
                  e(t[i], function (e) {
                    e ? (r(e), r = function () {}) : (i += 1, i >= t.length ? r() : n())
                  })
                };
              n()
            }, s.forEachSeries = s.eachSeries, s.eachLimit = function (t, e, r, i) {
              var n = p(e);
              n.apply(null, [t, r, i])
            }, s.forEachLimit = s.eachLimit;
            var p = function (t) {
                return function (e, r, i) {
                  if (i = i || function () {}, !e.length || 0 >= t) return i();
                  var n = 0,
                    o = 0,
                    s = 0;
                  ! function a() {
                    if (n >= e.length) return i();
                    for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function (t) {
                      t ? (i(t), i = function () {}) : (n += 1, s -= 1, n >= e.length ? i() : a())
                    })
                  }()
                }
              },
              f = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [s.each].concat(e))
                }
              },
              m = function (t, e) {
                return function () {
                  var r = Array.prototype.slice.call(arguments);
                  return e.apply(null, [p(t)].concat(r))
                }
              },
              g = function (t) {
                return function () {
                  var e = Array.prototype.slice.call(arguments);
                  return t.apply(null, [s.eachSeries].concat(e))
                }
              },
              v = function (t, e, r, i) {
                if (e = c(e, function (t, e) {
                    return {
                      index: e,
                      value: t
                    }
                  }), i) {
                  var n = [];
                  t(e, function (t, e) {
                    r(t.value, function (r, i) {
                      n[t.index] = i, e(r)
                    })
                  }, function (t) {
                    i(t, n)
                  })
                } else t(e, function (t, e) {
                  r(t.value, function (t) {
                    e(t)
                  })
                })
              };
            s.map = f(v), s.mapSeries = g(v), s.mapLimit = function (t, e, r, i) {
              return y(e)(t, r, i)
            };
            var y = function (t) {
              return m(t, v)
            };
            s.reduce = function (t, e, r, i) {
              s.eachSeries(t, function (t, i) {
                r(e, t, function (t, r) {
                  e = r, i(t)
                })
              }, function (t) {
                i(t, e)
              })
            }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function (t, e, r, i) {
              var n = c(t, function (t) {
                return t
              }).reverse();
              s.reduce(n, e, r, i)
            }, s.foldr = s.reduceRight;
            var _ = function (t, e, r, i) {
              var n = [];
              e = c(e, function (t, e) {
                return {
                  index: e,
                  value: t
                }
              }), t(e, function (t, e) {
                r(t.value, function (r) {
                  r && n.push(t), e()
                })
              }, function (t) {
                i(c(n.sort(function (t, e) {
                  return t.index - e.index
                }), function (t) {
                  return t.value
                }))
              })
            };
            s.filter = f(_), s.filterSeries = g(_), s.select = s.filter, s.selectSeries = s.filterSeries;
            var x = function (t, e, r, i) {
              var n = [];
              e = c(e, function (t, e) {
                return {
                  index: e,
                  value: t
                }
              }), t(e, function (t, e) {
                r(t.value, function (r) {
                  r || n.push(t), e()
                })
              }, function (t) {
                i(c(n.sort(function (t, e) {
                  return t.index - e.index
                }), function (t) {
                  return t.value
                }))
              })
            };
            s.reject = f(x), s.rejectSeries = g(x);
            var b = function (t, e, r, i) {
              t(e, function (t, e) {
                r(t, function (r) {
                  r ? (i(t), i = function () {}) : e()
                })
              }, function (t) {
                i()
              })
            };
            s.detect = f(b), s.detectSeries = g(b), s.some = function (t, e, r) {
              s.each(t, function (t, i) {
                e(t, function (t) {
                  t && (r(!0), r = function () {}), i()
                })
              }, function (t) {
                r(!1)
              })
            }, s.any = s.some, s.every = function (t, e, r) {
              s.each(t, function (t, i) {
                e(t, function (t) {
                  t || (r(!1), r = function () {}), i()
                })
              }, function (t) {
                r(!0)
              })
            }, s.all = s.every, s.sortBy = function (t, e, r) {
              s.map(t, function (t, r) {
                e(t, function (e, i) {
                  e ? r(e) : r(null, {
                    value: t,
                    criteria: i
                  })
                })
              }, function (t, e) {
                if (t) return r(t);
                var i = function (t, e) {
                  var r = t.criteria,
                    i = e.criteria;
                  return i > r ? -1 : r > i ? 1 : 0
                };
                r(null, c(e.sort(i), function (t) {
                  return t.value
                }))
              })
            }, s.auto = function (t, e) {
              e = e || function () {};
              var r = d(t),
                i = r.length;
              if (!i) return e();
              var n = {},
                o = [],
                a = function (t) {
                  o.unshift(t)
                },
                c = function (t) {
                  for (var e = 0; e < o.length; e += 1)
                    if (o[e] === t) return void o.splice(e, 1)
                },
                p = function () {
                  i--, u(o.slice(0), function (t) {
                    t()
                  })
                };
              a(function () {
                if (!i) {
                  var t = e;
                  e = function () {}, t(null, n)
                }
              }), u(r, function (r) {
                var i = l(t[r]) ? t[r] : [t[r]],
                  o = function (t) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    if (i.length <= 1 && (i = i[0]), t) {
                      var o = {};
                      u(d(n), function (t) {
                        o[t] = n[t]
                      }), o[r] = i, e(t, o), e = function () {}
                    } else n[r] = i, s.setImmediate(p)
                  },
                  f = i.slice(0, Math.abs(i.length - 1)) || [],
                  m = function () {
                    return h(f, function (t, e) {
                      return t && n.hasOwnProperty(e)
                    }, !0) && !n.hasOwnProperty(r)
                  };
                if (m()) i[i.length - 1](o, n);
                else {
                  var g = function () {
                    m() && (c(g), i[i.length - 1](o, n))
                  };
                  a(g)
                }
              })
            }, s.retry = function (t, e, r) {
              var i = 5,
                n = [];
              "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i;
              var o = function (i, o) {
                for (var a = function (t, e) {
                    return function (r) {
                      t(function (t, i) {
                        r(!t || e, {
                          err: t,
                          result: i
                        })
                      }, o)
                    }
                  }; t;) n.push(a(e, !(t -= 1)));
                s.series(n, function (t, e) {
                  e = e[e.length - 1], (i || r)(e.err, e.result)
                })
              };
              return r ? o() : o
            }, s.waterfall = function (t, e) {
              if (e = e || function () {}, !l(t)) {
                var r = new Error("First argument to waterfall must be an array of functions");
                return e(r)
              }
              if (!t.length) return e();
              var i = function (t) {
                return function (r) {
                  if (r) e.apply(null, arguments), e = function () {};
                  else {
                    var n = Array.prototype.slice.call(arguments, 1),
                      o = t.next();
                    n.push(o ? i(o) : e), s.setImmediate(function () {
                      t.apply(null, n)
                    })
                  }
                }
              };
              i(s.iterator(t))()
            };
            var T = function (t, e, r) {
              if (r = r || function () {}, l(e)) t.map(e, function (t, e) {
                t && t(function (t) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  r.length <= 1 && (r = r[0]), e.call(null, t, r)
                })
              }, r);
              else {
                var i = {};
                t.each(d(e), function (t, r) {
                  e[t](function (e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    n.length <= 1 && (n = n[0]), i[t] = n, r(e)
                  })
                }, function (t) {
                  r(t, i)
                })
              }
            };
            s.parallel = function (t, e) {
              T({
                map: s.map,
                each: s.each
              }, t, e)
            }, s.parallelLimit = function (t, e, r) {
              T({
                map: y(e),
                each: p(e)
              }, t, r)
            }, s.series = function (t, e) {
              if (e = e || function () {}, l(t)) s.mapSeries(t, function (t, e) {
                t && t(function (t) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  r.length <= 1 && (r = r[0]), e.call(null, t, r)
                })
              }, e);
              else {
                var r = {};
                s.eachSeries(d(t), function (e, i) {
                  t[e](function (t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    n.length <= 1 && (n = n[0]), r[e] = n, i(t)
                  })
                }, function (t) {
                  e(t, r)
                })
              }
            }, s.iterator = function (t) {
              var e = function (r) {
                var i = function () {
                  return t.length && t[r].apply(null, arguments), i.next()
                };
                return i.next = function () {
                  return r < t.length - 1 ? e(r + 1) : null
                }, i
              };
              return e(0)
            }, s.apply = function (t) {
              var e = Array.prototype.slice.call(arguments, 1);
              return function () {
                return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
              }
            };
            var E = function (t, e, r, i) {
              var n = [];
              t(e, function (t, e) {
                r(t, function (t, r) {
                  n = n.concat(r || []), e(t)
                })
              }, function (t) {
                i(t, n)
              })
            };
            s.concat = f(E), s.concatSeries = g(E), s.whilst = function (t, e, r) {
              t() ? e(function (i) {
                return i ? r(i) : void s.whilst(t, e, r)
              }) : r()
            }, s.doWhilst = function (t, e, r) {
              t(function (i) {
                if (i) return r(i);
                var n = Array.prototype.slice.call(arguments, 1);
                e.apply(null, n) ? s.doWhilst(t, e, r) : r()
              })
            }, s.until = function (t, e, r) {
              t() ? r() : e(function (i) {
                return i ? r(i) : void s.until(t, e, r)
              })
            }, s.doUntil = function (t, e, r) {
              t(function (i) {
                if (i) return r(i);
                var n = Array.prototype.slice.call(arguments, 1);
                e.apply(null, n) ? r() : s.doUntil(t, e, r)
              })
            }, s.queue = function (t, e) {
              function r(t, e, r, i) {
                return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function () {
                  t.drain && t.drain()
                }) : void u(e, function (e) {
                  var n = {
                    data: e,
                    callback: "function" == typeof i ? i : null
                  };
                  r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                })
              }
              void 0 === e && (e = 1);
              var n = 0,
                o = {
                  tasks: [],
                  concurrency: e,
                  saturated: null,
                  empty: null,
                  drain: null,
                  started: !1,
                  paused: !1,
                  push: function (t, e) {
                    r(o, t, !1, e)
                  },
                  kill: function () {
                    o.drain = null, o.tasks = []
                  },
                  unshift: function (t, e) {
                    r(o, t, !0, e)
                  },
                  process: function () {
                    if (!o.paused && n < o.concurrency && o.tasks.length) {
                      var e = o.tasks.shift();
                      o.empty && 0 === o.tasks.length && o.empty(), n += 1;
                      var r = function () {
                          n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process()
                        },
                        s = i(r);
                      t(e.data, s)
                    }
                  },
                  length: function () {
                    return o.tasks.length
                  },
                  running: function () {
                    return n
                  },
                  idle: function () {
                    return o.tasks.length + n === 0
                  },
                  pause: function () {
                    o.paused !== !0 && (o.paused = !0, o.process())
                  },
                  resume: function () {
                    o.paused !== !1 && (o.paused = !1, o.process())
                  }
                };
              return o
            }, s.priorityQueue = function (t, e) {
              function r(t, e) {
                return t.priority - e.priority
              }

              function i(t, e, r) {
                for (var i = -1, n = t.length - 1; n > i;) {
                  var o = i + (n - i + 1 >>> 1);
                  r(e, t[o]) >= 0 ? i = o : n = o - 1
                }
                return i
              }

              function n(t, e, n, o) {
                return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function () {
                  t.drain && t.drain()
                }) : void u(e, function (e) {
                  var a = {
                    data: e,
                    priority: n,
                    callback: "function" == typeof o ? o : null
                  };
                  t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                })
              }
              var o = s.queue(t, e);
              return o.push = function (t, e, r) {
                n(o, t, e, r)
              }, delete o.unshift, o
            }, s.cargo = function (t, e) {
              var r = !1,
                i = [],
                n = {
                  tasks: i,
                  payload: e,
                  saturated: null,
                  empty: null,
                  drain: null,
                  drained: !0,
                  push: function (t, r) {
                    l(t) || (t = [t]), u(t, function (t) {
                      i.push({
                        data: t,
                        callback: "function" == typeof r ? r : null
                      }), n.drained = !1, n.saturated && i.length === e && n.saturated()
                    }), s.setImmediate(n.process)
                  },
                  process: function o() {
                    if (!r) {
                      if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0);
                      var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                        a = c(s, function (t) {
                          return t.data
                        });
                      n.empty && n.empty(), r = !0, t(a, function () {
                        r = !1;
                        var t = arguments;
                        u(s, function (e) {
                          e.callback && e.callback.apply(null, t)
                        }), o()
                      })
                    }
                  },
                  length: function () {
                    return i.length
                  },
                  running: function () {
                    return r
                  }
                };
              return n
            };
            var w = function (t) {
              return function (e) {
                var r = Array.prototype.slice.call(arguments, 1);
                e.apply(null, r.concat([function (e) {
                  var r = Array.prototype.slice.call(arguments, 1);
                  "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && u(r, function (e) {
                    console[t](e)
                  }))
                }]))
              }
            };
            s.log = w("log"), s.dir = w("dir"), s.memoize = function (t, e) {
              var r = {},
                i = {};
              e = e || function (t) {
                return t
              };
              var n = function () {
                var n = Array.prototype.slice.call(arguments),
                  o = n.pop(),
                  a = e.apply(null, n);
                a in r ? s.nextTick(function () {
                  o.apply(null, r[a])
                }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function () {
                  r[a] = arguments;
                  var t = i[a];
                  delete i[a];
                  for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments)
                }])))
              };
              return n.memo = r, n.unmemoized = t, n
            }, s.unmemoize = function (t) {
              return function () {
                return (t.unmemoized || t).apply(null, arguments)
              }
            }, s.times = function (t, e, r) {
              for (var i = [], n = 0; t > n; n++) i.push(n);
              return s.map(i, e, r)
            }, s.timesSeries = function (t, e, r) {
              for (var i = [], n = 0; t > n; n++) i.push(n);
              return s.mapSeries(i, e, r)
            }, s.seq = function () {
              var t = arguments;
              return function () {
                var e = this,
                  r = Array.prototype.slice.call(arguments),
                  i = r.pop();
                s.reduce(t, r, function (t, r, i) {
                  r.apply(e, t.concat([function () {
                    var t = arguments[0],
                      e = Array.prototype.slice.call(arguments, 1);
                    i(t, e)
                  }]))
                }, function (t, r) {
                  i.apply(e, [t].concat(r))
                })
              }
            }, s.compose = function () {
              return s.seq.apply(null, Array.prototype.reverse.call(arguments))
            };
            var C = function (t, e) {
              var r = function () {
                var r = this,
                  i = Array.prototype.slice.call(arguments),
                  n = i.pop();
                return t(e, function (t, e) {
                  t.apply(r, i.concat([e]))
                }, n)
              };
              if (arguments.length > 2) {
                var i = Array.prototype.slice.call(arguments, 2);
                return r.apply(this, i)
              }
              return r
            };
            s.applyEach = f(C), s.applyEachSeries = g(C), s.forever = function (t, e) {
              function r(i) {
                if (i) {
                  if (e) return e(i);
                  throw i
                }
                t(r)
              }
              r()
            }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function () {
              return s
            }) : n.async = s
          }()
        }).call(this, e("_process"))
      }, {
        _process: 4
      }],
      14: [function (t, e, r) {
        arguments[4][11][0].apply(r, arguments)
      }, {
        dup: 11
      }],
      15: [function (t, e, r) {
        function i(t, e) {
          a.call(this), e = e || 10, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = n.queue(this._boundLoadResource, e), this.resources = {}
        }
        var n = t("async"),
          o = t("url"),
          s = t("./Resource"),
          a = t("eventemitter3");
        i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.add = i.prototype.enqueue = function (t, e, r, i) {
          if (Array.isArray(t)) {
            for (var n = 0; n < t.length; ++n) this.add(t[n]);
            return this
          }
          if ("object" == typeof t && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
          if ("function" == typeof r && (i = r, r = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.');
          return e = this._handleBaseUrl(e), this.resources[t] = new s(t, e, r), "function" == typeof i && this.resources[t].once("afterMiddleware", i), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = 100 / this._buffer.length), this
        }, i.prototype._handleBaseUrl = function (t) {
          var e = o.parse(t);
          return e.protocol || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && t.lastIndexOf("/") !== t.length - 1 ? this.baseUrl + "/" + t : this.baseUrl + t
        }, i.prototype.before = i.prototype.pre = function (t) {
          return this._beforeMiddleware.push(t), this
        }, i.prototype.after = i.prototype.use = function (t) {
          return this._afterMiddleware.push(t), this
        }, i.prototype.reset = function () {
          this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {}
        }, i.prototype.load = function (t) {
          if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
          this.emit("start", this);
          for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]);
          return this._buffer.length = 0, this
        }, i.prototype._loadResource = function (t, e) {
          var r = this;
          t._dequeue = e, this._runMiddleware(t, this._beforeMiddleware, function () {
            t.load(r._boundOnLoad)
          })
        }, i.prototype._onComplete = function () {
          this.emit("complete", this, this.resources)
        }, i.prototype._onLoad = function (t) {
          this.progress += this._progressChunk, this.emit("progress", this, t), t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t), this._runMiddleware(t, this._afterMiddleware, function () {
            t.emit("afterMiddleware", t), this._numToLoad--, 0 === this._numToLoad && this._onComplete()
          }), t._dequeue()
        }, i.prototype._runMiddleware = function (t, e, r) {
          var i = this;
          n.eachSeries(e, function (e, r) {
            e.call(i, t, r)
          }, r.bind(this, t))
        }, i.LOAD_TYPE = s.LOAD_TYPE, i.XHR_READY_STATE = s.XHR_READY_STATE, i.XHR_RESPONSE_TYPE = s.XHR_RESPONSE_TYPE
      }, {
        "./Resource": 16,
        async: 13,
        eventemitter3: 14,
        url: 9
      }],
      16: [function (t, e, r) {
        function i(t, e, r) {
          if (s.call(this), r = r || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
          this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = r.crossOrigin === !0 ? "anonymous" : null, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
        }

        function n(t) {
          return t.toString().replace("object ", "")
        }

        function o(t, e, r) {
          e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
        }
        var s = t("eventemitter3"),
          a = t("url"),
          l = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
          u = null;
        i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.complete = function () {
          this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this)
        }, i.prototype.load = function (t) {
          switch (this.emit("start", this), t && this.once("complete", t), "string" != typeof this.crossOrigin && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
          case i.LOAD_TYPE.IMAGE:
            this._loadImage();
            break;
          case i.LOAD_TYPE.AUDIO:
            this._loadElement("audio");
            break;
          case i.LOAD_TYPE.VIDEO:
            this._loadElement("video");
            break;
          case i.LOAD_TYPE.XHR:
          default:
            l && this.crossOrigin ? this._loadXdr() : this._loadXhr()
          }
        }, i.prototype._loadImage = function () {
          this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
        }, i.prototype._loadElement = function (t) {
          if (this.data = document.createElement(t), Array.isArray(this.url))
            for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
          else this.data.appendChild(this._createSource(t, this.url));
          this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
        }, i.prototype._loadXhr = function () {
          "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
          var t = this.xhr = new XMLHttpRequest;
          t.open("GET", this.url, !0), t.responseType = this.xhrType === i.XHR_RESPONSE_TYPE.JSON || this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT ? i.XHR_RESPONSE_TYPE.TEXT : this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
        }, i.prototype._loadXdr = function () {
          "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
          var t = this.xhr = new XDomainRequest;
          t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
            t.send()
          }, 0)
        }, i.prototype._createSource = function (t, e, r) {
          r || (r = t + "/" + e.substr(e.lastIndexOf(".") + 1));
          var i = document.createElement("source");
          return i.src = e, i.type = r, i
        }, i.prototype._onError = function (t) {
          this.error = new Error("Failed to load element using " + t.target.nodeName), this.complete()
        }, i.prototype._onProgress = function (t) {
          t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
        }, i.prototype._xhrOnError = function () {
          this.error = new Error(n(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete()
        }, i.prototype._xhrOnAbort = function () {
          this.error = new Error(n(this.xhr) + " Request was aborted by the user."), this.complete()
        }, i.prototype._xdrOnTimeout = function () {
          this.error = new Error(n(this.xhr) + " Request timed out."), this.complete()
        }, i.prototype._xhrOnLoad = function () {
          var t = this.xhr,
            e = void 0 !== t.status ? t.status : 200;
          if (200 === e || 204 === e || 0 === e && t.responseText.length > 0)
            if (this.xhrType === i.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
            else if (this.xhrType === i.XHR_RESPONSE_TYPE.JSON) try {
              this.data = JSON.parse(t.responseText), this.isJson = !0
            } catch (r) {
              this.error = new Error("Error trying to parse loaded json:", r)
            } else if (this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT) try {
              if (window.DOMParser) {
                var n = new DOMParser;
                this.data = n.parseFromString(t.responseText, "text/xml")
              } else {
                var o = document.createElement("div");
                o.innerHTML = t.responseText, this.data = o
              }
              this.isXml = !0
            } catch (r) {
              this.error = new Error("Error trying to parse loaded xml:", r)
            } else this.data = t.response || t.responseText;
            else this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
          this.complete()
        }, i.prototype._determineCrossOrigin = function (t, e) {
          if (0 === t.indexOf("data:")) return "";
          e = e || window.location, u || (u = document.createElement("a")), u.href = t, t = a.parse(u.href);
          var r = !t.port && "" === e.port || t.port === e.port;
          return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous"
        }, i.prototype._determineXhrType = function () {
          return i._xhrTypeMap[this._getExtension()] || i.XHR_RESPONSE_TYPE.TEXT
        }, i.prototype._determineLoadType = function () {
          return i._loadTypeMap[this._getExtension()] || i.LOAD_TYPE.XHR
        }, i.prototype._getExtension = function () {
          var t, e = this.url;
          if (this.isDataUrl) {
            var r = e.indexOf("/");
            t = e.substring(r + 1, e.indexOf(";", r))
          } else {
            var i = e.indexOf("?"); - 1 !== i && (e = e.substring(0, i)), t = e.substring(e.lastIndexOf(".") + 1)
          }
          return t
        }, i.prototype._getMimeFromXhrType = function (t) {
          switch (t) {
          case i.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";
          case i.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";
          case i.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";
          case i.XHR_RESPONSE_TYPE.JSON:
            return "application/json";
          case i.XHR_RESPONSE_TYPE.DEFAULT:
          case i.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain"
          }
        }, i.LOAD_TYPE = {
          XHR: 1,
          IMAGE: 2,
          AUDIO: 3,
          VIDEO: 4
        }, i.XHR_READY_STATE = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4
        }, i.XHR_RESPONSE_TYPE = {
          DEFAULT: "text",
          BUFFER: "arraybuffer",
          BLOB: "blob",
          DOCUMENT: "document",
          JSON: "json",
          TEXT: "text"
        }, i._loadTypeMap = {
          gif: i.LOAD_TYPE.IMAGE,
          png: i.LOAD_TYPE.IMAGE,
          bmp: i.LOAD_TYPE.IMAGE,
          jpg: i.LOAD_TYPE.IMAGE,
          jpeg: i.LOAD_TYPE.IMAGE,
          tif: i.LOAD_TYPE.IMAGE,
          tiff: i.LOAD_TYPE.IMAGE,
          webp: i.LOAD_TYPE.IMAGE,
          tga: i.LOAD_TYPE.IMAGE
        }, i._xhrTypeMap = {
          xhtml: i.XHR_RESPONSE_TYPE.DOCUMENT,
          html: i.XHR_RESPONSE_TYPE.DOCUMENT,
          htm: i.XHR_RESPONSE_TYPE.DOCUMENT,
          xml: i.XHR_RESPONSE_TYPE.DOCUMENT,
          tmx: i.XHR_RESPONSE_TYPE.DOCUMENT,
          tsx: i.XHR_RESPONSE_TYPE.DOCUMENT,
          svg: i.XHR_RESPONSE_TYPE.DOCUMENT,
          gif: i.XHR_RESPONSE_TYPE.BLOB,
          png: i.XHR_RESPONSE_TYPE.BLOB,
          bmp: i.XHR_RESPONSE_TYPE.BLOB,
          jpg: i.XHR_RESPONSE_TYPE.BLOB,
          jpeg: i.XHR_RESPONSE_TYPE.BLOB,
          tif: i.XHR_RESPONSE_TYPE.BLOB,
          tiff: i.XHR_RESPONSE_TYPE.BLOB,
          webp: i.XHR_RESPONSE_TYPE.BLOB,
          tga: i.XHR_RESPONSE_TYPE.BLOB,
          json: i.XHR_RESPONSE_TYPE.JSON,
          text: i.XHR_RESPONSE_TYPE.TEXT,
          txt: i.XHR_RESPONSE_TYPE.TEXT
        }, i.setExtensionLoadType = function (t, e) {
          o(i._loadTypeMap, t, e)
        }, i.setExtensionXhrType = function (t, e) {
          o(i._xhrTypeMap, t, e)
        }
      }, {
        eventemitter3: 14,
        url: 9
      }],
      17: [function (t, e, r) {
        e.exports = {
          _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encodeBinary: function (t) {
            for (var e, r = "", i = new Array(4), n = 0, o = 0, s = 0; n < t.length;) {
              for (e = new Array(3), o = 0; o < e.length; o++) e[o] = n < t.length ? 255 & t.charCodeAt(n++) : 0;
              switch (i[0] = e[0] >> 2, i[1] = (3 & e[0]) << 4 | e[1] >> 4, i[2] = (15 & e[1]) << 2 | e[2] >> 6, i[3] = 63 & e[2], s = n - (t.length - 1)) {
              case 2:
                i[3] = 64, i[2] = 64;
                break;
              case 1:
                i[3] = 64
              }
              for (o = 0; o < i.length; o++) r += this._keyStr.charAt(i[o])
            }
            return r
          }
        }
      }, {}],
      18: [function (t, e, r) {
        e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
          caching: {
            memory: t("./middlewares/caching/memory")
          },
          parsing: {
            blob: t("./middlewares/parsing/blob")
          }
        }
      }, {
        "./Loader": 15,
        "./Resource": 16,
        "./middlewares/caching/memory": 19,
        "./middlewares/parsing/blob": 20
      }],
      19: [function (t, e, r) {
        var i = {};
        e.exports = function () {
          return function (t, e) {
            i[t.url] ? (t.data = i[t.url], t.complete()) : (t.once("complete", function () {
              i[this.url] = this.data
            }), e())
          }
        }
      }, {}],
      20: [function (t, e, r) {
        var i = t("../../Resource"),
          n = t("../../b64");
        window.URL = window.URL || window.webkitURL, e.exports = function () {
          return function (t, e) {
            if (!t.data) return e();
            if (t.xhr && t.xhrType === i.XHR_RESPONSE_TYPE.BLOB)
              if (window.Blob && "string" != typeof t.data) {
                if (0 === t.data.type.indexOf("image")) {
                  var r = URL.createObjectURL(t.data);
                  t.blob = t.data, t.data = new Image, t.data.src = r, t.isImage = !0, t.data.onload = function () {
                    URL.revokeObjectURL(r), t.data.onload = null, e()
                  }
                }
              } else {
                var o = t.xhr.getResponseHeader("content-type");
                o && 0 === o.indexOf("image") && (t.data = new Image, t.data.src = "data:" + o + ";base64," + n.encodeBinary(t.xhr.responseText), t.isImage = !0, t.data.onload = function () {
                  t.data.onload = null, e()
                })
              } else e()
          }
        }
      }, {
        "../../Resource": 16,
        "../../b64": 17
      }],
      21: [function (t, e, r) {
        e.exports = {
          name: "pixi.js",
          version: "3.0.7",
          description: "Pixi.js is a fast lightweight 2D library that works across all devices.",
          author: "Mat Groves",
          contributors: ["Chad Engler <chad@pantherdev.com>", "Richard Davey <rdavey@gmail.com>"],
          main: "./src/index.js",
          homepage: "http://goodboydigital.com/",
          bugs: "https://github.com/GoodBoyDigital/pixi.js/issues",
          license: "MIT",
          repository: {
            type: "git",
            url: "https://github.com/GoodBoyDigital/pixi.js.git"
          },
          scripts: {
            start: "gulp && gulp watch",
            test: "gulp && testem ci",
            build: "gulp",
            docs: "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"
          },
          files: ["bin/", "src/"],
          dependencies: {
            async: "^0.9.0",
            brfs: "^1.4.0",
            earcut: "^2.0.1",
            eventemitter3: "^1.1.0",
            "object-assign": "^2.0.0",
            "resource-loader": "^1.6.1"
          },
          devDependencies: {
            browserify: "^10.2.3",
            chai: "^3.0.0",
            del: "^1.2.0",
            gulp: "^3.9.0",
            "gulp-cached": "^1.1.0",
            "gulp-concat": "^2.5.2",
            "gulp-debug": "^2.0.1",
            "gulp-jshint": "^1.11.0",
            "gulp-mirror": "^0.4.0",
            "gulp-plumber": "^1.0.1",
            "gulp-rename": "^1.2.2",
            "gulp-sourcemaps": "^1.5.2",
            "gulp-uglify": "^1.2.0",
            "gulp-util": "^3.0.5",
            "jaguarjs-jsdoc": "git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",
            jsdoc: "^3.3.0",
            "jshint-summary": "^0.4.0",
            minimist: "^1.1.1",
            mocha: "^2.2.5",
            "require-dir": "^0.3.0",
            "run-sequence": "^1.1.0",
            testem: "^0.8.3",
            "vinyl-buffer": "^1.0.0",
            "vinyl-source-stream": "^1.1.0",
            watchify: "^3.2.1"
          },
          browserify: {
            transform: ["brfs"]
          }
        }
      }, {}],
      22: [function (t, e, r) {
        var i = {
          VERSION: t("../../package.json").version,
          PI_2: 2 * Math.PI,
          RAD_TO_DEG: 180 / Math.PI,
          DEG_TO_RAD: Math.PI / 180,
          TARGET_FPMS: .06,
          RENDERER_TYPE: {
            UNKNOWN: 0,
            WEBGL: 1,
            CANVAS: 2
          },
          BLEND_MODES: {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16
          },
          DRAW_MODES: {
            POINTS: 0,
            LINES: 1,
            LINE_LOOP: 2,
            LINE_STRIP: 3,
            TRIANGLES: 4,
            TRIANGLE_STRIP: 5,
            TRIANGLE_FAN: 6
          },
          SCALE_MODES: {
            DEFAULT: 0,
            LINEAR: 0,
            NEAREST: 1
          },
          RETINA_PREFIX: /@(.+)x/,
          RESOLUTION: 1,
          FILTER_RESOLUTION: 1,
          DEFAULT_RENDER_OPTIONS: {
            view: null,
            resolution: 1,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1
          },
          SHAPES: {
            POLY: 0,
            RECT: 1,
            CIRC: 2,
            ELIP: 3,
            RREC: 4
          },
          SPRITE_BATCH_SIZE: 2e3
        };
        e.exports = i
      }, {
        "../../package.json": 21
      }],
      23: [function (t, e, r) {
        function i() {
          o.call(this), this.children = []
        }
        var n = t("../math"),
          o = t("./DisplayObject"),
          s = t("../textures/RenderTexture"),
          a = new n.Matrix;
        i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          width: {
            get: function () {
              return this.scale.x * this.getLocalBounds().width
            },
            set: function (t) {
              var e = this.getLocalBounds().width;
              this.scale.x = 0 !== e ? t / e : 1, this._width = t
            }
          },
          height: {
            get: function () {
              return this.scale.y * this.getLocalBounds().height
            },
            set: function (t) {
              var e = this.getLocalBounds().height;
              this.scale.y = 0 !== e ? t / e : 1, this._height = t
            }
          }
        }), i.prototype.addChild = function (t) {
          return this.addChildAt(t, this.children.length)
        }, i.prototype.addChildAt = function (t, e) {
          if (t === this) return t;
          if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.emit("added", this), t;
          throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
        }, i.prototype.swapChildren = function (t, e) {
          if (t !== e) {
            var r = this.getChildIndex(t),
              i = this.getChildIndex(e);
            if (0 > r || 0 > i) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
            this.children[r] = e, this.children[i] = t
          }
        }, i.prototype.getChildIndex = function (t) {
          var e = this.children.indexOf(t);
          if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
          return e
        }, i.prototype.setChildIndex = function (t, e) {
          if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds");
          var r = this.getChildIndex(t);
          this.children.splice(r, 1), this.children.splice(e, 0, t)
        }, i.prototype.getChildAt = function (t) {
          if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
          return this.children[t]
        }, i.prototype.removeChild = function (t) {
          var e = this.children.indexOf(t);
          return -1 !== e ? this.removeChildAt(e) : void 0
        }, i.prototype.removeChildAt = function (t) {
          var e = this.getChildAt(t);
          return e.parent = null, this.children.splice(t, 1), e.emit("removed", this), e
        }, i.prototype.removeChildren = function (t, e) {
          var r = t || 0,
            i = "number" == typeof e ? e : this.children.length,
            n = i - r;
          if (n > 0 && i >= n) {
            for (var o = this.children.splice(r, n), s = 0; s < o.length; ++s) o[s].parent = null;
            return o
          }
          if (0 === n && 0 === this.children.length) return [];
          throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
        }, i.prototype.generateTexture = function (t, e, r) {
          var i = this.getLocalBounds(),
            n = new s(t, 0 | i.width, 0 | i.height, r, e);
          return a.tx = -i.x, a.ty = -i.y, n.render(this, a), n
        }, i.prototype.updateTransform = function () {
          if (this.visible) {
            this.displayObjectUpdateTransform();
            for (var t = 0, e = this.children.length; e > t; ++t) this.children[t].updateTransform()
          }
        }, i.prototype.containerUpdateTransform = i.prototype.updateTransform, i.prototype.getBounds = function () {
          if (!this._currentBounds) {
            if (0 === this.children.length) return n.Rectangle.EMPTY;
            for (var t, e, r, i = 1 / 0, o = 1 / 0, s = -(1 / 0), a = -(1 / 0), l = !1, u = 0, c = this.children.length; c > u; ++u) {
              var h = this.children[u];
              h.visible && (l = !0, t = this.children[u].getBounds(), i = i < t.x ? i : t.x, o = o < t.y ? o : t.y, e = t.width + t.x, r = t.height + t.y, s = s > e ? s : e, a = a > r ? a : r)
            }
            if (!l) return n.Rectangle.EMPTY;
            var d = this._bounds;
            d.x = i, d.y = o, d.width = s - i, d.height = a - o, this._currentBounds = d
          }
          return this._currentBounds
        }, i.prototype.containerGetBounds = i.prototype.getBounds, i.prototype.getLocalBounds = function () {
          var t = this.worldTransform;
          this.worldTransform = n.Matrix.IDENTITY;
          for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].updateTransform();
          return this.worldTransform = t, this._currentBounds = null, this.getBounds(n.Matrix.IDENTITY)
        }, i.prototype.renderWebGL = function (t) {
          if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
            var e, r;
            if (this._mask || this._filters) {
              for (t.currentRenderer.flush(), this._filters && t.filterManager.pushFilter(this, this._filters), this._mask && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, r = this.children.length; r > e; e++) this.children[e].renderWebGL(t);
              t.currentRenderer.flush(), this._mask && t.maskManager.popMask(this, this._mask), this._filters && t.filterManager.popFilter(), t.currentRenderer.start()
            } else
              for (this._renderWebGL(t), e = 0, r = this.children.length; r > e; ++e) this.children[e].renderWebGL(t)
          }
        }, i.prototype._renderWebGL = function (t) {}, i.prototype._renderCanvas = function (t) {}, i.prototype.renderCanvas = function (t) {
          if (this.visible && !(this.alpha <= 0) && this.renderable) {
            this._mask && t.maskManager.pushMask(this._mask, t), this._renderCanvas(t);
            for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].renderCanvas(t);
            this._mask && t.maskManager.popMask(t)
          }
        }, i.prototype.destroy = function (t) {
          if (o.prototype.destroy.call(this), t)
            for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].destroy(t);
          this.removeChildren(), this.children = null
        }
      }, {
        "../math": 32,
        "../textures/RenderTexture": 70,
        "./DisplayObject": 24
      }],
      24: [function (t, e, r) {
        function i() {
          s.call(this), this.position = new n.Point, this.scale = new n.Point(1, 1), this.pivot = new n.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.worldTransform = new n.Matrix, this.filterArea = null, this._sr = 0, this._cr = 1, this._bounds = new n.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cachedObject = null
        }
        var n = t("../math"),
          o = t("../textures/RenderTexture"),
          s = t("eventemitter3"),
          a = t("../const"),
          l = new n.Matrix;
        i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          x: {
            get: function () {
              return this.position.x
            },
            set: function (t) {
              this.position.x = t
            }
          },
          y: {
            get: function () {
              return this.position.y
            },
            set: function (t) {
              this.position.y = t
            }
          },
          worldVisible: {
            get: function () {
              var t = this;
              do {
                if (!t.visible) return !1;
                t = t.parent
              } while (t);
              return !0
            }
          },
          mask: {
            get: function () {
              return this._mask
            },
            set: function (t) {
              this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
            }
          },
          filters: {
            get: function () {
              return this._filters && this._filters.slice()
            },
            set: function (t) {
              this._filters = t && t.slice()
            }
          }
        }), i.prototype.updateTransform = function () {
          var t, e, r, i, n, o, s = this.parent.worldTransform,
            l = this.worldTransform;
          this.rotation % a.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, e = this._sr * this.scale.x, r = -this._sr * this.scale.y, i = this._cr * this.scale.y, n = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * r, o -= this.pivot.x * e + this.pivot.y * i), l.a = t * s.a + e * s.c, l.b = t * s.b + e * s.d, l.c = r * s.a + i * s.c, l.d = r * s.b + i * s.d, l.tx = n * s.a + o * s.c + s.tx, l.ty = n * s.b + o * s.d + s.ty) : (t = this.scale.x, i = this.scale.y, n = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * i, l.a = t * s.a, l.b = t * s.b, l.c = i * s.c, l.d = i * s.d, l.tx = n * s.a + o * s.c + s.tx, l.ty = n * s.b + o * s.d + s.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null
        }, i.prototype.displayObjectUpdateTransform = i.prototype.updateTransform, i.prototype.getBounds = function (t) {
          return n.Rectangle.EMPTY
        }, i.prototype.getLocalBounds = function () {
          return this.getBounds(n.Matrix.IDENTITY)
        }, i.prototype.toGlobal = function (t) {
          return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
        }, i.prototype.toLocal = function (t, e) {
          return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
        }, i.prototype.renderWebGL = function (t) {}, i.prototype.renderCanvas = function (t) {}, i.prototype.generateTexture = function (t, e, r) {
          var i = this.getLocalBounds(),
            n = new o(t, 0 | i.width, 0 | i.height, e, r);
          return l.tx = -i.x, l.ty = -i.y, n.render(this, l), n
        }, i.prototype.destroy = function () {
          this.position = null, this.scale = null, this.pivot = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.worldTransform = null, this.filterArea = null
        }
      }, {
        "../const": 22,
        "../math": 32,
        "../textures/RenderTexture": 70,
        eventemitter3: 11
      }],
      25: [function (t, e, r) {
        function i() {
          n.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = c.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new u.Rectangle(0, 0, 1, 1), this.dirty = !0, this.glDirty = !1, this.boundsDirty = !0, this.cachedSpriteDirty = !1
        }
        var n = t("../display/Container"),
          o = t("../textures/Texture"),
          s = t("../renderers/canvas/utils/CanvasBuffer"),
          a = t("../renderers/canvas/utils/CanvasGraphics"),
          l = t("./GraphicsData"),
          u = t("../math"),
          c = t("../const"),
          h = new u.Point;
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {}), i.prototype.clone = function () {
          var t = new i;
          t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = this.dirty, t.glDirty = this.glDirty, t.cachedSpriteDirty = this.cachedSpriteDirty;
          for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
          return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
        }, i.prototype.lineStyle = function (t, e, r) {
          return this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === r ? 1 : r, this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new u.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth,
            this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha)), this
        }, i.prototype.moveTo = function (t, e) {
          return this.drawShape(new u.Polygon([t, e])), this
        }, i.prototype.lineTo = function (t, e) {
          return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
        }, i.prototype.quadraticCurveTo = function (t, e, r, i) {
          this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
          var n, o, s = 20,
            a = this.currentPath.shape.points;
          0 === a.length && this.moveTo(0, 0);
          for (var l = a[a.length - 2], u = a[a.length - 1], c = 0, h = 1; s >= h; ++h) c = h / s, n = l + (t - l) * c, o = u + (e - u) * c, a.push(n + (t + (r - t) * c - n) * c, o + (e + (i - e) * c - o) * c);
          return this.dirty = this.boundsDirty = !0, this
        }, i.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
          this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
          for (var s, a, l, u, c, h = 20, d = this.currentPath.shape.points, p = d[d.length - 2], f = d[d.length - 1], m = 0, g = 1; h >= g; ++g) m = g / h, s = 1 - m, a = s * s, l = a * s, u = m * m, c = u * m, d.push(l * p + 3 * a * m * t + 3 * s * u * r + c * n, l * f + 3 * a * m * e + 3 * s * u * i + c * o);
          return this.dirty = this.boundsDirty = !0, this
        }, i.prototype.arcTo = function (t, e, r, i, n) {
          this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
          var o = this.currentPath.shape.points,
            s = o[o.length - 2],
            a = o[o.length - 1],
            l = a - e,
            u = s - t,
            c = i - e,
            h = r - t,
            d = Math.abs(l * h - u * c);
          if (1e-8 > d || 0 === n)(o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e);
          else {
            var p = l * l + u * u,
              f = c * c + h * h,
              m = l * c + u * h,
              g = n * Math.sqrt(p) / d,
              v = n * Math.sqrt(f) / d,
              y = g * m / p,
              _ = v * m / f,
              x = g * h + v * u,
              b = g * c + v * l,
              T = u * (v + y),
              E = l * (v + y),
              w = h * (g + _),
              C = c * (g + _),
              S = Math.atan2(E - b, T - x),
              A = Math.atan2(C - b, w - x);
            this.arc(x + t, b + e, n, S, A, u * c > h * l)
          }
          return this.dirty = this.boundsDirty = !0, this
        }, i.prototype.arc = function (t, e, r, i, n, o) {
          if (o = o || !1, i === n) return this;
          !o && i >= n ? n += 2 * Math.PI : o && n >= i && (i += 2 * Math.PI);
          var s = o ? -1 * (i - n) : n - i,
            a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
          if (0 === s) return this;
          var l = t + Math.cos(i) * r,
            u = e + Math.sin(i) * r;
          this.currentPath ? o && this.filling ? this.currentPath.shape.points.push(t, e) : this.currentPath.shape.points.push(l, u) : o && this.filling ? this.moveTo(t, e) : this.moveTo(l, u);
          for (var c = this.currentPath.shape.points, h = s / (2 * a), d = 2 * h, p = Math.cos(h), f = Math.sin(h), m = a - 1, g = m % 1 / m, v = 0; m >= v; v++) {
            var y = v + g * v,
              _ = h + i + d * y,
              x = Math.cos(_),
              b = -Math.sin(_);
            c.push((p * x + f * b) * r + t, (p * -b + f * x) * r + e)
          }
          return this.dirty = this.boundsDirty = !0, this
        }, i.prototype.beginFill = function (t, e) {
          return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
        }, i.prototype.endFill = function () {
          return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
        }, i.prototype.drawRect = function (t, e, r, i) {
          return this.drawShape(new u.Rectangle(t, e, r, i)), this
        }, i.prototype.drawRoundedRect = function (t, e, r, i, n) {
          return this.drawShape(new u.RoundedRectangle(t, e, r, i, n)), this
        }, i.prototype.drawCircle = function (t, e, r) {
          return this.drawShape(new u.Circle(t, e, r)), this
        }, i.prototype.drawEllipse = function (t, e, r, i) {
          return this.drawShape(new u.Ellipse(t, e, r, i)), this
        }, i.prototype.drawPolygon = function (t) {
          var e = t;
          if (!Array.isArray(e)) {
            e = new Array(arguments.length);
            for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
          }
          return this.drawShape(new u.Polygon(e)), this
        }, i.prototype.clear = function () {
          return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
        }, i.prototype.generateTexture = function (t, e, r) {
          e = e || 1;
          var i = this.getLocalBounds(),
            n = new s(i.width * e, i.height * e),
            l = o.fromCanvas(n.canvas, r);
          return l.baseTexture.resolution = e, n.context.scale(e, e), n.context.translate(-i.x, -i.y), a.renderGraphics(this, n.context), l
        }, i.prototype._renderWebGL = function (t) {
          this.glDirty && (this.dirty = !0, this.glDirty = !1), t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this)
        }, i.prototype._renderCanvas = function (t) {
          if (this.isMask !== !0) {
            this._prevTint !== this.tint && (this.dirty = !0, this._prevTint = this.tint);
            var e = t.context,
              r = this.worldTransform;
            this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, e.globalCompositeOperation = t.blendModes[t.currentBlendMode]);
            var i = t.resolution;
            e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i, r.ty * i), a.renderGraphics(this, e)
          }
        }, i.prototype.getBounds = function (t) {
          if (!this._currentBounds) {
            if (!this.renderable) return u.Rectangle.EMPTY;
            this.boundsDirty && (this.updateLocalBounds(), this.glDirty = !0, this.cachedSpriteDirty = !0, this.boundsDirty = !1);
            var e = this._localBounds,
              r = e.x,
              i = e.width + e.x,
              n = e.y,
              o = e.height + e.y,
              s = t || this.worldTransform,
              a = s.a,
              l = s.b,
              c = s.c,
              h = s.d,
              d = s.tx,
              p = s.ty,
              f = a * i + c * o + d,
              m = h * o + l * i + p,
              g = a * r + c * o + d,
              v = h * o + l * r + p,
              y = a * r + c * n + d,
              _ = h * n + l * r + p,
              x = a * i + c * n + d,
              b = h * n + l * i + p,
              T = f,
              E = m,
              w = f,
              C = m;
            w = w > g ? g : w, w = w > y ? y : w, w = w > x ? x : w, C = C > v ? v : C, C = C > _ ? _ : C, C = C > b ? b : C, T = g > T ? g : T, T = y > T ? y : T, T = x > T ? x : T, E = v > E ? v : E, E = _ > E ? _ : E, E = b > E ? b : E, this._bounds.x = w, this._bounds.width = T - w, this._bounds.y = C, this._bounds.height = E - C, this._currentBounds = this._bounds
          }
          return this._currentBounds
        }, i.prototype.containsPoint = function (t) {
          this.worldTransform.applyInverse(t, h);
          for (var e = this.graphicsData, r = 0; r < e.length; r++) {
            var i = e[r];
            if (i.fill && i.shape && i.shape.contains(h.x, h.y)) return !0
          }
          return !1
        }, i.prototype.updateLocalBounds = function () {
          var t = 1 / 0,
            e = -(1 / 0),
            r = 1 / 0,
            i = -(1 / 0);
          if (this.graphicsData.length)
            for (var n, o, s, a, l, u, h = 0; h < this.graphicsData.length; h++) {
              var d = this.graphicsData[h],
                p = d.type,
                f = d.lineWidth;
              if (n = d.shape, p === c.SHAPES.RECT || p === c.SHAPES.RREC) s = n.x - f / 2, a = n.y - f / 2, l = n.width + f, u = n.height + f, t = t > s ? s : t, e = s + l > e ? s + l : e, r = r > a ? a : r, i = a + u > i ? a + u : i;
              else if (p === c.SHAPES.CIRC) s = n.x, a = n.y, l = n.radius + f / 2, u = n.radius + f / 2, t = t > s - l ? s - l : t, e = s + l > e ? s + l : e, r = r > a - u ? a - u : r, i = a + u > i ? a + u : i;
              else if (p === c.SHAPES.ELIP) s = n.x, a = n.y, l = n.width + f / 2, u = n.height + f / 2, t = t > s - l ? s - l : t, e = s + l > e ? s + l : e, r = r > a - u ? a - u : r, i = a + u > i ? a + u : i;
              else {
                o = n.points;
                for (var m = 0; m < o.length; m += 2) s = o[m], a = o[m + 1], t = t > s - f ? s - f : t, e = s + f > e ? s + f : e, r = r > a - f ? a - f : r, i = a + f > i ? a + f : i
              }
            } else t = 0, e = 0, r = 0, i = 0;
          var g = this.boundsPadding;
          this._localBounds.x = t - g, this._localBounds.width = e - t + 2 * g, this._localBounds.y = r - g, this._localBounds.height = i - r + 2 * g
        }, i.prototype.drawShape = function (t) {
          this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
          var e = new l(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
          return this.graphicsData.push(e), e.type === c.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty = this.boundsDirty = !0, e
        }, i.prototype.destroy = function () {
          n.prototype.destroy.apply(this, arguments);
          for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
          for (var e in this._webgl)
            for (var r = 0; r < this._webgl[e].data.length; ++r) this._webgl[e].data[r].destroy();
          this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
        }
      }, {
        "../const": 22,
        "../display/Container": 23,
        "../math": 32,
        "../renderers/canvas/utils/CanvasBuffer": 44,
        "../renderers/canvas/utils/CanvasGraphics": 45,
        "../textures/Texture": 71,
        "./GraphicsData": 26
      }],
      26: [function (t, e, r) {
        function i(t, e, r, i, n, o, s) {
          this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this._lineTint = e, this.fillColor = i, this.fillAlpha = n, this._fillTint = i, this.fill = o, this.shape = s, this.type = s.type
        }
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
        }, i.prototype.destroy = function () {
          this.shape = null
        }
      }, {}],
      27: [function (t, e, r) {
        function i(t) {
          a.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.complexPrimitiveShader = null, this.maximumSimplePolySize = 200
        }
        var n = t("../../utils"),
          o = t("../../math"),
          s = t("../../const"),
          a = t("../../renderers/webgl/utils/ObjectRenderer"),
          l = t("../../renderers/webgl/WebGLRenderer"),
          u = t("./WebGLGraphicsData"),
          c = t("earcut");
        i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, l.registerPlugin("graphics", i), i.prototype.onContextChange = function () {}, i.prototype.destroy = function () {
          a.prototype.destroy.call(this);
          for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
          this.graphicsDataPool = null
        }, i.prototype.render = function (t) {
          var e, r = this.renderer,
            i = r.gl,
            o = r.shaderManager.plugins.primitiveShader;
          t.dirty && this.updateGraphics(t, i);
          var s = t._webGL[i.id];
          r.blendModeManager.setBlendMode(t.blendMode);
          for (var a = 0; a < s.data.length; a++) 1 === s.data[a].mode ? (e = s.data[a], r.stencilManager.pushStencil(t, e, r), i.uniform1f(r.shaderManager.complexPrimitiveShader.uniforms.alpha._location, t.worldAlpha * e.alpha), i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilManager.popStencil(t, e, r)) : (e = s.data[a], o = r.shaderManager.primitiveShader, r.shaderManager.setShader(o), i.uniformMatrix3fv(o.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(o.uniforms.projectionMatrix._location, !1, r.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(o.uniforms.tint._location, n.hex2rgb(t.tint)), i.uniform1f(o.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(o.attributes.aVertexPosition, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(o.attributes.aColor, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer), i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0))
        }, i.prototype.updateGraphics = function (t) {
          var e = this.renderer.gl,
            r = t._webGL[e.id];
          r || (r = t._webGL[e.id] = {
            lastIndex: 0,
            data: [],
            gl: e
          }), t.dirty = !1;
          var i;
          if (t.clearDirty) {
            for (t.clearDirty = !1, i = 0; i < r.data.length; i++) {
              var n = r.data[i];
              n.reset(), this.graphicsDataPool.push(n)
            }
            r.data = [], r.lastIndex = 0
          }
          var o;
          for (i = r.lastIndex; i < t.graphicsData.length; i++) {
            var a = t.graphicsData[i];
            if (a.type === s.SHAPES.POLY) {
              if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)
                if (a.points.length < 2 * this.maximumSimplePolySize) {
                  o = this.switchMode(r, 0);
                  var l = this.buildPoly(a, o);
                  l || (o = this.switchMode(r, 1), this.buildComplexPoly(a, o))
                } else o = this.switchMode(r, 1), this.buildComplexPoly(a, o);
              a.lineWidth > 0 && (o = this.switchMode(r, 0), this.buildLine(a, o))
            } else o = this.switchMode(r, 0), a.type === s.SHAPES.RECT ? this.buildRectangle(a, o) : a.type === s.SHAPES.CIRC || a.type === s.SHAPES.ELIP ? this.buildCircle(a, o) : a.type === s.SHAPES.RREC && this.buildRoundedRectangle(a, o);
            r.lastIndex++
          }
          for (i = 0; i < r.data.length; i++) o = r.data[i], o.dirty && o.upload()
        }, i.prototype.switchMode = function (t, e) {
          var r;
          return t.data.length ? (r = t.data[t.data.length - 1], (r.points.length > 32e4 || r.mode !== e || 1 === e) && (r = this.graphicsDataPool.pop() || new u(t.gl), r.mode = e, t.data.push(r))) : (r = this.graphicsDataPool.pop() || new u(t.gl), r.mode = e, t.data.push(r)), r.dirty = !0, r
        }, i.prototype.buildRectangle = function (t, e) {
          var r = t.shape,
            i = r.x,
            o = r.y,
            s = r.width,
            a = r.height;
          if (t.fill) {
            var l = n.hex2rgb(t.fillColor),
              u = t.fillAlpha,
              c = l[0] * u,
              h = l[1] * u,
              d = l[2] * u,
              p = e.points,
              f = e.indices,
              m = p.length / 6;
            p.push(i, o), p.push(c, h, d, u), p.push(i + s, o), p.push(c, h, d, u), p.push(i, o + a), p.push(c, h, d, u), p.push(i + s, o + a), p.push(c, h, d, u), f.push(m, m, m + 1, m + 2, m + 3, m + 3)
          }
          if (t.lineWidth) {
            var g = t.points;
            t.points = [i, o, i + s, o, i + s, o + a, i, o + a, i, o], this.buildLine(t, e), t.points = g
          }
        }, i.prototype.buildRoundedRectangle = function (t, e) {
          var r = t.shape,
            i = r.x,
            o = r.y,
            s = r.width,
            a = r.height,
            l = r.radius,
            u = [];
          if (u.push(i, o + l), this.quadraticBezierCurve(i, o + a - l, i, o + a, i + l, o + a, u), this.quadraticBezierCurve(i + s - l, o + a, i + s, o + a, i + s, o + a - l, u), this.quadraticBezierCurve(i + s, o + l, i + s, o, i + s - l, o, u), this.quadraticBezierCurve(i + l, o, i, o, i, o + l + 1e-10, u), t.fill) {
            var h = n.hex2rgb(t.fillColor),
              d = t.fillAlpha,
              p = h[0] * d,
              f = h[1] * d,
              m = h[2] * d,
              g = e.points,
              v = e.indices,
              y = g.length / 6,
              _ = c(u, null, 2),
              x = 0;
            for (x = 0; x < _.length; x += 3) v.push(_[x] + y), v.push(_[x] + y), v.push(_[x + 1] + y), v.push(_[x + 2] + y), v.push(_[x + 2] + y);
            for (x = 0; x < u.length; x++) g.push(u[x], u[++x], p, f, m, d)
          }
          if (t.lineWidth) {
            var b = t.points;
            t.points = u, this.buildLine(t, e), t.points = b
          }
        }, i.prototype.quadraticBezierCurve = function (t, e, r, i, n, o, s) {
          function a(t, e, r) {
            var i = e - t;
            return t + i * r
          }
          for (var l, u, c, h, d, p, f = 20, m = s || [], g = 0, v = 0; f >= v; v++) g = v / f, l = a(t, r, g), u = a(e, i, g), c = a(r, n, g), h = a(i, o, g), d = a(l, c, g), p = a(u, h, g), m.push(d, p);
          return m
        }, i.prototype.buildCircle = function (t, e) {
          var r, i, o = t.shape,
            a = o.x,
            l = o.y;
          t.type === s.SHAPES.CIRC ? (r = o.radius, i = o.radius) : (r = o.width, i = o.height);
          var u = 40,
            c = 2 * Math.PI / u,
            h = 0;
          if (t.fill) {
            var d = n.hex2rgb(t.fillColor),
              p = t.fillAlpha,
              f = d[0] * p,
              m = d[1] * p,
              g = d[2] * p,
              v = e.points,
              y = e.indices,
              _ = v.length / 6;
            for (y.push(_), h = 0; u + 1 > h; h++) v.push(a, l, f, m, g, p), v.push(a + Math.sin(c * h) * r, l + Math.cos(c * h) * i, f, m, g, p), y.push(_++, _++);
            y.push(_ - 1)
          }
          if (t.lineWidth) {
            var x = t.points;
            for (t.points = [], h = 0; u + 1 > h; h++) t.points.push(a + Math.sin(c * h) * r, l + Math.cos(c * h) * i);
            this.buildLine(t, e), t.points = x
          }
        }, i.prototype.buildLine = function (t, e) {
          var r = 0,
            i = t.points;
          if (0 !== i.length) {
            if (t.lineWidth % 2)
              for (r = 0; r < i.length; r++) i[r] += .5;
            var s = new o.Point(i[0], i[1]),
              a = new o.Point(i[i.length - 2], i[i.length - 1]);
            if (s.x === a.x && s.y === a.y) {
              i = i.slice(), i.pop(), i.pop(), a = new o.Point(i[i.length - 2], i[i.length - 1]);
              var l = a.x + .5 * (s.x - a.x),
                u = a.y + .5 * (s.y - a.y);
              i.unshift(l, u), i.push(l, u)
            }
            var c, h, d, p, f, m, g, v, y, _, x, b, T, E, w, C, S, A, R, M, F, D, O, P = e.points,
              L = e.indices,
              B = i.length / 2,
              k = i.length,
              I = P.length / 6,
              N = t.lineWidth / 2,
              j = n.hex2rgb(t.lineColor),
              U = t.lineAlpha,
              z = j[0] * U,
              G = j[1] * U,
              H = j[2] * U;
            for (d = i[0], p = i[1], f = i[2], m = i[3], y = -(p - m), _ = d - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, P.push(d - y, p - _, z, G, H, U), P.push(d + y, p + _, z, G, H, U), r = 1; B - 1 > r; r++) d = i[2 * (r - 1)], p = i[2 * (r - 1) + 1], f = i[2 * r], m = i[2 * r + 1], g = i[2 * (r + 1)], v = i[2 * (r + 1) + 1], y = -(p - m), _ = d - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, x = -(m - v), b = f - g, O = Math.sqrt(x * x + b * b), x /= O, b /= O, x *= N, b *= N, w = -_ + p - (-_ + m), C = -y + f - (-y + d), S = (-y + d) * (-_ + m) - (-y + f) * (-_ + p), A = -b + v - (-b + m), R = -x + f - (-x + g), M = (-x + g) * (-b + m) - (-x + f) * (-b + v), F = w * R - A * C, Math.abs(F) < .1 ? (F += 10.1, P.push(f - y, m - _, z, G, H, U), P.push(f + y, m + _, z, G, H, U)) : (c = (C * M - R * S) / F, h = (A * S - w * M) / F, D = (c - f) * (c - f) + (h - m) + (h - m), D > 19600 ? (T = y - x, E = _ - b, O = Math.sqrt(T * T + E * E), T /= O, E /= O, T *= N, E *= N, P.push(f - T, m - E), P.push(z, G, H, U), P.push(f + T, m + E), P.push(z, G, H, U), P.push(f - T, m - E), P.push(z, G, H, U), k++) : (P.push(c, h), P.push(z, G, H, U), P.push(f - (c - f), m - (h - m)), P.push(z, G, H, U)));
            for (d = i[2 * (B - 2)], p = i[2 * (B - 2) + 1], f = i[2 * (B - 1)], m = i[2 * (B - 1) + 1], y = -(p - m), _ = d - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, P.push(f - y, m - _), P.push(z, G, H, U), P.push(f + y, m + _), P.push(z, G, H, U), L.push(I), r = 0; k > r; r++) L.push(I++);
            L.push(I - 1)
          }
        }, i.prototype.buildComplexPoly = function (t, e) {
          var r = t.points.slice();
          if (!(r.length < 6)) {
            var i = e.indices;
            e.points = r, e.alpha = t.fillAlpha, e.color = n.hex2rgb(t.fillColor);
            for (var o, s, a = 1 / 0, l = -(1 / 0), u = 1 / 0, c = -(1 / 0), h = 0; h < r.length; h += 2) o = r[h], s = r[h + 1], a = a > o ? o : a, l = o > l ? o : l, u = u > s ? s : u, c = s > c ? s : c;
            r.push(a, u, l, u, l, c, a, c);
            var d = r.length / 2;
            for (h = 0; d > h; h++) i.push(h)
          }
        }, i.prototype.buildPoly = function (t, e) {
          var r = t.points;
          if (!(r.length < 6)) {
            var i = e.points,
              o = e.indices,
              s = r.length / 2,
              a = n.hex2rgb(t.fillColor),
              l = t.fillAlpha,
              u = a[0] * l,
              h = a[1] * l,
              d = a[2] * l,
              p = c(r, null, 2);
            if (!p) return !1;
            var f = i.length / 6,
              m = 0;
            for (m = 0; m < p.length; m += 3) o.push(p[m] + f), o.push(p[m] + f), o.push(p[m + 1] + f), o.push(p[m + 2] + f), o.push(p[m + 2] + f);
            for (m = 0; s > m; m++) i.push(r[2 * m], r[2 * m + 1], u, h, d, l);
            return !0
          }
        }
      }, {
        "../../const": 22,
        "../../math": 32,
        "../../renderers/webgl/WebGLRenderer": 48,
        "../../renderers/webgl/utils/ObjectRenderer": 62,
        "../../utils": 76,
        "./WebGLGraphicsData": 28,
        earcut: 10
      }],
      28: [function (t, e, r) {
        function i(t) {
          this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0, this.glPoints = null, this.glIndices = null
        }
        i.prototype.constructor = i, e.exports = i, i.prototype.reset = function () {
          this.points.length = 0, this.indices.length = 0
        }, i.prototype.upload = function () {
          var t = this.gl;
          this.glPoints = new Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndices = new Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndices, t.STATIC_DRAW), this.dirty = !1
        }, i.prototype.destroy = function () {
          this.color = null, this.points = null, this.indices = null, this.gl.deleteBuffer(this.buffer), this.gl.deleteBuffer(this.indexBuffer), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
        }
      }, {}],
      29: [function (t, e, r) {
        var i = e.exports = Object.assign(t("./const"), t("./math"), {
          utils: t("./utils"),
          ticker: t("./ticker"),
          DisplayObject: t("./display/DisplayObject"),
          Container: t("./display/Container"),
          Sprite: t("./sprites/Sprite"),
          ParticleContainer: t("./particles/ParticleContainer"),
          SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
          ParticleRenderer: t("./particles/webgl/ParticleRenderer"),
          Text: t("./text/Text"),
          Graphics: t("./graphics/Graphics"),
          GraphicsData: t("./graphics/GraphicsData"),
          GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
          Texture: t("./textures/Texture"),
          BaseTexture: t("./textures/BaseTexture"),
          RenderTexture: t("./textures/RenderTexture"),
          VideoBaseTexture: t("./textures/VideoBaseTexture"),
          TextureUvs: t("./textures/TextureUvs"),
          CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
          CanvasGraphics: t("./renderers/canvas/utils/CanvasGraphics"),
          CanvasBuffer: t("./renderers/canvas/utils/CanvasBuffer"),
          WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
          ShaderManager: t("./renderers/webgl/managers/ShaderManager"),
          Shader: t("./renderers/webgl/shaders/Shader"),
          ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
          RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
          AbstractFilter: t("./renderers/webgl/filters/AbstractFilter"),
          FXAAFilter: t("./renderers/webgl/filters/FXAAFilter"),
          SpriteMaskFilter: t("./renderers/webgl/filters/SpriteMaskFilter"),
          autoDetectRenderer: function (t, e, r, n) {
            return t = t || 800, e = e || 600, !n && i.utils.isWebGLSupported() ? new i.WebGLRenderer(t, e, r) : new i.CanvasRenderer(t, e, r)
          }
        })
      }, {
        "./const": 22,
        "./display/Container": 23,
        "./display/DisplayObject": 24,
        "./graphics/Graphics": 25,
        "./graphics/GraphicsData": 26,
        "./graphics/webgl/GraphicsRenderer": 27,
        "./math": 32,
        "./particles/ParticleContainer": 38,
        "./particles/webgl/ParticleRenderer": 40,
        "./renderers/canvas/CanvasRenderer": 43,
        "./renderers/canvas/utils/CanvasBuffer": 44,
        "./renderers/canvas/utils/CanvasGraphics": 45,
        "./renderers/webgl/WebGLRenderer": 48,
        "./renderers/webgl/filters/AbstractFilter": 49,
        "./renderers/webgl/filters/FXAAFilter": 50,
        "./renderers/webgl/filters/SpriteMaskFilter": 51,
        "./renderers/webgl/managers/ShaderManager": 55,
        "./renderers/webgl/shaders/Shader": 60,
        "./renderers/webgl/utils/ObjectRenderer": 62,
        "./renderers/webgl/utils/RenderTarget": 64,
        "./sprites/Sprite": 66,
        "./sprites/webgl/SpriteRenderer": 67,
        "./text/Text": 68,
        "./textures/BaseTexture": 69,
        "./textures/RenderTexture": 70,
        "./textures/Texture": 71,
        "./textures/TextureUvs": 72,
        "./textures/VideoBaseTexture": 73,
        "./ticker": 75,
        "./utils": 76
      }],
      30: [function (t, e, r) {
        function i() {
          this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        }
        var n = t("./Point");
        i.prototype.constructor = i, e.exports = i, i.prototype.fromArray = function (t) {
          this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
        }, i.prototype.toArray = function (t, e) {
          this.array || (this.array = new Float32Array(9));
          var r = e || this.array;
          return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
        }, i.prototype.apply = function (t, e) {
          e = e || new n;
          var r = t.x,
            i = t.y;
          return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
        }, i.prototype.applyInverse = function (t, e) {
          e = e || new n;
          var r = 1 / (this.a * this.d + this.c * -this.b),
            i = t.x,
            o = t.y;
          return e.x = this.d * r * i + -this.c * r * o + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * o + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e
        }, i.prototype.translate = function (t, e) {
          return this.tx += t, this.ty += e, this
        }, i.prototype.scale = function (t, e) {
          return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
        }, i.prototype.rotate = function (t) {
          var e = Math.cos(t),
            r = Math.sin(t),
            i = this.a,
            n = this.c,
            o = this.tx;
          return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
        }, i.prototype.append = function (t) {
          var e = this.a,
            r = this.b,
            i = this.c,
            n = this.d;
          return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
        }, i.prototype.prepend = function (t) {
          var e = this.tx;
          if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
            var r = this.a,
              i = this.c;
            this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
          }
          return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
        }, i.prototype.invert = function () {
          var t = this.a,
            e = this.b,
            r = this.c,
            i = this.d,
            n = this.tx,
            o = t * i - e * r;
          return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
        }, i.prototype.identity = function () {
          return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
        }, i.prototype.clone = function () {
          var t = new i;
          return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
        }, i.prototype.copy = function (t) {
          return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
        }, i.IDENTITY = new i, i.TEMP_MATRIX = new i
      }, {
        "./Point": 31
      }],
      31: [function (t, e, r) {
        function i(t, e) {
          this.x = t || 0, this.y = e || 0
        }
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.x, this.y)
        }, i.prototype.copy = function (t) {
          this.set(t.x, t.y)
        }, i.prototype.equals = function (t) {
          return t.x === this.x && t.y === this.y
        }, i.prototype.set = function (t, e) {
          this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
        }
      }, {}],
      32: [function (t, e, r) {
        e.exports = {
          Point: t("./Point"),
          Matrix: t("./Matrix"),
          Circle: t("./shapes/Circle"),
          Ellipse: t("./shapes/Ellipse"),
          Polygon: t("./shapes/Polygon"),
          Rectangle: t("./shapes/Rectangle"),
          RoundedRectangle: t("./shapes/RoundedRectangle")
        }
      }, {
        "./Matrix": 30,
        "./Point": 31,
        "./shapes/Circle": 33,
        "./shapes/Ellipse": 34,
        "./shapes/Polygon": 35,
        "./shapes/Rectangle": 36,
        "./shapes/RoundedRectangle": 37
      }],
      33: [function (t, e, r) {
        function i(t, e, r) {
          this.x = t || 0, this.y = e || 0, this.radius = r || 0, this.type = o.SHAPES.CIRC
        }
        var n = t("./Rectangle"),
          o = t("../../const");
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.x, this.y, this.radius)
        }, i.prototype.contains = function (t, e) {
          if (this.radius <= 0) return !1;
          var r = this.x - t,
            i = this.y - e,
            n = this.radius * this.radius;
          return r *= r, i *= i, n >= r + i
        }, i.prototype.getBounds = function () {
          return new n(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
        }
      }, {
        "../../const": 22,
        "./Rectangle": 36
      }],
      34: [function (t, e, r) {
        function i(t, e, r, i) {
          this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.type = o.SHAPES.ELIP
        }
        var n = t("./Rectangle"),
          o = t("../../const");
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.x, this.y, this.width, this.height)
        }, i.prototype.contains = function (t, e) {
          if (this.width <= 0 || this.height <= 0) return !1;
          var r = (t - this.x) / this.width,
            i = (e - this.y) / this.height;
          return r *= r, i *= i, 1 >= r + i
        }, i.prototype.getBounds = function () {
          return new n(this.x - this.width, this.y - this.height, this.width, this.height)
        }
      }, {
        "../../const": 22,
        "./Rectangle": 36
      }],
      35: [function (t, e, r) {
        function i(t) {
          var e = t;
          if (!Array.isArray(e)) {
            e = new Array(arguments.length);
            for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
          }
          if (e[0] instanceof n) {
            for (var i = [], s = 0, a = e.length; a > s; s++) i.push(e[s].x, e[s].y);
            e = i
          }
          this.closed = !0, this.points = e, this.type = o.SHAPES.POLY
        }
        var n = t("../Point"),
          o = t("../../const");
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.points.slice())
        }, i.prototype.contains = function (t, e) {
          for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; i > n; o = n++) {
            var s = this.points[2 * n],
              a = this.points[2 * n + 1],
              l = this.points[2 * o],
              u = this.points[2 * o + 1],
              c = a > e != u > e && (l - s) * (e - a) / (u - a) + s > t;
            c && (r = !r)
          }
          return r
        }
      }, {
        "../../const": 22,
        "../Point": 31
      }],
      36: [function (t, e, r) {
        function i(t, e, r, i) {
          this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.type = n.SHAPES.RECT
        }
        var n = t("../../const");
        i.prototype.constructor = i, e.exports = i, i.EMPTY = new i(0, 0, 0, 0), i.prototype.clone = function () {
          return new i(this.x, this.y, this.width, this.height)
        }, i.prototype.contains = function (t, e) {
          return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height ? !0 : !1
        }
      }, {
        "../../const": 22
      }],
      37: [function (t, e, r) {
        function i(t, e, r, i, o) {
          this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.radius = o || 20, this.type = n.SHAPES.RREC
        }
        var n = t("../../const");
        i.prototype.constructor = i, e.exports = i, i.prototype.clone = function () {
          return new i(this.x, this.y, this.width, this.height, this.radius)
        }, i.prototype.contains = function (t, e) {
          return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height ? !0 : !1
        }
      }, {
        "../../const": 22
      }],
      38: [function (t, e, r) {
        function i(t, e) {
          n.call(this), this._properties = [!1, !0, !1, !1, !1], this._size = t || 15e3, this._buffers = null, this._updateStatic = !1, this.interactiveChildren = !1, this.blendMode = o.BLEND_MODES.NORMAL, this.roundPixels = !0, this.setProperties(e)
        }
        var n = t("../display/Container"),
          o = t("../const");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setProperties = function (t) {
          t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
        }, i.prototype.updateTransform = function () {
          this.displayObjectUpdateTransform()
        }, i.prototype.renderWebGL = function (t) {
          this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
        }, i.prototype.addChildAt = function (t, e) {
          if (t === this) return t;
          if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this._updateStatic = !0, t;
          throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
        }, i.prototype.removeChildAt = function (t) {
          var e = this.getChildAt(t);
          return e.parent = null, this.children.splice(t, 1), this._updateStatic = !0, e
        }, i.prototype.renderCanvas = function (t) {
          if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
            var e = t.context,
              r = this.worldTransform,
              i = !0,
              n = 0,
              o = 0,
              s = 0,
              a = 0;
            e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
            for (var l = 0; l < this.children.length; ++l) {
              var u = this.children[l];
              if (u.visible) {
                var c = u.texture.frame;
                if (e.globalAlpha = this.worldAlpha * u.alpha, u.rotation % (2 * Math.PI) === 0) i && (e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), i = !1), n = u.anchor.x * -c.width * u.scale.x + u.position.x + .5, o = u.anchor.y * -c.height * u.scale.y + u.position.y + .5, s = c.width * u.scale.x, a = c.height * u.scale.y;
                else {
                  i || (i = !0), u.displayObjectUpdateTransform();
                  var h = u.worldTransform;
                  t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | h.tx, 0 | h.ty) : e.setTransform(h.a, h.b, h.c, h.d, h.tx, h.ty), n = u.anchor.x * -c.width + .5, o = u.anchor.y * -c.height + .5, s = c.width, a = c.height
                }
                e.drawImage(u.texture.baseTexture.source, c.x, c.y, c.width, c.height, n, o, s, a)
              }
            }
          }
        }, i.prototype.destroy = function () {
          if (n.prototype.destroy.apply(this, arguments), this._buffers)
            for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
          this._properties = null, this._buffers = null
        }
      }, {
        "../const": 22,
        "../display/Container": 23
      }],
      39: [function (t, e, r) {
        function i(t, e, r) {
          this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.dynamic ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
          }
          this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
        }
        i.prototype.constructor = i, e.exports = i, i.prototype.initBuffers = function () {
          var t, e, r = this.gl,
            i = 0;
          for (this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = i, i += e.size, this.dynamicStride += e.size;
          this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), r.bufferData(r.ARRAY_BUFFER, this.dynamicData, r.DYNAMIC_DRAW);
          var n = 0;
          for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = n, n += e.size, this.staticStride += e.size;
          this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), r.bufferData(r.ARRAY_BUFFER, this.staticData, r.DYNAMIC_DRAW)
        }, i.prototype.uploadDynamic = function (t, e, r) {
          for (var i = this.gl, n = 0; n < this.dynamicProperties.length; n++) {
            var o = this.dynamicProperties[n];
            o.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, o.offset)
          }
          i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.dynamicData)
        }, i.prototype.uploadStatic = function (t, e, r) {
          for (var i = this.gl, n = 0; n < this.staticProperties.length; n++) {
            var o = this.staticProperties[n];
            o.uploadFunction(t, e, r, this.staticData, this.staticStride, o.offset)
          }
          i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.staticData)
        }, i.prototype.bind = function () {
          var t, e, r = this.gl;
          for (r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
          for (r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
        }, i.prototype.destroy = function () {
          this.dynamicProperties = null, this.dynamicData = null, this.gl.deleteBuffer(this.dynamicBuffer), this.staticProperties = null, this.staticData = null, this.gl.deleteBuffer(this.staticBuffer)
        }
      }, {}],
      40: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.size = 15e3;
          var e = 6 * this.size;
          this.indices = new Uint16Array(e);
          for (var r = 0, i = 0; e > r; r += 6, i += 4) this.indices[r + 0] = i + 0, this.indices[r + 1] = i + 1, this.indices[r + 2] = i + 2, this.indices[r + 3] = i + 0, this.indices[r + 4] = i + 2, this.indices[r + 5] = i + 3;
          this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new l.Matrix
        }
        var n = t("../../renderers/webgl/utils/ObjectRenderer"),
          o = t("../../renderers/webgl/WebGLRenderer"),
          s = t("./ParticleShader"),
          a = t("./ParticleBuffer"),
          l = t("../../math");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, o.registerPlugin("particle", i), i.prototype.onContextChange = function () {
          var t = this.renderer.gl;
          this.shader = new s(this.renderer.shaderManager), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.properties = [{
            attribute: this.shader.attributes.aVertexPosition,
            dynamic: !1,
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
          }, {
            attribute: this.shader.attributes.aPositionCoord,
            dynamic: !0,
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
          }, {
            attribute: this.shader.attributes.aRotation,
            dynamic: !1,
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
          }, {
            attribute: this.shader.attributes.aTextureCoord,
            dynamic: !1,
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
          }, {
            attribute: this.shader.attributes.aColor,
            dynamic: !1,
            size: 1,
            uploadFunction: this.uploadAlpha,
            offset: 0
          }]
        }, i.prototype.start = function () {
          var t = this.renderer.gl;
          t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
          var e = this.shader;
          this.renderer.shaderManager.setShader(e)
        }, i.prototype.render = function (t) {
          var e = t.children,
            r = e.length,
            i = t._size;
          if (0 !== r) {
            r > i && (r = i), t._buffers || (t._buffers = this.generateBuffers(t)), this.renderer.blendModeManager.setBlendMode(t.blendMode);
            var n = this.renderer.gl,
              o = t.worldTransform.copy(this.tempMatrix);
            o.prepend(this.renderer.currentRenderTarget.projectionMatrix), n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, o.toArray(!0)), n.uniform1f(this.shader.uniforms.uAlpha._location, t.worldAlpha);
            var s = t._updateStatic,
              a = e[0]._texture.baseTexture;
            if (a._glTextures[n.id]) n.bindTexture(n.TEXTURE_2D, a._glTextures[n.id]);
            else {
              if (!this.renderer.updateTexture(a)) return;
              this.properties[0].dynamic && this.properties[3].dynamic || (s = !0)
            }
            for (var l = 0, u = 0; r > u; u += this.size) {
              var c = r - u;
              c > this.size && (c = this.size);
              var h = t._buffers[l++];
              h.uploadDynamic(e, u, c), s && h.uploadStatic(e, u, c), h.bind(this.shader), n.drawElements(n.TRIANGLES, 6 * c, n.UNSIGNED_SHORT, 0), this.renderer.drawCount++
            }
            t._updateStatic = !1
          }
        }, i.prototype.generateBuffers = function (t) {
          var e, r = this.renderer.gl,
            i = [],
            n = t._size;
          for (e = 0; e < t._properties.length; e++) this.properties[e].dynamic = t._properties[e];
          for (e = 0; n > e; e += this.size) i.push(new a(r, this.properties, this.size, this.shader));
          return i
        }, i.prototype.uploadVertices = function (t, e, r, i, n, o) {
          for (var s, a, l, u, c, h, d, p, f, m = 0; r > m; m++) s = t[e + m], a = s._texture, u = s.scale.x, c = s.scale.y, a.trim ? (l = a.trim, d = l.x - s.anchor.x * l.width, h = d + a.crop.width, f = l.y - s.anchor.y * l.height, p = f + a.crop.height) : (h = a._frame.width * (1 - s.anchor.x), d = a._frame.width * -s.anchor.x, p = a._frame.height * (1 - s.anchor.y), f = a._frame.height * -s.anchor.y), i[o] = d * u, i[o + 1] = f * c, i[o + n] = h * u, i[o + n + 1] = f * c, i[o + 2 * n] = h * u, i[o + 2 * n + 1] = p * c, i[o + 3 * n] = d * u, i[o + 3 * n + 1] = p * c, o += 4 * n
        }, i.prototype.uploadPosition = function (t, e, r, i, n, o) {
          for (var s = 0; r > s; s++) {
            var a = t[e + s].position;
            i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n
          }
        }, i.prototype.uploadRotation = function (t, e, r, i, n, o) {
          for (var s = 0; r > s; s++) {
            var a = t[e + s].rotation;
            i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
          }
        }, i.prototype.uploadUvs = function (t, e, r, i, n, o) {
          for (var s = 0; r > s; s++) {
            var a = t[e + s]._texture._uvs;
            a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n)
          }
        }, i.prototype.uploadAlpha = function (t, e, r, i, n, o) {
          for (var s = 0; r > s; s++) {
            var a = t[e + s].alpha;
            i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
          }
        }, i.prototype.destroy = function () {
          this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), n.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
        }
      }, {
        "../../math": 32,
        "../../renderers/webgl/WebGLRenderer": 48,
        "../../renderers/webgl/utils/ObjectRenderer": 62,
        "./ParticleBuffer": 39,
        "./ParticleShader": 41
      }],
      41: [function (t, e, r) {
        function i(t) {
          n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"), {
            uAlpha: {
              type: "1f",
              value: 1
            }
          }, {
            aPositionCoord: 0,
            aRotation: 0
          })
        }
        var n = t("../../renderers/webgl/shaders/TextureShader");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
      }, {
        "../../renderers/webgl/shaders/TextureShader": 61
      }],
      42: [function (t, e, r) {
        function i(t, e, r, i) {
          if (a.call(this), n.sayHello(t), i)
            for (var l in s.DEFAULT_RENDER_OPTIONS) "undefined" == typeof i[l] && (i[l] = s.DEFAULT_RENDER_OPTIONS[l]);
          else i = s.DEFAULT_RENDER_OPTIONS;
          this.type = s.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = r || 600, this.view = i.view || document.createElement("canvas"), this.resolution = i.resolution, this.transparent = i.transparent, this.autoResize = i.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgb = [0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = i.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = {
            worldTransform: new o.Matrix,
            worldAlpha: 1,
            children: []
          }, this._lastObjectRendered = this._tempDisplayObjectParent
        }
        var n = t("../utils"),
          o = t("../math"),
          s = t("../const"),
          a = t("eventemitter3");
        i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          backgroundColor: {
            get: function () {
              return this._backgroundColor
            },
            set: function (t) {
              this._backgroundColor = t, this._backgroundColorString = n.hex2string(t), n.hex2rgb(t, this._backgroundColorRgb)
            }
          }
        }), i.prototype.resize = function (t, e) {
          this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
        }, i.prototype.destroy = function (t) {
          t && this.view.parent && this.view.parent.removeChild(this.view), this.type = s.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgb = null, this._backgroundColorString = null
        }
      }, {
        "../const": 22,
        "../math": 32,
        "../utils": 76,
        eventemitter3: 11
      }],
      43: [function (t, e, r) {
        function i(t, e, r) {
          n.call(this, "Canvas", t, e, r), this.type = l.RENDERER_TYPE.CANVAS, this.context = this.view.getContext("2d", {
            alpha: this.transparent
          }), this.refresh = !0, this.maskManager = new o, this.roundPixels = !1, this.currentScaleMode = l.SCALE_MODES.DEFAULT, this.currentBlendMode = l.BLEND_MODES.NORMAL, this.smoothProperty = "imageSmoothingEnabled", this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this._mapBlendModes(), this._tempDisplayObjectParent = {
            worldTransform: new a.Matrix,
            worldAlpha: 1
          }, this.resize(t, e)
        }
        var n = t("../SystemRenderer"),
          o = t("./utils/CanvasMaskManager"),
          s = t("../../utils"),
          a = t("../../math"),
          l = t("../../const");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, s.pluginTarget.mixin(i), i.prototype.render = function (t) {
          var e = t.parent;
          this._lastObjectRendered = t, t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e, this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.currentBlendMode = l.BLEND_MODES.NORMAL, this.context.globalCompositeOperation = this.blendModes[l.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t, this.context)
        }, i.prototype.destroy = function (t) {
          this.destroyPlugins(), n.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.roundPixels = !1, this.currentScaleMode = 0, this.currentBlendMode = 0, this.smoothProperty = null
        }, i.prototype.renderDisplayObject = function (t, e) {
          var r = this.context;
          this.context = e, t.renderCanvas(this), this.context = r
        }, i.prototype.resize = function (t, e) {
          n.prototype.resize.call(this, t, e), this.currentScaleMode = l.SCALE_MODES.DEFAULT, this.smoothProperty && (this.context[this.smoothProperty] = this.currentScaleMode === l.SCALE_MODES.LINEAR)
        }, i.prototype._mapBlendModes = function () {
          this.blendModes || (this.blendModes = {}, s.canUseNewCanvasBlendModes() ? (this.blendModes[l.BLEND_MODES.NORMAL] = "source-over", this.blendModes[l.BLEND_MODES.ADD] = "lighter", this.blendModes[l.BLEND_MODES.MULTIPLY] = "multiply", this.blendModes[l.BLEND_MODES.SCREEN] = "screen", this.blendModes[l.BLEND_MODES.OVERLAY] = "overlay", this.blendModes[l.BLEND_MODES.DARKEN] = "darken", this.blendModes[l.BLEND_MODES.LIGHTEN] = "lighten", this.blendModes[l.BLEND_MODES.COLOR_DODGE] = "color-dodge", this.blendModes[l.BLEND_MODES.COLOR_BURN] = "color-burn", this.blendModes[l.BLEND_MODES.HARD_LIGHT] = "hard-light", this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = "soft-light", this.blendModes[l.BLEND_MODES.DIFFERENCE] = "difference", this.blendModes[l.BLEND_MODES.EXCLUSION] = "exclusion", this.blendModes[l.BLEND_MODES.HUE] = "hue", this.blendModes[l.BLEND_MODES.SATURATION] = "saturate", this.blendModes[l.BLEND_MODES.COLOR] = "color", this.blendModes[l.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[l.BLEND_MODES.NORMAL] = "source-over", this.blendModes[l.BLEND_MODES.ADD] = "lighter", this.blendModes[l.BLEND_MODES.MULTIPLY] = "source-over", this.blendModes[l.BLEND_MODES.SCREEN] = "source-over", this.blendModes[l.BLEND_MODES.OVERLAY] = "source-over", this.blendModes[l.BLEND_MODES.DARKEN] = "source-over", this.blendModes[l.BLEND_MODES.LIGHTEN] = "source-over", this.blendModes[l.BLEND_MODES.COLOR_DODGE] = "source-over", this.blendModes[l.BLEND_MODES.COLOR_BURN] = "source-over", this.blendModes[l.BLEND_MODES.HARD_LIGHT] = "source-over", this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = "source-over", this.blendModes[l.BLEND_MODES.DIFFERENCE] = "source-over", this.blendModes[l.BLEND_MODES.EXCLUSION] = "source-over", this.blendModes[l.BLEND_MODES.HUE] = "source-over", this.blendModes[l.BLEND_MODES.SATURATION] = "source-over", this.blendModes[l.BLEND_MODES.COLOR] = "source-over", this.blendModes[l.BLEND_MODES.LUMINOSITY] = "source-over"))
        }
      }, {
        "../../const": 22,
        "../../math": 32,
        "../../utils": 76,
        "../SystemRenderer": 42,
        "./utils/CanvasMaskManager": 46
      }],
      44: [function (t, e, r) {
        function i(t, e) {
          this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
        }
        i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          width: {
            get: function () {
              return this.canvas.width
            },
            set: function (t) {
              this.canvas.width = t
            }
          },
          height: {
            get: function () {
              return this.canvas.height
            },
            set: function (t) {
              this.canvas.height = t
            }
          }
        }), i.prototype.clear = function () {
          this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }, i.prototype.resize = function (t, e) {
          this.canvas.width = t, this.canvas.height = e
        }, i.prototype.destroy = function () {
          this.context = null, this.canvas = null
        }
      }, {}],
      45: [function (t, e, r) {
        var i = t("../../../const"),
          n = {};
        e.exports = n, n.renderGraphics = function (t, e) {
          var r = t.worldAlpha;
          t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
          for (var n = 0; n < t.graphicsData.length; n++) {
            var o = t.graphicsData[n],
              s = o.shape,
              a = o._fillTint,
              l = o._lineTint;
            if (e.lineWidth = o.lineWidth, o.type === i.SHAPES.POLY) {
              e.beginPath();
              var u = s.points;
              e.moveTo(u[0], u[1]);
              for (var c = 1; c < u.length / 2; c++) e.lineTo(u[2 * c], u[2 * c + 1]);
              s.closed && e.lineTo(u[0], u[1]), u[0] === u[u.length - 2] && u[1] === u[u.length - 1] && e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
            } else if (o.type === i.SHAPES.RECT)(o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fillRect(s.x, s.y, s.width, s.height)), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.strokeRect(s.x, s.y, s.width, s.height));
            else if (o.type === i.SHAPES.CIRC) e.beginPath(), e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke());
            else if (o.type === i.SHAPES.ELIP) {
              var h = 2 * s.width,
                d = 2 * s.height,
                p = s.x - h / 2,
                f = s.y - d / 2;
              e.beginPath();
              var m = .5522848,
                g = h / 2 * m,
                v = d / 2 * m,
                y = p + h,
                _ = f + d,
                x = p + h / 2,
                b = f + d / 2;
              e.moveTo(p, b), e.bezierCurveTo(p, b - v, x - g, f, x, f), e.bezierCurveTo(x + g, f, y, b - v, y, b), e.bezierCurveTo(y, b + v, x + g, _, x, _), e.bezierCurveTo(x - g, _, p, b + v, p, b), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
            } else if (o.type === i.SHAPES.RREC) {
              var T = s.x,
                E = s.y,
                w = s.width,
                C = s.height,
                S = s.radius,
                A = Math.min(w, C) / 2 | 0;
              S = S > A ? A : S, e.beginPath(), e.moveTo(T, E + S), e.lineTo(T, E + C - S), e.quadraticCurveTo(T, E + C, T + S, E + C), e.lineTo(T + w - S, E + C), e.quadraticCurveTo(T + w, E + C, T + w, E + C - S), e.lineTo(T + w, E + S), e.quadraticCurveTo(T + w, E, T + w - S, E), e.lineTo(T + S, E), e.quadraticCurveTo(T, E, T, E + S), e.closePath(), (o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
            }
          }
        }, n.renderGraphicsMask = function (t, e) {
          var r = t.graphicsData.length;
          if (0 !== r) {
            e.beginPath();
            for (var n = 0; r > n; n++) {
              var o = t.graphicsData[n],
                s = o.shape;
              if (o.type === i.SHAPES.POLY) {
                var a = s.points;
                e.moveTo(a[0], a[1]);
                for (var l = 1; l < a.length / 2; l++) e.lineTo(a[2 * l], a[2 * l + 1]);
                a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
              } else if (o.type === i.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
              else if (o.type === i.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
              else if (o.type === i.SHAPES.ELIP) {
                var u = 2 * s.width,
                  c = 2 * s.height,
                  h = s.x - u / 2,
                  d = s.y - c / 2,
                  p = .5522848,
                  f = u / 2 * p,
                  m = c / 2 * p,
                  g = h + u,
                  v = d + c,
                  y = h + u / 2,
                  _ = d + c / 2;
                e.moveTo(h, _), e.bezierCurveTo(h, _ - m, y - f, d, y, d), e.bezierCurveTo(y + f, d, g, _ - m, g, _), e.bezierCurveTo(g, _ + m, y + f, v, y, v), e.bezierCurveTo(y - f, v, h, _ + m, h, _), e.closePath()
              } else if (o.type === i.SHAPES.RREC) {
                var x = s.x,
                  b = s.y,
                  T = s.width,
                  E = s.height,
                  w = s.radius,
                  C = Math.min(T, E) / 2 | 0;
                w = w > C ? C : w, e.moveTo(x, b + w), e.lineTo(x, b + E - w), e.quadraticCurveTo(x, b + E, x + w, b + E), e.lineTo(x + T - w, b + E), e.quadraticCurveTo(x + T, b + E, x + T, b + E - w), e.lineTo(x + T, b + w), e.quadraticCurveTo(x + T, b, x + T - w, b), e.lineTo(x + w, b), e.quadraticCurveTo(x, b, x, b + w), e.closePath()
              }
            }
          }
        }, n.updateGraphicsTint = function (t) {
          if (16777215 !== t.tint)
            for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, i = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
              var o = t.graphicsData[n],
                s = 0 | o.fillColor,
                a = 0 | o.lineColor;
              o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * i * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * i * 255
            }
        }
      }, {
        "../../../const": 22
      }],
      46: [function (t, e, r) {
        function i() {}
        var n = t("./CanvasGraphics");
        i.prototype.constructor = i, e.exports = i, i.prototype.pushMask = function (t, e) {
          e.context.save();
          var r = t.alpha,
            i = t.worldTransform,
            o = e.resolution;
          e.context.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), t.texture || (n.renderGraphicsMask(t, e.context), e.context.clip()), t.worldAlpha = r
        }, i.prototype.popMask = function (t) {
          t.context.restore()
        }, i.prototype.destroy = function () {}
      }, {
        "./CanvasGraphics": 45
      }],
      47: [function (t, e, r) {
        var i = t("../../../utils"),
          n = {};
        e.exports = n, n.getTintedTexture = function (t, e) {
          var r = t.texture;
          e = n.roundColor(e);
          var i = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
          if (r.tintCache = r.tintCache || {}, r.tintCache[i]) return r.tintCache[i];
          var o = n.canvas || document.createElement("canvas");
          if (n.tintMethod(r, e, o), n.convertTintToImage) {
            var s = new Image;
            s.src = o.toDataURL(), r.tintCache[i] = s
          } else r.tintCache[i] = o, n.canvas = null;
          return o
        }, n.tintWithMultiply = function (t, e, r) {
          var i = r.getContext("2d"),
            n = t.crop;
          r.width = n.width, r.height = n.height, i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "multiply", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
        }, n.tintWithOverlay = function (t, e, r) {
          var i = r.getContext("2d"),
            n = t.crop;
          r.width = n.width, r.height = n.height, i.globalCompositeOperation = "copy", i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
        }, n.tintWithPerPixel = function (t, e, r) {
          var n = r.getContext("2d"),
            o = t.crop;
          r.width = o.width, r.height = o.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
          for (var s = i.hex2rgb(e), a = s[0], l = s[1], u = s[2], c = n.getImageData(0, 0, o.width, o.height), h = c.data, d = 0; d < h.length; d += 4) h[d + 0] *= a, h[d + 1] *= l, h[d + 2] *= u;
          n.putImageData(c, 0, 0)
        }, n.roundColor = function (t) {
          var e = n.cacheStepsPerColorChannel,
            r = i.hex2rgb(t);
          return r[0] = Math.min(255, r[0] / e * e), r[1] = Math.min(255, r[1] / e * e), r[2] = Math.min(255, r[2] / e * e), i.rgb2hex(r)
        }, n.cacheStepsPerColorChannel = 8, n.convertTintToImage = !1, n.canUseMultiply = i.canUseNewCanvasBlendModes(), n.tintMethod = n.canUseMultiply ? n.tintWithMultiply : n.tintWithPerPixel
      }, {
        "../../../utils": 76
      }],
      48: [function (t, e, r) {
        function i(t, e, r) {
          r = r || {}, n.call(this, "WebGL", t, e, r), this.type = f.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._useFXAA = !!r.forceFXAA && r.antialias, this._FXAAFilter = null, this._contextOptions = {
            alpha: this.transparent,
            antialias: r.antialias,
            premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
            stencil: !0,
            preserveDrawingBuffer: r.preserveDrawingBuffer
          }, this.drawCount = 0, this.shaderManager = new o(this), this.maskManager = new s(this), this.stencilManager = new a(this), this.filterManager = new l(this), this.blendModeManager = new u(this), this.currentRenderTarget = null, this.currentRenderer = new h(this), this.initPlugins(), this._createContext(), this._initContext(), this._mapGlModes(), this._renderTargetStack = []
        }
        var n = t("../SystemRenderer"),
          o = t("./managers/ShaderManager"),
          s = t("./managers/MaskManager"),
          a = t("./managers/StencilManager"),
          l = t("./managers/FilterManager"),
          u = t("./managers/BlendModeManager"),
          c = t("./utils/RenderTarget"),
          h = t("./utils/ObjectRenderer"),
          d = t("./filters/FXAAFilter"),
          p = t("../../utils"),
          f = t("../../const");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, p.pluginTarget.mixin(i), i.glContextId = 0, i.prototype._createContext = function () {
          var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
          if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
          this.glContextId = i.glContextId++, t.id = this.glContextId, t.renderer = this
        }, i.prototype._initContext = function () {
          var t = this.gl;
          t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.renderTarget = new c(t, this.width, this.height, null, this.resolution, !0), this.setRenderTarget(this.renderTarget), this.emit("context", t), this.resize(this.width, this.height), this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !t.getContextAttributes().antialias), this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"), this._FXAAFilter = [new d])
        }, i.prototype.render = function (t) {
          if (!this.gl.isContextLost()) {
            this.drawCount = 0, this._lastObjectRendered = t, this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width, this._FXAAFilter[0].uniforms.resolution.value.y = this.height, t.filterArea = this.renderTarget.size, t.filters = this._FXAAFilter);
            var e = t.parent;
            t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e;
            var r = this.gl;
            this.setRenderTarget(this.renderTarget), this.clearBeforeRender && (this.transparent ? r.clearColor(0, 0, 0, 0) : r.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1), r.clear(r.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.renderTarget)
          }
        }, i.prototype.renderDisplayObject = function (t, e, r) {
          this.setRenderTarget(e), r && e.clear(), this.filterManager.setFilterStack(e.filterStack), t.renderWebGL(this), this.currentRenderer.flush()
        }, i.prototype.setObjectRenderer = function (t) {
          this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
        }, i.prototype.setRenderTarget = function (t) {
          this.currentRenderTarget !== t && (this.currentRenderTarget = t, this.currentRenderTarget.activate(), this.stencilManager.setMaskStack(t.stencilMaskStack))
        }, i.prototype.resize = function (t, e) {
          n.prototype.resize.call(this, t, e), this.filterManager.resize(t, e), this.renderTarget.resize(t, e), this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(), this.gl.viewport(0, 0, this.width, this.height))
        }, i.prototype.updateTexture = function (t) {
          if (t = t.baseTexture || t, t.hasLoaded) {
            var e = this.gl;
            return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture(), t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this)), e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.mipmap && t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), t._glTextures[e.id]
          }
        }, i.prototype.destroyTexture = function (t) {
          t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.gl.id] && this.gl.deleteTexture(t._glTextures[this.gl.id])
        }, i.prototype.handleContextLost = function (t) {
          t.preventDefault()
        }, i.prototype.handleContextRestored = function () {
          this._initContext();
          for (var t in p.BaseTextureCache) p.BaseTextureCache[t]._glTextures.length = 0
        }, i.prototype.destroy = function (t) {
          this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), n.prototype.destroy.call(this, t), this.uid = 0, this.shaderManager.destroy(), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.maskManager = null, this.filterManager = null, this.blendModeManager = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.drawCount = 0, this.gl = null
        }, i.prototype._mapGlModes = function () {
          var t = this.gl;
          this.blendModes || (this.blendModes = {}, this.blendModes[f.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], this.blendModes[f.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SCREEN] = [t.SRC_ALPHA, t.ONE], this.blendModes[f.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), this.drawModes || (this.drawModes = {}, this.drawModes[f.DRAW_MODES.POINTS] = t.POINTS, this.drawModes[f.DRAW_MODES.LINES] = t.LINES, this.drawModes[f.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, this.drawModes[f.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, this.drawModes[f.DRAW_MODES.TRIANGLES] = t.TRIANGLES, this.drawModes[f.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, this.drawModes[f.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN)
        }
      }, {
        "../../const": 22,
        "../../utils": 76,
        "../SystemRenderer": 42,
        "./filters/FXAAFilter": 50,
        "./managers/BlendModeManager": 52,
        "./managers/FilterManager": 53,
        "./managers/MaskManager": 54,
        "./managers/ShaderManager": 55,
        "./managers/StencilManager": 56,
        "./utils/ObjectRenderer": 62,
        "./utils/RenderTarget": 64
      }],
      49: [function (t, e, r) {
        function i(t, e, r) {
          this.shaders = [], this.padding = 0, this.uniforms = r || {}, this.vertexSrc = t || n.defaultVertexSrc, this.fragmentSrc = e || n.defaultFragmentSrc
        }
        var n = t("../shaders/TextureShader");
        i.prototype.constructor = i, e.exports = i, i.prototype.getShader = function (t) {
          var e = t.gl,
            r = this.shaders[e.id];
          return r || (r = new n(t.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes), this.shaders[e.id] = r), r
        }, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.getShader(t);
          t.filterManager.applyFilter(n, e, r, i)
        }, i.prototype.syncUniform = function (t) {
          for (var e = 0, r = this.shaders.length; r > e; ++e) this.shaders[e].syncUniform(t)
        }
      }, {
        "../shaders/TextureShader": 61
      }],
      50: [function (t, e, r) {
        function i() {
          n.call(this, "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n', {
            resolution: {
              type: "v2",
              value: {
                x: 1,
                y: 1
              }
            }
          })
        }
        var n = t("./AbstractFilter");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager,
            n = this.getShader(t);
          i.applyFilter(n, e, r)
        }
      }, {
        "./AbstractFilter": 49
      }],
      51: [function (t, e, r) {
        function i(t) {
          var e = new o.Matrix;
          n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n", {
            mask: {
              type: "sampler2D",
              value: t._texture
            },
            alpha: {
              type: "f",
              value: 1
            },
            otherMatrix: {
              type: "mat3",
              value: e.toArray(!0)
            }
          }), this.maskSprite = t, this.maskMatrix = e
        }
        var n = t("./AbstractFilter"),
          o = t("../../../math");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager;
          this.uniforms.mask.value = this.maskSprite._texture, i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.alpha.value = this.maskSprite.worldAlpha;
          var n = this.getShader(t);
          i.applyFilter(n, e, r)
        }, Object.defineProperties(i.prototype, {
          map: {
            get: function () {
              return this.uniforms.mask.value
            },
            set: function (t) {
              this.uniforms.mask.value = t
            }
          },
          offset: {
            get: function () {
              return this.uniforms.offset.value
            },
            set: function (t) {
              this.uniforms.offset.value = t
            }
          }
        })
      }, {
        "../../../math": 32,
        "./AbstractFilter": 49
      }],
      52: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.currentBlendMode = 99999
        }
        var n = t("./WebGLManager");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setBlendMode = function (t) {
          if (this.currentBlendMode === t) return !1;
          this.currentBlendMode = t;
          var e = this.renderer.blendModes[this.currentBlendMode];
          return this.renderer.gl.blendFunc(e[0], e[1]), !0
        }
      }, {
        "./WebGLManager": 57
      }],
      53: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.filterStack = [], this.filterStack.push({
            renderTarget: t.currentRenderTarget,
            filter: [],
            bounds: null
          }), this.texturePool = [], this.textureSize = new l.Rectangle(0, 0, t.width, t.height), this.currentFrame = null
        }
        var n = t("./WebGLManager"),
          o = t("../utils/RenderTarget"),
          s = t("../../../const"),
          a = t("../utils/Quad"),
          l = t("../../../math");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.onContextChange = function () {
          this.texturePool.length = 0;
          var t = this.renderer.gl;
          this.quad = new a(t)
        }, i.prototype.setFilterStack = function (t) {
          this.filterStack = t
        }, i.prototype.pushFilter = function (t, e) {
          var r = t.filterArea ? t.filterArea.clone() : t.getBounds();
          r.x = 0 | r.x, r.y = 0 | r.y, r.width = 0 | r.width, r.height = 0 | r.height;
          var i = 0 | e[0].padding;
          if (r.x -= i, r.y -= i, r.width += 2 * i, r.height += 2 * i, this.renderer.currentRenderTarget.transform) {
            var n = this.renderer.currentRenderTarget.transform;
            r.x += n.tx, r.y += n.ty, this.capFilterArea(r), r.x -= n.tx, r.y -= n.ty
          } else this.capFilterArea(r);
          if (r.width > 0 && r.height > 0) {
            this.currentFrame = r;
            var o = this.getRenderTarget();
            this.renderer.setRenderTarget(o), o.clear(), this.filterStack.push({
              renderTarget: o,
              filter: e
            })
          } else this.filterStack.push({
            renderTarget: null,
            filter: e
          })
        }, i.prototype.popFilter = function () {
          var t = this.filterStack.pop(),
            e = this.filterStack[this.filterStack.length - 1],
            r = t.renderTarget;
          if (t.renderTarget) {
            var i = e.renderTarget,
              n = this.renderer.gl;
            this.currentFrame = r.frame, this.quad.map(this.textureSize, r.frame), n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
            var o = t.filter;
            if (n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, n.FLOAT, !1, 0, 32), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, n.FLOAT, !1, 0, 64), this.renderer.blendModeManager.setBlendMode(s.BLEND_MODES.NORMAL), 1 === o.length) o[0].uniforms.dimensions && (o[0].uniforms.dimensions.value[0] = this.renderer.width, o[0].uniforms.dimensions.value[1] = this.renderer.height, o[0].uniforms.dimensions.value[2] = this.quad.vertices[0], o[0].uniforms.dimensions.value[3] = this.quad.vertices[5]), o[0].applyFilter(this.renderer, r, i), this.returnRenderTarget(r);
            else {
              for (var a = r, l = this.getRenderTarget(!0), u = 0; u < o.length - 1; u++) {
                var c = o[u];
                c.uniforms.dimensions && (c.uniforms.dimensions.value[0] = this.renderer.width, c.uniforms.dimensions.value[1] = this.renderer.height, c.uniforms.dimensions.value[2] = this.quad.vertices[0], c.uniforms.dimensions.value[3] = this.quad.vertices[5]), c.applyFilter(this.renderer, a, l);
                var h = a;
                a = l, l = h
              }
              o[o.length - 1].applyFilter(this.renderer, a, i), this.returnRenderTarget(a), this.returnRenderTarget(l)
            }
            return t.filter
          }
        }, i.prototype.getRenderTarget = function (t) {
          var e = this.texturePool.pop() || new o(this.renderer.gl, this.textureSize.width, this.textureSize.height, s.SCALE_MODES.LINEAR, this.renderer.resolution * s.FILTER_RESOLUTION);
          return e.frame = this.currentFrame, t && e.clear(!0), e
        }, i.prototype.returnRenderTarget = function (t) {
          this.texturePool.push(t)
        }, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.renderer.gl;
          this.renderer.setRenderTarget(r), i && r.clear(), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, e.texture), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0)
        }, i.prototype.calculateMappedMatrix = function (t, e, r) {
          var i = e.worldTransform.copy(l.Matrix.TEMP_MATRIX),
            n = e._texture.baseTexture,
            o = r.identity(),
            s = this.textureSize.height / this.textureSize.width;
          o.translate(t.x / this.textureSize.width, t.y / this.textureSize.height), o.scale(1, s);
          var a = this.textureSize.width / n.width,
            u = this.textureSize.height / n.height;
          return i.tx /= n.width * a, i.ty /= n.width * a, i.invert(), o.prepend(i), o.scale(1, 1 / s), o.scale(a, u), o.translate(e.anchor.x, e.anchor.y), o
        }, i.prototype.capFilterArea = function (t) {
          t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.textureSize.width && (t.width = this.textureSize.width - t.x), t.y + t.height > this.textureSize.height && (t.height = this.textureSize.height - t.y)
        }, i.prototype.resize = function (t, e) {
          this.textureSize.width = t, this.textureSize.height = e;
          for (var r = 0; r < this.texturePool.length; r++) this.texturePool[r].resize(t, e)
        }, i.prototype.destroy = function () {
          this.filterStack = null, this.offsetY = 0;
          for (var t = 0; t < this.texturePool.length; t++) this.texturePool[t].destroy();
          this.texturePool = null
        }
      }, {
        "../../../const": 22,
        "../../../math": 32,
        "../utils/Quad": 63,
        "../utils/RenderTarget": 64,
        "./WebGLManager": 57
      }],
      54: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.stencilStack = [], this.reverse = !0, this.count = 0, this.alphaMaskPool = []
        }
        var n = t("./WebGLManager"),
          o = t("../filters/SpriteMaskFilter");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.pushMask = function (t, e) {
          e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e)
        }, i.prototype.popMask = function (t, e) {
          e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e)
        }, i.prototype.pushSpriteMask = function (t, e) {
          var r = this.alphaMaskPool.pop();
          r || (r = [new o(e)]), r[0].maskSprite = e, this.renderer.filterManager.pushFilter(t, r)
        }, i.prototype.popSpriteMask = function () {
          var t = this.renderer.filterManager.popFilter();
          this.alphaMaskPool.push(t)
        }, i.prototype.pushStencilMask = function (t, e) {
          this.renderer.stencilManager.pushMask(e)
        }, i.prototype.popStencilMask = function (t, e) {
          this.renderer.stencilManager.popMask(e)
        }
      }, {
        "../filters/SpriteMaskFilter": 51,
        "./WebGLManager": 57
      }],
      55: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
          for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
          this.stack = [], this._currentId = -1, this.currentShader = null
        }
        var n = t("./WebGLManager"),
          o = t("../shaders/TextureShader"),
          s = t("../shaders/ComplexPrimitiveShader"),
          a = t("../shaders/PrimitiveShader"),
          l = t("../../../utils");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, l.pluginTarget.mixin(i), e.exports = i, i.prototype.onContextChange = function () {
          this.initPlugins();
          var t = this.renderer.gl;
          this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = [];
          for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
          this.defaultShader = new o(this), this.primitiveShader = new a(this), this.complexPrimitiveShader = new s(this)
        }, i.prototype.setAttribs = function (t) {
          var e;
          for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1;
          for (var r in t) this.tempAttribState[t[r]] = !0;
          var i = this.renderer.gl;
          for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.attribState[e] ? i.enableVertexAttribArray(e) : i.disableVertexAttribArray(e))
        }, i.prototype.setShader = function (t) {
          return this._currentId === t.uid ? !1 : (this._currentId = t.uid, this.currentShader = t, this.renderer.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
        }, i.prototype.destroy = function () {
          n.prototype.destroy.call(this), this.destroyPlugins(), this.attribState = null, this.tempAttribState = null
        }
      }, {
        "../../../utils": 76,
        "../shaders/ComplexPrimitiveShader": 58,
        "../shaders/PrimitiveShader": 59,
        "../shaders/TextureShader": 61,
        "./WebGLManager": 57
      }],
      56: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.stencilMaskStack = null
        }
        var n = t("./WebGLManager"),
          o = t("../../../utils");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setMaskStack = function (t) {
          this.stencilMaskStack = t;
          var e = this.renderer.gl;
          0 === t.stencilStack.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
        }, i.prototype.pushStencil = function (t, e) {
          this.renderer.currentRenderTarget.attachStencilBuffer();
          var r = this.renderer.gl,
            i = this.stencilMaskStack;
          this.bindGraphics(t, e, this.renderer), 0 === i.stencilStack.length && (r.enable(r.STENCIL_TEST), r.clear(r.STENCIL_BUFFER_BIT), i.reverse = !0, i.count = 0), i.stencilStack.push(e);
          var n = i.count;
          r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), 1 === e.mode ? (r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), i.reverse ? r.stencilFunc(r.EQUAL, 255 - (n + 1), 255) : r.stencilFunc(r.EQUAL, n + 1, 255), i.reverse = !i.reverse) : (i.reverse ? (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n + 1, 255) : r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), i.count++
        }, i.prototype.bindGraphics = function (t, e) {
          this._currentGraphics = t;
          var r, i = this.renderer.gl;
          1 === e.mode ? (r = this.renderer.shaderManager.complexPrimitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)), i.uniform3fv(r.uniforms.color._location, e.color), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 8, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (r = this.renderer.shaderManager.primitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(r.attributes.aColor, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
        }, i.prototype.popStencil = function (t, e) {
          var r = this.renderer.gl,
            i = this.stencilMaskStack;
          if (i.stencilStack.pop(), i.count--, 0 === i.stencilStack.length) r.disable(r.STENCIL_TEST);
          else {
            var n = i.count;
            this.bindGraphics(t, e, this.renderer), r.colorMask(!1, !1, !1, !1), 1 === e.mode ? (i.reverse = !i.reverse, i.reverse ? (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)) : (i.reverse ? (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
          }
        }, i.prototype.destroy = function () {
          n.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
        }, i.prototype.pushMask = function (t) {
          this.renderer.setObjectRenderer(this.renderer.plugins.graphics), t.dirty && this.renderer.plugins.graphics.updateGraphics(t, this.renderer.gl), t._webGL[this.renderer.gl.id].data.length && this.pushStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
        }, i.prototype.popMask = function (t) {
          this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.popStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
        }
      }, {
        "../../../utils": 76,
        "./WebGLManager": 57
      }],
      57: [function (t, e, r) {
        function i(t) {
          this.renderer = t, this.renderer.on("context", this.onContextChange, this)
        }
        i.prototype.constructor = i, e.exports = i, i.prototype.onContextChange = function () {}, i.prototype.destroy = function () {
          this.renderer.off("context", this.onContextChange, this), this.renderer = null
        }
      }, {}],
      58: [function (t, e, r) {
        function i(t) {
          n.call(this, t, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
            tint: {
              type: "3f",
              value: [0, 0, 0]
            },
            alpha: {
              type: "1f",
              value: 0
            },
            color: {
              type: "3f",
              value: [0, 0, 0]
            },
            translationMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            },
            projectionMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            }
          }, {
            aVertexPosition: 0
          })
        }
        var n = t("./Shader");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
      }, {
        "./Shader": 60
      }],
      59: [function (t, e, r) {
        function i(t) {
          n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
            tint: {
              type: "3f",
              value: [0, 0, 0]
            },
            alpha: {
              type: "1f",
              value: 0
            },
            translationMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            },
            projectionMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            }
          }, {
            aVertexPosition: 0,
            aColor: 0
          })
        }
        var n = t("./Shader");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
      }, {
        "./Shader": 60
      }],
      60: [function (t, e, r) {
        function i(t, e, r, i, o) {
          if (!e || !r) throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
          this.uid = n.uid(), this.gl = t.renderer.gl, this.shaderManager = t, this.program = null, this.uniforms = i || {}, this.attributes = o || {}, this.textureCount = 1, this.vertexSrc = e, this.fragmentSrc = r, this.init()
        }
        var n = t("../../../utils");
        i.prototype.constructor = i, e.exports = i, i.prototype.init = function () {
          this.compile(), this.gl.useProgram(this.program), this.cacheUniformLocations(Object.keys(this.uniforms)), this.cacheAttributeLocations(Object.keys(this.attributes))
        }, i.prototype.cacheUniformLocations = function (t) {
          for (var e = 0; e < t.length; ++e) this.uniforms[t[e]]._location = this.gl.getUniformLocation(this.program, t[e])
        }, i.prototype.cacheAttributeLocations = function (t) {
          for (var e = 0; e < t.length; ++e) this.attributes[t[e]] = this.gl.getAttribLocation(this.program, t[e])
        }, i.prototype.compile = function () {
          var t = this.gl,
            e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc),
            r = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc),
            i = t.createProgram();
          return t.attachShader(i, e), t.attachShader(i, r), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(i, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(i) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(i)), t.deleteProgram(i), i = null), t.deleteShader(e), t.deleteShader(r), this.program = i
        }, i.prototype.syncUniform = function (t) {
          var e, r, i = t._location,
            o = t.value,
            s = this.gl;
          switch (t.type) {
          case "b":
          case "bool":
          case "boolean":
            s.uniform1i(i, o ? 1 : 0);
            break;
          case "i":
          case "1i":
            s.uniform1i(i, o);
            break;
          case "f":
          case "1f":
            s.uniform1f(i, o);
            break;
          case "2f":
            s.uniform2f(i, o[0], o[1]);
            break;
          case "3f":
            s.uniform3f(i, o[0], o[1], o[2]);
            break;
          case "4f":
            s.uniform4f(i, o[0], o[1], o[2], o[3]);
            break;
          case "v2":
            s.uniform2f(i, o.x, o.y);
            break;
          case "v3":
            s.uniform3f(i, o.x, o.y, o.z);
            break;
          case "v4":
            s.uniform4f(i, o.x, o.y, o.z, o.w);
            break;
          case "1iv":
            s.uniform1iv(i, o);
            break;
          case "2iv":
            s.uniform2iv(i, o);
            break;
          case "3iv":
            s.uniform3iv(i, o);
            break;
          case "4iv":
            s.uniform4iv(i, o);
            break;
          case "1fv":
            s.uniform1fv(i, o);
            break;
          case "2fv":
            s.uniform2fv(i, o);
            break;
          case "3fv":
            s.uniform3fv(i, o);
            break;
          case "4fv":
            s.uniform4fv(i, o);
            break;
          case "m2":
          case "mat2":
          case "Matrix2fv":
            s.uniformMatrix2fv(i, t.transpose, o);
            break;
          case "m3":
          case "mat3":
          case "Matrix3fv":
            s.uniformMatrix3fv(i, t.transpose, o);
            break;
          case "m4":
          case "mat4":
          case "Matrix4fv":
            s.uniformMatrix4fv(i, t.transpose, o);
            break;
          case "c":
            "number" == typeof o && (o = n.hex2rgb(o)), s.uniform3f(i, o[0], o[1], o[2]);
            break;
          case "iv1":
            s.uniform1iv(i, o);
            break;
          case "iv":
            s.uniform3iv(i, o);
            break;
          case "fv1":
            s.uniform1fv(i, o);
            break;
          case "fv":
            s.uniform3fv(i, o);
            break;
          case "v2v":
            for (t._array || (t._array = new Float32Array(2 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[2 * e] = o[e].x, t._array[2 * e + 1] = o[e].y;
            s.uniform2fv(i, t._array);
            break;
          case "v3v":
            for (t._array || (t._array = new Float32Array(3 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[3 * e] = o[e].x, t._array[3 * e + 1] = o[e].y, t._array[3 * e + 2] = o[e].z;
            s.uniform3fv(i, t._array);
            break;
          case "v4v":
            for (t._array || (t._array = new Float32Array(4 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[4 * e] = o[e].x, t._array[4 * e + 1] = o[e].y, t._array[4 * e + 2] = o[e].z, t._array[4 * e + 3] = o[e].w;
            s.uniform4fv(i, t._array);
            break;
          case "t":
          case "sampler2D":
            if (!t.value || !t.value.baseTexture.hasLoaded) break;
            s.activeTexture(s["TEXTURE" + this.textureCount]);
            var a = t.value.baseTexture._glTextures[s.id];
            a || (this.initSampler2D(t), a = t.value.baseTexture._glTextures[s.id]), s.bindTexture(s.TEXTURE_2D, a), s.uniform1i(t._location, this.textureCount), this.textureCount++;
            break;
          default:
            console.warn("Pixi.js Shader Warning: Unknown uniform type: " + t.type)
          }
        }, i.prototype.syncUniforms = function () {
          this.textureCount = 1;
          for (var t in this.uniforms) this.syncUniform(this.uniforms[t])
        }, i.prototype.initSampler2D = function (t) {
          var e = this.gl,
            r = t.value.baseTexture;
          if (r.hasLoaded)
            if (t.textureData) {
              var i = t.textureData;
              r._glTextures[e.id] = e.createTexture(), e.bindTexture(e.TEXTURE_2D, r._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, i.luminance ? e.LUMINANCE : e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, i.magFilter ? i.magFilter : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE)
            } else this.shaderManager.renderer.updateTexture(r)
        }, i.prototype.destroy = function () {
          this.gl.deleteProgram(this.program), this.gl = null, this.uniforms = null, this.attributes = null, this.vertexSrc = null, this.fragmentSrc = null
        }, i.prototype._glCompile = function (t, e) {
          var r = this.gl.createShader(t);
          return this.gl.shaderSource(r, e), this.gl.compileShader(r), this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (console.log(this.gl.getShaderInfoLog(r)), null)
        }
      }, {
        "../../../utils": 76
      }],
      61: [function (t, e, r) {
        function i(t, e, r, o, s) {
          var a = {
            uSampler: {
              type: "sampler2D",
              value: 0
            },
            projectionMatrix: {
              type: "mat3",
              value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
            }
          };
          if (o)
            for (var l in o) a[l] = o[l];
          var u = {
            aVertexPosition: 0,
            aTextureCoord: 0,
            aColor: 0
          };
          if (s)
            for (var c in s) u[c] = s[c];
          e = e || i.defaultVertexSrc, r = r || i.defaultFragmentSrc, n.call(this, t, e, r, a, u)
        }
        var n = t("./Shader");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), i.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n")
      }, {
        "./Shader": 60
      }],
      62: [function (t, e, r) {
        function i(t) {
          n.call(this, t)
        }
        var n = t("../managers/WebGLManager");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.start = function () {}, i.prototype.stop = function () {
          this.flush()
        }, i.prototype.flush = function () {}, i.prototype.render = function (t) {}
      }, {
        "../managers/WebGLManager": 57
      }],
      63: [function (t, e, r) {
        function i(t) {
          this.gl = t, this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]), this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.upload()
        }
        i.prototype.constructor = i, i.prototype.map = function (t, e) {
          var r = 0,
            i = 0;
          this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.upload()
        }, i.prototype.upload = function () {
          var t = this.gl;
          t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices), t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs), t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors)
        }, e.exports = i
      }, {}],
      64: [function (t, e, r) {
        var i = t("../../../math"),
          n = t("../../../utils"),
          o = t("../../../const"),
          s = t("./StencilMaskStack"),
          a = function (t, e, r, a, l, u) {
            if (this.gl = t, this.frameBuffer = null, this.texture = null, this.size = new i.Rectangle(0, 0, 1, 1), this.resolution = l || o.RESOLUTION, this.projectionMatrix = new i.Matrix, this.transform = null, this.frame = null, this.stencilBuffer = null, this.stencilMaskStack = new s, this.filterStack = [{
                renderTarget: this,
                filter: [],
                bounds: this.size
              }], this.scaleMode = a || o.SCALE_MODES.DEFAULT, this.root = u, !this.root) {
              this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST);
              var c = n.isPowerOfTwo(e, r);
              c ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0)
            }
            this.resize(e, r)
          };
        a.prototype.constructor = a, e.exports = a, a.prototype.clear = function (t) {
          var e = this.gl;
          t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
        }, a.prototype.attachStencilBuffer = function () {
          if (!this.stencilBuffer && !this.root) {
            var t = this.gl;
            this.stencilBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution)
          }
        }, a.prototype.activate = function () {
          var t = this.gl;
          t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
          var e = this.frame || this.size;
          this.calculateProjection(e), this.transform && this.projectionMatrix.append(this.transform), t.viewport(0, 0, e.width * this.resolution, e.height * this.resolution)
        }, a.prototype.calculateProjection = function (t) {
          var e = this.projectionMatrix;
          e.identity(), this.root ? (e.a = 1 / t.width * 2, e.d = -1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = 1 - t.y * e.d) : (e.a = 1 / t.width * 2, e.d = 1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = -1 - t.y * e.d)
        }, a.prototype.resize = function (t, e) {
          if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
            if (this.size.width = t, this.size.height = e, !this.root) {
              var r = this.gl;
              r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t * this.resolution, e * this.resolution, 0, r.RGBA, r.UNSIGNED_BYTE, null), this.stencilBuffer && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t * this.resolution, e * this.resolution))
            }
            var i = this.frame || this.size;
            this.calculateProjection(i)
          }
        }, a.prototype.destroy = function () {
          var t = this.gl;
          t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
        }
      }, {
        "../../../const": 22,
        "../../../math": 32,
        "../../../utils": 76,
        "./StencilMaskStack": 65
      }],
      65: [function (t, e, r) {
        function i() {
          this.stencilStack = [], this.reverse = !0, this.count = 0
        }
        i.prototype.constructor = i, e.exports = i
      }, {}],
      66: [function (t, e, r) {
        function i(t) {
          s.call(this), this.anchor = new n.Point, this._texture = null, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || o.EMPTY
        }
        var n = t("../math"),
          o = t("../textures/Texture"),
          s = t("../display/Container"),
          a = t("../renderers/canvas/utils/CanvasTinter"),
          l = t("../utils"),
          u = t("../const"),
          c = new n.Point;
        i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          width: {
            get: function () {
              return this.scale.x * this.texture._frame.width
            },
            set: function (t) {
              this.scale.x = t / this.texture._frame.width, this._width = t
            }
          },
          height: {
            get: function () {
              return this.scale.y * this.texture._frame.height
            },
            set: function (t) {
              this.scale.y = t / this.texture._frame.height, this._height = t
            }
          },
          texture: {
            get: function () {
              return this._texture
            },
            set: function (t) {
              this._texture !== t && (this._texture = t, this.cachedTint = 16777215, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
          }
        }), i.prototype._onTextureUpdate = function () {
          this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
        }, i.prototype._renderWebGL = function (t) {
          t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
        }, i.prototype.getBounds = function (t) {
          if (!this._currentBounds) {
            var e, r, i, n, o = this._texture._frame.width,
              s = this._texture._frame.height,
              a = o * (1 - this.anchor.x),
              l = o * -this.anchor.x,
              u = s * (1 - this.anchor.y),
              c = s * -this.anchor.y,
              h = t || this.worldTransform,
              d = h.a,
              p = h.b,
              f = h.c,
              m = h.d,
              g = h.tx,
              v = h.ty;
            if (0 === p && 0 === f) 0 > d && (d *= -1), 0 > m && (m *= -1), e = d * l + g, r = d * a + g, i = m * c + v, n = m * u + v;
            else {
              var y = d * l + f * c + g,
                _ = m * c + p * l + v,
                x = d * a + f * c + g,
                b = m * c + p * a + v,
                T = d * a + f * u + g,
                E = m * u + p * a + v,
                w = d * l + f * u + g,
                C = m * u + p * l + v;
              e = y, e = e > x ? x : e, e = e > T ? T : e, e = e > w ? w : e, i = _, i = i > b ? b : i, i = i > E ? E : i, i = i > C ? C : i, r = y, r = x > r ? x : r, r = T > r ? T : r, r = w > r ? w : r, n = _, n = b > n ? b : n, n = E > n ? E : n, n = C > n ? C : n
            }
            if (this.children.length) {
              var S = this.containerGetBounds();
              a = S.x, l = S.x + S.width, u = S.y, c = S.y + S.height, e = a > e ? e : a, i = u > i ? i : u, r = r > l ? r : l, n = n > c ? n : c
            }
            var A = this._bounds;
            A.x = e, A.width = r - e, A.y = i, A.height = n - i, this._currentBounds = A
          }
          return this._currentBounds
        }, i.prototype.getLocalBounds = function () {
          return this._bounds.x = -this._texture._frame.width * this.anchor.x, this._bounds.y = -this._texture._frame.height * this.anchor.y, this._bounds.width = this._texture._frame.width, this._bounds.height = this._texture._frame.height, this._bounds
        }, i.prototype.containsPoint = function (t) {
          this.worldTransform.applyInverse(t, c);
          var e, r = this._texture._frame.width,
            i = this._texture._frame.height,
            n = -r * this.anchor.x;
          return c.x > n && c.x < n + r && (e = -i * this.anchor.y, c.y > e && c.y < e + i) ? !0 : !1
        }, i.prototype._renderCanvas = function (t) {
          if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0) && (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = t.blendModes[t.currentBlendMode]), this.texture.valid)) {
            var e, r, i, n, o = this._texture,
              s = this.worldTransform;
            if (t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.currentScaleMode !== o.baseTexture.scaleMode && (t.currentScaleMode = o.baseTexture.scaleMode, t.context[t.smoothProperty] = t.currentScaleMode === u.SCALE_MODES.LINEAR), o.rotate) {
              var l = s.a,
                c = s.b;
              s.a = -s.c, s.b = -s.d, s.c = l, s.d = c, i = o.crop.height, n = o.crop.width, e = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height, r = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width
            } else i = o.crop.width, n = o.crop.height, e = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width, r = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height;
            t.roundPixels ? (t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution | 0, s.ty * t.resolution | 0), e = 0 | e, r = 0 | r) : t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution, s.ty * t.resolution);
            var h = o.baseTexture.resolution;
            16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, i * h, n * h, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution)) : t.context.drawImage(o.baseTexture.source, o.crop.x * h, o.crop.y * h, i * h, n * h, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution)
          }
        }, i.prototype.destroy = function (t, e) {
          s.prototype.destroy.call(this), this.anchor = null, t && this._texture.destroy(e), this._texture = null, this.shader = null
        }, i.fromFrame = function (t) {
          var e = l.TextureCache[t];
          if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
          return new i(e)
        }, i.fromImage = function (t, e, r) {
          return new i(o.fromImage(t, e, r))
        }
      }, {
        "../const": 22,
        "../display/Container": 23,
        "../math": 32,
        "../renderers/canvas/utils/CanvasTinter": 47,
        "../textures/Texture": 71,
        "../utils": 76
      }],
      67: [function (t, e, r) {
        function i(t) {
          n.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = s.SPRITE_BATCH_SIZE;
          var e = 4 * this.size * this.vertByteSize,
            r = 6 * this.size;
          this.vertices = new ArrayBuffer(e), this.positions = new Float32Array(this.vertices), this.colors = new Uint32Array(this.vertices), this.indices = new Uint16Array(r);
          for (var i = 0, o = 0; r > i; i += 6, o += 4) this.indices[i + 0] = o + 0, this.indices[i + 1] = o + 1, this.indices[i + 2] = o + 2, this.indices[i + 3] = o + 0, this.indices[i + 4] = o + 2, this.indices[i + 5] = o + 3;
          this.currentBatchSize = 0, this.sprites = [], this.shader = null
        }
        var n = t("../../renderers/webgl/utils/ObjectRenderer"),
          o = t("../../renderers/webgl/WebGLRenderer"),
          s = t("../../const");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, o.registerPlugin("sprite", i), i.prototype.onContextChange = function () {
          var t = this.renderer.gl;
          this.shader = this.renderer.shaderManager.defaultShader, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999;
        }, i.prototype.render = function (t) {
          var e = t._texture;
          this.currentBatchSize >= this.size && this.flush();
          var r = e._uvs;
          if (r) {
            var i, n, o, s, a = t.anchor.x,
              l = t.anchor.y;
            if (e.trim) {
              var u = e.trim;
              n = u.x - a * u.width, i = n + e.crop.width, s = u.y - l * u.height, o = s + e.crop.height
            } else i = e._frame.width * (1 - a), n = e._frame.width * -a, o = e._frame.height * (1 - l), s = e._frame.height * -l;
            var c = this.currentBatchSize * this.vertByteSize,
              h = t.worldTransform,
              d = h.a,
              p = h.b,
              f = h.c,
              m = h.d,
              g = h.tx,
              v = h.ty,
              y = this.colors,
              _ = this.positions;
            this.renderer.roundPixels ? (_[c] = d * n + f * s + g | 0, _[c + 1] = m * s + p * n + v | 0, _[c + 5] = d * i + f * s + g | 0, _[c + 6] = m * s + p * i + v | 0, _[c + 10] = d * i + f * o + g | 0, _[c + 11] = m * o + p * i + v | 0, _[c + 15] = d * n + f * o + g | 0, _[c + 16] = m * o + p * n + v | 0) : (_[c] = d * n + f * s + g, _[c + 1] = m * s + p * n + v, _[c + 5] = d * i + f * s + g, _[c + 6] = m * s + p * i + v, _[c + 10] = d * i + f * o + g, _[c + 11] = m * o + p * i + v, _[c + 15] = d * n + f * o + g, _[c + 16] = m * o + p * n + v), _[c + 2] = r.x0, _[c + 3] = r.y0, _[c + 7] = r.x1, _[c + 8] = r.y1, _[c + 12] = r.x2, _[c + 13] = r.y2, _[c + 17] = r.x3, _[c + 18] = r.y3;
            var x = t.tint;
            y[c + 4] = y[c + 9] = y[c + 14] = y[c + 19] = (x >> 16) + (65280 & x) + ((255 & x) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
          }
        }, i.prototype.flush = function () {
          if (0 !== this.currentBatchSize) {
            var t, e = this.renderer.gl;
            if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
            else {
              var r = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
              e.bufferSubData(e.ARRAY_BUFFER, 0, r)
            }
            for (var i, n, o, s, a = 0, l = 0, u = null, c = this.renderer.blendModeManager.currentBlendMode, h = null, d = !1, p = !1, f = 0, m = this.currentBatchSize; m > f; f++) s = this.sprites[f], i = s._texture.baseTexture, n = s.blendMode, o = s.shader || this.shader, d = c !== n, p = h !== o, (u !== i || d || p) && (this.renderBatch(u, a, l), l = f, a = 0, u = i, d && (c = n, this.renderer.blendModeManager.setBlendMode(c)), p && (h = o, t = h.shaders ? h.shaders[e.id] : h, t || (t = h.getShader(this.renderer)), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), e.activeTexture(e.TEXTURE0))), a++;
            this.renderBatch(u, a, l), this.currentBatchSize = 0
          }
        }, i.prototype.renderBatch = function (t, e, r) {
          if (0 !== e) {
            var i = this.renderer.gl;
            t._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]) : this.renderer.updateTexture(t), i.drawElements(i.TRIANGLES, 6 * e, i.UNSIGNED_SHORT, 6 * r * 2), this.renderer.drawCount++
          }
        }, i.prototype.start = function () {
          var t = this.renderer.gl;
          t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
          var e = this.vertByteSize;
          t.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, t.FLOAT, !1, e, 0), t.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, t.FLOAT, !1, e, 8), t.vertexAttribPointer(this.shader.attributes.aColor, 4, t.UNSIGNED_BYTE, !0, e, 16)
        }, i.prototype.destroy = function () {
          this.renderer.gl.deleteBuffer(this.vertexBuffer), this.renderer.gl.deleteBuffer(this.indexBuffer), this.shader.destroy(), this.renderer = null, this.vertices = null, this.positions = null, this.colors = null, this.indices = null, this.vertexBuffer = null, this.indexBuffer = null, this.sprites = null, this.shader = null
        }
      }, {
        "../../const": 22,
        "../../renderers/webgl/WebGLRenderer": 48,
        "../../renderers/webgl/utils/ObjectRenderer": 62
      }],
      68: [function (t, e, r) {
        function i(t, e, r) {
          this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || l.RESOLUTION, this._text = null, this._style = null;
          var i = o.fromCanvas(this.canvas);
          i.trim = new s.Rectangle, n.call(this, i), this.text = t, this.style = e
        }
        var n = t("../sprites/Sprite"),
          o = t("../textures/Texture"),
          s = t("../math"),
          a = t("../utils"),
          l = t("../const");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.fontPropertiesCache = {}, i.fontPropertiesCanvas = document.createElement("canvas"), i.fontPropertiesContext = i.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(i.prototype, {
          width: {
            get: function () {
              return this.dirty && this.updateText(), this.scale.x * this._texture._frame.width
            },
            set: function (t) {
              this.scale.x = t / this._texture._frame.width, this._width = t
            }
          },
          height: {
            get: function () {
              return this.dirty && this.updateText(), this.scale.y * this._texture._frame.height
            },
            set: function (t) {
              this.scale.y = t / this._texture._frame.height, this._height = t
            }
          },
          style: {
            get: function () {
              return this._style
            },
            set: function (t) {
              t = t || {}, "number" == typeof t.fill && (t.fill = a.hex2string(t.fill)), "number" == typeof t.stroke && (t.stroke = a.hex2string(t.stroke)), "number" == typeof t.dropShadowColor && (t.dropShadowColor = a.hex2string(t.dropShadowColor)), t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowColor = t.dropShadowColor || "#000000", t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 5, t.padding = t.padding || 0, t.textBaseline = t.textBaseline || "alphabetic", t.lineJoin = t.lineJoin || "miter", t.miterLimit = t.miterLimit || 10, this._style = t, this.dirty = !0
            }
          },
          text: {
            get: function () {
              return this._text
            },
            set: function (t) {
              t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
            }
          }
        }), i.prototype.updateText = function () {
          var t = this._style;
          this.context.font = t.font;
          for (var e = t.wordWrap ? this.wordWrap(this._text) : this._text, r = e.split(/(?:\r\n|\r|\n)/), i = new Array(r.length), n = 0, o = this.determineFontProperties(t.font), s = 0; s < r.length; s++) {
            var a = this.context.measureText(r[s]).width;
            i[s] = a, n = Math.max(n, a)
          }
          var l = n + t.strokeThickness;
          t.dropShadow && (l += t.dropShadowDistance), this.canvas.width = (l + this.context.lineWidth) * this.resolution;
          var u = this.style.lineHeight || o.fontSize + t.strokeThickness,
            c = u * r.length;
          t.dropShadow && (c += t.dropShadowDistance), this.canvas.height = (c + 2 * this._style.padding) * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = t.font, this.context.strokeStyle = t.stroke, this.context.lineWidth = t.strokeThickness, this.context.textBaseline = t.textBaseline, this.context.lineJoin = t.lineJoin, this.context.miterLimit = t.miterLimit;
          var h, d;
          if (t.dropShadow) {
            this.context.fillStyle = t.dropShadowColor;
            var p = Math.cos(t.dropShadowAngle) * t.dropShadowDistance,
              f = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
            for (s = 0; s < r.length; s++) h = t.strokeThickness / 2, d = t.strokeThickness / 2 + s * u + o.ascent, "right" === t.align ? h += n - i[s] : "center" === t.align && (h += (n - i[s]) / 2), t.fill && this.context.fillText(r[s], h + p, d + f + this._style.padding)
          }
          for (this.context.fillStyle = t.fill, s = 0; s < r.length; s++) h = t.strokeThickness / 2, d = t.strokeThickness / 2 + s * u + o.ascent, "right" === t.align ? h += n - i[s] : "center" === t.align && (h += (n - i[s]) / 2), t.stroke && t.strokeThickness && this.context.strokeText(r[s], h, d + this._style.padding), t.fill && this.context.fillText(r[s], h, d + this._style.padding);
          this.updateTexture()
        }, i.prototype.updateTexture = function () {
          var t = this._texture;
          t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.crop.width = t._frame.width = this.canvas.width / this.resolution, t.crop.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = 0, t.trim.y = -this._style.padding, t.trim.width = t._frame.width, t.trim.height = t._frame.height - 2 * this._style.padding, this._width = this.canvas.width / this.resolution, this._height = this.canvas.height / this.resolution, t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
        }, i.prototype.renderWebGL = function (t) {
          this.dirty && this.updateText(), n.prototype.renderWebGL.call(this, t)
        }, i.prototype._renderCanvas = function (t) {
          this.dirty && this.updateText(), n.prototype._renderCanvas.call(this, t)
        }, i.prototype.determineFontProperties = function (t) {
          var e = i.fontPropertiesCache[t];
          if (!e) {
            e = {};
            var r = i.fontPropertiesCanvas,
              n = i.fontPropertiesContext;
            n.font = t;
            var o = Math.ceil(n.measureText("|MÃ‰q").width),
              s = Math.ceil(n.measureText("M").width),
              a = 2 * s;
            s = 1.4 * s | 0, r.width = o, r.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, o, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÃ‰q", 0, s);
            var l, u, c = n.getImageData(0, 0, o, a).data,
              h = c.length,
              d = 4 * o,
              p = 0,
              f = !1;
            for (l = 0; s > l; l++) {
              for (u = 0; d > u; u += 4)
                if (255 !== c[p + u]) {
                  f = !0;
                  break
                }
              if (f) break;
              p += d
            }
            for (e.ascent = s - l, p = h - d, f = !1, l = a; l > s; l--) {
              for (u = 0; d > u; u += 4)
                if (255 !== c[p + u]) {
                  f = !0;
                  break
                }
              if (f) break;
              p -= d
            }
            e.descent = l - s, e.fontSize = e.ascent + e.descent, i.fontPropertiesCache[t] = e
          }
          return e
        }, i.prototype.wordWrap = function (t) {
          for (var e = "", r = t.split("\n"), i = this._style.wordWrapWidth, n = 0; n < r.length; n++) {
            for (var o = i, s = r[n].split(" "), a = 0; a < s.length; a++) {
              var l = this.context.measureText(s[a]).width,
                u = l + this.context.measureText(" ").width;
              0 === a || u > o ? (a > 0 && (e += "\n"), e += s[a], o = i - l) : (o -= u, e += " " + s[a])
            }
            n < r.length - 1 && (e += "\n")
          }
          return e
        }, i.prototype.getBounds = function (t) {
          return this.dirty && this.updateText(), n.prototype.getBounds.call(this, t)
        }, i.prototype.destroy = function (t) {
          this.context = null, this.canvas = null, this._style = null, this._texture.destroy(void 0 === t ? !0 : t)
        }
      }, {
        "../const": 22,
        "../math": 32,
        "../sprites/Sprite": 66,
        "../textures/Texture": 71,
        "../utils": 76
      }],
      69: [function (t, e, r) {
        function i(t, e, r) {
          s.call(this), this.uid = n.uid(), this.resolution = r || 1, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || o.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = !1, this._glTextures = [], t && this.loadSource(t)
        }
        var n = t("../utils"),
          o = t("../const"),
          s = t("eventemitter3");
        i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.update = function () {
          this.realWidth = this.source.naturalWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = n.isPowerOfTwo(this.realWidth, this.realHeight), this.emit("update", this)
        }, i.prototype.loadSource = function (t) {
          var e = this.isLoading;
          if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
          else if (!t.getContext) {
            this.isLoading = !0;
            var r = this;
            t.onload = function () {
              t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r._sourceLoaded(), r.emit("loaded", r))
            }, t.onerror = function () {
              t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r.emit("error", r))
            }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
          }
        }, i.prototype._sourceLoaded = function () {
          this.hasLoaded = !0, this.update()
        }, i.prototype.destroy = function () {
          this.imageUrl ? (delete n.BaseTextureCache[this.imageUrl], delete n.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete n.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
        }, i.prototype.dispose = function () {
          this.emit("dispose", this), this._glTextures.length = 0
        }, i.prototype.updateSourceImage = function (t) {
          this.source.src = t, this.loadSource(this.source)
        }, i.fromImage = function (t, e, r) {
          var o = n.BaseTextureCache[t];
          if (void 0 === e && 0 !== t.indexOf("data:") && (e = !0), !o) {
            var s = new Image;
            e && (s.crossOrigin = ""), o = new i(s, r), o.imageUrl = t, s.src = t, n.BaseTextureCache[t] = o, o.resolution = n.getResolutionOfUrl(t)
          }
          return o
        }, i.fromCanvas = function (t, e) {
          t._pixiId || (t._pixiId = "canvas_" + n.uid());
          var r = n.BaseTextureCache[t._pixiId];
          return r || (r = new i(t, e), n.BaseTextureCache[t._pixiId] = r), r
        }
      }, {
        "../const": 22,
        "../utils": 76,
        eventemitter3: 11
      }],
      70: [function (t, e, r) {
        function i(t, e, r, i, h) {
          if (!t) throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
          e = e || 100, r = r || 100, h = h || c.RESOLUTION;
          var d = new n;
          if (d.width = e, d.height = r, d.resolution = h, d.scaleMode = i || c.SCALE_MODES.DEFAULT, d.hasLoaded = !0, o.call(this, d, new u.Rectangle(0, 0, e, r)), this.width = e, this.height = r, this.resolution = h, this.render = null, this.renderer = t, this.renderer.type === c.RENDERER_TYPE.WEBGL) {
            var p = this.renderer.gl;
            this.textureBuffer = new s(p, this.width, this.height, d.scaleMode, this.resolution), this.baseTexture._glTextures[p.id] = this.textureBuffer.texture, this.filterManager = new a(this.renderer), this.filterManager.onContextChange(), this.filterManager.resize(e, r), this.render = this.renderWebGL, this.renderer.currentRenderer.start(), this.renderer.currentRenderTarget.activate()
          } else this.render = this.renderCanvas, this.textureBuffer = new l(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
          this.valid = !0, this._updateUvs()
        }
        var n = t("./BaseTexture"),
          o = t("./Texture"),
          s = t("../renderers/webgl/utils/RenderTarget"),
          a = t("../renderers/webgl/managers/FilterManager"),
          l = t("../renderers/canvas/utils/CanvasBuffer"),
          u = t("../math"),
          c = t("../const"),
          h = new u.Matrix;
        i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.resize = function (t, e, r) {
          (t !== this.width || e !== this.height) && (this.valid = t > 0 && e > 0, this.width = this._frame.width = this.crop.width = t, this.height = this._frame.height = this.crop.height = e, r && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.valid && (this.textureBuffer.resize(this.width, this.height), this.filterManager && this.filterManager.resize(this.width, this.height)))
        }, i.prototype.clear = function () {
          this.valid && (this.renderer.type === c.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
        }, i.prototype.renderWebGL = function (t, e, r, i) {
          if (this.valid) {
            if (i = void 0 !== i ? i : !0, this.textureBuffer.transform = e, this.textureBuffer.activate(), t.worldAlpha = 1, i) {
              t.worldTransform.identity(), t.currentBounds = null;
              var n, o, s = t.children;
              for (n = 0, o = s.length; o > n; ++n) s[n].updateTransform()
            }
            var a = this.renderer.filterManager;
            this.renderer.filterManager = this.filterManager, this.renderer.renderDisplayObject(t, this.textureBuffer, r), this.renderer.filterManager = a
          }
        }, i.prototype.renderCanvas = function (t, e, r, i) {
          if (this.valid) {
            i = !!i;
            var n = t.worldTransform,
              o = h;
            o.identity(), e && o.append(e), t.worldTransform = o, t.worldAlpha = 1;
            var s, a, l = t.children;
            for (s = 0, a = l.length; a > s; ++s) l[s].updateTransform();
            r && this.textureBuffer.clear(), t.worldTransform = n;
            var u = this.textureBuffer.context,
              c = this.renderer.resolution;
            this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, u), this.renderer.resolution = c
          }
        }, i.prototype.destroy = function () {
          o.prototype.destroy.call(this, !0), this.textureBuffer.destroy(), this.filterManager && this.filterManager.destroy(), this.renderer = null
        }, i.prototype.getImage = function () {
          var t = new Image;
          return t.src = this.getBase64(), t
        }, i.prototype.getBase64 = function () {
          return this.getCanvas().toDataURL()
        }, i.prototype.getCanvas = function () {
          if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
            var t = this.renderer.gl,
              e = this.textureBuffer.size.width,
              r = this.textureBuffer.size.height,
              i = new Uint8Array(4 * e * r);
            t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, e, r, t.RGBA, t.UNSIGNED_BYTE, i), t.bindFramebuffer(t.FRAMEBUFFER, null);
            var n = new l(e, r),
              o = n.context.getImageData(0, 0, e, r);
            return o.data.set(i), n.context.putImageData(o, 0, 0), n.canvas
          }
          return this.textureBuffer.canvas
        }, i.prototype.getPixels = function () {
          var t, e;
          if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
            var r = this.renderer.gl;
            t = this.textureBuffer.size.width, e = this.textureBuffer.size.height;
            var i = new Uint8Array(4 * t * e);
            return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(0, 0, t, e, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i
          }
          return t = this.textureBuffer.canvas.width, e = this.textureBuffer.canvas.height, this.textureBuffer.canvas.getContext("2d").getImageData(0, 0, t, e).data
        }, i.prototype.getPixel = function (t, e) {
          if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
            var r = this.renderer.gl,
              i = new Uint8Array(4);
            return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(t, e, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i
          }
          return this.textureBuffer.canvas.getContext("2d").getImageData(t, e, 1, 1).data
        }
      }, {
        "../const": 22,
        "../math": 32,
        "../renderers/canvas/utils/CanvasBuffer": 44,
        "../renderers/webgl/managers/FilterManager": 53,
        "../renderers/webgl/utils/RenderTarget": 64,
        "./BaseTexture": 69,
        "./Texture": 71
      }],
      71: [function (t, e, r) {
        function i(t, e, r, n, o) {
          a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new l.Rectangle(0, 0, 1, 1)), t instanceof i && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = r || e, this.rotate = !!o, t.hasLoaded ? (this.noFrame && (e = new l.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this)
        }
        var n = t("./BaseTexture"),
          o = t("./VideoBaseTexture"),
          s = t("./TextureUvs"),
          a = t("eventemitter3"),
          l = t("../math"),
          u = t("../utils");
        i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          frame: {
            get: function () {
              return this._frame
            },
            set: function (t) {
              if (this._frame = t, this.noFrame = !1, this.width = t.width, this.height = t.height, !this.trim && !this.rotate && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
              this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim ? (this.width = this.trim.width, this.height = this.trim.height, this._frame.width = this.trim.width, this._frame.height = this.trim.height) : this.crop = t, this.valid && this._updateUvs()
            }
          }
        }), i.prototype.update = function () {
          this.baseTexture.update()
        }, i.prototype.onBaseTextureLoaded = function (t) {
          this.frame = this.noFrame ? new l.Rectangle(0, 0, t.width, t.height) : this._frame, this.emit("update", this)
        }, i.prototype.onBaseTextureUpdated = function (t) {
          this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
        }, i.prototype.destroy = function (t) {
          this.baseTexture && (t && this.baseTexture.destroy(), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.crop = null, this.valid = !1
        }, i.prototype.clone = function () {
          return new i(this.baseTexture, this.frame, this.crop, this.trim, this.rotate)
        }, i.prototype._updateUvs = function () {
          this._uvs || (this._uvs = new s), this._uvs.set(this.crop, this.baseTexture, this.rotate)
        }, i.fromImage = function (t, e, r) {
          var o = u.TextureCache[t];
          return o || (o = new i(n.fromImage(t, e, r)), u.TextureCache[t] = o), o
        }, i.fromFrame = function (t) {
          var e = u.TextureCache[t];
          if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
          return e
        }, i.fromCanvas = function (t, e) {
          return new i(n.fromCanvas(t, e))
        }, i.fromVideo = function (t, e) {
          return "string" == typeof t ? i.fromVideoUrl(t, e) : new i(o.fromVideo(t, e))
        }, i.fromVideoUrl = function (t, e) {
          return new i(o.fromUrl(t, e))
        }, i.addTextureToCache = function (t, e) {
          u.TextureCache[e] = t
        }, i.removeTextureFromCache = function (t) {
          var e = u.TextureCache[t];
          return delete u.TextureCache[t], delete u.BaseTextureCache[t], e
        }, i.EMPTY = new i(new n)
      }, {
        "../math": 32,
        "../utils": 76,
        "./BaseTexture": 69,
        "./TextureUvs": 72,
        "./VideoBaseTexture": 73,
        eventemitter3: 11
      }],
      72: [function (t, e, r) {
        function i() {
          this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1
        }
        e.exports = i, i.prototype.set = function (t, e, r) {
          var i = e.width,
            n = e.height;
          r ? (this.x0 = (t.x + t.height) / i, this.y0 = t.y / n, this.x1 = (t.x + t.height) / i, this.y1 = (t.y + t.width) / n, this.x2 = t.x / i, this.y2 = (t.y + t.width) / n, this.x3 = t.x / i, this.y3 = t.y / n) : (this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n)
        }
      }, {}],
      73: [function (t, e, r) {
        function i(t, e) {
          if (!t) throw new Error("No video source element specified.");
          (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), o.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
        }

        function n(t, e) {
          e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
          var r = document.createElement("source");
          return r.src = t, r.type = e, r
        }
        var o = t("./BaseTexture"),
          s = t("../utils");
        i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, i.prototype._onUpdate = function () {
          this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
        }, i.prototype._onPlayStart = function () {
          this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
        }, i.prototype._onPlayStop = function () {
          this.autoUpdate = !1
        }, i.prototype._onCanPlay = function () {
          this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
        }, i.prototype.destroy = function () {
          this.source && this.source._pixiId && (delete s.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), o.prototype.destroy.call(this)
        }, i.fromVideo = function (t, e) {
          t._pixiId || (t._pixiId = "video_" + s.uid());
          var r = s.BaseTextureCache[t._pixiId];
          return r || (r = new i(t, e), s.BaseTextureCache[t._pixiId] = r), r
        }, i.fromUrl = function (t, e) {
          var r = document.createElement("video");
          if (Array.isArray(t))
            for (var o = 0; o < t.length; ++o) r.appendChild(n(t.src || t, t.mime));
          else r.appendChild(n(t.src || t, t.mime));
          return r.load(), r.play(), i.fromVideo(r, e)
        }, i.fromUrls = i.fromUrl
      }, {
        "../utils": 76,
        "./BaseTexture": 69
      }],
      74: [function (t, e, r) {
        function i() {
          var t = this;
          this._tick = function (e) {
            t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(s, !0) && (t._requestId = requestAnimationFrame(t._tick)))
          }, this._emitter = new o, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / n.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
        }
        var n = t("../const"),
          o = t("eventemitter3"),
          s = "tick";
        Object.defineProperties(i.prototype, {
          FPS: {
            get: function () {
              return 1e3 / this.elapsedMS
            }
          },
          minFPS: {
            get: function () {
              return 1e3 / this._maxElapsedMS
            },
            set: function (t) {
              var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
              this._maxElapsedMS = 1 / e
            }
          }
        }), i.prototype._requestIfNeeded = function () {
          null === this._requestId && this._emitter.listeners(s, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
        }, i.prototype._cancelIfNeeded = function () {
          null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
        }, i.prototype._startIfPossible = function () {
          this.started ? this._requestIfNeeded() : this.autoStart && this.start()
        }, i.prototype.add = function (t, e) {
          return this._emitter.on(s, t, e), this._startIfPossible(), this
        }, i.prototype.addOnce = function (t, e) {
          return this._emitter.once(s, t, e), this._startIfPossible(), this
        }, i.prototype.remove = function (t, e) {
          return this._emitter.off(s, t, e), this._emitter.listeners(s, !0) || this._cancelIfNeeded(), this
        }, i.prototype.start = function () {
          this.started || (this.started = !0, this._requestIfNeeded())
        }, i.prototype.stop = function () {
          this.started && (this.started = !1, this._cancelIfNeeded())
        }, i.prototype.update = function (t) {
          var e;
          t = t || performance.now(), e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * n.TARGET_FPMS * this.speed, this._emitter.emit(s, this.deltaTime), this.lastTime = t
        }, e.exports = i
      }, {
        "../const": 22,
        eventemitter3: 11
      }],
      75: [function (t, e, r) {
        var i = t("./Ticker"),
          n = new i;
        n.autoStart = !0, e.exports = {
          shared: n,
          Ticker: i
        }
      }, {
        "./Ticker": 74
      }],
      76: [function (t, e, r) {
        var i = t("../const"),
          n = e.exports = {
            _uid: 0,
            _saidHello: !1,
            pluginTarget: t("./pluginTarget"),
            async: t("async"),
            uid: function () {
              return ++n._uid
            },
            hex2rgb: function (t, e) {
              return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
            },
            hex2string: function (t) {
              return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
            },
            rgb2hex: function (t) {
              return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
            },
            canUseNewCanvasBlendModes: function () {
              if ("undefined" == typeof document) return !1;
              var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
                e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
                r = new Image;
              r.src = t + "AP804Oa6" + e;
              var i = new Image;
              i.src = t + "/wCKxvRF" + e;
              var n = document.createElement("canvas");
              n.width = 6, n.height = 1;
              var o = n.getContext("2d");
              o.globalCompositeOperation = "multiply", o.drawImage(r, 0, 0), o.drawImage(i, 2, 0);
              var s = o.getImageData(2, 0, 1, 1).data;
              return 255 === s[0] && 0 === s[1] && 0 === s[2]
            },
            getNextPowerOfTwo: function (t) {
              if (t > 0 && 0 === (t & t - 1)) return t;
              for (var e = 1; t > e;) e <<= 1;
              return e
            },
            isPowerOfTwo: function (t, e) {
              return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
            },
            getResolutionOfUrl: function (t) {
              var e = i.RETINA_PREFIX.exec(t);
              return e ? parseFloat(e[1]) : 1
            },
            sayHello: function (t) {
              if (!n._saidHello) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                  var e = ["\n %c %c %c Pixi.js " + i.VERSION + " - âœ° " + t + " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                  window.console.log.apply(console, e)
                } else window.console && window.console.log("Pixi.js " + i.VERSION + " - " + t + " - http://www.pixijs.com/");
                n._saidHello = !0
              }
            },
            isWebGLSupported: function () {
              var t = {
                stencil: !0
              };
              try {
                if (!window.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                  r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                return !(!r || !r.getContextAttributes().stencil)
              } catch (i) {
                return !1
              }
            },
            TextureCache: {},
            BaseTextureCache: {}
          }
      }, {
        "../const": 22,
        "./pluginTarget": 77,
        async: 2
      }],
      77: [function (t, e, r) {
        function i(t) {
          t.__plugins = {}, t.registerPlugin = function (e, r) {
            t.__plugins[e] = r
          }, t.prototype.initPlugins = function () {
            this.plugins = this.plugins || {};
            for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
          }, t.prototype.destroyPlugins = function () {
            for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
            this.plugins = null
          }
        }
        e.exports = {
          mixin: function (t) {
            i(t)
          }
        }
      }, {}],
      78: [function (t, e, r) {
        var i = t("./core"),
          n = t("./mesh"),
          o = t("./extras"),
          s = t("./filters");
        i.SpriteBatch = function () {
          throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
        }, i.AssetLoader = function () {
          throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
        }, Object.defineProperties(i, {
          Stage: {
            get: function () {
              return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."), i.Container
            }
          },
          DisplayObjectContainer: {
            get: function () {
              return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), i.Container
            }
          },
          Strip: {
            get: function () {
              return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), n.Mesh
            }
          },
          Rope: {
            get: function () {
              return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), n.Rope
            }
          },
          MovieClip: {
            get: function () {
              return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), o.MovieClip
            }
          },
          TilingSprite: {
            get: function () {
              return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), o.TilingSprite
            }
          },
          BitmapText: {
            get: function () {
              return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), o.BitmapText
            }
          },
          blendModes: {
            get: function () {
              return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), i.BLEND_MODES
            }
          },
          scaleModes: {
            get: function () {
              return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), i.SCALE_MODES
            }
          },
          BaseTextureCache: {
            get: function () {
              return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), i.utils.BaseTextureCache
            }
          },
          TextureCache: {
            get: function () {
              return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), i.utils.TextureCache
            }
          },
          math: {
            get: function () {
              return console.warn("The math namespace is deprecated, please access members already accessible on PIXI."), i
            }
          }
        }), i.Sprite.prototype.setTexture = function (t) {
          this.texture = t, console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
        }, o.BitmapText.prototype.setText = function (t) {
          this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
        }, i.Text.prototype.setText = function (t) {
          this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
        }, i.Text.prototype.setStyle = function (t) {
          this.style = t, console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
        }, i.Texture.prototype.setFrame = function (t) {
          this.frame = t, console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
        }, Object.defineProperties(s, {
          AbstractFilter: {
            get: function () {
              return console.warn("filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on."), i.AbstractFilter
            }
          },
          FXAAFilter: {
            get: function () {
              return console.warn("filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on."), i.FXAAFilter
            }
          },
          SpriteMaskFilter: {
            get: function () {
              return console.warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), i.SpriteMaskFilter
            }
          }
        }), i.utils.uuid = function () {
          return console.warn("utils.uuid() is deprecated, please use utils.uid() from now on."), i.utils.uid()
        }
      }, {
        "./core": 29,
        "./extras": 85,
        "./filters": 102,
        "./mesh": 126
      }],
      79: [function (t, e, r) {
        function i(t, e) {
          n.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
            tint: void 0 !== e.tint ? e.tint : 16777215,
            align: e.align || "left",
            name: null,
            size: 0
          }, this.font = e.font, this._text = t, this.maxWidth = 0, this.dirty = !1, this.updateText()
        }
        var n = t("../core");
        i.prototype = Object.create(n.Container.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          tint: {
            get: function () {
              return this._font.tint
            },
            set: function (t) {
              this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
            }
          },
          align: {
            get: function () {
              return this._font.align
            },
            set: function (t) {
              this._font.align = t || "left", this.dirty = !0
            }
          },
          font: {
            get: function () {
              return this._font
            },
            set: function (t) {
              t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : i.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
            }
          },
          text: {
            get: function () {
              return this._text
            },
            set: function (t) {
              t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
            }
          }
        }), i.prototype.updateText = function () {
          for (var t = i.fonts[this._font.name], e = new n.Point, r = null, o = [], s = 0, a = 0, l = [], u = 0, c = this._font.size / t.size, h = -1, d = 0; d < this.text.length; d++) {
            var p = this.text.charCodeAt(d);
            if (h = /(\s)/.test(this.text.charAt(d)) ? d : h, /(?:\r\n|\r|\n)/.test(this.text.charAt(d))) l.push(s), a = Math.max(a, s), u++, e.x = 0, e.y += t.lineHeight, r = null;
            else if (-1 !== h && this.maxWidth > 0 && e.x * c > this.maxWidth) o.splice(h, d - h), d = h, h = -1, l.push(s), a = Math.max(a, s), u++, e.x = 0, e.y += t.lineHeight, r = null;
            else {
              var f = t.chars[p];
              f && (r && f.kerning[r] && (e.x += f.kerning[r]), o.push({
                texture: f.texture,
                line: u,
                charCode: p,
                position: new n.Point(e.x + f.xOffset, e.y + f.yOffset)
              }), s = e.x + (f.texture.width + f.xOffset), e.x += f.xAdvance, r = p)
            }
          }
          l.push(s), a = Math.max(a, s);
          var m = [];
          for (d = 0; u >= d; d++) {
            var g = 0;
            "right" === this._font.align ? g = a - l[d] : "center" === this._font.align && (g = (a - l[d]) / 2),
              m.push(g)
          }
          var v = o.length,
            y = this.tint;
          for (d = 0; v > d; d++) {
            var _ = this._glyphs[d];
            _ ? _.texture = o[d].texture : (_ = new n.Sprite(o[d].texture), this._glyphs.push(_)), _.position.x = (o[d].position.x + m[o[d].line]) * c, _.position.y = o[d].position.y * c, _.scale.x = _.scale.y = c, _.tint = y, _.parent || this.addChild(_)
          }
          for (d = v; d < this._glyphs.length; ++d) this.removeChild(this._glyphs[d]);
          this.textWidth = a * c, this.textHeight = (e.y + t.lineHeight) * c
        }, i.prototype.updateTransform = function () {
          this.validate(), this.containerUpdateTransform()
        }, i.prototype.getLocalBounds = function () {
          return this.validate(), n.Container.prototype.getLocalBounds.call(this)
        }, i.prototype.validate = function () {
          this.dirty && (this.updateText(), this.dirty = !1)
        }, i.fonts = {}
      }, {
        "../core": 29
      }],
      80: [function (t, e, r) {
        function i(t) {
          n.Sprite.call(this, t[0]), this._textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
        }
        var n = t("../core");
        i.prototype = Object.create(n.Sprite.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          totalFrames: {
            get: function () {
              return this._textures.length
            }
          },
          textures: {
            get: function () {
              return this._textures
            },
            set: function (t) {
              this._textures = t, this.texture = this._textures[Math.floor(this._currentTime) % this._textures.length]
            }
          },
          currentFrame: {
            get: function () {
              return Math.floor(this._currentTime) % this._textures.length
            }
          }
        }), i.prototype.stop = function () {
          this.playing && (this.playing = !1, n.ticker.shared.remove(this.update, this))
        }, i.prototype.play = function () {
          this.playing || (this.playing = !0, n.ticker.shared.add(this.update, this))
        }, i.prototype.gotoAndStop = function (t) {
          this.stop(), this._currentTime = t;
          var e = Math.floor(this._currentTime);
          this._texture = this._textures[e % this._textures.length]
        }, i.prototype.gotoAndPlay = function (t) {
          this._currentTime = t, this.play()
        }, i.prototype.update = function (t) {
          this._currentTime += this.animationSpeed * t;
          var e = Math.floor(this._currentTime);
          0 > e ? this.loop ? this._texture = this._textures[this._textures.length - 1 + e % this._textures.length] : (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this.loop || e < this._textures.length ? this._texture = this._textures[e % this._textures.length] : e >= this._textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
        }, i.prototype.destroy = function () {
          this.stop(), n.Sprite.prototype.destroy.call(this)
        }, i.fromFrames = function (t) {
          for (var e = [], r = 0; r < t.length; ++r) e.push(new n.Texture.fromFrame(t[r]));
          return new i(e)
        }, i.fromImages = function (t) {
          for (var e = [], r = 0; r < t.length; ++r) e.push(new n.Texture.fromImage(t[r]));
          return new i(e)
        }
      }, {
        "../core": 29
      }],
      81: [function (t, e, r) {
        function i(t, e, r) {
          n.Sprite.call(this, t), this.tileScale = new n.Point(1, 1), this.tilePosition = new n.Point(0, 0), this._width = e || 100, this._height = r || 100, this._uvs = new n.TextureUvs, this._canvasPattern = null, this.shader = new n.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "uniform vec2 uPixelSize;", "void main(void){", "   vec2 coord = mod(vTextureCoord, uFrame.zw);", "   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"), {
            uFrame: {
              type: "4fv",
              value: [0, 0, 1, 1]
            },
            uTransform: {
              type: "4fv",
              value: [0, 0, 1, 1]
            },
            uPixelSize: {
              type: "2fv",
              value: [1, 1]
            }
          })
        }
        var n = t("../core"),
          o = new n.Point;
        i.prototype = Object.create(n.Sprite.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          width: {
            get: function () {
              return this._width
            },
            set: function (t) {
              this._width = t
            }
          },
          height: {
            get: function () {
              return this._height
            },
            set: function (t) {
              this._height = t
            }
          }
        }), i.prototype._onTextureUpdate = function () {}, i.prototype._renderWebGL = function (t) {
          var e = this._texture;
          if (e && e._uvs) {
            var r = e._uvs,
              i = e._frame.width,
              n = e._frame.height,
              o = e.baseTexture.width,
              s = e.baseTexture.height;
            e._uvs = this._uvs, e._frame.width = this.width, e._frame.height = this.height, this.shader.uniforms.uPixelSize.value[0] = 1 / o, this.shader.uniforms.uPixelSize.value[1] = 1 / s, this.shader.uniforms.uFrame.value[0] = r.x0, this.shader.uniforms.uFrame.value[1] = r.y0, this.shader.uniforms.uFrame.value[2] = r.x1 - r.x0, this.shader.uniforms.uFrame.value[3] = r.y2 - r.y0, this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (i * this.tileScale.x) / this._width, this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (n * this.tileScale.y) / this._height, this.shader.uniforms.uTransform.value[2] = o / this._width * this.tileScale.x, this.shader.uniforms.uTransform.value[3] = s / this._height * this.tileScale.y, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this), e._uvs = r, e._frame.width = i, e._frame.height = n
          }
        }, i.prototype._renderCanvas = function (t) {
          var e = this._texture;
          if (e.baseTexture.hasLoaded) {
            var r = t.context,
              i = this.worldTransform,
              o = t.resolution,
              s = e.baseTexture,
              a = this.tilePosition.x % (e._frame.width * this.tileScale.x),
              l = this.tilePosition.y % (e._frame.height * this.tileScale.y);
            if (!this._canvasPattern) {
              var u = new n.CanvasBuffer(e._frame.width, e._frame.height);
              u.context.drawImage(s.source, -e._frame.x, -e._frame.y), this._canvasPattern = u.context.createPattern(u.canvas, "repeat")
            }
            r.globalAlpha = this.worldAlpha, r.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), r.scale(this.tileScale.x, this.tileScale.y), r.translate(a + this.anchor.x * -this._width, l + this.anchor.y * -this._height), this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, r.globalCompositeOperation = t.blendModes[t.currentBlendMode]), r.fillStyle = this._canvasPattern, r.fillRect(-a, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
          }
        }, i.prototype.getBounds = function () {
          var t, e, r, i, n = this._width,
            o = this._height,
            s = n * (1 - this.anchor.x),
            a = n * -this.anchor.x,
            l = o * (1 - this.anchor.y),
            u = o * -this.anchor.y,
            c = this.worldTransform,
            h = c.a,
            d = c.b,
            p = c.c,
            f = c.d,
            m = c.tx,
            g = c.ty,
            v = h * a + p * u + m,
            y = f * u + d * a + g,
            _ = h * s + p * u + m,
            x = f * u + d * s + g,
            b = h * s + p * l + m,
            T = f * l + d * s + g,
            E = h * a + p * l + m,
            w = f * l + d * a + g;
          t = v, t = t > _ ? _ : t, t = t > b ? b : t, t = t > E ? E : t, r = y, r = r > x ? x : r, r = r > T ? T : r, r = r > w ? w : r, e = v, e = _ > e ? _ : e, e = b > e ? b : e, e = E > e ? E : e, i = y, i = x > i ? x : i, i = T > i ? T : i, i = w > i ? w : i;
          var C = this._bounds;
          return C.x = t, C.width = e - t, C.y = r, C.height = i - r, this._currentBounds = C, C
        }, i.prototype.containsPoint = function (t) {
          this.worldTransform.applyInverse(t, o);
          var e, r = this._width,
            i = this._height,
            n = -r * this.anchor.x;
          return o.x > n && o.x < n + r && (e = -i * this.anchor.y, o.y > e && o.y < e + i) ? !0 : !1
        }, i.prototype.destroy = function () {
          n.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
        }, i.fromFrame = function (t, e, r) {
          var o = n.utils.TextureCache[t];
          if (!o) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
          return new i(o, e, r)
        }, i.fromImage = function (t, e, r, o, s) {
          return new i(n.Texture.fromImage(t, o, s), e, r)
        }
      }, {
        "../core": 29
      }],
      82: [function (t, e, r) {
        var i = t("../core"),
          n = i.DisplayObject,
          o = new i.Matrix;
        n.prototype._cacheAsBitmap = !1, n.prototype._originalRenderWebGL = null, n.prototype._originalRenderCanvas = null, n.prototype._originalUpdateTransform = null, n.prototype._originalHitTest = null, n.prototype._originalDestroy = null, n.prototype._cachedSprite = null, Object.defineProperties(n.prototype, {
          cacheAsBitmap: {
            get: function () {
              return this._cacheAsBitmap
            },
            set: function (t) {
              this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._originalRenderWebGL = this.renderWebGL, this._originalRenderCanvas = this.renderCanvas, this._originalUpdateTransform = this.updateTransform, this._originalGetBounds = this.getBounds, this._originalDestroy = this.destroy, this._originalContainsPoint = this.containsPoint, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(), this.renderWebGL = this._originalRenderWebGL, this.renderCanvas = this._originalRenderCanvas, this.getBounds = this._originalGetBounds, this.destroy = this._originalDestroy, this.updateTransform = this._originalUpdateTransform, this.containsPoint = this._originalContainsPoint))
            }
          }
        }), n.prototype._renderCachedWebGL = function (t) {
          !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cachedSprite.worldAlpha = this.worldAlpha, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this._cachedSprite))
        }, n.prototype._initCachedDisplayObject = function (t) {
          if (!this._cachedSprite) {
            t.currentRenderer.flush();
            var e = this.getLocalBounds().clone();
            if (this._filters) {
              var r = this._filters[0].padding;
              e.x -= r, e.y -= r, e.width += 2 * r, e.height += 2 * r
            }
            var n = t.currentRenderTarget,
              s = t.filterManager.filterStack,
              a = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
              l = o;
            l.tx = -e.x, l.ty = -e.y, this.renderWebGL = this._originalRenderWebGL, a.render(this, l, !0, !0), t.setRenderTarget(n), t.filterManager.filterStack = s, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new i.Sprite(a), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
          }
        }, n.prototype._renderCachedCanvas = function (t) {
          !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cachedSprite.worldAlpha = this.worldAlpha, this._cachedSprite.renderCanvas(t))
        }, n.prototype._initCachedDisplayObjectCanvas = function (t) {
          if (!this._cachedSprite) {
            var e = this.getLocalBounds(),
              r = t.context,
              n = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
              s = o;
            s.tx = -e.x, s.ty = -e.y, this.renderCanvas = this._originalRenderCanvas, n.render(this, s, !0), t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new i.Sprite(n), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
          }
        }, n.prototype._getCachedBounds = function () {
          return this._cachedSprite._currentBounds = null, this._cachedSprite.getBounds()
        }, n.prototype._destroyCachedDisplayObject = function () {
          this._cachedSprite._texture.destroy(), this._cachedSprite = null
        }, n.prototype._cacheAsBitmapDestroy = function () {
          this.cacheAsBitmap = !1, this._originalDestroy()
        }
      }, {
        "../core": 29
      }],
      83: [function (t, e, r) {
        var i = t("../core");
        i.DisplayObject.prototype.name = null, i.Container.prototype.getChildByName = function (t) {
          for (var e = 0; e < this.children.length; e++)
            if (this.children[e].name === t) return this.children[e];
          return null
        }
      }, {
        "../core": 29
      }],
      84: [function (t, e, r) {
        var i = t("../core");
        i.DisplayObject.prototype.getGlobalPosition = function (t) {
          return t = t || new i.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
        }
      }, {
        "../core": 29
      }],
      85: [function (t, e, r) {
        t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
          MovieClip: t("./MovieClip"),
          TilingSprite: t("./TilingSprite"),
          BitmapText: t("./BitmapText")
        }
      }, {
        "./BitmapText": 79,
        "./MovieClip": 80,
        "./TilingSprite": 81,
        "./cacheAsBitmap": 82,
        "./getChildByName": 83,
        "./getGlobalPosition": 84
      }],
      86: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n", {
            dimensions: {
              type: "4fv",
              value: new Float32Array([0, 0, 0, 0])
            },
            pixelSize: {
              type: "1f",
              value: 8
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          size: {
            get: function () {
              return this.uniforms.pixelSize.value
            },
            set: function (t) {
              this.uniforms.pixelSize.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      87: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYFilter = new s, this.defaultFilter = new n.AbstractFilter
        }
        var n = t("../../core"),
          o = t("../blur/BlurXFilter"),
          s = t("../blur/BlurYFilter");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager.getRenderTarget(!0);
          this.defaultFilter.applyFilter(t, e, r), this.blurXFilter.applyFilter(t, e, i), t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN), this.blurYFilter.applyFilter(t, i, r), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), t.filterManager.returnRenderTarget(i)
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.blurXFilter.blur = this.blurYFilter.blur = t
            }
          },
          blurX: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.blurXFilter.blur = t
            }
          },
          blurY: {
            get: function () {
              return this.blurYFilter.blur
            },
            set: function (t) {
              this.blurYFilter.blur = t
            }
          }
        })
      }, {
        "../../core": 29,
        "../blur/BlurXFilter": 90,
        "../blur/BlurYFilter": 91
      }],
      88: [function (t, e, r) {
        function i(t, e) {
          n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n", {
            strength: {
              type: "1f",
              value: 1
            },
            dirX: {
              type: "1f",
              value: t || 0
            },
            dirY: {
              type: "1f",
              value: e || 0
            }
          }), this.defaultFilter = new n.AbstractFilter, this.passes = 1, this.dirX = t || 0, this.dirY = e || 0, this.strength = 4
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.getShader(t);
          if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
          else {
            var o = t.filterManager.getRenderTarget(!0);
            t.filterManager.applyFilter(n, e, o, i);
            for (var s = 0; s < this.passes - 2; s++) t.filterManager.applyFilter(n, o, o, i);
            t.filterManager.applyFilter(n, o, r, i), t.filterManager.returnRenderTarget(o)
          }
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.strength
            },
            set: function (t) {
              this.padding = .5 * t, this.strength = t
            }
          },
          dirX: {
            get: function () {
              return this.dirX
            },
            set: function (t) {
              this.uniforms.dirX.value = t
            }
          },
          dirY: {
            get: function () {
              return this.dirY
            },
            set: function (t) {
              this.uniforms.dirY.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      89: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYFilter = new s
        }
        var n = t("../../core"),
          o = t("./BlurXFilter"),
          s = t("./BlurYFilter");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager.getRenderTarget(!0);
          this.blurXFilter.applyFilter(t, e, i), this.blurYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i)
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.padding = .5 * Math.abs(t), this.blurXFilter.blur = this.blurYFilter.blur = t
            }
          },
          passes: {
            get: function () {
              return this.blurXFilter.passes
            },
            set: function (t) {
              this.blurXFilter.passes = this.blurYFilter.passes = t
            }
          },
          blurX: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.blurXFilter.blur = t
            }
          },
          blurY: {
            get: function () {
              return this.blurYFilter.blur
            },
            set: function (t) {
              this.blurYFilter.blur = t
            }
          }
        })
      }, {
        "../../core": 29,
        "./BlurXFilter": 90,
        "./BlurYFilter": 91
      }],
      90: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
            strength: {
              type: "1f",
              value: 1
            }
          }), this.passes = 1, this.strength = 4
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.getShader(t);
          if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
          else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
              t.filterManager.applyFilter(n, s, a, !0);
              var u = a;
              a = s, s = u
            }
            t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
          }
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.strength
            },
            set: function (t) {
              this.padding = .5 * Math.abs(t), this.strength = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      91: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
            strength: {
              type: "1f",
              value: 1
            }
          }), this.passes = 1, this.strength = 4
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.getShader(t);
          if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
          else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
              t.filterManager.applyFilter(n, s, a, !0);
              var u = a;
              a = s, s = u
            }
            t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
          }
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.strength
            },
            set: function (t) {
              this.padding = .5 * Math.abs(t), this.strength = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      92: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
            delta: {
              type: "v2",
              value: {
                x: .1,
                y: 0
              }
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i
      }, {
        "../../core": 29
      }],
      93: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n", {
            m: {
              type: "1fv",
              value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype._loadMatrix = function (t, e) {
          e = !!e;
          var r = t;
          e && (this._multiply(r, this.uniforms.m.value, t), r = this._colorMatrix(r)), this.uniforms.m.value = r
        }, i.prototype._multiply = function (t, e, r) {
          return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19], t
        }, i.prototype._colorMatrix = function (t) {
          var e = new Float32Array(t);
          return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
        }, i.prototype.brightness = function (t, e) {
          var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e)
        }, i.prototype.greyscale = function (t, e) {
          var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e)
        }, i.prototype.grayscale = i.prototype.greyscale, i.prototype.blackAndWhite = function (t) {
          var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.hue = function (t, e) {
          t = (t || 0) / 180 * Math.PI;
          var r = Math.cos(t),
            i = Math.sin(t),
            n = .213,
            o = .715,
            s = .072,
            a = [n + r * (1 - n) + i * -n, o + r * -o + i * -o, s + r * -s + i * (1 - s), 0, 0, n + r * -n + .143 * i, o + r * (1 - o) + .14 * i, s + r * -s + i * -.283, 0, 0, n + r * -n + i * -(1 - n), o + r * -o + i * o, s + r * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(a, e)
        }, i.prototype.contrast = function (t, e) {
          var r = (t || 0) + 1,
            i = -128 * (r - 1),
            n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
          this._loadMatrix(n, e)
        }, i.prototype.saturate = function (t, e) {
          var r = 2 * (t || 0) / 3 + 1,
            i = (r - 1) * -.5,
            n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(n, e)
        }, i.prototype.desaturate = function (t) {
          this.saturate(-1)
        }, i.prototype.negative = function (t) {
          var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.sepia = function (t) {
          var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.technicolor = function (t) {
          var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.polaroid = function (t) {
          var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.toBGR = function (t) {
          var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.kodachrome = function (t) {
          var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.browni = function (t) {
          var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.vintage = function (t) {
          var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.colorTone = function (t, e, r, i, n) {
          t = t || .2, e = e || .15, r = r || 16770432, i = i || 3375104;
          var o = (r >> 16 & 255) / 255,
            s = (r >> 8 & 255) / 255,
            a = (255 & r) / 255,
            l = (i >> 16 & 255) / 255,
            u = (i >> 8 & 255) / 255,
            c = (255 & i) / 255,
            h = [.3, .59, .11, 0, 0, o, s, a, t, 0, l, u, c, e, 0, o - l, s - u, a - c, 0, 0];
          this._loadMatrix(h, n)
        }, i.prototype.night = function (t, e) {
          t = t || .1;
          var r = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e)
        }, i.prototype.predator = function (t, e) {
          var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e)
        }, i.prototype.lsd = function (t) {
          var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t)
        }, i.prototype.reset = function () {
          var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(t, !1)
        }, Object.defineProperties(i.prototype, {
          matrix: {
            get: function () {
              return this.uniforms.m.value
            },
            set: function (t) {
              this.uniforms.m.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      94: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n", {
            step: {
              type: "1f",
              value: 5
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          step: {
            get: function () {
              return this.uniforms.step.value
            },
            set: function (t) {
              this.uniforms.step.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      95: [function (t, e, r) {
        function i(t, e, r) {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n", {
            matrix: {
              type: "1fv",
              value: new Float32Array(t)
            },
            texelSize: {
              type: "v2",
              value: {
                x: 1 / e,
                y: 1 / r
              }
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          matrix: {
            get: function () {
              return this.uniforms.matrix.value
            },
            set: function (t) {
              this.uniforms.matrix.value = new Float32Array(t)
            }
          },
          width: {
            get: function () {
              return 1 / this.uniforms.texelSize.value.x
            },
            set: function (t) {
              this.uniforms.texelSize.value.x = 1 / t
            }
          },
          height: {
            get: function () {
              return 1 / this.uniforms.texelSize.value.y
            },
            set: function (t) {
              this.uniforms.texelSize.value.y = 1 / t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      96: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i
      }, {
        "../../core": 29
      }],
      97: [function (t, e, r) {
        function i(t) {
          var e = new n.Matrix;
          t.renderable = !1, n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n", {
            mapSampler: {
              type: "sampler2D",
              value: t.texture
            },
            otherMatrix: {
              type: "mat3",
              value: e.toArray(!0)
            },
            scale: {
              type: "v2",
              value: {
                x: 1,
                y: 1
              }
            }
          }), this.maskSprite = t, this.maskMatrix = e, this.scale = new n.Point(20, 20)
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager;
          i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.scale.value.x = this.scale.x * (1 / e.frame.width), this.uniforms.scale.value.y = this.scale.y * (1 / e.frame.height);
          var n = this.getShader(t);
          i.applyFilter(n, e, r)
        }, Object.defineProperties(i.prototype, {
          map: {
            get: function () {
              return this.uniforms.mapSampler.value
            },
            set: function (t) {
              this.uniforms.mapSampler.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      98: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n", {
            scale: {
              type: "1f",
              value: 1
            },
            angle: {
              type: "1f",
              value: 5
            },
            dimensions: {
              type: "4fv",
              value: [0, 0, 0, 0]
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          scale: {
            get: function () {
              return this.uniforms.scale.value
            },
            set: function (t) {
              this.uniforms.scale.value = t
            }
          },
          angle: {
            get: function () {
              return this.uniforms.angle.value
            },
            set: function (t) {
              this.uniforms.angle.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      99: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n", {
            blur: {
              type: "1f",
              value: 1 / 512
            },
            color: {
              type: "c",
              value: [0, 0, 0]
            },
            alpha: {
              type: "1f",
              value: .7
            },
            offset: {
              type: "2f",
              value: [5, 5]
            },
            strength: {
              type: "1f",
              value: 1
            }
          }), this.passes = 1, this.strength = 4
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r, i) {
          var n = this.getShader(t);
          if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
          else {
            for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
              t.filterManager.applyFilter(n, s, a, i);
              var u = a;
              a = s, s = u
            }
            t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
          }
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.strength
            },
            set: function (t) {
              this.padding = .5 * t, this.strength = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      100: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYTintFilter = new s, this.defaultFilter = new n.AbstractFilter, this.padding = 30, this._dirtyPosition = !0, this._angle = 45 * Math.PI / 180, this._distance = 10, this.alpha = .75, this.hideObject = !1, this.blendMode = n.BLEND_MODES.MULTIPLY
        }
        var n = t("../../core"),
          o = t("../blur/BlurXFilter"),
          s = t("./BlurYTintFilter");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager.getRenderTarget(!0);
          this._dirtyPosition && (this._dirtyPosition = !1, this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance, this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance), this.blurXFilter.applyFilter(t, e, i), t.blendModeManager.setBlendMode(this.blendMode), this.blurYTintFilter.applyFilter(t, i, r), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), this.hideObject || this.defaultFilter.applyFilter(t, e, r), t.filterManager.returnRenderTarget(i)
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.blurXFilter.blur = this.blurYTintFilter.blur = t
            }
          },
          blurX: {
            get: function () {
              return this.blurXFilter.blur
            },
            set: function (t) {
              this.blurXFilter.blur = t
            }
          },
          blurY: {
            get: function () {
              return this.blurYTintFilter.blur
            },
            set: function (t) {
              this.blurYTintFilter.blur = t
            }
          },
          color: {
            get: function () {
              return n.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
            },
            set: function (t) {
              this.blurYTintFilter.uniforms.color.value = n.utils.hex2rgb(t)
            }
          },
          alpha: {
            get: function () {
              return this.blurYTintFilter.uniforms.alpha.value
            },
            set: function (t) {
              this.blurYTintFilter.uniforms.alpha.value = t
            }
          },
          distance: {
            get: function () {
              return this._distance
            },
            set: function (t) {
              this._dirtyPosition = !0, this._distance = t
            }
          },
          angle: {
            get: function () {
              return this._angle
            },
            set: function (t) {
              this._dirtyPosition = !0, this._angle = t
            }
          }
        })
      }, {
        "../../core": 29,
        "../blur/BlurXFilter": 90,
        "./BlurYTintFilter": 99
      }],
      101: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n", {
            gray: {
              type: "1f",
              value: 1
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          gray: {
            get: function () {
              return this.uniforms.gray.value
            },
            set: function (t) {
              this.uniforms.gray.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      102: [function (t, e, r) {
        e.exports = {
          AsciiFilter: t("./ascii/AsciiFilter"),
          BloomFilter: t("./bloom/BloomFilter"),
          BlurFilter: t("./blur/BlurFilter"),
          BlurXFilter: t("./blur/BlurXFilter"),
          BlurYFilter: t("./blur/BlurYFilter"),
          BlurDirFilter: t("./blur/BlurDirFilter"),
          ColorMatrixFilter: t("./color/ColorMatrixFilter"),
          ColorStepFilter: t("./color/ColorStepFilter"),
          ConvolutionFilter: t("./convolution/ConvolutionFilter"),
          CrossHatchFilter: t("./crosshatch/CrossHatchFilter"),
          DisplacementFilter: t("./displacement/DisplacementFilter"),
          DotScreenFilter: t("./dot/DotScreenFilter"),
          GrayFilter: t("./gray/GrayFilter"),
          DropShadowFilter: t("./dropshadow/DropShadowFilter"),
          InvertFilter: t("./invert/InvertFilter"),
          NoiseFilter: t("./noise/NoiseFilter"),
          NormalMapFilter: t("./normal/NormalMapFilter"),
          PixelateFilter: t("./pixelate/PixelateFilter"),
          RGBSplitFilter: t("./rgb/RGBSplitFilter"),
          ShockwaveFilter: t("./shockwave/ShockwaveFilter"),
          SepiaFilter: t("./sepia/SepiaFilter"),
          SmartBlurFilter: t("./blur/SmartBlurFilter"),
          TiltShiftFilter: t("./tiltshift/TiltShiftFilter"),
          TiltShiftXFilter: t("./tiltshift/TiltShiftXFilter"),
          TiltShiftYFilter: t("./tiltshift/TiltShiftYFilter"),
          TwistFilter: t("./twist/TwistFilter")
        }
      }, {
        "./ascii/AsciiFilter": 86,
        "./bloom/BloomFilter": 87,
        "./blur/BlurDirFilter": 88,
        "./blur/BlurFilter": 89,
        "./blur/BlurXFilter": 90,
        "./blur/BlurYFilter": 91,
        "./blur/SmartBlurFilter": 92,
        "./color/ColorMatrixFilter": 93,
        "./color/ColorStepFilter": 94,
        "./convolution/ConvolutionFilter": 95,
        "./crosshatch/CrossHatchFilter": 96,
        "./displacement/DisplacementFilter": 97,
        "./dot/DotScreenFilter": 98,
        "./dropshadow/DropShadowFilter": 100,
        "./gray/GrayFilter": 101,
        "./invert/InvertFilter": 103,
        "./noise/NoiseFilter": 104,
        "./normal/NormalMapFilter": 105,
        "./pixelate/PixelateFilter": 106,
        "./rgb/RGBSplitFilter": 107,
        "./sepia/SepiaFilter": 108,
        "./shockwave/ShockwaveFilter": 109,
        "./tiltshift/TiltShiftFilter": 111,
        "./tiltshift/TiltShiftXFilter": 112,
        "./tiltshift/TiltShiftYFilter": 113,
        "./twist/TwistFilter": 114
      }],
      103: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n", {
            invert: {
              type: "1f",
              value: 1
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          invert: {
            get: function () {
              return this.uniforms.invert.value
            },
            set: function (t) {
              this.uniforms.invert.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      104: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n", {
            noise: {
              type: "1f",
              value: .5
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          noise: {
            get: function () {
              return this.uniforms.noise.value
            },
            set: function (t) {
              this.uniforms.noise.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      105: [function (t, e, r) {
        function i(t) {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n", {
            displacementMap: {
              type: "sampler2D",
              value: t
            },
            scale: {
              type: "2f",
              value: {
                x: 15,
                y: 15
              }
            },
            offset: {
              type: "2f",
              value: {
                x: 0,
                y: 0
              }
            },
            mapDimensions: {
              type: "2f",
              value: {
                x: 1,
                y: 1
              }
            },
            dimensions: {
              type: "4f",
              value: [0, 0, 0, 0]
            },
            LightPos: {
              type: "3f",
              value: [0, 1, 0]
            }
          }), t.baseTexture._powerOf2 = !0, t.baseTexture.hasLoaded ? this.onTextureLoaded() : t.baseTexture.once("loaded", this.onTextureLoaded, this)
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.onTextureLoaded = function () {
          this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height
        }, Object.defineProperties(i.prototype, {
          map: {
            get: function () {
              return this.uniforms.displacementMap.value
            },
            set: function (t) {
              this.uniforms.displacementMap.value = t
            }
          },
          scale: {
            get: function () {
              return this.uniforms.scale.value
            },
            set: function (t) {
              this.uniforms.scale.value = t
            }
          },
          offset: {
            get: function () {
              return this.uniforms.offset.value
            },
            set: function (t) {
              this.uniforms.offset.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      106: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n", {
            dimensions: {
              type: "4fv",
              value: new Float32Array([0, 0, 0, 0])
            },
            pixelSize: {
              type: "v2",
              value: {
                x: 10,
                y: 10
              }
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          size: {
            get: function () {
              return this.uniforms.pixelSize.value
            },
            set: function (t) {
              this.uniforms.pixelSize.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      107: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n", {
            red: {
              type: "v2",
              value: {
                x: 20,
                y: 20
              }
            },
            green: {
              type: "v2",
              value: {
                x: -20,
                y: 20
              }
            },
            blue: {
              type: "v2",
              value: {
                x: 20,
                y: -20
              }
            },
            dimensions: {
              type: "4fv",
              value: [0, 0, 0, 0]
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          red: {
            get: function () {
              return this.uniforms.red.value
            },
            set: function (t) {
              this.uniforms.red.value = t
            }
          },
          green: {
            get: function () {
              return this.uniforms.green.value
            },
            set: function (t) {
              this.uniforms.green.value = t
            }
          },
          blue: {
            get: function () {
              return this.uniforms.blue.value
            },
            set: function (t) {
              this.uniforms.blue.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      108: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n", {
            sepia: {
              type: "1f",
              value: 1
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          sepia: {
            get: function () {
              return this.uniforms.sepia.value
            },
            set: function (t) {
              this.uniforms.sepia.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      109: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n", {
            center: {
              type: "v2",
              value: {
                x: .5,
                y: .5
              }
            },
            params: {
              type: "v3",
              value: {
                x: 10,
                y: .8,
                z: .1
              }
            },
            time: {
              type: "1f",
              value: 0
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          center: {
            get: function () {
              return this.uniforms.center.value
            },
            set: function (t) {
              this.uniforms.center.value = t
            }
          },
          params: {
            get: function () {
              return this.uniforms.params.value
            },
            set: function (t) {
              this.uniforms.params.value = t
            }
          },
          time: {
            get: function () {
              return this.uniforms.time.value
            },
            set: function (t) {
              this.uniforms.time.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      110: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
            blur: {
              type: "1f",
              value: 100
            },
            gradientBlur: {
              type: "1f",
              value: 600
            },
            start: {
              type: "v2",
              value: {
                x: 0,
                y: window.innerHeight / 2
              }
            },
            end: {
              type: "v2",
              value: {
                x: 600,
                y: window.innerHeight / 2
              }
            },
            delta: {
              type: "v2",
              value: {
                x: 30,
                y: 30
              }
            },
            texSize: {
              type: "v2",
              value: {
                x: window.innerWidth,
                y: window.innerHeight
              }
            }
          }), this.updateDelta()
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function () {
          this.uniforms.delta.value.x = 0, this.uniforms.delta.value.y = 0
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.uniforms.blur.value
            },
            set: function (t) {
              this.uniforms.blur.value = t
            }
          },
          gradientBlur: {
            get: function () {
              return this.uniforms.gradientBlur.value
            },
            set: function (t) {
              this.uniforms.gradientBlur.value = t
            }
          },
          start: {
            get: function () {
              return this.uniforms.start.value
            },
            set: function (t) {
              this.uniforms.start.value = t, this.updateDelta()
            }
          },
          end: {
            get: function () {
              return this.uniforms.end.value
            },
            set: function (t) {
              this.uniforms.end.value = t, this.updateDelta()
            }
          }
        })
      }, {
        "../../core": 29
      }],
      111: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this), this.tiltShiftXFilter = new o, this.tiltShiftYFilter = new s
        }
        var n = t("../../core"),
          o = t("./TiltShiftXFilter"),
          s = t("./TiltShiftYFilter");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function (t, e, r) {
          var i = t.filterManager.getRenderTarget(!0);
          this.tiltShiftXFilter.applyFilter(t, e, i), this.tiltShiftYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i)
        }, Object.defineProperties(i.prototype, {
          blur: {
            get: function () {
              return this.tiltShiftXFilter.blur
            },
            set: function (t) {
              this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t
            }
          },
          gradientBlur: {
            get: function () {
              return this.tiltShiftXFilter.gradientBlur
            },
            set: function (t) {
              this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = t
            }
          },
          start: {
            get: function () {
              return this.tiltShiftXFilter.start
            },
            set: function (t) {
              this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t
            }
          },
          end: {
            get: function () {
              return this.tiltShiftXFilter.end
            },
            set: function (t) {
              this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t
            }
          }
        })
      }, {
        "../../core": 29,
        "./TiltShiftXFilter": 112,
        "./TiltShiftYFilter": 113
      }],
      112: [function (t, e, r) {
        function i() {
          n.call(this)
        }
        var n = t("./TiltShiftAxisFilter");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function () {
          var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
            e = this.uniforms.end.value.y - this.uniforms.start.value.y,
            r = Math.sqrt(t * t + e * e);
          this.uniforms.delta.value.x = t / r, this.uniforms.delta.value.y = e / r
        }
      }, {
        "./TiltShiftAxisFilter": 110
      }],
      113: [function (t, e, r) {
        function i() {
          n.call(this)
        }
        var n = t("./TiltShiftAxisFilter");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function () {
          var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
            e = this.uniforms.end.value.y - this.uniforms.start.value.y,
            r = Math.sqrt(t * t + e * e);
          this.uniforms.delta.value.x = -e / r, this.uniforms.delta.value.y = t / r
        }
      }, {
        "./TiltShiftAxisFilter": 110
      }],
      114: [function (t, e, r) {
        function i() {
          n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n", {
            radius: {
              type: "1f",
              value: .5
            },
            angle: {
              type: "1f",
              value: 5
            },
            offset: {
              type: "v2",
              value: {
                x: .5,
                y: .5
              }
            }
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          offset: {
            get: function () {
              return this.uniforms.offset.value
            },
            set: function (t) {
              this.uniforms.offset.value = t
            }
          },
          radius: {
            get: function () {
              return this.uniforms.radius.value
            },
            set: function (t) {
              this.uniforms.radius.value = t
            }
          },
          angle: {
            get: function () {
              return this.uniforms.angle.value
            },
            set: function (t) {
              this.uniforms.angle.value = t
            }
          }
        })
      }, {
        "../../core": 29
      }],
      115: [function (t, e, r) {
        function i() {
          this.global = new n.Point, this.target = null, this.originalEvent = null
        }
        var n = t("../core");
        i.prototype.constructor = i, e.exports = i, i.prototype.getLocalPosition = function (t, e, r) {
          var i = t.worldTransform,
            o = r ? r : this.global,
            s = i.a,
            a = i.c,
            l = i.tx,
            u = i.b,
            c = i.d,
            h = i.ty,
            d = 1 / (s * c + a * -u);
          return e = e || new n.Point, e.x = c * d * o.x + -a * d * o.x + (h * a - l * c) * d, e.y = s * d * o.y + -u * d * o.y + (-h * s + l * u) * d, e
        }
      }, {
        "../core": 29
      }],
      116: [function (t, e, r) {
        function i(t, e) {
          e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 !== e.autoPreventDefault ? e.autoPreventDefault : !0, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new o, this.eventData = {
            stopped: !1,
            target: null,
            type: null,
            data: this.mouse,
            stopPropagation: function () {
              this.stopped = !0
            }
          }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this._tempPoint = new n.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
        }
        var n = t("../core"),
          o = t("./InteractionData");
        Object.assign(n.DisplayObject.prototype, t("./interactiveTarget")), i.prototype.constructor = i, e.exports = i, i.prototype.setTargetElement = function (t, e) {
          this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
        }, i.prototype.addEvents = function () {
          this.interactionDOMElement && (n.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
        }, i.prototype.removeEvents = function () {
          this.interactionDOMElement && (n.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
        }, i.prototype.update = function (t) {
          if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
            if (this.didMove) return void(this.didMove = !1);
            this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
          }
        }, i.prototype.dispatchEvent = function (t, e, r) {
          r.stopped || (r.target = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
        }, i.prototype.mapPositionToPoint = function (t, e, r) {
          var i = this.interactionDOMElement.getBoundingClientRect();
          t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) / this.resolution, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) / this.resolution
        }, i.prototype.processInteractive = function (t, e, r, i, n) {
          if (!e.visible) return !1;
          var o = e.children,
            s = !1;
          if (n = n || e.interactive, e.interactiveChildren)
            for (var a = o.length - 1; a >= 0; a--) !s && i ? s = this.processInteractive(t, o[a], r, !0, n) : this.processInteractive(t, o[a], r, !1, !1);
          return n && (i && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), s = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (s = e.containsPoint(t))), e.interactive && r(e, s)), s
        }, i.prototype.onMouseDown = function (t) {
          this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0)
        }, i.prototype.processMouseDown = function (t, e) {
          var r = this.mouse.originalEvent,
            i = 2 === r.button || 3 === r.which;
          e && (t[i ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, i ? "rightdown" : "mousedown", this.eventData))
        }, i.prototype.onMouseUp = function (t) {
          this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0)
        }, i.prototype.processMouseUp = function (t, e) {
          var r = this.mouse.originalEvent,
            i = 2 === r.button || 3 === r.which,
            n = i ? "_isRightDown" : "_isLeftDown";
          e ? (this.dispatchEvent(t, i ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightupoutside" : "mouseupoutside", this.eventData))
        }, i.prototype.onMouseMove = function (t) {
          this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
        }, i.prototype.processMouseMove = function (t, e) {
          this.dispatchEvent(t, "mousemove", this.eventData), this.processMouseOverOut(t, e)
        }, i.prototype.onMouseOut = function (t) {
          this.mouse.originalEvent = t, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = "inherit", this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1)
        }, i.prototype.processMouseOverOut = function (t, e) {
          e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
        }, i.prototype.onTouchStart = function (t) {
          this.autoPreventDefault && t.preventDefault();
          for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
            var n = e[i],
              o = this.getTouchData(n);
            o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.returnTouchData(o)
          }
        }, i.prototype.processTouchStart = function (t, e) {
          e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
        }, i.prototype.onTouchEnd = function (t) {
          this.autoPreventDefault && t.preventDefault();
          for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
            var n = e[i],
              o = this.getTouchData(n);
            o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.returnTouchData(o)
          }
        }, i.prototype.processTouchEnd = function (t, e) {
          e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
        }, i.prototype.onTouchMove = function (t) {
          this.autoPreventDefault && t.preventDefault();
          for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
            var n = e[i],
              o = this.getTouchData(n);
            o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, !1), this.returnTouchData(o)
          }
        }, i.prototype.processTouchMove = function (t, e) {
          e = e, this.dispatchEvent(t, "touchmove", this.eventData)
        }, i.prototype.getTouchData = function (t) {
          var e = this.interactiveDataPool.pop();
          return e || (e = new o), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
        }, i.prototype.returnTouchData = function (t) {
          this.interactiveDataPool.push(t)
        }, i.prototype.destroy = function () {
          this.removeEvents(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
        }, n.WebGLRenderer.registerPlugin("interaction", i), n.CanvasRenderer.registerPlugin("interaction", i)
      }, {
        "../core": 29,
        "./InteractionData": 115,
        "./interactiveTarget": 118
      }],
      117: [function (t, e, r) {
        e.exports = {
          InteractionData: t("./InteractionData"),
          InteractionManager: t("./InteractionManager"),
          interactiveTarget: t("./interactiveTarget")
        }
      }, {
        "./InteractionData": 115,
        "./InteractionManager": 116,
        "./interactiveTarget": 118
      }],
      118: [function (t, e, r) {
        var i = {
          interactive: !1,
          buttonMode: !1,
          interactiveChildren: !0,
          defaultCursor: "pointer",
          _over: !1,
          _touchDown: !1
        };
        e.exports = i
      }, {}],
      119: [function (t, e, r) {
        function i(t, e) {
          var r = {},
            i = t.data.getElementsByTagName("info")[0],
            n = t.data.getElementsByTagName("common")[0];
          r.font = i.getAttribute("face"), r.size = parseInt(i.getAttribute("size"), 10), r.lineHeight = parseInt(n.getAttribute("lineHeight"), 10), r.chars = {};
          for (var a = t.data.getElementsByTagName("char"), l = 0; l < a.length; l++) {
            var u = parseInt(a[l].getAttribute("id"), 10),
              c = new o.Rectangle(parseInt(a[l].getAttribute("x"), 10) + e.frame.x, parseInt(a[l].getAttribute("y"), 10) + e.frame.y, parseInt(a[l].getAttribute("width"), 10), parseInt(a[l].getAttribute("height"), 10));
            r.chars[u] = {
              xOffset: parseInt(a[l].getAttribute("xoffset"), 10),
              yOffset: parseInt(a[l].getAttribute("yoffset"), 10),
              xAdvance: parseInt(a[l].getAttribute("xadvance"), 10),
              kerning: {},
              texture: new o.Texture(e.baseTexture, c)
            }
          }
          var h = t.data.getElementsByTagName("kerning");
          for (l = 0; l < h.length; l++) {
            var d = parseInt(h[l].getAttribute("first"), 10),
              p = parseInt(h[l].getAttribute("second"), 10),
              f = parseInt(h[l].getAttribute("amount"), 10);
            r.chars[p].kerning[d] = f
          }
          t.bitmapFont = r, s.BitmapText.fonts[r.font] = r
        }
        var n = t("resource-loader").Resource,
          o = t("../core"),
          s = t("../extras"),
          a = t("path");
        e.exports = function () {
          return function (t, e) {
            if (!t.data || !t.isXml) return e();
            if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e();
            var r = a.dirname(t.url);
            "." === r && (r = ""), this.baseUrl && r && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/"), r = r.replace(this.baseUrl, "")), r && "/" !== r.charAt(r.length - 1) && (r += "/");
            var s = r + t.data.getElementsByTagName("page")[0].getAttribute("file");
            if (o.utils.TextureCache[s]) i(t, o.utils.TextureCache[s]), e();
            else {
              var l = {
                crossOrigin: t.crossOrigin,
                loadType: n.LOAD_TYPE.IMAGE
              };
              this.add(t.name + "_image", s, l, function (r) {
                i(t, r.texture), e()
              })
            }
          }
        }
      }, {
        "../core": 29,
        "../extras": 85,
        path: 3,
        "resource-loader": 18
      }],
      120: [function (t, e, r) {
        e.exports = {
          Loader: t("./loader"),
          bitmapFontParser: t("./bitmapFontParser"),
          spritesheetParser: t("./spritesheetParser"),
          textureParser: t("./textureParser"),
          Resource: t("resource-loader").Resource
        }
      }, {
        "./bitmapFontParser": 119,
        "./loader": 121,
        "./spritesheetParser": 122,
        "./textureParser": 123,
        "resource-loader": 18
      }],
      121: [function (t, e, r) {
        function i(t, e) {
          n.call(this, t, e);
          for (var r = 0; r < i._pixiMiddleware.length; ++r) this.use(i._pixiMiddleware[r]())
        }
        var n = t("resource-loader"),
          o = t("./textureParser"),
          s = t("./spritesheetParser"),
          a = t("./bitmapFontParser");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i._pixiMiddleware = [n.middleware.parsing.blob, o, s, a], i.addPixiMiddleware = function (t) {
          i._pixiMiddleware.push(t)
        };
        var l = n.Resource;
        l.setExtensionXhrType("fnt", l.XHR_RESPONSE_TYPE.DOCUMENT)
      }, {
        "./bitmapFontParser": 119,
        "./spritesheetParser": 122,
        "./textureParser": 123,
        "resource-loader": 18
      }],
      122: [function (t, e, r) {
        var i = t("resource-loader").Resource,
          n = t("path"),
          o = t("../core");
        e.exports = function () {
          return function (t, e) {
            if (!t.data || !t.isJson || !t.data.frames) return e();
            var r = {
                crossOrigin: t.crossOrigin,
                loadType: i.LOAD_TYPE.IMAGE
              },
              s = n.dirname(t.url.replace(this.baseUrl, "")),
              a = o.utils.getResolutionOfUrl(t.url);
            this.add(t.name + "_image", s + "/" + t.data.meta.image, r, function (r) {
              t.textures = {};
              var i = t.data.frames;
              for (var n in i) {
                var s = i[n].frame;
                if (s) {
                  var l = null,
                    u = null;
                  if (l = i[n].rotated ? new o.Rectangle(s.x, s.y, s.h, s.w) : new o.Rectangle(s.x, s.y, s.w, s.h), i[n].trimmed && (u = new o.Rectangle(i[n].spriteSourceSize.x / a, i[n].spriteSourceSize.y / a, i[n].sourceSize.w / a, i[n].sourceSize.h / a)), i[n].rotated) {
                    var c = l.width;
                    l.width = l.height, l.height = c
                  }
                  l.x /= a, l.y /= a, l.width /= a, l.height /= a, t.textures[n] = new o.Texture(r.texture.baseTexture, l, l.clone(), u, i[n].rotated), o.utils.TextureCache[n] = t.textures[n]
                }
              }
              e()
            })
          }
        }
      }, {
        "../core": 29,
        path: 3,
        "resource-loader": 18
      }],
      123: [function (t, e, r) {
        var i = t("../core");
        e.exports = function () {
          return function (t, e) {
            t.data && t.isImage && (t.texture = new i.Texture(new i.BaseTexture(t.data, null, i.utils.getResolutionOfUrl(t.url))), i.utils.TextureCache[t.url] = t.texture), e()
          }
        }
      }, {
        "../core": 29
      }],
      124: [function (t, e, r) {
        function i(t, e, r, o, s) {
          n.Container.call(this), this._texture = null, this.uvs = r || new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = o || new Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = n.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = s || i.DRAW_MODES.TRIANGLE_MESH, this.texture = t
        }
        var n = t("../core"),
          o = new n.Point,
          s = new n.Polygon;
        i.prototype = Object.create(n.Container.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
          texture: {
            get: function () {
              return this._texture
            },
            set: function (t) {
              this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
          }
        }), i.prototype._renderWebGL = function (t) {
          t.setObjectRenderer(t.plugins.mesh), t.plugins.mesh.render(this)
        }, i.prototype._renderCanvas = function (t) {
          var e = t.context,
            r = this.worldTransform;
          t.roundPixels ? e.setTransform(r.a, r.b, r.c, r.d, 0 | r.tx, 0 | r.ty) : e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.drawMode === i.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
        }, i.prototype._renderCanvasTriangleMesh = function (t) {
          for (var e = this.vertices, r = this.uvs, i = e.length / 2, n = 0; i - 2 > n; n++) {
            var o = 2 * n;
            this._renderCanvasDrawTriangle(t, e, r, o, o + 2, o + 4)
          }
        }, i.prototype._renderCanvasTriangles = function (t) {
          for (var e = this.vertices, r = this.uvs, i = this.indices, n = i.length, o = 0; n > o; o += 3) {
            var s = 2 * i[o],
              a = 2 * i[o + 1],
              l = 2 * i[o + 2];
            this._renderCanvasDrawTriangle(t, e, r, s, a, l)
          }
        }, i.prototype._renderCanvasDrawTriangle = function (t, e, r, i, n, o) {
          var s = this._texture.baseTexture.source,
            a = this._texture.baseTexture.width,
            l = this._texture.baseTexture.height,
            u = e[i],
            c = e[n],
            h = e[o],
            d = e[i + 1],
            p = e[n + 1],
            f = e[o + 1],
            m = r[i] * a,
            g = r[n] * a,
            v = r[o] * a,
            y = r[i + 1] * l,
            _ = r[n + 1] * l,
            x = r[o + 1] * l;
          if (this.canvasPadding > 0) {
            var b = this.canvasPadding / this.worldTransform.a,
              T = this.canvasPadding / this.worldTransform.d,
              E = (u + c + h) / 3,
              w = (d + p + f) / 3,
              C = u - E,
              S = d - w,
              A = Math.sqrt(C * C + S * S);
            u = E + C / A * (A + b), d = w + S / A * (A + T), C = c - E, S = p - w, A = Math.sqrt(C * C + S * S), c = E + C / A * (A + b), p = w + S / A * (A + T), C = h - E, S = f - w, A = Math.sqrt(C * C + S * S), h = E + C / A * (A + b), f = w + S / A * (A + T)
          }
          t.save(), t.beginPath(), t.moveTo(u, d), t.lineTo(c, p), t.lineTo(h, f), t.closePath(), t.clip();
          var R = m * _ + y * v + g * x - _ * v - y * g - m * x,
            M = u * _ + y * h + c * x - _ * h - y * c - u * x,
            F = m * c + u * v + g * h - c * v - u * g - m * h,
            D = m * _ * h + y * c * v + u * g * x - u * _ * v - y * g * h - m * c * x,
            O = d * _ + y * f + p * x - _ * f - y * p - d * x,
            P = m * p + d * v + g * f - p * v - d * g - m * f,
            L = m * _ * f + y * p * v + d * g * x - d * _ * v - y * g * f - m * p * x;
          t.transform(M / R, O / R, F / R, P / R, D / R, L / R), t.drawImage(s, 0, 0), t.restore()
        }, i.prototype.renderMeshFlat = function (t) {
          var e = this.context,
            r = t.vertices,
            i = r.length / 2;
          e.beginPath();
          for (var n = 1; i - 2 > n; n++) {
            var o = 2 * n,
              s = r[o],
              a = r[o + 2],
              l = r[o + 4],
              u = r[o + 1],
              c = r[o + 3],
              h = r[o + 5];
            e.moveTo(s, u), e.lineTo(a, c), e.lineTo(l, h)
          }
          e.fillStyle = "#FF0000", e.fill(), e.closePath()
        }, i.prototype._onTextureUpdate = function () {
          this.updateFrame = !0
        }, i.prototype.getBounds = function (t) {
          if (!this._currentBounds) {
            for (var e = t || this.worldTransform, r = e.a, i = e.b, o = e.c, s = e.d, a = e.tx, l = e.ty, u = -(1 / 0), c = -(1 / 0), h = 1 / 0, d = 1 / 0, p = this.vertices, f = 0, m = p.length; m > f; f += 2) {
              var g = p[f],
                v = p[f + 1],
                y = r * g + o * v + a,
                _ = s * v + i * g + l;
              h = h > y ? y : h, d = d > _ ? _ : d, u = y > u ? y : u, c = _ > c ? _ : c
            }
            if (h === -(1 / 0) || c === 1 / 0) return n.Rectangle.EMPTY;
            var x = this._bounds;
            x.x = h, x.width = u - h, x.y = d, x.height = c - d, this._currentBounds = x
          }
          return this._currentBounds
        }, i.prototype.containsPoint = function (t) {
          if (!this.getBounds().contains(t.x, t.y)) return !1;
          this.worldTransform.applyInverse(t, o);
          var e, r, n = this.vertices,
            a = s.points;
          if (this.drawMode === i.DRAW_MODES.TRIANGLES) {
            var l = this.indices;
            for (r = this.indices.length, e = 0; r > e; e += 3) {
              var u = 2 * l[e],
                c = 2 * l[e + 1],
                h = 2 * l[e + 2];
              if (a[0] = n[u], a[1] = n[u + 1], a[2] = n[c], a[3] = n[c + 1], a[4] = n[h], a[5] = n[h + 1], s.contains(o.x, o.y)) return !0
            }
          } else
            for (r = n.length, e = 0; r > e; e += 6)
              if (a[0] = n[e], a[1] = n[e + 1], a[2] = n[e + 2], a[3] = n[e + 3], a[4] = n[e + 4], a[5] = n[e + 5], s.contains(o.x, o.y)) return !0; return !1
        }, i.DRAW_MODES = {
          TRIANGLE_MESH: 0,
          TRIANGLES: 1
        }
      }, {
        "../core": 29
      }],
      125: [function (t, e, r) {
        function i(t, e) {
          n.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
        }
        var n = t("./Mesh"),
          o = t("../core");
        i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.refresh = function () {
          var t = this.points;
          if (!(t.length < 1) && this._texture._uvs) {
            var e = this.uvs,
              r = this.indices,
              i = this.colors,
              n = this._texture._uvs,
              s = new o.Point(n.x0, n.y0),
              a = new o.Point(n.x2 - n.x0, n.y2 - n.y0);
            e[0] = 0 + s.x, e[1] = 0 + s.y, e[2] = 0 + s.x, e[3] = 1 * a.y + s.y, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1;
            for (var l, u, c, h = t.length, d = 1; h > d; d++) l = t[d], u = 4 * d, c = d / (h - 1), e[u] = c * a.x + s.x, e[u + 1] = 0 + s.y, e[u + 2] = c * a.x + s.x, e[u + 3] = 1 * a.y + s.y, u = 2 * d, i[u] = 1, i[u + 1] = 1, u = 2 * d, r[u] = u, r[u + 1] = u + 1;
            this.dirty = !0
          }
        }, i.prototype._onTextureUpdate = function () {
          n.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
        }, i.prototype.updateTransform = function () {
          var t = this.points;
          if (!(t.length < 1)) {
            for (var e, r, i, n, o, s, a = t[0], l = 0, u = 0, c = this.vertices, h = t.length, d = 0; h > d; d++) r = t[d], i = 4 * d, e = d < t.length - 1 ? t[d + 1] : r, u = -(e.x - a.x), l = e.y - a.y, n = 10 * (1 - d / (h - 1)), n > 1 && (n = 1), o = Math.sqrt(l * l + u * u), s = this._texture.height / 2, l /= o, u /= o, l *= s, u *= s, c[i] = r.x + l, c[i + 1] = r.y + u, c[i + 2] = r.x - l, c[i + 3] = r.y - u, a = r;
            this.containerUpdateTransform()
          }
        }
      }, {
        "../core": 29,
        "./Mesh": 124
      }],
      126: [function (t, e, r) {
        e.exports = {
          Mesh: t("./Mesh"),
          Rope: t("./Rope"),
          MeshRenderer: t("./webgl/MeshRenderer"),
          MeshShader: t("./webgl/MeshShader")
        }
      }, {
        "./Mesh": 124,
        "./Rope": 125,
        "./webgl/MeshRenderer": 127,
        "./webgl/MeshShader": 128
      }],
      127: [function (t, e, r) {
        function i(t) {
          n.ObjectRenderer.call(this, t), this.indices = new Uint16Array(15e3);
          for (var e = 0, r = 0; 15e3 > e; e += 6, r += 4) this.indices[e + 0] = r + 0, this.indices[e + 1] = r + 1, this.indices[e + 2] = r + 2, this.indices[e + 3] = r + 0, this.indices[e + 4] = r + 2, this.indices[e + 5] = r + 3
        }
        var n = t("../../core"),
          o = t("../Mesh");
        i.prototype = Object.create(n.ObjectRenderer.prototype), i.prototype.constructor = i, e.exports = i, n.WebGLRenderer.registerPlugin("mesh", i), i.prototype.onContextChange = function () {}, i.prototype.render = function (t) {
          t._vertexBuffer || this._initWebGL(t);
          var e = this.renderer,
            r = e.gl,
            i = t._texture.baseTexture,
            n = e.shaderManager.plugins.meshShader,
            s = t.drawMode === o.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
          e.blendModeManager.setBlendMode(t.blendMode), r.uniformMatrix3fv(n.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(n.uniforms.projectionMatrix._location, !1, e.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform1f(n.uniforms.alpha._location, t.worldAlpha), t.dirty ? (t.dirty = !1, r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferData(r.ARRAY_BUFFER, t.vertices, r.STATIC_DRAW), r.vertexAttribPointer(n.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.bufferData(r.ARRAY_BUFFER, t.uvs, r.STATIC_DRAW), r.vertexAttribPointer(n.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferData(r.ELEMENT_ARRAY_BUFFER, t.indices, r.STATIC_DRAW)) : (r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, t.vertices), r.vertexAttribPointer(n.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.vertexAttribPointer(n.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferSubData(r.ELEMENT_ARRAY_BUFFER, 0, t.indices)), r.drawElements(s, t.indices.length, r.UNSIGNED_SHORT, 0)
        }, i.prototype._initWebGL = function (t) {
          var e = this.renderer.gl;
          t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), t.colors && (t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
        }, i.prototype.flush = function () {}, i.prototype.start = function () {
          var t = this.renderer.shaderManager.plugins.meshShader;
          this.renderer.shaderManager.setShader(t)
        }, i.prototype.destroy = function () {}
      }, {
        "../../core": 29,
        "../Mesh": 124
      }],
      128: [function (t, e, r) {
        function i(t) {
          n.Shader.call(this, t, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"), {
            alpha: {
              type: "1f",
              value: 0
            },
            translationMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            },
            projectionMatrix: {
              type: "mat3",
              value: new Float32Array(9)
            }
          }, {
            aVertexPosition: 0,
            aTextureCoord: 0
          })
        }
        var n = t("../../core");
        i.prototype = Object.create(n.Shader.prototype), i.prototype.constructor = i, e.exports = i, n.ShaderManager.registerPlugin("meshShader", i)
      }, {
        "../../core": 29
      }],
      129: [function (t, e, r) {
        Object.assign || (Object.assign = t("object-assign"))
      }, {
        "object-assign": 12
      }],
      130: [function (t, e, r) {
        t("./Object.assign"), t("./requestAnimationFrame")
      }, {
        "./Object.assign": 129,
        "./requestAnimationFrame": 131
      }],
      131: [function (t, e, r) {
        (function (t) {
          if (Date.now && Date.prototype.getTime || (Date.now = function () {
              return (new Date).getTime()
            }), !t.performance || !t.performance.now) {
            var e = Date.now();
            t.performance || (t.performance = {}), t.performance.now = function () {
              return Date.now() - e
            }
          }
          for (var r = Date.now(), i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
          t.requestAnimationFrame || (t.requestAnimationFrame = function (t) {
            if ("function" != typeof t) throw new TypeError(t + "is not a function");
            var e = Date.now(),
              i = 16 + r - e;
            return 0 > i && (i = 0), r = e, setTimeout(function () {
              r = Date.now(), t(performance.now())
            }, i)
          }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
            clearTimeout(t)
          })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {}]
    }, {}, [1])(1)
  });