console.log("Scripts::Running script logger.js");

var Log = {
    d: function(tag, msg) {
        tag = tag ? tag : 'UNTAGGED';
        console.log(tag + ': ' + msg);
    }
};
