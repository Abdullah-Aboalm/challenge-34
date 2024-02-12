// submit btn
let subBtn = document.querySelector("#send-btn");

// !input name
let inputName = document.querySelector("#name");
let spanName = document.querySelector("#card-name");
let errName = document.querySelector("#Err-name");
let nmRg = /^[a-z-]+(\s)[a-z-]+$/i;

subBtn.addEventListener("click", () => {
  if (inputName.value.length === 0) {
    errName.textContent = "Can't be blank";
    errName.style.display = "block";
    inputName.style.borderColor = "red";
    inputName.style.outline = "0";
  } else {
    if (nmRg.test(inputName.value)) {
      spanName.textContent = inputName.value;
    } else {
      errName.textContent = "Enter valid name";
      errName.style.display = "block";
      inputName.style.borderColor = "red";
      inputName.style.outline = "0";
    }
  }
})

inputName.addEventListener("input", () => {
  inputName.style.borderColor = "rgba(128, 128, 128, 0.319)";
  errName.style.display = "none";
})

inputName.addEventListener("focus", () => {
  inputName.style.borderColor = "rgb(93, 0, 147)";
  inputName.style.outline = "rgb(93, 0, 147)";
})

inputName.addEventListener("blur", () => {
  inputName.style.borderColor = "rgba(128, 128, 128, 0.319)";
  inputName.style.outline = "0";
});
// end input name
// !input card number
let inputNum = document.querySelector("#number");
let spanNum = document.querySelector("#card-num");
let errNum = document.querySelector("#Err-num");
let numRg = /^(\d{4}\s){3}\d{4}$/;

subBtn.addEventListener("click", () => {
  if (inputNum.value.length === 0) {
    errNum.textContent = "Can't be blank";
    errNum.style.display = "block";
    inputNum.style.borderColor = "red";
    inputNum.style.outline = "0";
  } else {
    if (numRg.test(inputNum.value)) {
      spanNum.textContent = inputNum.value;
    } else {
      errNum.textContent = "Enter valid number";
      errNum.style.display = "block";
      inputNum.style.borderColor = "red";
      inputNum.style.outline = "0";
    }
  }
});

inputNum.addEventListener("input", () => {
  inputNum.style.borderColor = "rgba(128, 128, 128, 0.319)";
  errNum.style.display = "none";
});

inputNum.addEventListener("focus", () => {
  inputNum.style.borderColor = "rgb(93, 0, 147)";
  inputNum.style.outline = "rgb(93, 0, 147)";
});

inputNum.addEventListener("blur", () => {
  inputNum.style.borderColor = "rgba(128, 128, 128, 0.319)";
  inputNum.style.outline = "0";
});
// end input card number
// !date input
let inputMonth = document.querySelector("#month");
let spanDate = document.querySelector("#card-date");
let errMonth = document.querySelector("#Err-month");
let inputYear = document.querySelector("#year");
let errYear = document.querySelector("#Err-year");
let YRRg = /^[2-4][1-9]$/;
let MNRg = /^0[1-9]|(11|12)$/;

subBtn.addEventListener("click", () => {
  if (inputMonth.value.length === 0) {
    errMonth.textContent = "Can't be blank";
    errMonth.style.display = "block";
    inputMonth.style.borderColor = "red";
    inputMonth.style.outline = "0";
  } else {
    if (MNRg.test(inputMonth.value)) {
      spanDate.textContent = `${inputMonth.value}/${inputYear.value}`;
    } else {
      errMonth.textContent = "Enter valid month";
      errMonth.style.display = "block";
      inputMonth.style.borderColor = "red";
      inputMonth.style.outline = "0";
    }
  }
  if (inputYear.value.length === 0) {
    errYear.textContent = "Can't be blank";
    errYear.style.display = "block";
    inputYear.style.borderColor = "red";
    inputYear.style.outline = "0";
  } else {
    if (YRRg.test(inputYear.value)) {
      spanDate.textContent = `${inputMonth.value}/${inputYear.value}`;
    } else {
      errYear.textContent = "Enter valid year";
      errYear.style.display = "block";
      inputYear.style.borderColor = "red";
      inputYear.style.outline = "0";
    }
  }
});

inputMonth.addEventListener("input", () => {
  inputMonth.style.borderColor = "rgba(128, 128, 128, 0.319)";
  errMonth.style.display = "none";
});

inputMonth.addEventListener("focus", () => {
  inputMonth.style.borderColor = "rgb(93, 0, 147)";
  inputMonth.style.outline = "rgb(93, 0, 147)";
});

inputMonth.addEventListener("blur", () => {
  inputMonth.style.borderColor = "rgba(128, 128, 128, 0.319)";
  inputMonth.style.outline = "0";
});

inputYear.addEventListener("input", () => {
  inputYear.style.borderColor = "rgba(128, 128, 128, 0.319)";
  errYear.style.display = "none";
});

inputYear.addEventListener("focus", () => {
  inputYear.style.borderColor = "rgb(93, 0, 147)";
  inputYear.style.outline = "rgb(93, 0, 147)";
});

inputYear.addEventListener("blur", () => {
  inputYear.style.borderColor = "rgba(128, 128, 128, 0.319)";
  inputYear.style.outline = "0";
});
// end input date
// !input card number
let inputCvc = document.querySelector("#cvc");
let spanCvc = document.querySelector("#card-cvc");
let errCvc = document.querySelector("#Err-cvc");
let CvRg = /^\d{3}$/;

subBtn.addEventListener("click", () => {
  if (inputCvc.value.length === 0) {
    errCvc.textContent = "Can't be blank";
    errCvc.style.display = "block";
    inputCvc.style.borderColor = "red";
    inputCvc.style.outline = "0";
  } else {
    if (CvRg.test(inputCvc.value)) {
      spanCvc.textContent = inputCvc.value;
    } else {
      errCvc.textContent = "Enter valid Cvc";
      errCvc.style.display = "block";
      inputCvc.style.borderColor = "red";
      inputCvc.style.outline = "0";
    }
  }
});

inputCvc.addEventListener("input", () => {
  inputCvc.style.borderColor = "rgba(128, 128, 128, 0.319)";
  errCvc.style.display = "none";
});

inputCvc.addEventListener("focus", () => {
  inputCvc.style.borderColor = "rgb(93, 0, 147)";
  inputCvc.style.outline = "rgb(93, 0, 147)";
});

inputCvc.addEventListener("blur", () => {
  inputCvc.style.borderColor = "rgba(128, 128, 128, 0.319)";
  inputCvc.style.outline = "0";
});
// end input cvc
// start completed
let form = document.querySelector('#form');
let completed = document.querySelector('#completed');
let comBtn = document.querySelector("#com-btn");
let AllErr = document.querySelectorAll(".Err");

subBtn.addEventListener("click", () => {
  AllErr.forEach(err => {
    if (
      err.style.display.toString == "block" ||
      CvRg.test(inputCvc.value) == false ||
      YRRg.test(inputYear.value) == false ||
      MNRg.test(inputMonth.value) == false ||
      numRg.test(inputNum.value) == false ||
      nmRg.test(inputName.value) == false
    ) {
      console.log("wrong");
    } else {
      form.style.display = "none";
      completed.style.display = "flex";
    }
  });
})

comBtn.addEventListener("click", () => {
  location.reload();
})