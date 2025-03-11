self.onmessage = function (e) {
    if (e.data === 'start') {
        if (!self.intervalId) {
            self.intervalId = setInterval(() => {
                self.postMessage('execute');
            }, 1000);
        }
    } else if (e.data === 'stop') {
        clearInterval(self.intervalId);
        self.intervalId = null;
    }
};
