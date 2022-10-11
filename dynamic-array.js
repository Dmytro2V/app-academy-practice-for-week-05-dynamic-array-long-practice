class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Your code here
    if (index >= 0 && index < this.length) return this.data[index]
    else return undefined;
  }

  push(val) { // O(1) S(1)
    // Your code here
    if (this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++
    return this.length;
  }


  pop() { // O(1) S(1)
    // Your code here
    if (this.length > 0) this.length--;
    return this.data[this.length];
  }

  shift() { // O(n), S(1)
    // Your code here
    if (this.length === 0) return     
    let removed = this.data[0]
    if (this.length === 1) this.data = []
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1] 
    }
    this.length--

    return removed;
  }

  unshift(val) {// O(n), S(1)
    // Your code here
    if (this.length === this.capacity) this.resize();
    this.length++
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1] 
    }
    this.data[0] = val;    
    return this.length;
  }

  indexOf (val) { 
    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;       
    }
    return - 1;
  }

  resize () {
    // Your code here
    let tmp = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
      tmp[i] = this.data[i];
    }        
    this.capacity = this.capacity * 2 
    this.data = new Array(this.capacity);
        
    for (let i = 0; i < this.length; i++) {
      this.data[i] = tmp[i];
    }    

  }

}


module.exports = DynamicArray;