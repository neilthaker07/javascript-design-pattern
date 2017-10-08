function Adaptee() {
    this.printMessage = function(msg) {
        console.log(msg);
    }
}

function Target() {
    return {
        sayHello: function() {
            var adaptee = new Adaptee();
            return adaptee.printMessage("Hello");
        }
    };
}
 
function runTest() {
    var adapter = new Target();
    adapter.sayHello();
}

runTest();