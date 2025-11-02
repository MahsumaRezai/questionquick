let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let circle = document.getElementById("circle");
let questionDiv = document.getElementById("question");
let classSelect = document.getElementById("classSelect");

let rotating = false;
let rotationInterval;

// 🎵 صدا برای توقف (فایل را در کنار index.html قرار دهید)
const stopSound = new Audio("sound.wav"); // مثلا ding.mp3 یا stop.wav

// 🎓 تمام سوالات برای صنف‌های ۱ تا ۶
const allQuestions = {
  /* 👇 همین سوالات شما 👇 */
  // ...
};

// 🎬 شروع چرخش
startBtn.addEventListener("click", () => {
  if (!rotating) {
    rotating = true;
    startBtn.disabled = true;
    questionDiv.textContent = "";
    let rotationDegree = 0;

    rotationInterval = setInterval(() => {
      rotationDegree += 5;
      circle.style.transform = `translate(-50%, -50%) rotate(${rotationDegree}deg)`;
    }, 10);
  }
});

// ⛔ توقف و نمایش سوال
stopBtn.addEventListener("click", () => {
  if (rotating) {
    clearInterval(rotationInterval);
    rotating = false;
    startBtn.disabled = false;

    // 🔊 پخش صدا
    stopSound.currentTime = 0; // از ابتدا پخش شود
    stopSound.play().catch((e) => console.log("صدا پخش نشد:", e));

    // 🎯 انتخاب عدد تصادفی
    let degree = parseInt(circle.style.transform.split("rotate(")[1]) || 0;
    let normalized = degree % 360;
    let numberIndex = Math.floor(normalized / 60) + 1;
    if (numberIndex > 6) numberIndex = 6;

    // 🧠 انتخاب سوال
    let selectedClass = classSelect.value;
    let randomQuestion =
      allQuestions[selectedClass][numberIndex][
        Math.floor(Math.random() * 6)
      ];
    questionDiv.textContent = `📘 صنف ${selectedClass} - گروه ${numberIndex}: ${randomQuestion}`;

    // ✨ افکت کوچک برای توقف دایره
    circle.style.transition = "transform 0.5s ease-out";
    circle.style.transform += " scale(1.05)";
    setTimeout(() => {
      circle.style.transform = circle.style.transform.replace(" scale(1.05)", "");
    }, 500);
  }
});
