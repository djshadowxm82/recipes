'use strict';

module.exports = Franz => {
    function getMessages() {
        const count = document.querySelector('.navigationItem-counter').innerText;
        Franz.setBadge(count ? count.substring(1, count.length - 1) : 0);
    }
    Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3Rvbi1tYWlsL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJjb3VudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInNldEJhZGdlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsU0FBUztBQUN0QixhQUFTQyxXQUFULEdBQXVCO0FBQ25CLGNBQU1DLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEQyxTQUFoRTtBQUNBTCxjQUFNTSxRQUFOLENBQWVKLFFBQVFBLE1BQU1LLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJMLE1BQU1NLE1BQU4sR0FBZSxDQUFsQyxDQUFSLEdBQStDLENBQTlEO0FBQ0g7QUFDRFIsVUFBTVMsSUFBTixDQUFXUixXQUFYO0FBQ0gsQ0FORCIsImZpbGUiOiJwcm90b24tbWFpbC93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBGcmFueiA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25JdGVtLWNvdW50ZXInKS5pbm5lclRleHRcbiAgICAgICAgRnJhbnouc2V0QmFkZ2UoY291bnQgPyBjb3VudC5zdWJzdHJpbmcoMSwgY291bnQubGVuZ3RoIC0gMSkgOiAwKVxuICAgIH1cbiAgICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKVxufVxuIl19