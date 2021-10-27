class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
      const that = this;
      const currentTime = setInterval (function () {
      console.log(that.currentTime);
      that.currentTime++;
}, 1000);
}

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }


  getSeconds() {
    return this.currentTime - (this.getMinutes() * 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
  } else {
      return `${value}`;
  }
}

  stop() {
    return clearInterval(this.setInterval);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split(minutes, seconds) {
    minutes = this.computeTwoDigitNumber(this.getMinutes());
    seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
