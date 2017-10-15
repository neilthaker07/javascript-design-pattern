function ConcreteHandler1(){
    this.handleRequest = function(request){
      var next;
      if(request === 'R1'){
        console.log(request+" => This one is mine, ConcreteHandler1!");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    this.setNext = function(next){
        this.next = next;
        return next;
    }
}

function ConcreteHandler2(){
    this.handleRequest = function(request){
      var next;
      if(request === 'R2'){
        console.log(request+" => This one is mine, ConcreteHandler2!");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    this.setNext = function(next){
        this.next = next;
        return next;
    }
}

function ConcreteHandler3(){
    this.handleRequest = function(request){
      var next;
      if(request === 'R3'){
        console.log(request+" => This one is mine, ConcreteHandler3!");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    this.setNext = function(next){
        this.next = next;
        return next;
    }
}

var Client = {
  handleRequest: function(request){
    var c1 = new ConcreteHandler1();
    var c2 = new ConcreteHandler2();
    var c3 = new ConcreteHandler3();

    c1.setNext(c2).setNext(c3);
    c1.handleRequest(request);
  }
}

console.log( "Sending R2...");
Client['handleRequest']("R2");
console.log( "Sending R3...");
Client['handleRequest']("R3");
console.log( "Sending R1...");
Client['handleRequest']("R1");
console.log( "Sending RX...");
Client['handleRequest']("RX");
