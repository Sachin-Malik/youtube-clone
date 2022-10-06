const monthMapping = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getTimeFromTimeStamp= (timestamp)=>{
   const date = new Date(timestamp);
   const day = date.getDay();
   const month = monthMapping[date.getMonth()];
   const year = date.getFullYear();
   var time = day+"-"+month+"-"+year;
   return time;
}

