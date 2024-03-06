// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;

  // Calculate & Output Pay
  // Darcy Maddox
  document.getElementById("dm-wage").innerHTML = calcwage(
    dmHours,
    dmPayrate
  ).toFixed(2);

  // Sofie Orenstein
  document.getElementById("so-wage").innerHTML = calcwage(
    soHours,
    soPayrate
  ).toFixed(2);

  // Karl Yoon

  document.getElementById("ky-wage").innerHTML = calcwage(
    kyHours,
    kyPayrate
  ).toFixed(2);
}
function calcwage(hours, rate) {
  let overt = 0;
  if (hours > 40) {
    overt = hours - 40;
    hours = 40;
  }
  let money = hours * rate + overt * 1.5 * rate;
  return money;
}
