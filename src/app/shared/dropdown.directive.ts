import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    @HostBinding('class.show') isShow = false;
    @HostBinding('class.hide') isHide = true;
    //@HostBinding('class.fade') isFade = true;
    modal = document.querySelector('.modal');
    
    constructor(private elRef: ElementRef,
        private renderer: Renderer2) { }
        
    @HostListener('click', ['$event']) toggleOpen(event: MouseEvent) {
        if (window.matchMedia("(max-width: 991px)").matches) {
            const menu = this.elRef.nativeElement;
            this.isOpen = menu.contains(event.target) ? !this.isOpen : false;
            this.isHide = menu.nextElementSibling.classList.toggle('hide');
        }
    }

}