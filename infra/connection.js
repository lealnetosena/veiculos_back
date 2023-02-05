const path = require("path");
const { Database } = require("sqlite3");
module.exports = new Database(path.resolve("infra/banco.db"));
