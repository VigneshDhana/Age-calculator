function handleSubmit(e) {
  e.preventDefault();
  let date = parseInt(document.getElementById("date").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let result = document.getElementById("result");
  let error = [];
  console.log(date, month, year);
  if (!(date && date > 0 && date < 32)) {
    error.push("Date Field");
  }
  if (!(month && month > 0 && month < 13)) {
    error.push("Month Field");
  }
  if (!(year && year < new Date().getFullYear())) {
    error.push("Year Field");
  }
  if (error.length) {
    result.innerText = `Please valid input data for ${error.join(", ")}`;
  } else {
    let curr = new Date();
    let currdate = Math.abs(curr.getDate() - date);
    let currmonth = curr.getMonth() + 1 - month;
    let curryear = curr.getFullYear() - year;
    result.innerText = `Your Age is ${curryear} Years ${currmonth} Months ${currdate} Days`;
  }
}
