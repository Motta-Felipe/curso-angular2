import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {


  @HostListener('mouseenter') onMouseOver() {
    /*     this._renderer.setStyle(
          this._elementRef.nativeElement,
          'background-color', 'yellow'
        ); */
    this._backgroundColor = 'yelolw'
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*     this._renderer.setStyle(
          this._elementRef.nativeElement,
          'background-color', 'white'
        ); */
    this._backgroundColor = 'white'
  }

  /*   @HostBinding('style.backgroundColor') _backgroundColor!: string */  /* se nao precisar manipular a variavel pode usar esse */

  @HostBinding('style.backgroundColor') get setColor() {  /*  */
    //codigo extra para manipular variabile
    return this._backgroundColor;
  }

  private _backgroundColor!: string;

  constructor(/* private _elementRef: ElementRef, private _renderer: Renderer2 */) { }

}
