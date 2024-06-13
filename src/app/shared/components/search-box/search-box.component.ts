import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  /* Subject es un tipo especial de observable  */
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = "";

  @Input()
  public initalValue: string = "";

  /* Va estar emitiendo strings */
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
    .pipe(
      /* Si el usaurio deja de emitir valores por 1 segundo ahì llamo al suscribe */
      debounceTime(300) //Cuanto tiempo esperar 1 segundo antes de hacer la emision
    )
    .subscribe(value => {
      this.onDebounce.emit(value) //Emitir el debounce
    });
  }

  /* Cuando el componente se destruye */
  ngOnDestroy(): void {
    /* Se implementa para suscripciones del onit excepto los services(https) */
    this.debouncerSuscription?.unsubscribe(); //Romper las suscripciones para liberar memoria

  }

  /* Metodo para recibir la info */
  emitValue(value: string): void {
    this.onValue.emit(value); //Emito el valor capturado
  }

  onKeyPress(searchTerm: string) {
    /* Emision segun el observable */
    this.debouncer.next( searchTerm)
  }

}
