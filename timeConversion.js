/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
if s = "12:01:01PM" return '12:01:00 and if s = "12:01:01AM" return '00:01:00'
 */

const timeConversion = (s) =>{
  const period = s.substring(8);
  let hour = s.substring(0,2);
  let hr;
  const rest = s.substring(2, 8);

  if (period === "AM"){
    if (hour === "12"){
      hr = "00";
    } else {
      hr = hour;
    }   
  } else {
    if (hour === "12"){
      hr = hour;
     
    } else {
      hr = Number(hour) + 12;
     
    }   
  }
  return hr+rest;
};
console.log(timeConversion("06:40:03AM"));