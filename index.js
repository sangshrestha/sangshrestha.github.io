// write version number
const SECOND = 1000; // in ms
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = 30 * DAY;

const START_DATE = new Date("2021-05-20");

const yearsSince = new Date().getUTCFullYear() - START_DATE.getUTCFullYear();

const updatedDate = START_DATE.setFullYear(
  START_DATE.getFullYear() + yearsSince,
);

const differenceInMs = Date.now() - updatedDate;
const monthsRemaining = Math.floor(differenceInMs / MONTH);
const leftMs = differenceInMs % MONTH;
const secondsRemaining = Math.round(leftMs / SECOND);

const versionSpan = document.querySelector("#version");
versionSpan.innerText = `${yearsSince}.${monthsRemaining}.${secondsRemaining}`;

// animation for drawing terminal lines
const lines = [...document.querySelectorAll("p:not(.show), li, h1, h2")];

function wait(s) {
  return new Promise((res) => setTimeout(res, s));
}

async function drawLines(lines) {
  for (const line of lines) {
    const inputSpan = line.querySelector(".input");
    if (inputSpan) {
      const inputContent = [...inputSpan.innerHTML];
      inputSpan.innerHTML = "";

      line.classList.add("show");

      for (const char of inputContent) {
        await wait(45);
        inputSpan.innerHTML += char;
      }
    } else {
      line.classList.add("show");
    }
    await wait(100);
  }
}

drawLines(lines);
