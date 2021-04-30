function preview_image(event) {
  var reader = new FileReader();

  reader.onload = function () {
    var img = document.getElementById("studentImg");
    img.src = reader.result;
  };

  reader.readAsDataURL(event.target.files[0]);
}

function generateCard() {
  var studentName = document.getElementById("name").value;
  var surName = document.getElementById("surname").value;
  var rollNumber = document.getElementById("rollNo").value;

  var deptName = document.getElementById("dept").value;

  if (studentName && surName && rollNumber && deptName) {
    document.getElementById("showName").innerHTML = studentName;
    document.getElementById("showSurName").innerHTML = surName;
    document.getElementById("showRoll").innerHTML = rollNumber;
    document.getElementById("showDept").innerHTML = deptName;

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("dept").value = "";
  } else {
    alert("All things are required");
  }
}
