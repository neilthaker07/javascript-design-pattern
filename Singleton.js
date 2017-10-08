var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("Creating instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function init() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    console.log(instance1);
    console.log(instance2);
}

init();