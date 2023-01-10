const Person = function(firstAndLast) {
  // Altere apenas o código abaixo desta linha
  // Complete o método abaixo e implemente os outros da mesma forma
  let fullName = firstAndLast
  this.getFirstName = function(){
    return fullName.split(' ')[0]
  }
  
  this.getLastName = function(){
    return fullName.split(' ')[1]
  }
  this.getFullName = function() {
    return fullName
  };
  this.setFirstName = function(name){
    fullName = name + ' ' + fullName.split(' ')[1];
  }
  this.setLastName = function(name){
    fullName = fullName.split(' ')[0] + ' ' + name
  }
  this.setFullName = function(name){
    fullName = name
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();