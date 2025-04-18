const os = require('os');
const cluster = require('cluster');
const app = require('./index.js');

const numCPUs = os.cpus().length;
const port = process.env.PORT || 3000;


if(cluster.isPrimary){
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for(let i = 0; i < numCPUs; i++){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log(`Forking a new worker...`);
        cluster.fork();
    });
}else{
    console.log(`Worker ${process.pid} started`);
    app.listen(port, () => {
        console.log(`Server is running on port 3000`);
    });

    // Handle SIGTERM signal
    process.on('SIGTERM', () => {
        console.log(`Worker ${process.pid} received SIGTERM`);
        process.exit(0);
    });
}