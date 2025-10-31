// script.js
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let circle = document.getElementById("circle");
let questionDiv = document.getElementById("question");

let rotating = false;
let rotationInterval;

// سوالات برای هر شماره
const questions = {
  1: ["۱. CPU چیست؟", "۲. وظیفه مادربورد چیست؟", "۳. RAM چیست؟", "۴. BIOS چیست؟", "۵. ورودی‌های اصلی چیستند؟", "۶. تفاوت سخت‌افزار و نرم‌افزار؟"],
  2: ["۱. سیستم‌عامل چیست؟", "۲. انواع سیستم‌عامل؟", "۳. ویندوز چیست؟", "۴. پوشه چیست؟", "۵. آیکون چیست؟", "۶. فایل چیست؟"],
  3: ["۱. اینترنت چیست؟", "۲. مرورگر چیست؟", "۳. موتور جستجو چیست؟", "۴. ایمیل چیست؟", "۵. IP چیست؟", "۶. شبکه چیست؟"],
  4: ["۱. Word چیست؟", "۲. Excel چیست؟", "۳. PowerPoint چیست؟", "۴. Save As چه می‌کند؟", "۵. Cut و Copy چه تفاوتی دارند؟", "۶. فایل جدید چگونه ایجاد می‌شود؟"],
  5: ["۱. ویروس چیست؟", "۲. فایروال چیست؟", "۳. رمز قوی چیست؟", "۴. هک چیست؟", "۵. آنتی‌ویروس چیست؟", "۶. امنیت اطلاعات یعنی چه؟"],
  6: ["۱. چاپگر چیست؟", "۲. اسکنر چیست؟", "۳. موس چیست؟", "۴. کیبورد چیست؟", "۵. نمایشگر چیست؟", "۶. اسپیکر چیست؟"]
};

// شروع چرخش
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

// توقف و نمایش سوال
stopBtn.addEventListener("click", () => {
  if (rotating) {
    clearInterval(rotationInterval);
    rotating = false;
    startBtn.disabled = false;

    let degree = parseInt(circle.style.transform.split("rotate(")[1]) || 0;
    let normalized = degree % 360;
    let numberIndex = Math.floor(normalized / 60) + 1;
    if (numberIndex > 6) numberIndex = 6;

    let randomQuestion = questions[numberIndex][Math.floor(Math.random() * 6)];
    questionDiv.textContent = `شماره ${numberIndex}: ${randomQuestion}`;
  }
});
