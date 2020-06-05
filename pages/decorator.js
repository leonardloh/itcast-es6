import Util from './Util';


console.log(Util.sum(10,5));

@T
class User {
    constructor(name, age=20){
        this.name = name;
        this.age = age;
    }
}


function T(target){ // target: 被修饰的对象
    console.log(target);
    target.country = "中国"; //通过修饰器的属性是静态属性
}

console.log(User.country);


export default () => {
    return (
        <div></div>
    );
  }