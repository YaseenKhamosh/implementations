"use strict";
exports.__esModule = true;
var Application_1 = require("./Application");
var Network_1 = require("./Network");
var Physical_1 = require("./Physical");
var Presentation_1 = require("./Presentation");
var Session_1 = require("./Session");
var Transport_1 = require("./Transport");
var DataLink_1 = require("./DataLink");
var Request_1 = require("./Request");
var encode = function () {
    var request = [
        "application",
        "presentation",
        "session",
        "transport",
        "network",
        "dataLink",
        "physical",
    ];
    var application = new Application_1.Application();
    var presentation = new Presentation_1.Presentation();
    var session = new Session_1.Session();
    var transport = new Transport_1.Transport();
    var network = new Network_1.Network();
    var dataLink = new DataLink_1.DataLink();
    var physical = new Physical_1.Physical();
    application
        .setNext(presentation)
        .setNext(session)
        .setNext(transport)
        .setNext(network)
        .setNext(dataLink)
        .setNext(physical);
    application.handle(request);
    console.log(Request_1.Request.message);
};
var decode = function () {
    var request = "application,presentation,session,transport,network,dataLink,physical";
    var application = new Application_1.Application();
    var presentation = new Presentation_1.Presentation();
    var session = new Session_1.Session();
    var transport = new Transport_1.Transport();
    var network = new Network_1.Network();
    var dataLink = new DataLink_1.DataLink();
    var physical = new Physical_1.Physical();
    physical
        .setNext(dataLink)
        .setNext(network)
        .setNext(transport)
        .setNext(session)
        .setNext(presentation)
        .setNext(application);
    physical.handleDecode(request);
    console.log(Request_1.Request.decodeMessage);
};
encode();
decode();
