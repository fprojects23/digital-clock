function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  document.getElementById("hour1").innerText = Math.floor(hours / 10);
  document.getElementById("hour2").innerText = hours % 10;
  document.getElementById("minute1").innerText = Math.floor(minutes / 10);
  document.getElementById("minute2").innerText = minutes % 10;
  document.getElementById("second1").innerText = Math.floor(seconds / 10);
  document.getElementById("second2").innerText = seconds % 10;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
