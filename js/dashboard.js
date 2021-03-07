
//function to filter the events by year
var filterRes =  result.filter(function(year) {
    return year.YEAR == slidePic.value;
});
//test & display function
console.log(filterRes);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthlng = months.length;
//function to filter the new array by one month
var resultArr =  filterRes.filter(function(month) {
    return month.EVENT_DATE.includes("December");
});
//test & display the function
console.log(resultArr);

//function to filter the new array by all months
var resultArr2 =  filterRes.filter(function(month) {
  let i = 0;
  while ( i < monthlng) {
    return  month.EVENT_DATE.includes(months[i]);
  }
  i++;
});

console.log(resultArr2);