import { CounterComponent } from './counter.component';
import { TestBed } from '@angular/core/testing';
describe("CounterComponent", ()=>{
    beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [CounterComponent],
          }).compileComponents();
        });

    it ('Se debe crear el componente Counter',() =>{
        const fixture= TestBed.createComponent(CounterComponent);
    
        expect(fixture.componentInstance).toBeTruthy();
    
    })

    it ('Se debe crear el texto counter:23',() =>{
        const fixture= TestBed.createComponent(CounterComponent);
        fixture.detectChanges();

        const compiled:HTMLElement=fixture.nativeElement
        
        expect(compiled.querySelector("h1")?.textContent).toEqual("contador: 23");
    
    })
    
    it('Valor inicial del contador es 23',()=>{

        const counter = new CounterComponent();

        expect(counter.contador).toBe(23);
    });
});