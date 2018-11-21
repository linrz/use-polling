"use strict";

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function usePolling(api, cycleMs) {
  var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };

  if (typeof api !== 'function') {
    throw TypeError('You should pass a function as the first param.');
  }

  if (typeof cycleMs !== 'number') {
    throw TypeError('You should pass the ms for the cycle of polling.');
  }

  if (typeof predicate !== 'function') {
    throw TypeError('The predicate is used to determine when to exit polling');
  }

  var wait = function wait() {
    return new Promise(function (r) {
      return setTimeout(r, cycleMs);
    });
  };

  var stop = false;

  var pollingHelper =
  /*#__PURE__*/
  function () {
    var _ref = _wrapAsyncGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = null;

            case 1:
              if (stop) {
                _context.next = 13;
                break;
              }

              _context.next = 4;
              return _awaitAsyncGenerator(api());

            case 4:
              res = _context.sent;

              if (!predicate(res)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res);

            case 7:
              _context.next = 9;
              return res;

            case 9:
              _context.next = 11;
              return _awaitAsyncGenerator(wait());

            case 11:
              _context.next = 1;
              break;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function pollingHelper() {
      return _ref.apply(this, arguments);
    };
  }();

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(fp) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context2.prev = 2;
                _iterator = _asyncIterator(pollingHelper());

              case 4:
                _context2.next = 6;
                return _iterator.next();

              case 6:
                _step = _context2.sent;
                _iteratorNormalCompletion = _step.done;
                _context2.next = 10;
                return _step.value;

              case 10:
                _value = _context2.sent;

                if (_iteratorNormalCompletion) {
                  _context2.next = 17;
                  break;
                }

                res = _value;
                fp(res);

              case 14:
                _iteratorNormalCompletion = true;
                _context2.next = 4;
                break;

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](2);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 23:
                _context2.prev = 23;
                _context2.prev = 24;

                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                  _context2.next = 28;
                  break;
                }

                _context2.next = 28;
                return _iterator.return();

              case 28:
                _context2.prev = 28;

                if (!_didIteratorError) {
                  _context2.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context2.finish(28);

              case 32:
                return _context2.finish(23);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 19, 23, 33], [24,, 28, 32]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

module.exports = usePolling;
