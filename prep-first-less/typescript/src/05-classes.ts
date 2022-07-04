class User {
    private age: number = 20
    constructor(public name: string) {
    }

    setAge(age:number){this.age = age}

    set myAge(age: number){
        this.age = age
    }
}

const jack = new User('Jack')
jack.setAge(30)
jack.myAge = 31