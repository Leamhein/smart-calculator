class SmartCalculator {
  constructor(initialValue) {
    this.array = []; //make an array witch symbolized our equation
    this.array.push(initialValue);
  }

  add(number) { //if "+" add it with number to our array
    this.array.push("+");
    this.array.push(number);
    return this;
  }

  subtract(number) {
    this.array.push("-");
    this.array.push(number);
    return this;
  }

  multiply(number) {
    this.array.push("*");
    this.array.push(number);
    return this;
  }

  devide(number) {
    this.array.push("/");
    this.array.push(number);
    return this;
  }

  pow(number) {
    this.array.push("^");
    this.array.push(number);
    return this;
  }
  valueOf (array) {
    for (let i = this.array.length; i > 0; i--) {
      if (this.array[i] == "^") { //find our pow
        this.array.splice([i-1], 3, Math.pow(this.array[i-1], this.array[i+1])); //change the array elements to pow result
        i++;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "/") { // the same act with devide and so on...
        this.array.splice([i-1], 3, this.array[i-1] / this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "*") {
        this.array.splice([i-1], 3, this.array[i-1] * this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "-") {
        this.array.splice([i-1], 3, this.array[i-1] - this.array[i+1]);
        i--;
      };
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == "+") {
        this.array.splice([i-1], 3, this.array[i-1] + this.array[i+1]);
        i--;
      };
    };
    return this.array.join(""); // return first element of our array, which is  an answer
  };
};

module.exports = SmartCalculator;
