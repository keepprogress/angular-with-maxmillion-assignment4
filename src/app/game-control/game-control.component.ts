import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitOddNumber = new EventEmitter<{emittedNum: number}>();
  @Output() emitEvenNumber = new EventEmitter<{emittedNum: number}>();
  @Output() numPrinted = new EventEmitter<{emittedNum: number}>();
  incrementingNumber = 0;
  interval: number;

  constructor() { }

  ngOnInit(): void {
  }
  handlingStartGame() {
    this.interval = setInterval(() => {
      this.incrementingNumber++;
      this.printCountingNum();
      console.log(this.incrementingNumber);
    }, 1000);
  }

  handlingStopGame() {
    clearInterval(this.interval);
  }

  printCountingNum() {
    if (this.incrementingNumber % 2 === 0) {
      console.log('Even Number');
      this.emitEvenNumber.emit({emittedNum: this.incrementingNumber});
    } else {
      console.log('Odd Number');
      this.emitOddNumber.emit({emittedNum: this.incrementingNumber});
    }
    console.log('printCountNum called!');
    this.numPrinted.emit({emittedNum: this.incrementingNumber});
  }
}
