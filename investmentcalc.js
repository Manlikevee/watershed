
var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;

pamount.addEventListener("input", simpleInterest);
interest.addEventListener("input", simpleInterest);
tenur.addEventListener("input", simpleInterest);
edate.addEventListener("input", simpleInterest);
mdate.addEventListener("input", simpleInterest);


let today = new Date().toISOString().substr(0, 10);
document.querySelector("#edate").value = today;




function simpleInterest() {

  console.log("yes")
  var principal = parseFloat(document.getElementById("pamount").value);
  var interestRate = parseFloat(document.getElementById("interest").value);
  interestRate = interestRate / 100;
  console.log(interestRate)
  var termOfLoan = parseFloat(document.getElementById("tenur").value);
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + termOfLoan);

  var days = document.getElementById("tenur").value;
  var date = new Date(document.getElementById("edate").value);
  date.setDate(date.getDate() + parseInt(days));
  document.getElementById("mdate").valueAsDate = date;
//   var seconddate =  date.setDate(date.getDate() - parseInt(days));
//   document.getElementById("edate").valueAsDate = date;
  var newtermofloan = (termOfLoan / 365 )
  var compountIntRaised = (1 + interestRate / 1)
  var compountIntTop = (termOfLoan / 365 )
  var compountIntToper = (termOfLoan / 30.4167 ).toFixed(1)
  if (termOfLoan < 60 ) {
    var compounttopper = "Please enter a number greater than 60 to proceed (please note 30 days = 1 month)";
    document.getElementById("datecount").innerHTML = compounttopper;
    document.getElementById("tenur").classList.add("my-classerror");



    
  } else {
    var compounttopper = "The number of months are  " + compountIntToper ;
    document.getElementById("tenur").classList.remove("my-classerror");
    
    document.getElementById("datecount").innerHTML = compounttopper  ;
    var men = Math.pow(compountIntRaised, compountIntTop);
    console.log(men)
    var compoundinterest = (principal * men).toFixed(2);
    var compounti = (compoundinterest - principal).toFixed(2)
    var simpleInt = principal * interestRate * termOfLoan / 365;
    var amount = (principal + simpleInt).toFixed(2);
    document.getElementById("iamt").value = compounti;
    document.getElementById("mdamt").value =  compoundinterest;
  //   document.getElementById("mdate").value = tomorrow;
    console.log(tomorrow)
    console.log(compoundinterest)
    console.log(compounti)
  }

}