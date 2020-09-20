function Stopwatch() {
  let duration = 0;
  let startTime = 0;
  let isStarted = false;

  this.startwatch = function () {
    if (isStarted) {
      console.log("already Started");
      return;
    } else {
      startTime = Date.now();
      console.log("started");
      isStarted = true;
    }
  };

  this.stopwatch = function () {
    if (!isStarted) {
      console.log("is not started");
      return;
    } else {
      isStarted = false;
      duration = (Date.now() - startTime)/1000;
      console.log("is stopped");
    }
  };

  this.getduration = function () {
    console.log(duration);
  };

  this.reset=function(){
    duration=0;
    startTime=0;
    isStarted=null;
  };
}
