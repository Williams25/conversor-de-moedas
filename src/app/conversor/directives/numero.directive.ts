import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})

export class NumeroDirective {

  constructor(private el: ElementRef) { }

  /**
   * @param $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value
    let posDecimais = valor.indexOf('.')

    valor = valor.replace(/[\D]/g, '')

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.'
        + valor.substr(posDecimais)
    }

    $event.target.value = valor
    // this.onChange(valor)
  }
}
