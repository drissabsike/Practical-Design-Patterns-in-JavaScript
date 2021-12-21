//Object.create(Object.prototype)
// new Object
var task = {
    title: 'My Title 2',
    description: 'My Description 2'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return 'Function: '+this.title+' '+this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function () {
      return this.title+' is urgent !';
  },
  writable: false,
  enumerable: false,
  configurable: false
})

//Object.keys(task)
console.log(urgentTask.toString())