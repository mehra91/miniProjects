function userObj(username,age,salary,...language){
    this.username = username ;
     this.age = age;
     this.salary = salary;
    this.language = language;
}

const userOne =  new  userObj('priyanshu', 22, 40000,'python','js','angular' )
console.log(userOne);
const userTwo =  new  userObj('Himani', 22,80000,'js','ruby','php')
console.log(userTwo);
