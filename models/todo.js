class Todo {
    constructor(id,context){
      this.id = id
      this.context = context;
    }
    get Id() {
      return this.id;
    }
    set Id(id) {
      this.id = id;
    }

    get Context() {
        return this.context;
    }

    set Context(context) {
        this.context = context;
    }
      
    toString() {
      const output = {
        Id: this.id,
        context: this.context,
      };
  
      return JSON.stringify(output, null, 2);
    }
  }
  
  module.exports = Todo;