const server = require("./api.js");

const port = 8000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
