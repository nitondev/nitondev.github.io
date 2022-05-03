
// Calculate my age from Date of Birth
var dob = new Date("11/02/1994");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

// Display my age in the element with id="age"
document.getElementById('age').innerHTML = age;
