const http = require('http');
const fs = require("fs");

let requestCount = 0;


const server = http.createServer((request, response)=>{
    switch (request.url){
        case '/students':
            response.write('STUDENTS');
            requestCount++;
            response.write('IT-KAMASUTRA: ' + requestCount);
            response.end();
            break;
        case '/favicon.ico':
            const img = fs.readFileSync('public/favicon.ico');
            response.writeHead(200, {'Content-Type': 'image/x-icon' });
            response.end(img);
            break;
        case '/':
        case '/courses':
            response.write('FRONT + BACK');
            requestCount++;
            response.write('IT-KAMASUTRA: ' + requestCount);
            response.end();
            break;
        default:
            response.write('404 not found');
            requestCount++;
            response.write('IT-KAMASUTRA: ' + requestCount);
            response.end();
            break;
    }

})



server.listen(3003);

