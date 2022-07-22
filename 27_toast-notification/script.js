const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => {
  createNotification();
  // createNotification('This is invalid data', 'error');
});

function createNotification(message = null, type = null) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type ? type : getRandomType());
  toast.innerText = message ? message : getRandomMessage();
  toasts.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
