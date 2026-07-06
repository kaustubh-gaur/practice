let timeString = document.getElementById("timeString");

let dateString = document.getElementById("date");

let is24hrs = true;
function clockRefresh() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let period = hours >= 12 ? "PM" : "AM";
  let time;
  if (!is24hrs) {
    hours = hours % 12 || 12;
    time = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${period}`;
  } else {
    time = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }

  timeString.textContent = time;

  const day = now.getDate();
  const month = now.toLocaleString("en-US", { month: "short" });
  const year = now.getFullYear();

  const date = `${day} ${month} ${year}`;
  dateString.textContent = date;
}
clockRefresh();

setInterval(clockRefresh, 1000);

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

const btn12 = document.getElementById("btn12");

const btn24 = document.getElementById("btn24");

btn12.addEventListener("click", () => {
  is24hrs = false;
  clockRefresh();
});

btn24.addEventListener("click", () => {
  is24hrs = true;
  clockRefresh();
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
