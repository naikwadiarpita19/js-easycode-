// for date

let date=new date()
console.log(date)
// or
console.log(date.getDate())

//  for month

let month=new month()
console.log(month.getMonth())

// for year

let year=new year()
console.log(year.getFullYear())

// for month using array

let date1=date()
let month1=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]

console.log(month1[date1.getMonth()])

//

let date2= date()
let months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
let currentdate=`${date2.getDate()} / ${months[date2.getMonth()]} / ${date2.getFullYear()}`



// Time

let time=newTime()

console.log(time.getHours())               // for hours
console.log(time.getMinutes())            // for minutes
console.log(time.getSeconds())            // for seconds
console.log(time.getMilliSeconds())       // for milli seconds
