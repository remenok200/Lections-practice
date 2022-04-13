function interval(start, end, time) {
  let i = start;
  
  const timeoutID = setInterval(() => {
    console.log(i++);
    if (i > end) {
      clearInterval(timeoutID);
    }
  }, time);
}

interval(1, 20, 100);
