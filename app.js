console.log('Starting');

setTimeout(() => {
    console.log('i found you miss new booty');
}, 2000)

const timer = setInterval(() => {
  console.log('get ready');
}, 500);

setTimeout(() => {
  clearInterval(timer)
}, 2000);

console.log('Stopping');