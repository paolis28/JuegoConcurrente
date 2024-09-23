//papas
self.onmessage = function(event) {
    let progress = 0;
    const intervalTime = 100;  
  
    const interval = setInterval(() => {
      progress += 10;
      self.postMessage({ progress, done: progress >= 100 });
  
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, intervalTime);
};
  