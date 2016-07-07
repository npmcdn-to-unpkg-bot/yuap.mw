var yellApp = yellApp || {};

yellApp.define = function (namespace) {
    var parts = namespace.split("."),
        parent = yellApp,
        i;

    if (parts[0] == "yellApp") {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i++) {

        if (typeof parent[parts[i]] == "undefined") {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
}
