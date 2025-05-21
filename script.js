
function handleClick(element) {
  const channelUrl = element.getAttribute('data-channel-url');
  if (channelUrl) {
    window.open(channelUrl, '_blank');
  }
}

const sendBtn = document.getElementById('send_btn');
const messageInput = document.getElementById('message');

sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (!message) {
    alert("Please enter a message");
    return;
  }
  const mailtoLink = `mailto:swathiramesh2426@gmail.com?subject=Message from website&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
});