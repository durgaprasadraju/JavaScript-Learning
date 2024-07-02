const readline =require ('readline')
const http = require('http');

function startServer() {
  // Get the current date and time
const now = new Date();

// Format the date for a specific European timezone (e.g., Berlin, Germany)
const options = { timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formatter = new Intl.DateTimeFormat('en-US', options);

const message = `Current Date and Time in another country: ${formatter.format(now)}`;
    const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  });

  server.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000/');
  });
}

// Call the function to start the server
startServer();

