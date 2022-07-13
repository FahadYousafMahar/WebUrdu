/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

//URDU KEYBOARD
var branah = {};
branah.util = { mobile: /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent), keyCode: function(b) {
        if (!b) {
            var b = window.event }
        if ($.browser.mozilla) {
            var a = b.keyCode;
            switch (a) {
                case 59:
                    a = 186;
                    break;
                case 107:
                    a = 187;
                    break;
                case 109:
                    a = 189;
                    break;
                case 61:
                    a = 187;
                    break;
                case 173:
                    a = 189;
                    break }
            return a }
        if ($.browser.opera) {
            var a = b.keyCode;
            switch (a) {
                case 59:
                    a = 186;
                    break;
                case 61:
                    a = 187;
                    break;
                case 109:
                    a = 189;
                    break }
            return a }
        return b.keyCode }, isCtrl: function(a) {
        if (!a) {
            var a = window.event }
        return a.ctrlKey }, isAlt: function(a) {
        if (!a) {
            var a = window.event }
        return a.altKey }, isShift: function(a) {
        if (!a) {
            var a = window.event }
        return a.shiftKey }, insertAtCaret: function(a, f) {
        if (a.readOnly) {
            var g = $("#" + a.id).val();
            $("#" + a.id).val(g + f) } else {
            var d = this.getSelectionStart(a);
            var b = this.getSelectionEnd(a);
            var c = a.value.length;
            a.value = a.value.substring(0, d) + f + a.value.substring(b, c);
            this.setCaretPosition(a, d + f.length, 0) } }, deleteAtCaret: function(c, b, a) {
        if (c.readOnly) {
            var i = $("#" + c.id).val();
            $("#" + c.id).val(i.substring(0, i.length - b));
            return i.substr(i.length - b) }
        var g = this.getSelectionStart(c);
        var d = this.getSelectionEnd(c);
        var f = c.value.length;
        if (b > g) { b = g }
        if (d + a > f) { a = f - d }
        var h = c.value.substring(g - b, d + a);
        c.value = c.value.substring(0, g - b) + c.value.substring(d + a);
        this.setCaretPosition(c, g - b, 0);
        return h }, getSelectionStart: function(a) { a.focus();
        if (a.selectionStart !== undefined) {
            return a.selectionStart } else {
            if (document.selection) {
                var b = document.selection.createRange();
                if (b == null) {
                    return 0 }
                var d = a.createTextRange();
                var c = d.duplicate();
                d.moveToBookmark(b.getBookmark());
                c.setEndPoint("EndToStart", d);
                return c.text.length } }
        return 0 }, getSelectionEnd: function(a) { a.focus();
        if (a.selectionEnd !== undefined) {
            return a.selectionEnd } else {
            if (document.selection) {
                var b = document.selection.createRange();
                if (b == null) {
                    return 0 }
                var d = a.createTextRange();
                var c = d.duplicate();
                d.moveToBookmark(b.getBookmark());
                c.setEndPoint("EndToStart", d);
                return c.text.length + b.text.length } }
        return a.value.length }, setCaretPosition: function(b, d, a) {
        var c = b.value.length;
        if (d > c) { d = c }
        if (d + a > c) { a = c - a }
        b.focus();
        if (b.setSelectionRange) { b.setSelectionRange(d, d + a) } else {
            if (b.createTextRange) {
                var f = b.createTextRange();
                f.collapse(true);
                f.moveEnd("character", d + a);
                f.moveStart("character", d);
                f.select() } }
        b.focus() }, selectAll: function(a) { this.setCaretPosition(a, 0, a.value.length) } };
branah.layout = function() { this.keys = [];
    this.deadkeys = [];
    this.dir = "ltr";
    this.name = "US";
    this.lang = "en" };
branah.layout.prototype.loadDefault = function() { this.keys = [{ i: "k0", c: "0", n: "`", s: "~" }, { i: "k1", c: "0", n: "1", s: "!" }, { i: "k2", c: "0", n: "2", s: "@" }, { i: "k3", c: "0", n: "3", s: "#" }, { i: "k4", c: "0", n: "4", s: "$" }, { i: "k5", c: "0", n: "5", s: "%" }, { i: "k6", c: "0", n: "6", s: "^" }, { i: "k7", c: "0", n: "7", s: "&" }, { i: "k8", c: "0", n: "8", s: "*" }, { i: "k9", c: "0", n: "9", s: "(" }, { i: "k10", c: "0", n: "0", s: ")" }, { i: "k11", c: "0", n: "-", s: "_" }, { i: "k12", c: "0", n: "=", s: "+" }, { i: "k13", c: "1", n: "q", s: "Q" }, { i: "k14", c: "1", n: "w", s: "W" }, { i: "k15", c: "1", n: "e", s: "E" }, { i: "k16", c: "1", n: "r", s: "R" }, { i: "k17", c: "1", n: "t", s: "T" }, { i: "k18", c: "1", n: "y", s: "Y" }, { i: "k19", c: "1", n: "u", s: "U" }, { i: "k20", c: "1", n: "i", s: "I" }, { i: "k21", c: "1", n: "o", s: "O" }, { i: "k22", c: "1", n: "p", s: "P" }, { i: "k23", c: "0", n: "[", s: "{" }, { i: "k24", c: "0", n: "]", s: "}" }, { i: "k25", c: "0", n: "\\", s: "|" }, { i: "k26", c: "1", n: "a", s: "A" }, { i: "k27", c: "1", n: "s", s: "S" }, { i: "k28", c: "1", n: "d", s: "D" }, { i: "k29", c: "1", n: "f", s: "F" }, { i: "k30", c: "1", n: "g", s: "G" }, { i: "k31", c: "1", n: "h", s: "H" }, { i: "k32", c: "1", n: "j", s: "J" }, { i: "k33", c: "1", n: "k", s: "K" }, { i: "k34", c: "1", n: "l", s: "L" }, { i: "k35", c: "0", n: ";", s: ":" }, { i: "k36", c: "0", n: "'", s: '"' }, { i: "k37", c: "1", n: "z", s: "Z" }, { i: "k38", c: "1", n: "x", s: "X" }, { i: "k39", c: "1", n: "c", s: "C" }, { i: "k40", c: "1", n: "v", s: "V" }, { i: "k41", c: "1", n: "b", s: "B" }, { i: "k42", c: "1", n: "n", s: "N" }, { i: "k43", c: "1", n: "m", s: "M" }, { i: "k44", c: "0", n: ",", s: "<" }, { i: "k45", c: "0", n: ".", s: ">" }, { i: "k46", c: "0", n: "/", s: "?" }, { i: "k47", c: "0", n: "\\", s: "|" }];
    this.dir = "ltr";
    this.name = "US";
    this.lang = "en" };
branah.layout.prototype.load = function(a) { this.keys = a.keys;
    this.deadkeys = a.deadkeys;
    this.dir = a.dir;
    this.name = a.name;
    this.lang = a.lang ? a.lang : "en" };
branah.layout.parser = { keyCodes: [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 220], getKeyCode: function(c, e, b) {
        var d = c.length;
        for (var a = 0; a < d; a++) {
            if (c[a].i == b) {
                return e == 1 ? (c[a].s ? c[a].s : "") : (c[a].n ? c[a].n : "") } }
        return 0 }, getKey: function(c, b) {
        var d = c.length;
        for (var a = 0; a < d; a++) {
            if (c[a].i == b) {
                return c[a] } }
        return null }, isDeadkey: function(a, d) {
        if (!a) {
            return false }
        var c = a.length;
        for (var b = 0; b < c; b++) {
            if (a[b].k == d) {
                return true } }
        return false }, getMappedValue: function(a, e, d) {
        if (!a) {
            return "" }
        var c = a.length;
        for (var b = 0; b < c; b++) {
            if (a[b].k == d && a[b].b == e) {
                return a[b].c } }
        return "" }, getKeyId: function(b) {
        for (var a = 0; a < 48; a++) {
            if (this.keyCodes[a] == b) {
                return a } }
        return -1 }, getState: function(d, a, e, b, c) {
        var f = "n";
        if (!a && !e && d) { f = "n" } else {
            if (!a && e && !d) { f = "s" } else {
                if (!a && e && d) { f = "s" } else {
                    if (a && !e && !d) { f = "n" } else {
                        if (a && !e && d) { f = "t" } else {
                            if (a && e && !d) { f = "s" } else {
                                if (a && e && d) { f = "f" } } } } } } }
        if ((f == "n" || f == "s") && b) {
            if (c == "1") {
                if (f == "n") { f = "s" } else { f = "n" } }
            if (c == "SGCap") {
                if (f == "n") { f = "y" } else {
                    if (f == "s") { f = "z" } } } }
        return f } };
branah.keyboard = function(a, d) { this.defaultLayout = new branah.layout();
    this.defaultLayout.loadDefault();
    this.virtualLayout = new branah.layout();
    this.virtualLayout.loadDefault();
    this.currentLayout = this.virtualLayout;
    this.shift = false;
    this.shiftOn = false;
    this.caps = false;
    this.capsOn = false;
    this.alt = false;
    this.ctrl = false;
    this.altCtrlOn = false;
    this.fontSize = 18;
    this.counter = 0;
    this.interval = 0;
    this.prev = "";
    this.cancelkeypress = false;
    this.customOnBackspace = function(e) {};
    this.customOnEnter = function() {};
    this.customOnSpace = function() {
        return false };
    this.customOnKey = function(e) {
        return false };
    this.customOnEsc = function() {};
    this.customDrawKeyboard = function(e) {
        return e };
    this.textbox = $("#" + d);
    this.nativeTextbox = document.getElementById(d);
    if (branah.util.mobile) { this.nativeTextbox.readOnly = true }
    var c = ['<div id="branah-keyboard">'];
    if ($(window).width() < 640) {
        for (var b = 13; b < 23; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        for (var b = 26; b < 35; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        for (var b = 37; b < 44; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<button id="branah-left-shift"><span>Shift</span></button>');
        c.push('<button id="branah-caps-lock"><span>Caps</span></button>');
        c.push('<button id="branah-escape" title="Turn on/off keyboard input conversion"><span>Esc</span></button>');
        c.push('<button id="branah-space"><span>Space</span></button>');
        c.push('<button id="branah-enter" class="branah-enter"><span>Enter</span></button>');
        c.push('<button id="branah-left-ctrl"><span>Ctrl+Alt</span></button>');
        c.push('<button id="branah-left-alt" style="display:none"><span>Alt</span></button>');
        c.push('<button id="branah-backspace"><span>X></span></button>');
        for (var b = 0; b < 13; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        for (var b = 23; b < 26; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        for (var b = 35; b < 37; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        for (var b = 44; b < 48; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<div class="branah-clear"></div>') } else {
        for (var b = 0; b < 13; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<button id="branah-backspace"><span>Backspace</span></button>');
        c.push('<div class="branah-clear"></div>');
        c.push('<button id="branah-tab"><span>Tab</span></button>');
        for (var b = 13; b < 25; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<button id="branah-k25"></button>');
        c.push('<div class="branah-clear"></div>');
        c.push('<button id="branah-caps-lock"><span>Caps Lock</span></button>');
        for (var b = 26; b < 37; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<button id="branah-enter" class="branah-enter"><span>Enter</span></button>');
        c.push('<div class="branah-clear"></div>');
        c.push('<button id="branah-left-shift"><span>Shift</span></button>');
        c.push('<button id="branah-k47" class="branah-key"></button>');
        for (var b = 37; b < 47; b++) { c.push('<button id="branah-k', b, '" class="branah-key"></button>') }
        c.push('<button id="branah-right-shift"><span>Shift</span></button>');
        c.push('<div class="branah-clear"></div>');
        c.push('<button id="branah-left-ctrl"><span>Ctrl</span></button>');
        c.push('<button id="branah"><span>-</span></button>');
        c.push('<button id="branah-left-alt"><span>Alt</span></button>');
        c.push('<button id="branah-space"><span>Space</span></button>');
        c.push('<button id="branah-right-alt"><span>Alt</span></button>');
        c.push('<button id="branah-escape" title="Turn on/off keyboard input conversion"><span>Esc</span></button>');
        c.push('<button id="branah-right-ctrl"><span>Ctrl</span></button>');
        c.push('<div class="branah-clear"></div>') }
    c.push("</div>");
    document.getElementById(a).innerHTML = c.join("");
    this.wireEvents();
    this.drawKeyboard() };
branah.keyboard.prototype.loadDefaultLayout = function(a) { this.defaultLayout.load(a);
    this.drawKeyboard() };
branah.keyboard.prototype.loadVirtualLayout = function(a) { this.virtualLayout.load(a);
    this.drawKeyboard();
    this.textbox.attr("dir", this.attr("dir")) };
branah.keyboard.prototype.switchLayout = function() { this.currentLayout = (this.currentLayout === this.defaultLayout) ? this.virtualLayout : this.defaultLayout;
    this.reset();
    this.drawKeyboard();
    this.textbox.attr("dir", this.attr("dir")) };
branah.keyboard.prototype.onEsc = function() { this.switchLayout();
    this.customOnEsc() };
branah.keyboard.prototype.onShift = function() { this.shift = !this.shift;
    this.drawKeyboard() };
branah.keyboard.prototype.onAlt = function() { this.alt = !this.alt;
    this.drawKeyboard() };
branah.keyboard.prototype.onCtrl = function() { this.ctrl = !this.ctrl;
    this.drawKeyboard() };
branah.keyboard.prototype.onCapsLock = function() { this.caps = !this.caps;
    this.drawKeyboard() };
branah.keyboard.prototype.onBackspace = function() {
    if (this.prev != "") { this.prev = "";
        this.shift = false;
        this.drawKeyboard() } else {
        var a = branah.util.deleteAtCaret(this.nativeTextbox, 1, 0);
        this.customOnBackspace(a) } };
branah.keyboard.prototype.onEnter = function() { branah.util.insertAtCaret(this.nativeTextbox, "\u000A");
    this.customOnEnter() };
branah.keyboard.prototype.onSpace = function() {
    if (!this.customOnSpace()) { branah.util.insertAtCaret(this.nativeTextbox, "\u0020") } };
branah.keyboard.prototype.attr = function(a) {
    if (a == "dir") {
        return this.currentLayout.dir } else {
        if (a == "lang") {
            return this.currentLayout.lang } else {
            if (a == "name") {
                return this.currentLayout.name } } }
    return "" };
branah.keyboard.prototype.reset = function() { this.shift = false;
    this.caps = false;
    this.alt = false;
    this.ctrl = false;
    this.counter = 0;
    this.interval = 0;
    this.prev = "" };
branah.keyboard.prototype.stopRepeat = function() {
    if (this.interval != 0) { clearInterval(this.interval);
        this.counter = 0;
        this.interval = 0 } };
branah.keyboard.prototype.onKey = function(b) {
    var a = branah.layout.parser.getKey(this.currentLayout.keys, b);
    if (a) {
        var d = branah.layout.parser.getState(this.ctrl, this.alt, this.shift, this.caps, a.c ? a.c : "0");
        var e = a[d] ? a[d] : "";
        if (this.prev != "") {
            var c = branah.layout.parser.getMappedValue(this.currentLayout.deadkeys, e, this.prev);
            if (c != "") { branah.util.insertAtCaret(this.nativeTextbox, c) }
            this.prev = "" } else {
            if (branah.layout.parser.isDeadkey(this.currentLayout.deadkeys, e)) { this.prev = e } else {
                if (e != "") {
                    if (!this.customOnKey(e)) { branah.util.insertAtCaret(this.nativeTextbox, e) } } } } } };
branah.keyboard.prototype.drawKeyboard = function() {
    if (!this.currentLayout.keys) {
        return }
    var d, f, j, k;
    var g = this.currentLayout.keys.length;
    for (var e = 0; e < g; e++) { f = this.currentLayout.keys[e];
        if (!$("branah-" + f.i)) {
            continue }
        var c = this.ctrl;
        var a = this.alt;
        var h = this.shift;
        var b = this.caps;
        if (this.shiftOn) { h = true }
        if (this.capsOn) { b = true }
        if (this.altCtrlOn) { c = true;
            a = true }
        j = branah.layout.parser.getState(c, a, h, b, f.c ? f.c : "0");
        k = f[j] ? f[j] : "";
        if (this.prev != "") { k = branah.layout.parser.getMappedValue(this.currentLayout.deadkeys, k, this.prev) }
        if (!h) { k = this.customDrawKeyboard(k);
            if (k == "") { k = "&nbsp;" }
            d = '<div class="branah-label-reference">' + branah.layout.parser.getKeyCode(this.defaultLayout.keys, 0, f.i) + '</div><div class="branah-label-natural" style="font-size: 18px;">&nbsp;' + k + "</div>" } else {
            if (k == "") { k = "&nbsp;" }
            d = '<div class="branah-label-reference">' + branah.layout.parser.getKeyCode(this.defaultLayout.keys, 0, f.i) + '</div><div class="branah-label-shift" style="font-size:18px;">&nbsp;' + k + "</div>" }
        document.getElementById("branah-" + f.i).innerHTML = d }
    $("#branah-left-ctrl").removeClass();
    $("#branah-right-ctrl").removeClass();
    if (c) { $("#branah-left-ctrl").addClass("branah-recessed" + (this.ctrl ? "" : "-hover"));
        $("#branah-right-ctrl").addClass("branah-recessed" + (this.ctrl ? "" : "-hover")) }
    $("#branah-left-alt").removeClass();
    $("#branah-right-alt").removeClass();
    if (a) { $("#branah-left-alt").addClass("branah-recessed" + (this.alt ? "" : "-hover"));
        $("#branah-right-alt").addClass("branah-recessed" + (this.alt ? "" : "-hover")) }
    $("#branah-left-shift").removeClass();
    $("#branah-right-shift").removeClass();
    if (h) { $("#branah-left-shift").addClass("branah-recessed" + (this.shift ? "" : "-hover"));
        $("#branah-right-shift").addClass("branah-recessed" + (this.shift ? "" : "-hover")) }
    $("#branah-caps-lock").removeClass();
    if (b) { $("#branah-caps-lock").addClass("branah-recessed" + (this.caps ? "" : "-hover")) } };
branah.keyboard.prototype.wireEvents = function() {
    var a = this;
    $("#branah-keyboard").delegate("button", "mousedown", function(b) {
        var c = this.id;
        a.interval = setInterval(function() { a.counter++;
            if (a.counter > 5) {
                switch (c) {
                    case "branah-backspace":
                        a.onBackspace();
                        break;
                    default:
                        if (c.search("branah-k([0-9])|([1-3][0-9])|(4[0-7])") != -1) { a.onKey(c.substr(7));
                            a.shift = false;
                            a.alt = false;
                            a.ctrl = false;
                            a.drawKeyboard() }
                        break } } }, 50) });
    $("#branah-keyboard").delegate("button", "mouseup", function(b) { a.stopRepeat() });
    $("#branah-keyboard").delegate("button", "mouseout", function(b) { a.stopRepeat() });
    $("#branah-keyboard").delegate("button", "click", function(b) {
        var c = this.id;
        switch (c) {
            case "branah-left-shift":
            case "branah-right-shift":
                a.onShift();
                break;
            case "branah-left-alt":
            case "branah-right-alt":
                a.onCtrl();
                a.onAlt();
                break;
            case "branah-left-ctrl":
            case "branah-right-ctrl":
                a.onAlt();
                a.onCtrl();
                break;
            case "branah-escape":
                a.onEsc();
                break;
            case "branah-caps-lock":
                a.onCapsLock();
                break;
            case "branah-backspace":
                a.onBackspace();
                break;
            case "branah-enter":
                a.onEnter();
                break;
            case "branah-space":
                a.onSpace();
                break;
            default:
                if (c.search("branah-k([0-9])|([1-3][0-9])|(4[0-7])") != -1) { a.onKey(c.substr(7));
                    a.shift = false;
                    a.alt = false;
                    a.ctrl = false;
                    a.drawKeyboard() }
                break } });
    if (!("ontouchstart" in document.documentElement) || !branah.util.mobile) { $("#branah-left-shift, #branah-right-shift").bind("mouseover", function(b) { a.shiftOn = true;
            a.drawKeyboard() });
        $("#branah-left-shift, #branah-right-shift").bind("mouseout", function(b) { a.shiftOn = false;
            a.drawKeyboard() });
        $("#branah-left-ctrl, #branah-right-ctrl").bind("mouseover", function(b) { a.altCtrlOn = true;
            a.drawKeyboard() });
        $("#branah-left-ctrl, #branah-right-ctrl").bind("mouseout", function(b) { a.altCtrlOn = false;
            a.drawKeyboard() });
        $("#branah-left-alt, #branah-right-alt").bind("mouseover", function(b) { a.altCtrlOn = true;
            a.drawKeyboard() });
        $("#branah-left-alt, #branah-right-alt").bind("mouseout", function(b) { a.altCtrlOn = false;
            a.drawKeyboard() });
        $("#branah-caps-lock").bind("mouseover", function(b) { a.capsOn = true;
            a.drawKeyboard() });
        $("#branah-caps-lock").bind("mouseout", function(b) { a.capsOn = false;
            a.drawKeyboard() }) }
    a.textbox.bind("keydown", function(b) {
        var d = branah.util.keyCode(b);
        if ((d == 65 || d == 67 || d == 86 || d == 88 || d == 89 || d == 90) && (a.ctrl && !a.alt && !a.shift)) {
            return }
        if (a.currentLayout == a.defaultLayout && d != 27) {
            return }
        switch (d) {
            case 17:
                a.ctrl = false;
                a.onCtrl();
                break;
            case 18:
                a.alt = false;
                a.onAlt();
                break;
            case 16:
                a.shift = false;
                a.onShift();
                break;
            case 27:
                a.onEsc();
                break;
            case 8:
                a.onBackspace();
                b.preventDefault();
                break;
            case 32:
                a.onSpace();
                b.preventDefault();
                break;
            case 10:
                a.onEnter();
                b.preventDefault();
                break;
            default:
                var c = branah.layout.parser.getKeyId(branah.util.keyCode(b));
                if (c != -1) { a.onKey("k" + c);
                    a.drawKeyboard();
                    b.preventDefault();
                    a.cancelkeypress = true }
                break } });
    if ($.browser.opera) { a.textbox.bind("keypress", function(b) {
            if (a.cancelkeypress) { b.preventDefault();
                a.cancelkeypress = false } }) }
    a.textbox.bind("keyup", function(b) {
        switch (branah.util.keyCode(b)) {
            case 17:
                a.ctrl = true;
                a.onCtrl();
                break;
            case 18:
                a.alt = true;
                a.onAlt();
                break;
            case 16:
                a.shift = true;
                a.onShift();
                break;
            default:
        } }) };
var keyboard = null;
$(document).ready(function() {
    keyboard = new branah.keyboard("keyboard", "editor");
    keyboard.fontSize = 10;
    var editor_fontsize = 15;
    keyboard.loadVirtualLayout({ "name": "Urdu Phonetic", "dir": "rtl", "keys": [{ "i": "k0", "c": "0", "n": "؏", "s": "؎", "l": "", "t": "", "f": "" }, { "i": "k1", "c": "0", "n": "۱", "s": "!", "l": "", "t": "", "f": "" }, { "i": "k2", "c": "0", "n": "۲", "s": "@", "l": "", "t": "", "f": "" }, { "i": "k3", "c": "0", "n": "۳", "s": "ؔ", "l": "", "t": "", "f": "" }, { "i": "k4", "c": "0", "n": "۴", "s": "ؒ", "l": "", "t": "", "f": "" }, { "i": "k5", "c": "0", "n": "۵", "s": "٪", "l": "", "t": "", "f": "" }, { "i": "k6", "c": "0", "n": "٦", "s": "ؓ", "l": "", "t": "", "f": "" }, { "i": "k7", "c": "0", "n": "۷", "s": "ؑ", "l": "", "t": "", "f": "" }, { "i": "k8", "c": "0", "n": "۸", "s": "ؐ", "l": "", "t": "", "f": "" }, { "i": "k9", "c": "0", "n": "۹", "s": ")", "l": "", "t": "", "f": "" }, { "i": "k10", "c": "0", "n": "۰", "s": "(", "l": "", "t": "", "f": "" }, { "i": "k11", "c": "0", "n": "-", "s": "؃", "l": "", "t": "", "f": "" }, { "i": "k12", "c": "0", "n": "=", "s": "+", "l": "", "t": "", "f": "" }, { "i": "k13", "c": "1", "n": "ق", "s": "ْ", "l": "", "t": "", "f": "" }, { "i": "k14", "c": "1", "n": "و", "s": "ٔ", "l": "", "t": "", "f": "" }, { "i": "k15", "c": "1", "n": "ع", "s": "ٰ", "l": "", "t": "", "f": "" }, { "i": "k16", "c": "1", "n": "ر", "s": "ڑ", "l": "", "t": "", "f": "" }, { "i": "k17", "c": "1", "n": "ت", "s": "ٹ", "l": "", "t": "", "f": "" }, { "i": "k18", "c": "1", "n": "ے", "s": "َ", "l": "", "t": "", "f": "" }, { "i": "k19", "c": "1", "n": "ء", "s": "ئ", "l": "", "t": "", "f": "" }, { "i": "k20", "c": "1", "n": "ی", "s": "ِ", "l": "", "t": "", "f": "" }, { "i": "k21", "c": "1", "n": "ہ", "s": "ۃ", "l": "", "t": "", "f": "" }, { "i": "k22", "c": "1", "n": "پ", "s": "ُ", "l": "", "t": "", "f": "" }, { "i": "k23", "c": "0", "n": "﷽", "s": "ﷺ", "l": "", "t": "", "f": "" }, { "i": "k24", "c": "0", "n": "ﷲ", "s": "ﷻ", "l": "", "t": "", "f": "" }, { "i": "k25", "c": "0", "n": "÷", "s": "x", "l": "", "t": "", "f": "" }, { "i": "k26", "c": "1", "n": "ا", "s": "آ", "l": "", "t": "", "f": "" }, { "i": "k27", "c": "1", "n": "س", "s": "ص", "l": "", "t": "", "f": "" }, { "i": "k28", "c": "1", "n": "د", "s": "ڈ", "l": "", "t": "", "f": "" }, { "i": "k29", "c": "1", "n": "ف", "s": "أ", "l": "", "t": "", "f": "" }, { "i": "k30", "c": "1", "n": "گ", "s": "غ", "l": "", "t": "", "f": "" }, { "i": "k31", "c": "1", "n": "ح", "s": "ھ", "l": "", "t": "", "f": "" }, { "i": "k32", "c": "1", "n": "ج", "s": "ض", "l": "", "t": "", "f": "" }, { "i": "k33", "c": "1", "n": "ک", "s": "خ", "l": "", "t": "", "f": "" }, { "i": "k34", "c": "1", "n": "ل", "s": "ٖ", "l": "", "t": "", "f": "" }, { "i": "k35", "c": "0", "n": "؛", "s": ":", "l": "", "t": "", "f": "" }, { "i": "k36", "c": "0", "n": "؁", "s": "؀", "l": "", "t": "", "f": "" }, { "i": "k37", "c": "1", "n": "ز", "s": "ذ", "l": "", "t": "", "f": "" }, { "i": "k38", "c": "1", "n": "ش", "s": "ژ", "l": "", "t": "", "f": "" }, { "i": "k39", "c": "1", "n": "چ", "s": "ث", "l": "", "t": "", "f": "" }, { "i": "k40", "c": "1", "n": "ط", "s": "ظ", "l": "", "t": "", "f": "" }, { "i": "k41", "c": "1", "n": "ب", "s": "ً", "l": "", "t": "", "f": "" }, { "i": "k42", "c": "1", "n": "ن", "s": "ں", "l": "", "t": "", "f": "" }, { "i": "k43", "c": "1", "n": "م", "s": "ّ", "l": "", "t": "", "f": "" }, { "i": "k44", "c": "0", "n": "،", "s": "ٗ", "l": "", "t": "", "f": "" }, { "i": "k45", "c": "0", "n": "۔", "s": ".", "l": "", "t": "", "f": "" }, { "i": "k46", "c": "0", "n": "/", "s": "؟", "l": "", "t": "", "f": "" }, { "i": "k47", "c": "0", "n": "÷", "s": "x", "l": "", "t": "", "f": "" }], "deadkeys": [] });

    $("#editor").attr("dir", keyboard.attr("dir"));
    $("#editor").focus();


    $("#editor").css({ "font-size": editor_fontsize + "px" });
    $("#editor").css({ "line-height": "40 px" });
    $("#shrink").bind("click", function() {
        if (keyboard.fontSize < 14) return;
        keyboard.fontSize -= 2;
        $("#editor, .branah-label-natural, .branah-label-shift").css({ "font-size": keyboard.fontSize + "px" });
    });
    $("#enlarge").bind("click", function() {
        keyboard.fontSize += 2;
        $("#editor, .branah-label-natural, .branah-label-shift").css({ "font-size": keyboard.fontSize + "px" });
    });


    $("#selectAll").bind("click", function() {

        branah.util.setCaretPosition(textbox, 0, textbox.value.length);

        ga("send", "event", "Keyboard", "click", "Select");
    });

    var localStorageSupported = false;
    try {
        var item = 'item';
        localStorage.setItem(item, item);
        localStorage.removeItem(item);
        localStorageSupported = true;
    } catch (e) {};

    var jsonSupported = false;
    try {
        var obj = JSON.parse(JSON.stringify({ item: 'item' }));
        if (obj.item == 'item') jsonSupported = true;
    } catch (e) {};

    if (localStorageSupported && jsonSupported) {
        if (localStorage.getItem("urduphonetic") == null) {
            localStorage.setItem("urduphonetic", JSON.stringify({ undo: [], redo: [] }));
        } else {
            $("#editor").val(JSON.parse(localStorage.getItem("urduphonetic")).undo.pop());
        }

        $("#clearAll").bind("click", function() {
            localStorage.setItem("urduphonetic", JSON.stringify({ undo: [], redo: [] }));
            $("#editor").val("");
        });

        $("#undo").bind("click", function() {

            var obj = JSON.parse(localStorage.getItem("urduphonetic"));

            if (obj.undo.length == 0) return;

            var item = obj.undo.pop();
            if (item != $("#editor").val()) {

                obj.redo.push($("#editor").val());
                $("#editor").val(item);
            } else {
                $("#editor").val(obj.undo.length == 0 ? "" : obj.undo[obj.undo.length - 1]);
                obj.redo.push(item);
            }
            localStorage.setItem("urduphonetic", JSON.stringify(obj));
        });

        $("#redo").bind("click", function() {

            var obj = JSON.parse(localStorage.getItem("urduphonetic"));

            if (obj.redo.length == 0) return;

            var item = obj.redo.pop();
            $("#editor").val(item);
            obj.undo.push(item);

            localStorage.setItem("urduphonetic", JSON.stringify(obj));
        });

        setInterval(function() {

            var obj = JSON.parse(localStorage.getItem("urduphonetic"));

            var item = $("#editor").val();

            if (obj.undo.length == 0 && item.length == 0) return;

            if (obj.undo.length == 0 || item != obj.undo[obj.undo.length - 1]) {
                obj.undo.push(item);

                localStorage.setItem("urduphonetic", JSON.stringify(obj));
            }
        }, 3000);
    } else {
        $("#undo").hide();
        $("#redo").hide();
        $("#clearAll").hide();
    }

    $("#postToTwitter").bind("click", function() {

        ga("send", "event", "Keyboard", "click", "Twitter");

        document.getElementById("postToTwitter").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(textbox.value);

        return true;
    });

    $("#postToFacebook").bind("click", function() {

        ga("send", "event", "Keyboard", "click", "Facebook");

        if (textbox.value.length > 0) {
            FB.login(function(response) {
                if (response.authResponse) {
                    FB.api('/me/feed', 'post', { message: textbox.value }, function(response) {
                        if (!response || response.error) {
                            document.getElementById("response").innerHTML = "Message published to facebook.";
                        } else {
                            document.getElementById("response").innerHTML = "Message not published to facebook.";
                        }
                    });
                }
            }, { scope: 'publish_actions' });
        } else {
            document.getElementById("response").innerHTML = "Type a message in the box above before posting to facebook.";
        }
    });

    $("#searchGoogle").bind("click", function() {

        ga("send", "event", "Keyboard", "click", "Google");

        document.getElementById("searchGoogle").href = "https://www.google.com/search?ie=UTF-8&q=" + encodeURIComponent(textbox.value);

        return true;
    });

    $("#saveAsTextFile").bind("submit", function() {
        ga("send", "Keyboard", "Save", "send", textbox.value.length.toString());
        $("#data").val(textbox.value);
        return true;
    });
});

//HIDE ANDROID KEYBOARD
function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur(); //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}

//TOGGLE help
$(".btn-help").click(function() {
    $(".help").toggle("fast", function() {
        // Animation complete.
    });
});

//Toggle keyboard
$('document').ready(function() {
    $('#editor').blur();
    // $('#editor').focus(function() {
    //     $('#keyboard').show();
    // });
    $('.hide-keyboard').click(function() {
        $('#keyboard').toggle();
    });
});
