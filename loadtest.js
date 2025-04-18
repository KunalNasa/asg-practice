import { loadTest } from 'loadtest';

// Define the options for the load test
const options = {
  url: 'http://asg-practice-asg-lb-580922520.ap-south-1.elb.amazonaws.com/api/10000000000', // your endpoint
  concurrency: 100,  // Number of concurrent requests to make
  requestsPerSecond: 100, // Requests per second (this will send 100 requests per second)
  maxRequests: 1000,  // Maximum number of requests to send in total (optional)
  method: 'GET', // HTTP method (GET or POST, depending on your endpoint)
  // Optional headers (if needed, like for authorization)
  // headers: {
  //   'Authorization': 'Bearer YOUR_TOKEN'
  // }
};



// Perform the load test
loadTest(options, function(error, result) {
  if (error) {
    return console.error('Error during load testing:', error);
  }

  console.log('Load test result:', result);
});
