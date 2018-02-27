class SmartCalculator {
  constructor(initialValue) {
    this.array = [];
    this.array.push(initialValue);
  }

  add(number) {
    this.array.push("+");
    this.array.push(number);
    return this;
    console.log(this.array);
  }

  subtract(number) {
    this.array.push("-");
    this.array.push(number);
    return this;
    console.log(this.array);
  }

  multiply(number) {
    this.array.push("*");
    this.array.push(number);
    return this;
    console.log(this.array);
  }

  devide(number) {
    this.array.push("/");
    this.array.push(number);
    return this;
    console.log(this.array);
  }

  pow(number) {
    this.array.push("^");
    this.array.push(number);
    return this;
    console.log(this.array);
  }
  calc (array) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "^") {
        this.array.splice(this.array[i-1], 3, Math.pow(this.array[i-1], this.array[i+1]));
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "/") {
        this.array.splice(this.array[i-1], 3, this.array[i-1] / this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "*") {
        this.array.splice(this.array[i-1], 3, this.array[i-1] * this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "-") {
        this.array.splice(this.array[i-1], 3, this.array[i-1] - this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "+") {
        this.array.splice(this.array[i-1], 3, this.array[i-1] + this.array[i+1]);
        i--;
      };
    };
    return this.array[0];
  };
};

module.exports = SmartCalculator;
