/**
 *  jQuery plugin for validation of text inputs and textarea.
 *
 *  Copyright (c) 2019 Aleksey Sirochenko
 *  https://github.com/ALEX-256/
 *
 *  Version 1.0.0
 *
 *  Repository url:
 *  https://github.com/ALEX-256/deRegexValidation
 *  @license
 *  MIT License https://opensource.org/licenses/MIT
 */(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window['jQuery'];

var EventsEmitter = exports.EventsEmitter = function () {
    function EventsEmitter() {
        var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var plugin = arguments[1];

        _classCallCheck(this, EventsEmitter);

        this.events = {};
        this.events = events;
        this.plugin = plugin;
    }

    _createClass(EventsEmitter, [{
        key: 'triggerInit',
        value: function triggerInit(form) {
            this.emitEvent('init', form);
        }
    }, {
        key: 'triggerBeforeDestroy',
        value: function triggerBeforeDestroy(form) {
            this.emitEvent('beforeDestroy', form);
        }
    }, {
        key: 'triggerBeforeFieldValidation',
        value: function triggerBeforeFieldValidation(form, field) {
            this.emitEvent('beforeFieldValidation', form, field);
        }
    }, {
        key: 'triggerAfterFieldValidation',
        value: function triggerAfterFieldValidation(form, field) {
            this.emitEvent('afterFieldValidation', form, field);
        }
    }, {
        key: 'triggerValidFormSubmit',
        value: function triggerValidFormSubmit(form) {
            this.emitEvent('validFormSubmit', form);
        }
    }, {
        key: 'triggerInvalidFormSubmit',
        value: function triggerInvalidFormSubmit(form) {
            this.emitEvent('invalidFormSubmit', form);
        }
    }, {
        key: 'emitEvent',
        value: function emitEvent(event) {
            if (this.events.hasOwnProperty(event) && typeof this.events[event] === 'function') {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                this.events[event].apply(this.plugin, args);
            }
        }
    }]);

    return EventsEmitter;
}();

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputValidationCfgs = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validationCfgs = require('./validation-cfgs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputValidationCfgs = exports.InputValidationCfgs = function (_ValidationCfgs) {
    _inherits(InputValidationCfgs, _ValidationCfgs);

    function InputValidationCfgs() {
        _classCallCheck(this, InputValidationCfgs);

        return _possibleConstructorReturn(this, (InputValidationCfgs.__proto__ || Object.getPrototypeOf(InputValidationCfgs)).apply(this, arguments));
    }

    _createClass(InputValidationCfgs, [{
        key: 'processValidationCfgs',
        value: function processValidationCfgs(validationCfgs) {
            var cfgs = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = validationCfgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cfg = _step.value;

                    if (typeof cfg === 'string' && this.hasCfgByName(cfg)) {
                        cfgs.push(this.getCfgByName(cfg));
                    } else if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) === 'object') {
                        cfgs.push(cfg);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return cfgs;
        }
    }, {
        key: 'setProcessedCfgs',
        value: function setProcessedCfgs(inputCfgs) {
            var intersectedCfgs = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = inputCfgs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var inputCfg = _step2.value;

                    var customCfg = true;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = this._validationCfgs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var validationCfg = _step3.value;

                            if (inputCfg.name === validationCfg.name) {
                                intersectedCfgs.push($.extend(true, {}, validationCfg, inputCfg));
                                customCfg = false;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    if (customCfg) {
                        intersectedCfgs.push(inputCfg);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this._validationCfgs = intersectedCfgs;
            this.checkConfigForConsistency();
            this.removeDuplicatedCfgsByNames();
        }
    }]);

    return InputValidationCfgs;
}(_validationCfgs.ValidationCfgs);

},{"./validation-cfgs":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inputValidationCfgs = require('./input-validation-cfgs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window['jQuery'];

var Input = exports.Input = function () {
    function Input(input, settings) {
        _classCallCheck(this, Input);

        this._notices = [];
        this._noticesToDelete = [];
        this._input = input;
        this._settings = settings;
        this._validationCfgs = new _inputValidationCfgs.InputValidationCfgs(this._settings.validationCfgs.all);
        this.init();
    }

    _createClass(Input, [{
        key: 'init',
        value: function init() {
            this.setValidationCfgs();
            this.setInputParent();
        }
    }, {
        key: 'validate',
        value: function validate() {
            if (!this._validationCfgs.length) {
                return;
            }
            this.emptyNotices();
            this.checkField();
            this.deleteOldNotices();
            this.addNewNotices();
            this.toggleValidClass();
        }
    }, {
        key: 'emptyNotices',
        value: function emptyNotices() {
            this._notices = [];
            this._noticesToDelete = [];
        }
    }, {
        key: 'setValidationCfgs',
        value: function setValidationCfgs() {
            var validationCfgs = this._input.data(this._settings.dataAttrs.validationCfgs);
            if (typeof validationCfgs === 'string') {
                if (validationCfgs) {
                    try {
                        validationCfgs = JSON.parse(validationCfgs);
                    } catch (e) {
                        validationCfgs = validationCfgs.split(',');
                    }
                } else {
                    return;
                }
            }
            validationCfgs = this._validationCfgs.processValidationCfgs(validationCfgs);
            if (this._settings.validateRequiredFields) {
                validationCfgs.push(this._settings.validationCfgs.getCfgByName('required'));
            }
            this._validationCfgs.setProcessedCfgs(validationCfgs);
        }
    }, {
        key: 'setInputParent',
        value: function setInputParent() {
            this._inputParent = this._input.parents(this._settings.selectors.inputParent).first();
        }
    }, {
        key: 'checkField',
        value: function checkField() {
            var _this = this;

            var index = 1;
            if (this._input.is(':checkbox') && this._validationCfgs.hasCfgByName('required')) {
                var requiredValidationCfg = this._validationCfgs.getCfgByName('required');
                if (this._input.is(':checked')) {
                    this._noticesToDelete.push(index);
                } else {
                    this._notices.push({
                        notice: requiredValidationCfg.notice,
                        index: index
                    });
                }
            } else {
                this._validationCfgs.all.forEach(function (item, i, arr) {
                    index = i + 1;
                    var regExp = void 0;
                    if (_typeof(item.regex) === 'object') {
                        regExp = item.regex;
                    } else {
                        var flags = item.regex.split('/').pop();
                        var regExpStr = item.regex.substring(item.regex.indexOf('/') + 1, item.regex.lastIndexOf('/'));
                        regExp = new RegExp(regExpStr, flags);
                    }
                    if (!regExp.test(_this._input.val())) {
                        _this._notices.push({
                            notice: item.notice,
                            index: index
                        });
                    } else {
                        _this._noticesToDelete.push(index);
                    }
                });
            }
        }
    }, {
        key: 'deleteOldNotices',
        value: function deleteOldNotices() {
            var _this2 = this;

            this._noticesToDelete.forEach(function (noticeIndex, i, arr) {
                _this2._inputParent.find('.' + _this2._settings.cssClasses.noticeIndex + noticeIndex).remove();
            });
        }
    }, {
        key: 'addNewNotices',
        value: function addNewNotices() {
            var _this3 = this;

            this._notices.forEach(function (notice, i, arr) {
                if (!_this3._inputParent.find('.' + _this3._settings.cssClasses.noticeIndex + notice.index).length) {
                    var noticeElem = $('<' + _this3._settings.noticeTagName + '>').addClass(_this3._settings.cssClasses.noticeIndex + notice.index).text(notice.notice);
                    _this3._inputParent.append(noticeElem);
                }
            });
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return !this._notices.length;
        }
    }, {
        key: 'toggleValidClass',
        value: function toggleValidClass() {
            if (this.isValid()) {
                this._inputParent.addClass(this._settings.cssClasses.inputValid).removeClass(this._settings.cssClasses.inputInvalid);
            } else {
                this._inputParent.removeClass(this._settings.cssClasses.inputValid).addClass(this._settings.cssClasses.inputInvalid);
            }
        }
    }], [{
        key: 'init',
        value: function init(input, settings) {
            input = $(input);
            var obj = input.data(Input._objDataKey);
            if (obj instanceof Input) {
                return obj;
            } else {
                obj = new Input(input, settings);
                input.data(Input._objDataKey, obj);
                return obj;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy(inputEl, settings) {
            var $input = $(inputEl);
            var input = $input.data(Input._objDataKey);
            if (input instanceof Input) {
                $input.removeData(Input._objDataKey);
                $input.removeData(settings.dataAttrs.validationCfgs);
                var inputParent = $input.parents(settings.selectors.inputParent).first();
                inputParent.find('[class*="' + settings.cssClasses.noticeIndex + '"]').remove();
                inputParent.removeClass(Object.values(settings.cssClasses).join(' '));
            }
        }
    }]);

    return Input;
}();

Input._objDataKey = 'de-regex-validation-input-obj';

},{"./input-validation-cfgs":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Settings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validationCfgs = require('./validation-cfgs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window['jQuery'];

var Settings = exports.Settings = function () {
    function Settings(settings) {
        _classCallCheck(this, Settings);

        this._defaults = {
            eventNamespace: 'deRegexValidation',
            events: ['input', 'change', 'blur'],
            dataAttrs: {
                validationCfgs: 'validation-cfg'
            },
            cssClasses: {
                formValid: 'form-valid',
                formInvalid: 'form-invalid',
                inputValid: 'input-valid',
                inputInvalid: 'input-invalid',
                noticeIndex: 'validation-notice-'
            },
            selectors: {
                inputParent: '.form-row'
            },
            noticeTagName: 'p',
            preventSubmitOnInvalid: false,
            disableFormOnInvalid: false,
            validateRequiredFields: false,
            userValidationCfgs: [],
            on: {}
        };
        this.init(settings);
    }

    _createClass(Settings, [{
        key: 'init',
        value: function init(settings) {
            this.initDynamicSettings();
            this.initSettings(settings);
            this.initValidationCfgs();
        }
    }, {
        key: 'initDynamicSettings',
        value: function initDynamicSettings() {
            this._defaults.selectors = $.extend(this._defaults.selectors, {
                input: 'input[data-' + this._defaults.dataAttrs.validationCfgs + ']',
                textarea: 'textarea[data-' + this._defaults.dataAttrs.validationCfgs + ']'
            });
        }
    }, {
        key: 'initSettings',
        value: function initSettings(settings) {
            this._settings = $.extend(true, {}, this._defaults, settings);
        }
    }, {
        key: 'initValidationCfgs',
        value: function initValidationCfgs() {
            this._validationCfgs = new _validationCfgs.ValidationCfgs(this._settings.userValidationCfgs);
        }
    }, {
        key: 'eventNamespace',
        get: function get() {
            return this._settings.eventNamespace;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._settings.events;
        }
    }, {
        key: 'dataAttrs',
        get: function get() {
            return this._settings.dataAttrs;
        }
    }, {
        key: 'cssClasses',
        get: function get() {
            return this._settings.cssClasses;
        }
    }, {
        key: 'selectors',
        get: function get() {
            return this._settings.selectors;
        }
    }, {
        key: 'noticeTagName',
        get: function get() {
            return this._settings.noticeTagName;
        }
    }, {
        key: 'preventSubmitOnInvalid',
        get: function get() {
            return this._settings.preventSubmitOnInvalid;
        }
    }, {
        key: 'disableFormOnInvalid',
        get: function get() {
            return this._settings.disableFormOnInvalid;
        }
    }, {
        key: 'validateRequiredFields',
        get: function get() {
            return this._settings.validateRequiredFields;
        }
    }, {
        key: 'userValidationCfgs',
        get: function get() {
            return this._settings.userValidationCfgs;
        }
    }, {
        key: 'validationCfgs',
        get: function get() {
            return this._validationCfgs;
        }
    }, {
        key: 'on',
        get: function get() {
            return this._settings.on;
        }
    }]);

    return Settings;
}();

},{"./validation-cfgs":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationCfgs = exports.ValidationCfgs = function () {
    function ValidationCfgs(validationCfgs) {
        _classCallCheck(this, ValidationCfgs);

        this._validationCfgs = [{
            name: 'letters',
            regex: /^[a-zA-Z]*$/,
            notice: 'Only letters'
        }, {
            name: 'letters_special',
            regex: /^[a-zA-Z\/\-\s]*$/,
            notice: 'Only letters, spaces / -'
        }, {
            name: 'letters_special_2',
            regex: /^[a-zA-Z\/\-\s\.\,]*$/,
            notice: 'Only words, spaces / - , .'
        }, {
            name: 'digits_only',
            regex: /^\d*$/,
            notice: 'Digits only'
        }, {
            name: 'digits9',
            regex: /^([0-9]{9})?$/,
            notice: 'Exactly 9 digits'
        }, {
            name: 'digits10',
            regex: /^([0-9]{10})?$/,
            notice: 'Exactly 10 digits'
        }, {
            name: 'digits_and_separators_only',
            regex: /^[\d.,]*$/,
            notice: 'Digits and separators only'
        }, {
            name: 'number',
            regex: /^\-?([1-9]+|0[.,]\d+|[1-9]+?[.,]\d+)$/,
            notice: 'Provide valid number'
        }, {
            name: 'letters_digits_only',
            regex: /^[a-zA-Z0-9]*$/,
            notice: 'Only letters, digits, space and -'
        }, {
            name: 'letters_digits_special',
            regex: /^[a-zA-Z\/\-\s0-9]*$/,
            notice: 'Only letters, digits, space / -'
        }, {
            name: 'letters_digits_special_2',
            regex: /^[a-zA-Z\/\-\,\.\s0-9]*$/,
            notice: 'Only letters, digits, space / - , .'
        }, {
            name: 'email',
            regex: /^(\S+@\S+\.\S{2,})?$/,
            notice: 'Provide valid email'
        }, {
            name: 'required',
            regex: /^.+$/,
            notice: 'This field is required'
        }, {
            name: 'password_6',
            regex: /^(.{6,})?$/,
            notice: 'Password requires at least 6 symbols'
        }, {
            name: 'phone',
            regex: /^(\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{5,14})?$/,
            notice: 'Provide phone in the international format'
        }, {
            name: 'hex_value',
            regex: /^(#?[0-9a-f]*)?$/,
            notice: 'Provide valid hex value'
        }, {
            name: 'rgb_color_value',
            regex: /^(rgb\(\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\,\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\,\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\))?$/,
            notice: 'Provide valid rgb color'
        }, {
            name: 'rgba_color_value',
            regex: /^(rgba\(\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\,\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\,\s?(1[0-9]{2}|[0-9]|[1-9][0-9]|2([0-4][0-9]|5[0-5]))\s?\,\s?([01]|0\.([1-9]|[0-9][1-9]))\s?\))?$/,
            notice: 'Provide valid rgba color'
        }, {
            name: 'hsl_color_value',
            regex: /^(hsl\(\s?([1-9]?[0-9]|[12][0-9]{2}|3([0-5][0-9]|60))\s?\,\s?([1-9]?[0-9]|100)%\s?\,\s?([1-9]?[0-9]|100)%\s?\))?$/,
            notice: 'Provide valid hsl color'
        }, {
            name: 'hsla_color_value',
            regex: /^(hsla\(\s?([1-9]?[0-9]|[12][0-9]{2}|3([0-5][0-9]|60))\s?\,\s?([1-9]?[0-9]|100)%\s?\,\s?([1-9]?[0-9]|100)%\,\s?(1|0|0\.[0-9]+?)\s?\))?$/,
            notice: 'Provide valid hsla color'
        }];
        this.mergeValidationCfgs(validationCfgs);
    }

    _createClass(ValidationCfgs, [{
        key: 'mergeValidationCfgs',
        value: function mergeValidationCfgs(validationCfgs) {
            if (Array.isArray(validationCfgs) && validationCfgs.length) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = validationCfgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var cfg = _step.value;

                        this.mergeValidationCfg(cfg);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            this.checkConfigForConsistency();
            this.removeDuplicatedCfgsByNames();
        }
    }, {
        key: 'mergeValidationCfg',
        value: function mergeValidationCfg(cfg) {
            var pushed = false;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.entries(this._validationCfgs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        index = _step2$value[0],
                        pluginCfg = _step2$value[1];

                    if (pluginCfg.name === cfg.name) {
                        this._validationCfgs.splice(index, 1, $.extend(true, {}, pluginCfg, cfg));
                        pushed = true;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (!pushed) {
                this._validationCfgs.push(cfg);
            }
        }
    }, {
        key: 'getCfgByName',
        value: function getCfgByName(name) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this._validationCfgs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var cfg = _step3.value;

                    if (cfg.name === name) {
                        return cfg;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'hasCfgByName',
        value: function hasCfgByName(name) {
            return !!this.getCfgByName(name);
        }
    }, {
        key: 'checkConfigForConsistency',
        value: function checkConfigForConsistency() {
            var fields = ['regex', 'notice'];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.entries(this._validationCfgs)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _step4$value = _slicedToArray(_step4.value, 2),
                        index = _step4$value[0],
                        cfg = _step4$value[1];

                    var invalidCfg = false;
                    var absentFields = [];
                    for (var i = 0; i < fields.length; i++) {
                        if (!Object.keys(cfg).includes(fields[i])) {
                            invalidCfg = true;
                            absentFields.push(fields[i]);
                        }
                    }
                    if (invalidCfg) {
                        this._validationCfgs.splice(index, 1);
                        console.warn('This validation cfg is not valid', cfg, 'It has not got such fields as: ' + absentFields.join(', '));
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: 'removeDuplicatedCfgsByNames',
        value: function removeDuplicatedCfgsByNames() {
            var checked = [];
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = Object.entries(this._validationCfgs)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _step5$value = _slicedToArray(_step5.value, 2),
                        index = _step5$value[0],
                        cfg = _step5$value[1];

                    if (checked.includes(cfg.name)) {
                        this._validationCfgs.splice(index, 1);
                    } else {
                        checked.push(cfg.name);
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    }, {
        key: 'length',
        get: function get() {
            return this._validationCfgs.length;
        }
    }, {
        key: 'all',
        get: function get() {
            return this._validationCfgs;
        }
    }]);

    return ValidationCfgs;
}();

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pluginName = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = require("./classes/settings");

var _input = require("./classes/input");

var _EventsEmitter = require("./classes/EventsEmitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pluginName = exports.pluginName = 'deRegexValidation';

var DeRegexValidation = function () {
    function DeRegexValidation(form, settings) {
        _classCallCheck(this, DeRegexValidation);

        this.form = $(form);
        this.settings = new _settings.Settings(settings);
        this.eventsEmitter = new _EventsEmitter.EventsEmitter(this.settings.on, this);
        this.init();
        this.eventsEmitter.triggerInit(this.form);
    }

    _createClass(DeRegexValidation, [{
        key: "init",
        value: function init() {
            this.setEventHandlers();
        }
    }, {
        key: "setEventHandlers",
        value: function setEventHandlers() {
            this.onInputEvents();
            this.onFormSubmit();
        }
    }, {
        key: "onInputEvents",
        value: function onInputEvents() {
            var _this = this;

            this.settings.events.forEach(function (event, i, arr) {
                var eventWithNamespace = event + '.' + _this.settings.eventNamespace;
                _this.form.off(eventWithNamespace);
                _this.form.on(eventWithNamespace, _this.settings.selectors.input + "," + _this.settings.selectors.textarea, function (e) {
                    var $input = $(e.currentTarget);
                    _this.eventsEmitter.triggerBeforeFieldValidation(_this.form, $input);
                    var input = _input.Input.init($input, _this.settings);
                    input.validate();
                    _this.markFormValid();
                    _this.disableButtonOnFormInvalid();
                    _this.eventsEmitter.triggerAfterFieldValidation(_this.form, $input);
                });
            });
        }
    }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
            var _this2 = this;

            this.form.off('submit.' + this.settings.eventNamespace);
            this.form.on('submit.' + this.settings.eventNamespace, function (e) {
                _this2.validateForm();
                _this2.disableButtonOnFormInvalid();
                if (_this2.allInputsValid()) {
                    _this2.eventsEmitter.triggerValidFormSubmit(_this2.form);
                } else {
                    if (_this2.settings.preventSubmitOnInvalid) {
                        e.preventDefault();
                    }
                    _this2.eventsEmitter.triggerInvalidFormSubmit(_this2.form);
                }
            });
        }
    }, {
        key: "markFormValid",
        value: function markFormValid() {
            if (this.allInputsValid()) {
                this.form.addClass(this.settings.cssClasses.formValid).removeClass(this.settings.cssClasses.formInvalid);
            } else {
                this.form.addClass(this.settings.cssClasses.formInvalid).removeClass(this.settings.cssClasses.formValid);
            }
        }
    }, {
        key: "allInputsValid",
        value: function allInputsValid() {
            return !this.form.find(this.settings.selectors.input + ',' + this.settings.selectors.textarea).parents(this.settings.selectors.inputParent).hasClass(this.settings.cssClasses.inputInvalid);
        }
    }, {
        key: "disableButtonOnFormInvalid",
        value: function disableButtonOnFormInvalid() {
            if (this.settings.disableFormOnInvalid) {
                var submitBtn = this.form.find('input[type=submit],button[type=submit],button:not([type])');
                if (this.allInputsValid()) {
                    submitBtn.removeAttr('disabled').prop('disabled', false);
                } else {
                    submitBtn.attr('disabled', true).prop('disabled', true);
                }
            }
        }
    }, {
        key: "validateForm",
        value: function validateForm() {
            var _this3 = this;

            var scrollToInvalid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var inputs = this.form.find(this.settings.selectors.input + ',' + this.settings.selectors.textarea);
            inputs.each(function (i, elem, arr) {
                var $input = $(elem);
                var input = _input.Input.init($input, _this3.settings);
                input.validate();
            });
            this.markFormValid();
            if (scrollToInvalid) {
                this.scrollToInvalid();
            }
        }
    }, {
        key: "scrollToInvalid",
        value: function scrollToInvalid() {
            var invalidInputs = this.form.find('.' + this.settings.cssClasses.inputinvalid);
            var topInvalidInput = void 0;
            invalidInputs.each(function (i, invalidInput) {
                invalidInput = $(invalidInput);
                if (!topInvalidInput) {
                    topInvalidInput = invalidInput;
                } else {
                    if (topInvalidInput.offset().top > invalidInput.offset().top) {
                        topInvalidInput = invalidInput;
                    }
                }
            });
            if (topInvalidInput && topInvalidInput.length) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: topInvalidInput.offset().top - 50
                }, 1000);
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.eventsEmitter.triggerBeforeDestroy(this.form);
            this.offAllInputEvents();
            this.removeAllInputInstances();
            this.removeAllFormCSSClasses();
        }
    }, {
        key: "offAllInputEvents",
        value: function offAllInputEvents() {
            var _this4 = this;

            this.settings.events.forEach(function (event, i, arr) {
                var eventWithNamespace = event + '.' + _this4.settings.eventNamespace;
                _this4.form.off(eventWithNamespace, '**');
            });
            if (this.settings.preventSubmitOnInvalid) {
                this.form.off('submit.' + this.settings.eventNamespace);
            }
        }
    }, {
        key: "removeAllInputInstances",
        value: function removeAllInputInstances() {
            var _this5 = this;

            this.form.find(this.settings.selectors.input + "," + this.settings.selectors.textarea).each(function (i, input) {
                input = $(input);
                _input.Input.destroy(input, _this5.settings);
            });
        }
    }, {
        key: "removeAllFormCSSClasses",
        value: function removeAllFormCSSClasses() {
            this.form.removeClass(Object.values(this.settings.cssClasses).join(' '));
        }
    }]);

    return DeRegexValidation;
}();

$.fn[pluginName] = function (settings) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return this.each(function () {
        var instance = $.data(this, pluginName);
        if (!instance) {
            if (typeof settings === 'string') {
                //we can't invoke plugin method without initialized plugin instance
                return;
            }
            $.data(this, pluginName, new DeRegexValidation(this, settings));
        } else {
            switch (settings) {
                case 'validateForm':
                    instance.validateForm(!!args[0]);
                    break;
                case 'destroy':
                    instance.destroy();
                    break;
            }
        }
    });
};

},{"./classes/EventsEmitter":1,"./classes/input":3,"./classes/settings":4}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9jbGFzc2VzL0V2ZW50c0VtaXR0ZXIudHMiLCJ0cy9jbGFzc2VzL2lucHV0LXZhbGlkYXRpb24tY2Zncy50cyIsInRzL2NsYXNzZXMvaW5wdXQudHMiLCJ0cy9jbGFzc2VzL3NldHRpbmdzLnRzIiwidHMvY2xhc3Nlcy92YWxpZGF0aW9uLWNmZ3MudHMiLCJ0cy9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxJQUFJLE9BQU8sUUFBUCxDQUFWOztJQUVhLGEsV0FBQSxhO0FBSVgsNkJBQWdEO0FBQUEsWUFBcEMsTUFBb0MsdUVBQWYsRUFBZTtBQUFBLFlBQVgsTUFBVzs7QUFBQTs7QUFIdEMsYUFBQSxNQUFBLEdBQXFCLEVBQXJCO0FBSVIsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRDs7OztvQ0FFVyxJLEVBQUk7QUFDZCxpQkFBSyxTQUFMLENBQWUsTUFBZixFQUF1QixJQUF2QjtBQUNEOzs7NkNBRW9CLEksRUFBSTtBQUN2QixpQkFBSyxTQUFMLENBQWUsZUFBZixFQUFnQyxJQUFoQztBQUNEOzs7cURBRTRCLEksRUFBTSxLLEVBQUs7QUFDdEMsaUJBQUssU0FBTCxDQUFlLHVCQUFmLEVBQXdDLElBQXhDLEVBQThDLEtBQTlDO0FBQ0Q7OztvREFFMkIsSSxFQUFNLEssRUFBSztBQUNyQyxpQkFBSyxTQUFMLENBQWUsc0JBQWYsRUFBdUMsSUFBdkMsRUFBNkMsS0FBN0M7QUFDRDs7OytDQUVzQixJLEVBQUk7QUFDekIsaUJBQUssU0FBTCxDQUFlLGlCQUFmLEVBQWtDLElBQWxDO0FBQ0Q7OztpREFFd0IsSSxFQUFJO0FBQzNCLGlCQUFLLFNBQUwsQ0FBZSxtQkFBZixFQUFvQyxJQUFwQztBQUNEOzs7a0NBRW1CLEssRUFBYztBQUNoQyxnQkFBSSxLQUFLLE1BQUwsQ0FBWSxj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Q0FBYyxVQUE1QixFQUF3QyxJQUF4QyxDQUE2QyxHQUE3QyxDQUF0QjtBQUNEOzs7Ozs7QUFHSCxFQUFFLEVBQUYsQ0FBSyxVQUFMLElBQW1CLFVBQVUsUUFBVixFQUEyQjtBQUFBLHNDQUFKLElBQUk7QUFBSixZQUFJO0FBQUE7O0FBQzVDLFdBQU8sS0FBSyxJQUFMLENBQVUsWUFBQTtBQUNmLFlBQU0sV0FBVyxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQWMsVUFBZCxDQUFqQjtBQUVBLFlBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixnQkFBSSxPQUFPLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEM7QUFDQTtBQUNEO0FBRUQsY0FBRSxJQUFGLENBQU8sSUFBUCxFQUFhLFVBQWIsRUFBeUIsSUFBSSxpQkFBSixDQUFzQixJQUF0QixFQUE0QixRQUE1QixDQUF6QjtBQUVELFNBUkQsTUFRTztBQUNMLG9CQUFRLFFBQVI7QUFDRSxxQkFBSyxjQUFMO0FBQ0UsNkJBQVMsWUFBVCxDQUFzQixDQUFDLENBQUMsS0FBSyxDQUFMLENBQXhCO0FBQ0E7QUFDRixxQkFBSyxTQUFMO0FBQ0UsNkJBQVMsT0FBVDtBQUNBO0FBTko7QUFRRDtBQUNGLEtBckJNLENBQVA7QUFzQkQsQ0F2QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCAkID0gd2luZG93WydqUXVlcnknXTtcblxuZXhwb3J0IGNsYXNzIEV2ZW50c0VtaXR0ZXIge1xuICBwcm90ZWN0ZWQgZXZlbnRzOiBFbWl0RXZlbnRzID0ge307XG4gIHByb3RlY3RlZCBwbHVnaW46IFBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihldmVudHM6IEVtaXRFdmVudHMgPSB7fSwgcGx1Z2luOiBhbnkpIHtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIHRyaWdnZXJJbml0KGZvcm0pIHtcbiAgICB0aGlzLmVtaXRFdmVudCgnaW5pdCcsIGZvcm0pO1xuICB9XG5cbiAgdHJpZ2dlckJlZm9yZURlc3Ryb3koZm9ybSkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdiZWZvcmVEZXN0cm95JywgZm9ybSk7XG4gIH1cblxuICB0cmlnZ2VyQmVmb3JlRmllbGRWYWxpZGF0aW9uKGZvcm0sIGZpZWxkKSB7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2JlZm9yZUZpZWxkVmFsaWRhdGlvbicsIGZvcm0sIGZpZWxkKTtcbiAgfVxuXG4gIHRyaWdnZXJBZnRlckZpZWxkVmFsaWRhdGlvbihmb3JtLCBmaWVsZCkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdhZnRlckZpZWxkVmFsaWRhdGlvbicsIGZvcm0sIGZpZWxkKTtcbiAgfVxuXG4gIHRyaWdnZXJWYWxpZEZvcm1TdWJtaXQoZm9ybSkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCd2YWxpZEZvcm1TdWJtaXQnLCBmb3JtKTtcbiAgfVxuXG4gIHRyaWdnZXJJbnZhbGlkRm9ybVN1Ym1pdChmb3JtKSB7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2ludmFsaWRGb3JtU3VibWl0JywgZm9ybSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdEV2ZW50KGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSAmJiB0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uYXBwbHkodGhpcy5wbHVnaW4sIGFyZ3MpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7VmFsaWRhdGlvbkNmZ3N9IGZyb20gXCIuL3ZhbGlkYXRpb24tY2Znc1wiO1xuXG5leHBvcnQgY2xhc3MgSW5wdXRWYWxpZGF0aW9uQ2ZncyBleHRlbmRzIFZhbGlkYXRpb25DZmdzIHtcblxuICBwcm9jZXNzVmFsaWRhdGlvbkNmZ3ModmFsaWRhdGlvbkNmZ3MpIHtcbiAgICBjb25zdCBjZmdzID0gW107XG4gICAgZm9yIChsZXQgY2ZnIG9mIHZhbGlkYXRpb25DZmdzKSB7XG4gICAgICBpZiAodHlwZW9mIGNmZyA9PT0gJ3N0cmluZycgJiYgdGhpcy5oYXNDZmdCeU5hbWUoY2ZnKSkge1xuICAgICAgICBjZmdzLnB1c2godGhpcy5nZXRDZmdCeU5hbWUoY2ZnKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjZmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZ3MucHVzaChjZmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjZmdzO1xuICB9XG5cbiAgc2V0UHJvY2Vzc2VkQ2ZncyhpbnB1dENmZ3M6IFZhbGlkYXRpb25Db25maWdzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0ZWRDZmdzID0gW107XG4gICAgZm9yIChjb25zdCBpbnB1dENmZyBvZiBpbnB1dENmZ3MpIHtcbiAgICAgIGxldCBjdXN0b21DZmcgPSB0cnVlO1xuICAgICAgZm9yIChjb25zdCB2YWxpZGF0aW9uQ2ZnIG9mIHRoaXMuX3ZhbGlkYXRpb25DZmdzKSB7XG4gICAgICAgIGlmIChpbnB1dENmZy5uYW1lID09PSB2YWxpZGF0aW9uQ2ZnLm5hbWUpIHtcbiAgICAgICAgICBpbnRlcnNlY3RlZENmZ3MucHVzaCgkLmV4dGVuZCh0cnVlLCB7fSwgdmFsaWRhdGlvbkNmZywgaW5wdXRDZmcpKTtcbiAgICAgICAgICBjdXN0b21DZmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1c3RvbUNmZykge1xuICAgICAgICBpbnRlcnNlY3RlZENmZ3MucHVzaChpbnB1dENmZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbGlkYXRpb25DZmdzID0gaW50ZXJzZWN0ZWRDZmdzO1xuICAgIHRoaXMuY2hlY2tDb25maWdGb3JDb25zaXN0ZW5jeSgpO1xuICAgIHRoaXMucmVtb3ZlRHVwbGljYXRlZENmZ3NCeU5hbWVzKCk7XG4gIH1cbn0iLCJpbXBvcnQge05vdGljZXN9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbmZpZ1wiO1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7SW5wdXRWYWxpZGF0aW9uQ2Znc30gZnJvbSBcIi4vaW5wdXQtdmFsaWRhdGlvbi1jZmdzXCI7XG5cbmxldCAkID0gd2luZG93WydqUXVlcnknXTtcblxuZXhwb3J0IGNsYXNzIElucHV0IHtcbiAgcHJvdGVjdGVkIHN0YXRpYyBfb2JqRGF0YUtleSA9ICdkZS1yZWdleC12YWxpZGF0aW9uLWlucHV0LW9iaic7XG4gIHByb3RlY3RlZCBfaW5wdXQ7XG4gIHByb3RlY3RlZCBfc2V0dGluZ3M6IFNldHRpbmdzO1xuICBwcm90ZWN0ZWQgX3ZhbGlkYXRpb25DZmdzOiBJbnB1dFZhbGlkYXRpb25DZmdzO1xuICBwcm90ZWN0ZWQgX2lucHV0UGFyZW50OiBhbnk7XG4gIHByb3RlY3RlZCBfbm90aWNlczogTm90aWNlcyA9IFtdO1xuICBwcm90ZWN0ZWQgX25vdGljZXNUb0RlbGV0ZTogbnVtYmVyW10gPSBbXTtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoaW5wdXQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLl92YWxpZGF0aW9uQ2ZncyA9IG5ldyBJbnB1dFZhbGlkYXRpb25DZmdzKHRoaXMuX3NldHRpbmdzLnZhbGlkYXRpb25DZmdzLmFsbCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdChpbnB1dCwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XG4gICAgaW5wdXQgPSAkKGlucHV0KTtcblxuICAgIGxldCBvYmogPSBpbnB1dC5kYXRhKElucHV0Ll9vYmpEYXRhS2V5KTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgSW5wdXQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iaiA9IG5ldyBJbnB1dChpbnB1dCwgc2V0dGluZ3MpO1xuICAgICAgaW5wdXQuZGF0YShJbnB1dC5fb2JqRGF0YUtleSwgb2JqKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRlc3Ryb3koaW5wdXRFbCwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dEVsKTtcblxuICAgIGNvbnN0IGlucHV0ID0gJGlucHV0LmRhdGEoSW5wdXQuX29iakRhdGFLZXkpO1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIElucHV0KSB7XG4gICAgICAkaW5wdXQucmVtb3ZlRGF0YShJbnB1dC5fb2JqRGF0YUtleSk7XG4gICAgICAkaW5wdXQucmVtb3ZlRGF0YShzZXR0aW5ncy5kYXRhQXR0cnMudmFsaWRhdGlvbkNmZ3MpO1xuXG4gICAgICBjb25zdCBpbnB1dFBhcmVudCA9ICRpbnB1dC5wYXJlbnRzKHNldHRpbmdzLnNlbGVjdG9ycy5pbnB1dFBhcmVudCkuZmlyc3QoKTtcbiAgICAgIGlucHV0UGFyZW50LmZpbmQoYFtjbGFzcyo9XCIke3NldHRpbmdzLmNzc0NsYXNzZXMubm90aWNlSW5kZXh9XCJdYCkucmVtb3ZlKCk7XG4gICAgICBpbnB1dFBhcmVudC5yZW1vdmVDbGFzcyhPYmplY3QudmFsdWVzKHNldHRpbmdzLmNzc0NsYXNzZXMpLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uQ2ZncygpO1xuICAgIHRoaXMuc2V0SW5wdXRQYXJlbnQoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGlmICghdGhpcy5fdmFsaWRhdGlvbkNmZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1wdHlOb3RpY2VzKCk7XG4gICAgdGhpcy5jaGVja0ZpZWxkKCk7XG4gICAgdGhpcy5kZWxldGVPbGROb3RpY2VzKCk7XG4gICAgdGhpcy5hZGROZXdOb3RpY2VzKCk7XG4gICAgdGhpcy50b2dnbGVWYWxpZENsYXNzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1wdHlOb3RpY2VzKCkge1xuICAgIHRoaXMuX25vdGljZXMgPSBbXTtcbiAgICB0aGlzLl9ub3RpY2VzVG9EZWxldGUgPSBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRWYWxpZGF0aW9uQ2ZncygpIHtcbiAgICBsZXQgdmFsaWRhdGlvbkNmZ3MgPSB0aGlzLl9pbnB1dC5kYXRhKHRoaXMuX3NldHRpbmdzLmRhdGFBdHRycy52YWxpZGF0aW9uQ2Zncyk7XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25DZmdzID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbGlkYXRpb25DZmdzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsaWRhdGlvbkNmZ3MgPSBKU09OLnBhcnNlKHZhbGlkYXRpb25DZmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHZhbGlkYXRpb25DZmdzID0gdmFsaWRhdGlvbkNmZ3Muc3BsaXQoJywnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRpb25DZmdzID0gdGhpcy5fdmFsaWRhdGlvbkNmZ3MucHJvY2Vzc1ZhbGlkYXRpb25DZmdzKHZhbGlkYXRpb25DZmdzKTtcblxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy52YWxpZGF0ZVJlcXVpcmVkRmllbGRzKSB7XG4gICAgICB2YWxpZGF0aW9uQ2Zncy5wdXNoKHRoaXMuX3NldHRpbmdzLnZhbGlkYXRpb25DZmdzLmdldENmZ0J5TmFtZSgncmVxdWlyZWQnKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsaWRhdGlvbkNmZ3Muc2V0UHJvY2Vzc2VkQ2Zncyh2YWxpZGF0aW9uQ2Zncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0SW5wdXRQYXJlbnQoKSB7XG4gICAgdGhpcy5faW5wdXRQYXJlbnQgPSB0aGlzLl9pbnB1dC5wYXJlbnRzKHRoaXMuX3NldHRpbmdzLnNlbGVjdG9ycy5pbnB1dFBhcmVudCkuZmlyc3QoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja0ZpZWxkKCkge1xuICAgIGxldCBpbmRleCA9IDE7XG5cbiAgICBpZiAodGhpcy5faW5wdXQuaXMoJzpjaGVja2JveCcpICYmIHRoaXMuX3ZhbGlkYXRpb25DZmdzLmhhc0NmZ0J5TmFtZSgncmVxdWlyZWQnKSkge1xuICAgICAgbGV0IHJlcXVpcmVkVmFsaWRhdGlvbkNmZyA9IHRoaXMuX3ZhbGlkYXRpb25DZmdzLmdldENmZ0J5TmFtZSgncmVxdWlyZWQnKTtcbiAgICAgIGlmICh0aGlzLl9pbnB1dC5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICB0aGlzLl9ub3RpY2VzVG9EZWxldGUucHVzaChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ub3RpY2VzLnB1c2goe1xuICAgICAgICAgIG5vdGljZTogcmVxdWlyZWRWYWxpZGF0aW9uQ2ZnLm5vdGljZSxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb25DZmdzLmFsbC5mb3JFYWNoKChpdGVtLCBpLCBhcnIpID0+IHtcbiAgICAgICAgaW5kZXggPSBpICsgMTtcbiAgICAgICAgbGV0IHJlZ0V4cDtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0ucmVnZXggPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmVnRXhwID0gaXRlbS5yZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBmbGFncyA9IGl0ZW0ucmVnZXguc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgICAgICBjb25zdCByZWdFeHBTdHIgPSBpdGVtLnJlZ2V4LnN1YnN0cmluZyhpdGVtLnJlZ2V4LmluZGV4T2YoJy8nKSArIDEsIGl0ZW0ucmVnZXgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWdFeHBTdHIsIGZsYWdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVnRXhwLnRlc3QodGhpcy5faW5wdXQudmFsKCkpKSB7XG4gICAgICAgICAgdGhpcy5fbm90aWNlcy5wdXNoKHtcbiAgICAgICAgICAgIG5vdGljZTogaXRlbS5ub3RpY2UsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9ub3RpY2VzVG9EZWxldGUucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVPbGROb3RpY2VzKCkge1xuICAgIHRoaXMuX25vdGljZXNUb0RlbGV0ZS5mb3JFYWNoKChub3RpY2VJbmRleCwgaSwgYXJyKSA9PiB7XG4gICAgICB0aGlzLl9pbnB1dFBhcmVudC5maW5kKCcuJyArIHRoaXMuX3NldHRpbmdzLmNzc0NsYXNzZXMubm90aWNlSW5kZXggKyBub3RpY2VJbmRleCkucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkTmV3Tm90aWNlcygpIHtcbiAgICB0aGlzLl9ub3RpY2VzLmZvckVhY2goKG5vdGljZSwgaSwgYXJyKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lucHV0UGFyZW50LmZpbmQoJy4nICsgdGhpcy5fc2V0dGluZ3MuY3NzQ2xhc3Nlcy5ub3RpY2VJbmRleCArIG5vdGljZS5pbmRleCkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5vdGljZUVsZW0gPSAkKGA8JHt0aGlzLl9zZXR0aW5ncy5ub3RpY2VUYWdOYW1lfT5gKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jc3NDbGFzc2VzLm5vdGljZUluZGV4ICsgbm90aWNlLmluZGV4KS50ZXh0KG5vdGljZS5ub3RpY2UpO1xuICAgICAgICB0aGlzLl9pbnB1dFBhcmVudC5hcHBlbmQobm90aWNlRWxlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX25vdGljZXMubGVuZ3RoO1xuICB9XG5cbiAgcHJvdGVjdGVkIHRvZ2dsZVZhbGlkQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICB0aGlzLl9pbnB1dFBhcmVudC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jc3NDbGFzc2VzLmlucHV0VmFsaWQpLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmNzc0NsYXNzZXMuaW5wdXRJbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5wdXRQYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuY3NzQ2xhc3Nlcy5pbnB1dFZhbGlkKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jc3NDbGFzc2VzLmlucHV0SW52YWxpZCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbmZpZ1wiO1xuaW1wb3J0IHtWYWxpZGF0aW9uQ2Znc30gZnJvbSBcIi4vdmFsaWRhdGlvbi1jZmdzXCI7XG5cbmxldCAkID0gd2luZG93WydqUXVlcnknXTtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbiAgcHJvdGVjdGVkIF9kZWZhdWx0czogQ29uZmlnID0ge1xuICAgIGV2ZW50TmFtZXNwYWNlOiAnZGVSZWdleFZhbGlkYXRpb24nLFxuICAgIGV2ZW50czogWydpbnB1dCcsICdjaGFuZ2UnLCAnYmx1ciddLFxuICAgIGRhdGFBdHRyczoge1xuICAgICAgdmFsaWRhdGlvbkNmZ3M6ICd2YWxpZGF0aW9uLWNmZycsXG4gICAgfSxcbiAgICBjc3NDbGFzc2VzOiB7XG4gICAgICBmb3JtVmFsaWQ6ICdmb3JtLXZhbGlkJyxcbiAgICAgIGZvcm1JbnZhbGlkOiAnZm9ybS1pbnZhbGlkJyxcbiAgICAgIGlucHV0VmFsaWQ6ICdpbnB1dC12YWxpZCcsXG4gICAgICBpbnB1dEludmFsaWQ6ICdpbnB1dC1pbnZhbGlkJyxcbiAgICAgIG5vdGljZUluZGV4OiAndmFsaWRhdGlvbi1ub3RpY2UtJyxcbiAgICB9LFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgaW5wdXRQYXJlbnQ6ICcuZm9ybS1yb3cnLFxuICAgIH0sXG4gICAgbm90aWNlVGFnTmFtZTogJ3AnLFxuICAgIHByZXZlbnRTdWJtaXRPbkludmFsaWQ6IGZhbHNlLFxuICAgIGRpc2FibGVGb3JtT25JbnZhbGlkOiBmYWxzZSxcbiAgICB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzOiBmYWxzZSxcbiAgICB1c2VyVmFsaWRhdGlvbkNmZ3M6IFtdLFxuICAgIG9uOiB7fVxuICB9O1xuICBwcm90ZWN0ZWQgX3NldHRpbmdzOiBDb25maWc7XG4gIHByb3RlY3RlZCBfdmFsaWRhdGlvbkNmZ3M6IFZhbGlkYXRpb25DZmdzO1xuXG4gIGdldCBldmVudE5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZXZlbnROYW1lc3BhY2U7XG4gIH1cblxuICBnZXQgZXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ldmVudHM7XG4gIH1cblxuICBnZXQgZGF0YUF0dHJzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5kYXRhQXR0cnM7XG4gIH1cblxuICBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY3NzQ2xhc3NlcztcbiAgfVxuXG4gIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldCBub3RpY2VUYWdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ub3RpY2VUYWdOYW1lO1xuICB9XG5cbiAgZ2V0IHByZXZlbnRTdWJtaXRPbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnByZXZlbnRTdWJtaXRPbkludmFsaWQ7XG4gIH1cblxuICBnZXQgZGlzYWJsZUZvcm1PbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmRpc2FibGVGb3JtT25JbnZhbGlkO1xuICB9XG5cbiAgZ2V0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnZhbGlkYXRlUmVxdWlyZWRGaWVsZHM7XG4gIH1cblxuICBnZXQgdXNlclZhbGlkYXRpb25DZmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy51c2VyVmFsaWRhdGlvbkNmZ3M7XG4gIH1cblxuICBnZXQgdmFsaWRhdGlvbkNmZ3MoKTogVmFsaWRhdGlvbkNmZ3Mge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uQ2ZncztcbiAgfVxuXG4gIGdldCBvbigpOiBFbWl0RXZlbnRzIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Mub247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuaW5pdChzZXR0aW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdChzZXR0aW5ncykge1xuICAgIHRoaXMuaW5pdER5bmFtaWNTZXR0aW5ncygpO1xuICAgIHRoaXMuaW5pdFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICB0aGlzLmluaXRWYWxpZGF0aW9uQ2ZncygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXREeW5hbWljU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMuc2VsZWN0b3JzID0gJC5leHRlbmQodGhpcy5fZGVmYXVsdHMuc2VsZWN0b3JzLCB7XG4gICAgICBpbnB1dDogJ2lucHV0W2RhdGEtJyArIHRoaXMuX2RlZmF1bHRzLmRhdGFBdHRycy52YWxpZGF0aW9uQ2ZncyArICddJyxcbiAgICAgIHRleHRhcmVhOiAndGV4dGFyZWFbZGF0YS0nICsgdGhpcy5fZGVmYXVsdHMuZGF0YUF0dHJzLnZhbGlkYXRpb25DZmdzICsgJ10nLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIHRoaXMuX3NldHRpbmdzID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuX2RlZmF1bHRzLCBzZXR0aW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFZhbGlkYXRpb25DZmdzKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRpb25DZmdzID0gbmV3IFZhbGlkYXRpb25DZmdzKHRoaXMuX3NldHRpbmdzLnVzZXJWYWxpZGF0aW9uQ2Zncyk7XG4gIH1cbn0iLCJpbXBvcnQge1ZhbGlkYXRpb25Db25maWcsIFZhbGlkYXRpb25Db25maWdzfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25DZmdzIHtcbiAgcHJvdGVjdGVkIF92YWxpZGF0aW9uQ2ZnczogVmFsaWRhdGlvbkNvbmZpZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2xldHRlcnMnLFxuICAgICAgcmVnZXg6IC9eW2EtekEtWl0qJC8sXG4gICAgICBub3RpY2U6ICdPbmx5IGxldHRlcnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbGV0dGVyc19zcGVjaWFsJyxcbiAgICAgIHJlZ2V4OiAvXlthLXpBLVpcXC9cXC1cXHNdKiQvLFxuICAgICAgbm90aWNlOiAnT25seSBsZXR0ZXJzLCBzcGFjZXMgLyAtJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2xldHRlcnNfc3BlY2lhbF8yJyxcbiAgICAgIHJlZ2V4OiAvXlthLXpBLVpcXC9cXC1cXHNcXC5cXCxdKiQvLFxuICAgICAgbm90aWNlOiAnT25seSB3b3Jkcywgc3BhY2VzIC8gLSAsIC4nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGlnaXRzX29ubHknLFxuICAgICAgcmVnZXg6IC9eXFxkKiQvLFxuICAgICAgbm90aWNlOiAnRGlnaXRzIG9ubHknXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGlnaXRzOScsXG4gICAgICByZWdleDogL14oWzAtOV17OX0pPyQvLFxuICAgICAgbm90aWNlOiAnRXhhY3RseSA5IGRpZ2l0cydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkaWdpdHMxMCcsXG4gICAgICByZWdleDogL14oWzAtOV17MTB9KT8kLyxcbiAgICAgIG5vdGljZTogJ0V4YWN0bHkgMTAgZGlnaXRzJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RpZ2l0c19hbmRfc2VwYXJhdG9yc19vbmx5JyxcbiAgICAgIHJlZ2V4OiAvXltcXGQuLF0qJC8sXG4gICAgICBub3RpY2U6ICdEaWdpdHMgYW5kIHNlcGFyYXRvcnMgb25seSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgcmVnZXg6IC9eXFwtPyhbMS05XSt8MFsuLF1cXGQrfFsxLTldKz9bLixdXFxkKykkLyxcbiAgICAgIG5vdGljZTogJ1Byb3ZpZGUgdmFsaWQgbnVtYmVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdsZXR0ZXJzX2RpZ2l0c19vbmx5JyxcbiAgICAgIHJlZ2V4OiAvXlthLXpBLVowLTldKiQvLFxuICAgICAgbm90aWNlOiAnT25seSBsZXR0ZXJzLCBkaWdpdHMsIHNwYWNlIGFuZCAtJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2xldHRlcnNfZGlnaXRzX3NwZWNpYWwnLFxuICAgICAgcmVnZXg6IC9eW2EtekEtWlxcL1xcLVxcczAtOV0qJC8sXG4gICAgICBub3RpY2U6ICdPbmx5IGxldHRlcnMsIGRpZ2l0cywgc3BhY2UgLyAtJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2xldHRlcnNfZGlnaXRzX3NwZWNpYWxfMicsXG4gICAgICByZWdleDogL15bYS16QS1aXFwvXFwtXFwsXFwuXFxzMC05XSokLyxcbiAgICAgIG5vdGljZTogJ09ubHkgbGV0dGVycywgZGlnaXRzLCBzcGFjZSAvIC0gLCAuJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgIHJlZ2V4OiAvXihcXFMrQFxcUytcXC5cXFN7Mix9KT8kLyxcbiAgICAgIG5vdGljZTogJ1Byb3ZpZGUgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgICAgcmVnZXg6IC9eLiskLyxcbiAgICAgIG5vdGljZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFzc3dvcmRfNicsXG4gICAgICByZWdleDogL14oLns2LH0pPyQvLFxuICAgICAgbm90aWNlOiAnUGFzc3dvcmQgcmVxdWlyZXMgYXQgbGVhc3QgNiBzeW1ib2xzJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIHJlZ2V4OiAvXihcXCsoOVs5NzZdXFxkfDhbOTg3NTMwXVxcZHw2Wzk4N11cXGR8NVs5MF1cXGR8NDJcXGR8M1s4NzVdXFxkfDJbOTg2NTQzMjFdXFxkfDlbODU0MzIxMF18OFs2NDIxXXw2WzY1NDMyMTBdfDVbODc2NTQzMjFdfDRbOTg3NjU0MzEwXXwzWzk2NDMyMTBdfDJbNzBdfDd8MSlcXGR7NSwxNH0pPyQvLFxuICAgICAgbm90aWNlOiAnUHJvdmlkZSBwaG9uZSBpbiB0aGUgaW50ZXJuYXRpb25hbCBmb3JtYXQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnaGV4X3ZhbHVlJyxcbiAgICAgIHJlZ2V4OiAvXigjP1swLTlhLWZdKik/JC8sXG4gICAgICBub3RpY2U6ICdQcm92aWRlIHZhbGlkIGhleCB2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdyZ2JfY29sb3JfdmFsdWUnLFxuICAgICAgcmVnZXg6IC9eKHJnYlxcKFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcLFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcLFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcKSk/JC8sXG4gICAgICBub3RpY2U6ICdQcm92aWRlIHZhbGlkIHJnYiBjb2xvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncmdiYV9jb2xvcl92YWx1ZScsXG4gICAgICByZWdleDogL14ocmdiYVxcKFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcLFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcLFxccz8oMVswLTldezJ9fFswLTldfFsxLTldWzAtOV18MihbMC00XVswLTldfDVbMC01XSkpXFxzP1xcLFxccz8oWzAxXXwwXFwuKFsxLTldfFswLTldWzEtOV0pKVxccz9cXCkpPyQvLFxuICAgICAgbm90aWNlOiAnUHJvdmlkZSB2YWxpZCByZ2JhIGNvbG9yJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdoc2xfY29sb3JfdmFsdWUnLFxuICAgICAgcmVnZXg6IC9eKGhzbFxcKFxccz8oWzEtOV0/WzAtOV18WzEyXVswLTldezJ9fDMoWzAtNV1bMC05XXw2MCkpXFxzP1xcLFxccz8oWzEtOV0/WzAtOV18MTAwKSVcXHM/XFwsXFxzPyhbMS05XT9bMC05XXwxMDApJVxccz9cXCkpPyQvLFxuICAgICAgbm90aWNlOiAnUHJvdmlkZSB2YWxpZCBoc2wgY29sb3InLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2hzbGFfY29sb3JfdmFsdWUnLFxuICAgICAgcmVnZXg6IC9eKGhzbGFcXChcXHM/KFsxLTldP1swLTldfFsxMl1bMC05XXsyfXwzKFswLTVdWzAtOV18NjApKVxccz9cXCxcXHM/KFsxLTldP1swLTldfDEwMCklXFxzP1xcLFxccz8oWzEtOV0/WzAtOV18MTAwKSVcXCxcXHM/KDF8MHwwXFwuWzAtOV0rPylcXHM/XFwpKT8kLyxcbiAgICAgIG5vdGljZTogJ1Byb3ZpZGUgdmFsaWQgaHNsYSBjb2xvcicsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcih2YWxpZGF0aW9uQ2ZnczogVmFsaWRhdGlvbkNvbmZpZ3MpIHtcbiAgICB0aGlzLm1lcmdlVmFsaWRhdGlvbkNmZ3ModmFsaWRhdGlvbkNmZ3MpO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbkNmZ3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbkNmZ3M7XG4gIH1cblxuICBtZXJnZVZhbGlkYXRpb25DZmdzKHZhbGlkYXRpb25DZmdzOiBWYWxpZGF0aW9uQ29uZmlncykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbGlkYXRpb25DZmdzKSAmJiB2YWxpZGF0aW9uQ2Zncy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGNmZyBvZiB2YWxpZGF0aW9uQ2Zncykge1xuICAgICAgICB0aGlzLm1lcmdlVmFsaWRhdGlvbkNmZyhjZmcpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrQ29uZmlnRm9yQ29uc2lzdGVuY3koKTtcbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZWRDZmdzQnlOYW1lcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1lcmdlVmFsaWRhdGlvbkNmZyhjZmc6IFZhbGlkYXRpb25Db25maWcpIHtcbiAgICBsZXQgcHVzaGVkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgW2luZGV4LCBwbHVnaW5DZmddIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX3ZhbGlkYXRpb25DZmdzKSkge1xuICAgICAgaWYgKHBsdWdpbkNmZy5uYW1lID09PSBjZmcubmFtZSkge1xuICAgICAgICB0aGlzLl92YWxpZGF0aW9uQ2Zncy5zcGxpY2UoaW5kZXgsIDEsICQuZXh0ZW5kKHRydWUsIHt9LCBwbHVnaW5DZmcsIGNmZykpO1xuICAgICAgICBwdXNoZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXB1c2hlZCkge1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbkNmZ3MucHVzaChjZmcpO1xuICAgIH1cbiAgfVxuXG4gIGdldENmZ0J5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBjZmcgb2YgdGhpcy5fdmFsaWRhdGlvbkNmZ3MpIHtcbiAgICAgIGlmIChjZmcubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gY2ZnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhc0NmZ0J5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gISF0aGlzLmdldENmZ0J5TmFtZShuYW1lKTtcbiAgfVxuXG4gIGNoZWNrQ29uZmlnRm9yQ29uc2lzdGVuY3koKSB7XG4gICAgY29uc3QgZmllbGRzID0gWydyZWdleCcsICdub3RpY2UnXTtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgY2ZnXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl92YWxpZGF0aW9uQ2ZncykpIHtcbiAgICAgIGxldCBpbnZhbGlkQ2ZnID0gZmFsc2U7XG4gICAgICBsZXQgYWJzZW50RmllbGRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGNmZykuaW5jbHVkZXMoZmllbGRzW2ldKSkge1xuICAgICAgICAgIGludmFsaWRDZmcgPSB0cnVlO1xuICAgICAgICAgIGFic2VudEZpZWxkcy5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbnZhbGlkQ2ZnKSB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25DZmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhpcyB2YWxpZGF0aW9uIGNmZyBpcyBub3QgdmFsaWQnLCBjZmcsICdJdCBoYXMgbm90IGdvdCBzdWNoIGZpZWxkcyBhczogJyArIGFic2VudEZpZWxkcy5qb2luKCcsICcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVEdXBsaWNhdGVkQ2Znc0J5TmFtZXMoKSB7XG4gICAgY29uc3QgY2hlY2tlZCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIGNmZ10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fdmFsaWRhdGlvbkNmZ3MpKSB7XG4gICAgICBpZiAoY2hlY2tlZC5pbmNsdWRlcyhjZmcubmFtZSkpIHtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGlvbkNmZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrZWQucHVzaChjZmcubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25Db25maWdzfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnJztcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSBcIi4vY2xhc3Nlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0lucHV0fSBmcm9tIFwiLi9jbGFzc2VzL2lucHV0XCI7XHJcbmltcG9ydCB7RXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vY2xhc3Nlcy9FdmVudHNFbWl0dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGx1Z2luTmFtZSA9ICdkZVJlZ2V4VmFsaWRhdGlvbic7XHJcblxyXG5jbGFzcyBEZVJlZ2V4VmFsaWRhdGlvbiB7XHJcbiAgcHVibGljIGZvcm06IGFueTtcclxuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gIHB1YmxpYyB2YWxpZGF0aW9uQ2ZnczogVmFsaWRhdGlvbkNvbmZpZ3M7XHJcbiAgcHVibGljIGV2ZW50c0VtaXR0ZXI6IEV2ZW50c0VtaXR0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZvcm0sIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmZvcm0gPSAkKGZvcm0pO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICB0aGlzLmV2ZW50c0VtaXR0ZXIgPSBuZXcgRXZlbnRzRW1pdHRlcih0aGlzLnNldHRpbmdzLm9uLCB0aGlzKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgdGhpcy5ldmVudHNFbWl0dGVyLnRyaWdnZXJJbml0KHRoaXMuZm9ybSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0RXZlbnRIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldEV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLm9uSW5wdXRFdmVudHMoKTtcclxuICAgIHRoaXMub25Gb3JtU3VibWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25JbnB1dEV2ZW50cygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgZXZlbnRXaXRoTmFtZXNwYWNlID0gZXZlbnQgKyAnLicgKyB0aGlzLnNldHRpbmdzLmV2ZW50TmFtZXNwYWNlO1xyXG4gICAgICB0aGlzLmZvcm0ub2ZmKGV2ZW50V2l0aE5hbWVzcGFjZSk7XHJcbiAgICAgIHRoaXMuZm9ybS5vbihldmVudFdpdGhOYW1lc3BhY2UsIGAke3RoaXMuc2V0dGluZ3Muc2VsZWN0b3JzLmlucHV0fSwke3RoaXMuc2V0dGluZ3Muc2VsZWN0b3JzLnRleHRhcmVhfWAsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzRW1pdHRlci50cmlnZ2VyQmVmb3JlRmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybSwgJGlucHV0KTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IElucHV0LmluaXQoJGlucHV0LCB0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICBpbnB1dC52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubWFya0Zvcm1WYWxpZCgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbk9uRm9ybUludmFsaWQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50c0VtaXR0ZXIudHJpZ2dlckFmdGVyRmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybSwgJGlucHV0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkZvcm1TdWJtaXQoKSB7XHJcbiAgICB0aGlzLmZvcm0ub2ZmKCdzdWJtaXQuJyArIHRoaXMuc2V0dGluZ3MuZXZlbnROYW1lc3BhY2UpO1xyXG4gICAgdGhpcy5mb3JtLm9uKCdzdWJtaXQuJyArIHRoaXMuc2V0dGluZ3MuZXZlbnROYW1lc3BhY2UsIChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25PbkZvcm1JbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsSW5wdXRzVmFsaWQoKSkge1xyXG4gICAgICAgICAgdGhpcy5ldmVudHNFbWl0dGVyLnRyaWdnZXJWYWxpZEZvcm1TdWJtaXQodGhpcy5mb3JtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucHJldmVudFN1Ym1pdE9uSW52YWxpZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmV2ZW50c0VtaXR0ZXIudHJpZ2dlckludmFsaWRGb3JtU3VibWl0KHRoaXMuZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1hcmtGb3JtVmFsaWQoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxJbnB1dHNWYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNzc0NsYXNzZXMuZm9ybVZhbGlkKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNzc0NsYXNzZXMuZm9ybUludmFsaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuY3NzQ2xhc3Nlcy5mb3JtSW52YWxpZCkucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5jc3NDbGFzc2VzLmZvcm1WYWxpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWxsSW5wdXRzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZm9ybS5maW5kKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3JzLmlucHV0ICsgJywnICsgdGhpcy5zZXR0aW5ncy5zZWxlY3RvcnMudGV4dGFyZWEpXHJcbiAgICAgIC5wYXJlbnRzKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3JzLmlucHV0UGFyZW50KS5oYXNDbGFzcyh0aGlzLnNldHRpbmdzLmNzc0NsYXNzZXMuaW5wdXRJbnZhbGlkKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkaXNhYmxlQnV0dG9uT25Gb3JtSW52YWxpZCgpIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmRpc2FibGVGb3JtT25JbnZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IHRoaXMuZm9ybS5maW5kKCdpbnB1dFt0eXBlPXN1Ym1pdF0sYnV0dG9uW3R5cGU9c3VibWl0XSxidXR0b246bm90KFt0eXBlXSknKTtcclxuICAgICAgaWYgKHRoaXMuYWxsSW5wdXRzVmFsaWQoKSkge1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRm9ybShzY3JvbGxUb0ludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5mb3JtLmZpbmQodGhpcy5zZXR0aW5ncy5zZWxlY3RvcnMuaW5wdXQgKyAnLCcgKyB0aGlzLnNldHRpbmdzLnNlbGVjdG9ycy50ZXh0YXJlYSk7XHJcbiAgICBpbnB1dHMuZWFjaCgoaSwgZWxlbSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWxlbSk7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gSW5wdXQuaW5pdCgkaW5wdXQsIHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICBpbnB1dC52YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hcmtGb3JtVmFsaWQoKTtcclxuICAgIGlmIChzY3JvbGxUb0ludmFsaWQpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb0ludmFsaWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzY3JvbGxUb0ludmFsaWQoKSB7XHJcbiAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gdGhpcy5mb3JtLmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5jc3NDbGFzc2VzLmlucHV0aW52YWxpZCk7XHJcbiAgICBsZXQgdG9wSW52YWxpZElucHV0O1xyXG4gICAgaW52YWxpZElucHV0cy5lYWNoKChpLCBpbnZhbGlkSW5wdXQpID0+IHtcclxuICAgICAgaW52YWxpZElucHV0ID0gJChpbnZhbGlkSW5wdXQpO1xyXG4gICAgICBpZiAoIXRvcEludmFsaWRJbnB1dCkge1xyXG4gICAgICAgIHRvcEludmFsaWRJbnB1dCA9IGludmFsaWRJbnB1dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodG9wSW52YWxpZElucHV0Lm9mZnNldCgpLnRvcCA+IGludmFsaWRJbnB1dC5vZmZzZXQoKS50b3ApIHtcclxuICAgICAgICAgIHRvcEludmFsaWRJbnB1dCA9IGludmFsaWRJbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0b3BJbnZhbGlkSW5wdXQgJiYgdG9wSW52YWxpZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRvcEludmFsaWRJbnB1dC5vZmZzZXQoKS50b3AgLSA1MFxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50c0VtaXR0ZXIudHJpZ2dlckJlZm9yZURlc3Ryb3kodGhpcy5mb3JtKTtcclxuICAgIHRoaXMub2ZmQWxsSW5wdXRFdmVudHMoKTtcclxuICAgIHRoaXMucmVtb3ZlQWxsSW5wdXRJbnN0YW5jZXMoKTtcclxuICAgIHRoaXMucmVtb3ZlQWxsRm9ybUNTU0NsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvZmZBbGxJbnB1dEV2ZW50cygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgZXZlbnRXaXRoTmFtZXNwYWNlID0gZXZlbnQgKyAnLicgKyB0aGlzLnNldHRpbmdzLmV2ZW50TmFtZXNwYWNlO1xyXG4gICAgICB0aGlzLmZvcm0ub2ZmKGV2ZW50V2l0aE5hbWVzcGFjZSwgJyoqJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5wcmV2ZW50U3VibWl0T25JbnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5vZmYoJ3N1Ym1pdC4nICsgdGhpcy5zZXR0aW5ncy5ldmVudE5hbWVzcGFjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVtb3ZlQWxsSW5wdXRJbnN0YW5jZXMoKSB7XHJcbiAgICB0aGlzLmZvcm0uZmluZChgJHt0aGlzLnNldHRpbmdzLnNlbGVjdG9ycy5pbnB1dH0sJHt0aGlzLnNldHRpbmdzLnNlbGVjdG9ycy50ZXh0YXJlYX1gKS5lYWNoKChpLCBpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dCA9ICQoaW5wdXQpO1xyXG4gICAgICBJbnB1dC5kZXN0cm95KGlucHV0LCB0aGlzLnNldHRpbmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbW92ZUFsbEZvcm1DU1NDbGFzc2VzKCkge1xyXG4gICAgdGhpcy5mb3JtLnJlbW92ZUNsYXNzKE9iamVjdC52YWx1ZXModGhpcy5zZXR0aW5ncy5jc3NDbGFzc2VzKS5qb2luKCcgJykpO1xyXG4gIH1cclxufVxyXG5cclxuJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChzZXR0aW5ncywgLi4uYXJncykge1xyXG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSAkLmRhdGEodGhpcywgIHBsdWdpbk5hbWUpO1xyXG5cclxuICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvL3dlIGNhbid0IGludm9rZSBwbHVnaW4gbWV0aG9kIHdpdGhvdXQgaW5pdGlhbGl6ZWQgcGx1Z2luIGluc3RhbmNlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQuZGF0YSh0aGlzLCBwbHVnaW5OYW1lLCBuZXcgRGVSZWdleFZhbGlkYXRpb24odGhpcywgc2V0dGluZ3MpKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKHNldHRpbmdzKSB7XHJcbiAgICAgICAgY2FzZSAndmFsaWRhdGVGb3JtJzpcclxuICAgICAgICAgIGluc3RhbmNlLnZhbGlkYXRlRm9ybSghIWFyZ3NbMF0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGVzdHJveSc6XHJcbiAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iXX0=
