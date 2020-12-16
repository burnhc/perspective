const perspective = require("@finos/perspective");
const {securities} = require("../datasources");

const host = new perspective.WebSocketServer();
securities()
    .then(table => table.view())
    .then(view => host.host_view("securities", view));
