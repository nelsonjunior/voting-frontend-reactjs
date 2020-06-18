class TimerUtil{
  static sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  static caluleCountdown(distance){
    if(distance < 0){
      return {days:0, hours:0, minutes:0, seconds:0};
    }
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return {days, hours, minutes, seconds};
  }
}
export default TimerUtil;
