function Factory() {
    var order = "Default Order" ;
    var creator;

    this.takeOrder = function(order)
    {
        this.order = order;
    }

    this.getEngine = function (type) {     
        if (type === "priusfactory") {
            creator = new PriusFactory();
        } else if (type === "volvofactory") {
            creator = new VolvoFactory();
        } else if (type === "teslafactory") {
            creator = new TeslaFactory();
        }
        this.creator = creator;
        return creator;
    }

    this.buildOrder = function (type) {     
        console.log("Building Order: " + order );
        console.log("Pull Engine..." + this.getEngine(type).engine );
        console.log("Assemble Car..." );
        console.log("Paint...");
        console.log("Ship...");
    }
}
 
var PriusFactory = function () {
    this.engine = "Hybrid";
};
 
var VolvoFactory = function () {
    this.engine = "Gas";
};
 
var TeslaFactory = function () {
    this.engine = "Electric";
};

function init() {
    var factory = new Factory();
    factory.buildOrder("priusfactory");
    factory.buildOrder("volvofactory");
    factory.buildOrder("teslafactory");
}
init();