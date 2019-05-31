const server = require("./server.js/index.js");

const port = 8000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
