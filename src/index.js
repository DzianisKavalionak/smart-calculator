class SmartCalculator {
  constructor(initialValue) {
    this.arr = [initialValue];
  }

  add(number) {
    this.arr.push('+', number);
    return this;
  }

  subtract(number) {
    this.arr.push('-', number);
    return this;
  }

  multiply(number) {
    this.arr.push('*', number);
    return this;
  }

  devide(number) {
    this.arr.push('/', number);
    return this;
  }

  pow(number) {
    this.arr.push('pow', number);
    return this;
  }


    calculateNumbers() {
      let len = this.arr.length;
      for(let i = len; i > 0; i--){
          if (this.arr[i] === 'pow'){
              this.arr.splice(i - 1, 3, Math.pow(this.arr[i -1], this.arr[i + 1]));
              i++;
          }
      }
      for(let i = 0; i < len; i++){
          if (this.arr[i] === '*' || this.arr[i] === '/'){
              if (this.arr[i] === '*'){
                  this.arr.splice(i - 1, 3, this.arr[i - 1] * this.arr[i + 1]);
                  i--;
              } else {
                  this.arr.splice(i - 1, 3, this.arr[i - 1] / this.arr[i + 1]);
                  i--;
              }
          }
      }
      for(let i = 0; i < len; i++){
          if (this.arr[i] === '+' || this.arr[i] === '-'){
              if (this.arr[i] === '+'){
                  this.arr.splice(i - 1, 3, this.arr[i - 1] + this.arr[i + 1]);
                  i--;
              } else {
                  this.arr.splice(i - 1, 3, this.arr[i - 1] - this.arr[i + 1]);
                  i--;
              }
          }
      }
      return this.arr[0];
  }

    valueOf() {
    return this.calculateNumbers();
  }
}

module.exports = SmartCalculator;
