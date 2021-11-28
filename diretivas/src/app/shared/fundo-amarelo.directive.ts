import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'  /* p para aplicar so para paragrafo */
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    /* console.log(this.elementRef) */
   /*  this._elementRef.nativeElement.style.backgroundColor = 'yellow'; */   /*  desaconselhavel por vulnerabilidade */
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow'); /* modo più seguro */
  }

}
