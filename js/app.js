// function Add(selector, number, step) {
//     this.btn = document.querySelector(selector);
//     this.number = number;
//     this.step = step;
//     this.btn.addEventListener('click', this.addElement.bind(this));
// }

// Add.prototype.addElement = function() {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     div.textContent = this.number;
//     this.number += this.step;
// }

// const newElement = new Add('button', 100, 5)

class Add {
  constructor(selector, number, step) {
    this.btn = document.querySelector(selector);
    this.number = number;
    this.step = step;
    this.btn.addEventListener('click', this.addElement);
  }
  addElement = () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = this.number;
    this.number += this.step;
  };
}

const newElement = new Add('button', 100, 5);
