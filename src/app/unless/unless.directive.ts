import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // setter method needs to be named the same as the structal directivie ex. *appUnless
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {

  }

}
