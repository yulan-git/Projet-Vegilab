import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    @HostBinding('class.hide') isHide = true;
    //@HostBinding('class.show') isShow = false;


    constructor(private elRef: ElementRef,
        private renderer: Renderer2) { }
    
    @HostListener('click', ['$event']) toggleOpen(event: MouseEvent) {
        console.log(this.elRef.nativeElement);
        console.log(this.elRef.nativeElement.nextElementSibling);
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        this.isHide = this.elRef.nativeElement.nextElementSibling.classList.toggle('hide');
        //this.isShow = this.elRef.nativeElement.nextElementSibling ? !this.isShow : false;
    }

}