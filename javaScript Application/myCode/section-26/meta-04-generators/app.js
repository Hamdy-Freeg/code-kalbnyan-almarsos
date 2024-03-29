// Library land
const uid = Symbol();
// console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User',
};

user[uid] = 'p3';

// app land => Using the library

user.id = 'p2'; // this should not be possible!

// console.log(user[Symbol('uid')]);
// console.log(Symbol('uid') === Symbol('uid'));
// console.log(user.toString());

const company = {
  // curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// let employee = company.next();

// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (const employee of company) {
//   console.log(employee);
// }

const persons = ['max', 'manu'];
console.log(persons);

// _________

const course = {
  title: 'java script',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Reflect.defineProperty(course, 'price', {

// })

// Reflect.deleteProperty(course, 'title');

// console.log(course.toString());

const courseHandler = {
  get(obj, propName) {
    console.log(propName);
    return obj[propName];
  },
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);
console.log(course, pCourse);
