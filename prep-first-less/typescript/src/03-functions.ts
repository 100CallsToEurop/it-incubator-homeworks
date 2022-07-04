const createPassword = (name: string = 'Max', age: number | string = 20) => `${name}${age}`
createPassword();
createPassword('Jack', 31);
createPassword('Jack', '31');

const createPassword2 = (name: string = 'Max', age?: number) => `${name}${age}`
createPassword('Jack', 31);

//REST
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;
createSkills('Jack', 'JS', 'ES6')


