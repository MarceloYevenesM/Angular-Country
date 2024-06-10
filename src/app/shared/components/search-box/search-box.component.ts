import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder = "";

  /* Va estar emitiendo strings */
  @Output()
  public onValue = new EventEmitter<string>();

  /* Metodo para recibir la info */
  emitValue(value:string):void{
    this.onValue.emit(value); //Emito el valor capturado
  }

}
