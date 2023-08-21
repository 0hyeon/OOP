//(prototype)원형이되는 객체로부터 객체를 만들수있다.
const todoProto = {
    contents:'_',
    complete(){
        this.done = true;
    },
    toString(){
        return `${this.contents}|${this.done}`;
    }

}
const todo3 = Object.create(todoProto);
todo3.contents = '일하러가기';
todo3.complete();
console.log(todo3.toString())

const todo1 = {
    contents:'수업듣기',
    done:false,
    complete(){
        this.done = true;
    },
    toString(){
        return `${this.contents}|${this.done}`;
    }
}
const todo2 = {
    contents:'밥먹기',
    done:true,
    complete(){
        this.done = true;
    },
    toString(){
        return `${this.contents}|${this.done}`;
    }
}
//todo 1,2의 공통적인 행위는 complete할수있다.
//공통적인 행위를 하나의 프로토타입으로 만들수있다. 