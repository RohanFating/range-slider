import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {

  @ViewChild('sliberBar') public sliderBar;
  @Input() public min: number = 0;
  @Input() public max: number = 200;

  public currentPositionWitdth: String = '0%';
  public currentAmount: String = '0';
  private isMouseDown: Boolean = false;

  constructor() { }

  /**
   * Lifecycle Hook ng On Init
   */
  public ngOnInit() {
    this.calculateInitialPositions();
  }

   /**
   * Lifecycle Hook ng On Init
   */
  public ngOnChanges() {
    this.calculateInitialPositions();
  }

  /**
   * Handles Logic behind range slider seek
   * @param event
   */
  public onSliderClick( event: any ): void {
       const boundedRect: any = this.sliderBar.nativeElement.getBoundingClientRect();
       const clientWidth: any = this.sliderBar.nativeElement.clientWidth / 100;
       const amountMultiplier: any =  this.getAmountMultiplier();
       const amount: Number = Number( ( event.x - boundedRect.x ) / clientWidth );
       if ( amount >= 0 ) {
        this.currentAmount = Number( Number ( amount > 100 ? '100' : amount ) * amountMultiplier ).toFixed();
        this.currentPositionWitdth = amount < 100 ? `${amount}%` : '100%';
       }
  }

  /**
   * Calculate multipler as per max value
   */
  private getAmountMultiplier(): Number {
    const localMax: any = this.max;
     return localMax / 100;
  }

  /**
   * Calculate multipler as per max value
   */
  private calculateInitialPositions(): void {
    const amountMultiplier: any =  this.getAmountMultiplier();
   this.currentAmount = `${this.min}`;
   const seekPos: number = this.min / (this.max / 100 );
   this.currentPositionWitdth =  seekPos < 100 ? `${seekPos}%` : '100%';
  }
}
