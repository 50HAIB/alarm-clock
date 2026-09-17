// Get DOM elements
var currentTimeEl = document.getElementById("currentTime");
var alarmTimeEl = document.getElementById("alarmTime");
var setAlarmBtn = document.getElementById("setAlarmBtn");
var clearAlarmBtn = document.getElementById("clearAlarmBtn");
var alarmMessageEl = document.getElementById("alarmMessage");
var alarmTime = null;
var alarmTimeout = null;
// Update current time every second
function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString("en-US", { hour12: true });
    if (currentTimeEl) {
        currentTimeEl.textContent = timeString;
    }
    // Check if alarm time matches current time
    if (alarmTime === timeString) {
        ringAlarm();
    }
}
function ringAlarm() {
    var alarmAudio = new Audio("alarm-music.mp3");
    alarmAudio.play();
    alarmMessageEl.textContent = "Wake Up! Alarm Ringing!";
    console.log("Wake Up! Alarm Ringing!");
    alarmMessageEl.classList.remove("hidden");
    clearAlarm();
}
// Set the alarm
function setAlarm() {
    if (!alarmTimeEl.value) {
        alert("Please select a valid time for the alarm!");
        return;
    }
    alarmTime = new Date().toLocaleDateString() + " " + alarmTimeEl.value;
    alarmTime = new Date(alarmTime).toLocaleTimeString("en-US", { hour12: true });
    alarmMessageEl.textContent = "Alarm Set!";
    alarmMessageEl.classList.remove("hidden");
    console.log("Alarm set for: ".concat(alarmTime));
    ;
}
// Clear the alarm
function clearAlarm() {
    alarmTime = null;
    alarmMessageEl.classList.add("hidden");
}
// Event listeners
setAlarmBtn.addEventListener("click", setAlarm);
clearAlarmBtn.addEventListener("click", clearAlarm);
// Initialize clock
setInterval(updateTime, 1000);