class Task { 
    constructor(name){
        this.name = name;
        this.completed = false;
    };
    completed(){
        console.log('completing prototype task '+ this.name);
            this.completed = true;
    };
    save(){
        console.log('saving prototype task '+ this.name);
    };

}

/*{Prototype} => Copie des Methodes Complted & Save, 
Task.prototype.completed = function(){
    console.log('completing prototype task '+ this.name);
        this.completed = true;
};

Task.prototype.save = function(){
    console.log('saving prototype task '+ this.name);
};*/