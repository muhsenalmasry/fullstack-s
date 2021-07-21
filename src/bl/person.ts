import { timeStamp } from "console";

export class person {
    firstName:string;
    public lastName:string;
    private age:number;

    constructor(fn:string, ln:string, age:number){
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    get Age():number {
        return this.age;
    }

    set Age(age:number){
        if(age < 0 || age > 100) throw 'Age setting error!';
        this.age = age;
    }

    fullName():string {
        return this.firstName + " " + this.lastName;
    }

    toString():string {
        var msg = this.fullName();
        if(this.age !== null && !isNaN(this.age))
            msg += " age: " + this.age;
        return msg;
    }
}