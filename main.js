class Task { 
    constructor(name){
        this.name = name;
        this.completed = false;
    };
    complete(){
        console.log('completing prototype task '+ this.name);
            this.completed = true;
    };
    save(){
        console.log('saving prototype task '+ this.name);
    };

}

var task1 = new Task('create a demo of constructor');
var task2 = new Task('create a demo of Module');
var task3 = new Task('create a demo of singletons');
var task4 = new Task('create a demo of prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();