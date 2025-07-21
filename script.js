let grades = [45, 82, 17, 69, 38];
let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}

let average = total / grades.length;
let gradeLetter;

switch (true) {
  case average > 91:
    gradeLetter = "A";
    break;
  case average >= 81 && average <= 90:
    gradeLetter = "B";
    break;
  case average >= 71 && average <= 80:
    gradeLetter = "C";
    break;
  case average >= 60 && average <= 70:
    gradeLetter = "D";
    break;
  default:
    gradeLetter = "F";
}

document.write("<p>The grade letter average is: " + gradeLetter + " (" + average.toFixed(2) + "%)</p>");