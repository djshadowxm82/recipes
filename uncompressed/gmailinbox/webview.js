'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.querySelectorAll('.DsPmj').length > 0) {
      count = document.querySelectorAll('.DsPmj')[0].querySelectorAll('div.G3').length;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdtYWlsaW5ib3gvd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImNvdW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJsb29wIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWtCQyxLQUFELElBQVc7QUFDMUIsUUFBTUMsY0FBYyxTQUFTQSxXQUFULEdBQXVCO0FBQ3pDLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxRQUFJQyxTQUFTQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0MsTUFBcEMsR0FBNkMsQ0FBakQsRUFBb0Q7QUFDbERILGNBQVFDLFNBQVNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLENBQXBDLEVBQXVDQSxnQkFBdkMsQ0FBd0QsUUFBeEQsRUFBa0VDLE1BQTFFO0FBQ0Q7O0FBRUQ7QUFDQUwsVUFBTU0sUUFBTixDQUFlSixLQUFmO0FBQ0QsR0FURDs7QUFXQTtBQUNBRixRQUFNTyxJQUFOLENBQVdOLFdBQVg7QUFDRCxDQWREIiwiZmlsZSI6ImdtYWlsaW5ib3gvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuRHNQbWonKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Ec1BtaicpWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5HMycpLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gIH07XG5cbiAgLy8gY2hlY2sgZm9yIG5ldyBtZXNzYWdlcyBldmVyeSBzZWNvbmQgYW5kIHVwZGF0ZSBGcmFueiBiYWRnZVxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=