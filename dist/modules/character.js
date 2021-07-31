'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0;

var Character = exports.Character = function () {
    function Character(name, level) {
        _classCallCheck(this, Character);

        this.name = name;
        this.level = level;
        this.id = id++;
    }

    _createClass(Character, [{
        key: 'view',
        value: function view() {
            var details = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            return '\n        <div class="character" id="id-' + this.id + '">\n            ' + this.name + ' Lv. ' + this.level + ' \n            ' + details + '\n        </div>';
        }
    }, {
        key: 'domElement',
        value: function domElement() {
            var element = document.getElementById('id-' + this.id);
            if (element) {
                return element;
            }
        }
    }]);

    return Character;
}();