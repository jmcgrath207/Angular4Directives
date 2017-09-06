import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {



  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defautColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
  }

  @Input() defautColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defautColor;


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = this.defautColor;
  }



}
