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
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
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
// Function to update bar style when scrolling:
function updateBarScroll(e) {
  let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

  if (maxVal - minVal < valueGap) {
    if (e.target.className === "range-min") {
      rangeInput[0].value = maxVal - valueGap;
    } else {
      rangeInput[1].value = minVal + valueGap;
    }
  } else {
    valueInput[0].value = minVal;
    valueInput[1].value = maxVal;

    SPo2_Min = (minVal / rangeInput[0].max) * 100;

    SPo2_Max = (maxVal / rangeInput[1].max) * 100;

    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    rangedown.style.right = 100 - (minVal / rangeInput[0].max) * 100 + "%";

    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    //rangeup.style.left =(maxVal / rangeInput[1].max) * 100 + "%";
  }
}

// Function to update bar style when input value in box:
function updateBarInput(e) {
  let minValue = parseInt(valueInput[0].value),
    maxValue = parseInt(valueInput[1].value);

  if (maxValue - minValue >= valueGap && maxValue <= rangeInput[1].max) {
    if (e.target.className === "input-min") {
      rangeInput[0].value = minValue;
      range.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      rangedown.style.right = 100 - (minValue / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    } else {
      rangeInput[1].value = maxValue;
      range.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
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
  if (isChecked(idChecbox)){
    console.log('Active');
    localStorage.setItem("AlarmState", "active");
  } else {
    console.log('Not Active');
    localStorage.setItem("AlarmState", "inactive");

  }

}

//#endregion parameters.html functions



//#region Loading settings
function getAlarmState(){
  if ((localStorage.getItem("AlarmState") == null)){
    localStorage.setItem("AlarmState", AlarmState);
  } else if ((localStorage.getItem("AlarmState") == "inactive")){
    document.getElementById("alarmChecbox").checked = false;
  } else {
    document.getElementById("alarmChecbox").checked = true;
  }



  if(isChecked("alarmChecbox")){
    console.log('Alarm active');
    localStorage.setItem("AlarmState", "active");
  } else {
    localStorage.setItem("AlarmState", "inactive");
    console.log('Alarm inactive');
  }
}

//#endregion Loading settings

function sayHi() {
  console.log("Hi");
}

function alarmOn() {
  if ((localStorage.getItem("AlarmState") == "active")){
    // SpO2 parmaeters check:
    if ((Po2_Perc >= localStorage.getItem("SPo2_Min")) && (Po2_Perc < localStorage.getItem("SPo2_Max"))){
      document.getElementById("spo2Left").classList.add("dangerYell");
    } else if ((Po2_Perc < localStorage.getItem("SPo2_Min"))){
      document.getElementById("spo2Left").classList.add("dangerRed");
      document.getElementById("spo2Left").classList.remove("dangerYell");
    } else if ((Po2_Perc > localStorage.getItem("SPo2_Max"))) {
      document.getElementById("spo2Left").classList.remove("dangerYell");
      document.getElementById("spo2Left").classList.remove("dangerRed");
    }

  }
}