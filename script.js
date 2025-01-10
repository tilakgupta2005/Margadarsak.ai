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

async function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'message-user-message';
    userMessage.textContent = message;
    chatHistory.appendChild(userMessage);

    // Clear the input field
    messageInput.value = '';

    try {
      // Send the message to the backend
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      // Display bot's response with HTML rendering
      const botMessage = document.createElement('div');
      botMessage.className = 'message-bot-message';
      botMessage.innerHTML = data.response; // Use innerHTML to render HTML tags
      chatHistory.appendChild(botMessage);
    } catch (error) {
      console.error('Error:', error);

      // Handle error response
      const errorMessage = document.createElement('div');
      errorMessage.className = 'message-bot-message';
      errorMessage.textContent = 'Error: Unable to get a response. Please try again!';
      chatHistory.appendChild(errorMessage);

    }

    // Scroll to the latest message
    chatHistory.scrollTop = chatHistory.scrollHeight;

  }
}

// Event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
