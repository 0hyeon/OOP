// 객체는 행위와 상태를 가짐
//1.중괄호를 통해 객체지향설계가능
const todo1 = {
    contents:'수업듣기',
    done:false,
    complete(){
        thjis.done = true;
    }
}

//2.생성자함수를 통해서도 객체지향설계가능
const todo2 = new Object();
//3.생성자함수 static메서드 통해서도 객체지향설계가능2
const todo3 = Object.create({})//static메서드

console.log(todo1)
//프로퍼티 디스크립터를 볼수있는 메서드 4가지가 보여짐(configueragble,enumerable,value,writable )
Object.getOwnPropertyDescriptor(todo1,'createdAt')
//todo1안에 새로 작성가능
//프로퍼티 디스크립터
Object.defineProperties(todo1,'createdAt',{
    value:new Date(),
    writeable:false,//불변객체정의여부
    enumerable:false//검색이안됨 특정하게 내부에서만 쓸때쓰는 프로퍼티 디파인가능
})
JSON.stringify(todo1)
console.log(todo1)
console.log(Object.keys(todo1))//enumerable false시 ket값이 hidden

//writeable false로 주면 밑에 setimeOut이 안먹힘 변경이 불가능하다는 얘기 (불변객체정의)
setTimeout(function(){
 todo1.createdAt = new Date;
 console.log(todo1)
},1000)

//getter setter전달도 가능 
Object.defineProperties(todo1,'writer',{
    get(){ this._name;},
    set(name){ 
        if(name.length < 4){
            throw new Error('이름은 4글자보다 이상이여야 합니다.')
        }
        this._name = name
    },//this는 내부 todo1을 가르킴
})
console.log(todo1.writer)//todo1.writer에 접금하면 호출하지 않아도 자동으로 get이 실행됨
todo1.wirter = 'john'