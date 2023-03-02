// library land

const uid = Symbol('uid');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'hamdy',
  age: 20,
  [Symbol.toStringTag]: 'user object',
};

// app land => using the library
user.id = 'p2';

console.log(user[Symbol('uid')]);

console.log(user);

const company = {
  curEmployee: 0,
  employees: ['max', 'manu', 'anna'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};
