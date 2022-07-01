const hourEl = document.querySelector('.needle.hour');
const minuteEl = document.querySelector('.needle.minute');
const secondEl = document.querySelector('.needle.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', e => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerText = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerText = 'Light Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    (hours / 12) * 360
  }deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    (minutes / 60) * 360
  }deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    (seconds / 60) * 360
  }deg)`;

  timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
