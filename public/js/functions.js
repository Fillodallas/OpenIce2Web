function extracDate(str) {
  var ext = str.split(".");
  tm =
    ext[1].substring(0, 2) +
    ":" +
    ext[1].substring(2, 4) +
    "." +
    ext[1].substring(4, 6);
  return tm;
}

function toggleBTNs(chbox, chart) {
  document
    .getElementById(chbox)
    .addEventListener("click", function handleClick() {
      if (document.getElementById(chbox).checked) {
        document.getElementById(chart).style.display = "block";
        window.scroll(0, 65);
      } else {
        document.getElementById(chart).style.display = "none";
        window.scroll(0, -65);
      }
    });
}

function isToggled(chbox) {
  document.getElementById(chbox);
  if (document.getElementById(chbox).checked) {
  } else {
  }
}

function maptoNum(str) {
  str = str.replace("[", "").replace("]", "").replaceAll(" ", "");
  var arr = str.split(",");
  arr = arr.map(Number);
  return arr;
}

function reLoad(Chart, data1, label, maxDSL) {
  adddata(Chart, data1, label, maxDSL);
}

function adddata(Chart, val1, label1, maxDSL, val2 = NaN, label2 = NaN) {
  var labels1 = Chart.data.labels;
  var val1DataSet = Chart.data.datasets[0].data;
  var val1DataLength = val1DataSet.length;

  // if data set has more than MAX_DATA_SET_LENGTH entries,
  // remove the first one entry and push on a new data entry
  var didRemoveData1 = false;
  if (val1DataLength > maxDSL) {
    if (Array.isArray(val1)) {
      val1DataSet.splice(0, val1.length);
    } else {
      val1DataSet.shift();
    }

    didRemoveData1 = true;
  }

  // if either download or upload data was removed, we also need to remove
  // the first label to keep the data from squeezing in.
  if (didRemoveData1) {
    if (Array.isArray(val1)) {
      labels1.splice(0, val1.length);
    } else {
      labels1.shift();
    }
  }

  Chart.data.labels = Chart.data.labels.concat(label1);
  Chart.data.datasets[0].data = Chart.data.datasets[0].data.concat(val1);
  Chart.update();
}

/*
      myInterval = setInterval(sayHi, 500);
      */

function checkCollapse(collapsable, idDisplay, idKey) {
  var myCollapsible = document.getElementById(collapsable);
  myCollapsible.addEventListener("hidden.bs.collapse", function () {
    document.getElementById(idDisplay).style.display = "inline-block";
    document.getElementById(idKey).className = "bi bi-chevron-down ms-auto";
  });

  myCollapsible.addEventListener("show.bs.collapse", function () {
    document.getElementById(idDisplay).style.display = "none";
    document.getElementById(idKey).className = "bi bi-chevron-up ms-auto";
  });
}

function changeArrow(iconID) {
  if (document.getElementById(iconID).className == "bi bi-chevron-up ms-auto") {
    document.getElementById(iconID).className = "bi bi-chevron-down ms-auto";
  } else {
    document.getElementById(iconID).className = "bi bi-chevron-up ms-auto";
  }
}

//#region Sidebar Controller

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  if (window.innerWidth > 605) {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  }
});

searchBtn.addEventListener("click", () => {
  if (window.innerWidth > 605) {
    // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  }
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}
//#endregion Sidebar Controller

//#region parameters.html functions
const rangeInput_SpO2 = document.querySelectorAll(
    ".wrapper-SpO2 .range-input input"
  ),
  valueInput_SpO2 = document.querySelectorAll(
    ".wrapper-SpO2 .value-input input"
  ),
  rangedown = document.querySelector(".wrapper-SpO2 .slider-SPO2 .preprogress"),
  range = document.querySelector(".wrapper-SpO2 .slider-SPO2 .progress"),
  rangeup = document.querySelector(".wrapper-SpO2 .slider-SPO2 .postprogress");
let valueGap_SpO2 = 2;

valueInput_SpO2.forEach((input) => {
  input.addEventListener("input", (e) => {
    updateBarInput(e);
  });
});

// For each input in the bar we run the funtion to update the bar style
rangeInput_SpO2.forEach((input) => {
  input.addEventListener("input", (e) => {
    updateBarScroll(e);
  });
});

// Function to update bar style when scrolling:
function updateBarScroll(e) {
  let minVal = parseInt(rangeInput_SpO2[0].value),
    maxVal = parseInt(rangeInput_SpO2[1].value);

  if (maxVal - minVal < valueGap_SpO2) {
    if (e.target.className === "range-min") {
      rangeInput_SpO2[0].value = maxVal - valueGap_SpO2;
    } else {
      rangeInput_SpO2[1].value = minVal + valueGap_SpO2;
    }
  } else {
    valueInput_SpO2[0].value = minVal;
    valueInput_SpO2[1].value = maxVal;

    SPo2_Min = (minVal / rangeInput_SpO2[0].max) * 100;

    SPo2_Max = (maxVal / rangeInput_SpO2[1].max) * 100;

    range.style.left = (minVal / rangeInput_SpO2[0].max) * 100 + "%";
    rangedown.style.right = 100 - (minVal / rangeInput_SpO2[0].max) * 100 + "%";

    range.style.right = 100 - (maxVal / rangeInput_SpO2[1].max) * 100 + "%";
    //rangeup.style.left =(maxVal / rangeInput_SpO2[1].max) * 100 + "%";
  }
}

// Function to update bar style when input value in box:
function updateBarInput(e) {
  let minValue = parseInt(valueInput_SpO2[0].value),
    maxValue = parseInt(valueInput_SpO2[1].value);

  if (
    maxValue - minValue >= valueGap_SpO2 &&
    maxValue <= rangeInput_SpO2[1].max
  ) {
    if (e.target.className === "input-min") {
      rangeInput_SpO2[0].value = minValue;
      range.style.left = (minValue / rangeInput_SpO2[0].max) * 100 + "%";
      rangedown.style.right =
        100 - (minValue / rangeInput_SpO2[0].max) * 100 + "%";
      range.style.right = 100 - (maxValue / rangeInput_SpO2[1].max) * 100 + "%";
    } else {
      rangeInput_SpO2[1].value = maxValue;
      range.style.right = 100 - (maxValue / rangeInput_SpO2[1].max) * 100 + "%";
    }
  }
}

//FadeIn and FadeOut text
function tempText(idTxt) {
  document.getElementById(idTxt).classList.add("animate__fadeIn");

  setTimeout(function () {
    document.getElementById(idTxt).classList.add("animate__fadeOut");
    document.getElementById(idTxt).classList.remove("animate__fadeIn");
  }, 700);
  setTimeout(function () {
    document.getElementById(idTxt).classList.remove("animate__fadeOut");
  }, 1000);
}

function isChecked(idChecbox) {
  if (document.getElementById(idChecbox).checked == true) {
    return true;
  } else {
    return false;
  }
}

function update_Alarm(idChecbox) {
  if (isChecked(idChecbox)) {
    localStorage.setItem("AlarmState", "active");
  } else {
    localStorage.setItem("AlarmState", "inactive");
  }
}

//#endregion parameters.html functions

//#region Loading settings
function getAlarmState() {
  if (localStorage.getItem("AlarmState") == null) {
    localStorage.setItem("AlarmState", AlarmState);
  } else if (localStorage.getItem("AlarmState") == "inactive") {
    document.getElementById("alarmChecbox").checked = false;
  } else {
    document.getElementById("alarmChecbox").checked = true;
  }

  if (isChecked("alarmChecbox")) {
    console.log("Alarm active");
    localStorage.setItem("AlarmState", "active");
  } else {
    localStorage.setItem("AlarmState", "inactive");
    console.log("Alarm inactive");
  }
}

//#endregion Loading settings

function sayHi() {
  console.log("Hi");
}

function alarmOn() {
  if (localStorage.getItem("AlarmState") == "active") {
    // SpO2 parmaeters check:
    if (
      Po2_Perc >= localStorage.getItem("SPo2_Min") &&
      Po2_Perc < localStorage.getItem("SPo2_Max")
    ) {
      document.getElementById("spo2Left").classList.add("dangerYell");
    } else if (Po2_Perc < localStorage.getItem("SPo2_Min")) {
      document.getElementById("spo2Left").classList.add("dangerRed");
      document.getElementById("spo2Left").classList.remove("dangerYell");
    } else if (Po2_Perc > localStorage.getItem("SPo2_Max")) {
      document.getElementById("spo2Left").classList.remove("dangerYell");
      document.getElementById("spo2Left").classList.remove("dangerRed");
    }
  }
}

const rangeInput_RR = document.querySelectorAll(
    ".wrapper-RR .range-input input"
  ),
  valueInput_RR = document.querySelectorAll(".wrapper-RR .value-input input"),
  redLow_RR = document.querySelector(".wrapper-RR .slider-RR .redLow"),
  yelLow_RR = document.querySelector(".wrapper-RR .slider-RR .yelLow"),
  greenCenter_RR = document.querySelector(
    ".wrapper-RR .slider-RR .greenCenter"
  ),
  yelHigh_RR = document.querySelector(".wrapper-RR .slider-RR .yelHigh"),
  redHigh_RR = document.querySelector(".wrapper-RR .slider-RR .redHigh");
let valueGap_RR = 2;

valueInput_RR.forEach((input) => {
  input.addEventListener("input", (e) => {
    updateBarInput_RR(e);
  });
});

// For each input in the bar we run the funtion to update the bar style
rangeInput_RR.forEach((input) => {
  input.addEventListener("input", (e) => {
    updateBarScroll_RR(e);
  });
});

function updateBarScroll_RR(e) {
  let lowestVal = parseInt(rangeInput_RR[0].value),
    lowerVal = parseInt(rangeInput_RR[1].value),
    higerVal = parseInt(rangeInput_RR[2].value),
    highestVal = parseInt(rangeInput_RR[3].value);

  /*----------------------------
  # Higest/Higer interval
  ----------------------------*/
  if (highestVal - higerVal < valueGap_RR) {
    if (e.target.className === "range-higher") {
      rangeInput_RR[2].value = highestVal - valueGap_RR;

      //valueInput_RR[2].value = highestVal - valueGap_RR;
    } else {
      rangeInput_RR[3].value = higerVal + valueGap_RR;
    }
  } else {
    if (higerVal - lowerVal < valueGap_RR) {
      rangeInput_RR[2].value = lowerVal + valueGap_RR;
    } else {
      valueInput_RR[2].value = higerVal;
      yelHigh_RR.style.left = (higerVal / rangeInput_RR[2].max) * 100 + "%";
    }

    valueInput_RR[3].value = highestVal;

    RR_Higer = rangeInput_RR[2].value;

    RR_Highest = rangeInput_RR[3].value;

    yelHigh_RR.style.right =
      100 - (highestVal / rangeInput_RR[3].max) * 100 + "%";

    redHigh_RR.style.left = (highestVal / rangeInput_RR[3].max) * 100 + "%";
  }
  //#region Higer/Lower interval interval

/*----------------------------
# Higer/Lower interval
----------------------------*/

  if (higerVal - lowerVal < valueGap_RR) {
    if (e.target.className === "range-lower") {
      rangeInput_RR[1].value = higerVal - valueGap_RR;
    } else {
      rangeInput_RR[2].value = lowerVal + valueGap_RR;
    }
  } else {
    if (lowerVal - lowestVal < valueGap_RR) {
      rangeInput_RR[1].value = lowestVal + valueGap_RR;
    } else {
      valueInput_RR[1].value = lowerVal;
    }

    if (highestVal - higerVal < valueGap_RR) {
      valueInput_RR[2].value = rangeInput_RR[3].value - 2;
    }

    RR_Lower = (lowerVal / rangeInput_RR[1].max) * 100;

    RR_Higer = rangeInput_RR[2].value;

    greenCenter_RR.style.right =
      100 - (higerVal / rangeInput_RR[2].max) * 100 + "%";
  }

  //#endregion

  //#region Lower/Lowest interval

/*----------------------------
# Lower/Lowest interval
----------------------------*/

  if (lowerVal - lowestVal < valueGap_RR) {
    if (e.target.className === "range-lowest") {
      rangeInput_RR[0].value = lowerVal - valueGap_RR;
    } else {
      rangeInput_RR[1].value = lowestVal + valueGap_RR;
    }
  } else {
    valueInput_RR[0].value = lowestVal;
    valueInput_RR[1].value = lowerVal;

    RR_Lowest = rangeInput_RR[0].value;

    RR_Lower = rangeInput_RR[1].value;

    redLow_RR.style.right =
      100 - (lowestVal / rangeInput_RR[0].max) * 100 + "%";
    greenCenter_RR.style.left = (lowerVal / rangeInput_RR[1].max) * 100 + "%";
    yelLow_RR.style.right = 100 - (lowerVal / rangeInput_RR[1].max) * 100 + "%";

    yelLow_RR.style.left = (lowestVal / rangeInput_RR[0].max) * 100 + "%";
  }
  //#endregion Lower/Lowest interval
}

/*
// Function to update bar style when input value in box:
function updateBarInput(e) {
  let lowestValue = parseInt(valueInput_RR[0].value),
    lowerValue = parseInt(valueInput_RR[1].value),
    higerValue = parseInt(valueInput_RR[2].value),
    highestValue = parseInt(valueInput_RR[3].value);

  if (
    highestValue - higerValue >= valueGap_RR &&
    highestValue <= rangeInput[3].max
  ) {
    if (e.target.className === "input-higher") {
      rangeInput[2].value = higerValue;
      range.style.left = (higerValue / rangeInput[2].max) * 100 + "%";
      rangedown.style.right =
        100 - (higerValue / rangeInput[2].max) * 100 + "%";
      range.style.right = 100 - (highestValue / rangeInput[3].max) * 100 + "%";
    } else {
      rangeInput[3].value = highestValue;
      range.style.right = 100 - (highestValue / rangeInput[3].max) * 100 + "%";
    }
  }
}
*/
