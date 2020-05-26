class TimerUtil{
  static sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
export default TimerUtil;
