import { loadTest } from 'loadtest';

// Define the options for the load test
const options = {
  url: 'http://asg-practice-asg-1-1289438382.ap-south-1.elb.amazonaws.com/api/1000000000', // your endpoint
  concurrency: 10,  // Number of concurrent requests to make
  requestsPerSecond: 10, // Requests per second (this will send 100 requests per second)
  maxRequests: 100,  // Maximum number of requests to send in total (optional)
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

