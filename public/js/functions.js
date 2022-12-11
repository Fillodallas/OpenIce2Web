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
      } else {
        document.getElementById(chart).style.display = "none";
      }
    });
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
function sayHi() {
  console.log("Hi");
}

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
  console.log(iconID);
  console.log(document.getElementById(iconID).className);
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