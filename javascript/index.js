function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Baltimore
  let baltimoreElement = document.querySelector("#baltimore");
  let baltimoreDateElement = baltimoreElement.querySelector(".date");
  let baltimoreTimeElement = baltimoreElement.querySelector(".time");
  let baltimoreTime = moment().tz("America/New_York");

  baltimoreDateElement.innerHTML = baltimoreTime.format("MMMM Do, YYYY");
  baltimoreTimeElement.innerHTML = baltimoreTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
