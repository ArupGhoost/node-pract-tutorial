const os = require('os');

const user = os.userInfo(); //user info

console.log(user);

//method returns the system uptime in seconds

console.log(`The System uptime is ${os.uptime()}`);

//other os modules

const object1 = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(object1);