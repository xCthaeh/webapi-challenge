const server = require("./projects.js");
const server = require("./actions.js");

const port = 8000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
