let message="";
let output="";
// Theme toggle functionality
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Sidebar toggle functionality
const sideExpandButton = document.getElementById('sideexpand');
const sidebar = document.querySelector('.sidebar');

sideExpandButton.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
});

// Help button redirection
const helpButton = document.getElementById('helpbutton');
helpButton.addEventListener('click', () => {
  window.location.href = 'help.html'; 
});

// About redirection
const about = document.getElementById('about');
about.addEventListener('click', () => {
  window.location.href = 'about.html'; 
});

// Chat functionality
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatHistory = document.getElementById('chat-history');

function sendMessage() {
  message = messageInput.value.trim();
  if (message) {
    const userMessage = document.createElement('div');
    userMessage.className = 'message-user-message';
    userMessage.textContent = message;
    chatHistory.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message-bot-message';
    botMessage.textContent = output;
    chatHistory.appendChild(botMessage);

    chatHistory.scrollTop = chatHistory.scrollHeight;
    messageInput.value = '';
  }
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});