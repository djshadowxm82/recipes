'use strict';

module.exports = Franz => {
	const getMessages = function getMessages() {
		let directElements = document.querySelectorAll('.unreadcount');
		let direct = 0;
		for (let i = 0; i < directElements.length; i += 1) {
			n = parseInt(directElements[i].innerHTML);
			direct += isNaN(n) ? 0 : n;
		}
		Franz.setBadge(direct);
	};
	Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdW5kY3ViZS93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwiZGlyZWN0RWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXJlY3QiLCJpIiwibGVuZ3RoIiwibiIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwiaXNOYU4iLCJzZXRCYWRnZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUJDLFNBQVM7QUFDekIsT0FBTUMsY0FBYyxTQUFTQSxXQUFULEdBQXVCO0FBQzFDLE1BQUlDLGlCQUFpQkMsU0FBU0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQSxNQUFJQyxTQUFTLENBQWI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosZUFBZUssTUFBbkMsRUFBMkNELEtBQUssQ0FBaEQsRUFBbUQ7QUFDbERFLE9BQUlDLFNBQVNQLGVBQWVJLENBQWYsRUFBa0JJLFNBQTNCLENBQUo7QUFDQUwsYUFBV00sTUFBTUgsQ0FBTixJQUFXLENBQVgsR0FBZUEsQ0FBMUI7QUFDQTtBQUNEUixRQUFNWSxRQUFOLENBQWVQLE1BQWY7QUFDQSxFQVJEO0FBU0FMLE9BQU1hLElBQU4sQ0FBV1osV0FBWDtBQUNBLENBWEQiLCJmaWxlIjoicm91bmRjdWJlL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEZyYW56ID0+IHtcblx0Y29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcblx0XHRsZXQgZGlyZWN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5yZWFkY291bnQnKTtcblx0XHRsZXQgZGlyZWN0ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRpcmVjdEVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRuID0gcGFyc2VJbnQoZGlyZWN0RWxlbWVudHNbaV0uaW5uZXJIVE1MKTtcblx0XHRcdGRpcmVjdCArPSAoaXNOYU4obikgPyAwIDogbik7XG5cdFx0fVxuXHRcdEZyYW56LnNldEJhZGdlKGRpcmVjdCk7XG5cdH07XG5cdEZyYW56Lmxvb3AoZ2V0TWVzc2FnZXMpO1xufTtcbiJdfQ==