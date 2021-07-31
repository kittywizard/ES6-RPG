"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Monk = exports.Warrior = exports.Archer = exports.Wizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _character = require("./character.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wizard = exports.Wizard = function (_Character) {
    _inherits(Wizard, _Character);

    function Wizard(name, level) {
        _classCallCheck(this, Wizard);

        var _this = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, name + "🧙🏽‍♀️", level));

        _this.mana = 4 * level;
        return _this;
    }

    _createClass(Wizard, [{
        key: "restore",
        value: function restore() {
            this.mana++;
        }
    }, {
        key: "view",
        value: function view() {
            return _get(Wizard.prototype.__proto__ || Object.getPrototypeOf(Wizard.prototype), "view", this).call(this, " Mana: " + this.mana);
        }
    }]);

    return Wizard;
}(_character.Character);

var Archer = exports.Archer = function (_Character2) {
    _inherits(Archer, _Character2);

    function Archer(name, level) {
        _classCallCheck(this, Archer);

        var _this2 = _possibleConstructorReturn(this, (Archer.__proto__ || Object.getPrototypeOf(Archer)).call(this, name + " 🏹", level));

        _this2.arrows = 3 * level;
        return _this2;
    }

    _createClass(Archer, [{
        key: "reload",
        value: function reload() {
            this.arrows++;
        }
    }, {
        key: "view",
        value: function view() {
            return _get(Archer.prototype.__proto__ || Object.getPrototypeOf(Archer.prototype), "view", this).call(this, " Arrows: " + this.arrows);
        }
    }]);

    return Archer;
}(_character.Character);

var Warrior = exports.Warrior = function (_Character3) {
    _inherits(Warrior, _Character3);

    function Warrior(name, level) {
        _classCallCheck(this, Warrior);

        var _this3 = _possibleConstructorReturn(this, (Warrior.__proto__ || Object.getPrototypeOf(Warrior)).call(this, name + " ⚔️", level));

        _this3.strength = level * 2.5;
        return _this3;
    }

    _createClass(Warrior, [{
        key: "charge",
        value: function charge() {
            this.strength++;
        }
    }, {
        key: "view",
        value: function view() {
            return _get(Warrior.prototype.__proto__ || Object.getPrototypeOf(Warrior.prototype), "view", this).call(this, " Strength: " + this.strength);
        }
    }]);

    return Warrior;
}(_character.Character);

var Monk = exports.Monk = function (_Character4) {
    _inherits(Monk, _Character4);

    function Monk(name, level) {
        _classCallCheck(this, Monk);

        var _this4 = _possibleConstructorReturn(this, (Monk.__proto__ || Object.getPrototypeOf(Monk)).call(this, name + " 🤜", level));

        _this4.ki = level * 3;
        return _this4;
    }

    _createClass(Monk, [{
        key: "flurry",
        value: function flurry() {
            this.ki * 4;
        }
    }, {
        key: "view",
        value: function view() {
            return _get(Monk.prototype.__proto__ || Object.getPrototypeOf(Monk.prototype), "view", this).call(this, " Ki Level: " + this.ki);
        }
    }]);

    return Monk;
}(_character.Character);