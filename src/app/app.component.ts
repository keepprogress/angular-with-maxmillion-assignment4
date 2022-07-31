import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  addNewEvenNumber(num: { emittedNum: number }) {
    this.evenNumbers.push({
      type: 'numObj',
      emittedNum: num.emittedNum
    });
    console.log('evenNumberList :' + this.evenNumbers);
  }

  addNewOddNumber(num: { emittedNum: number }) {
    this.oddNumbers.push({
      type: 'numObj',
      emittedNum: num.emittedNum
    });
    console.log('oddNumberList :' + this.oddNumbers);
  }
  printNumber(num: { emittedNum: number }) {
    console.log(num.emittedNum);
  }
}
