import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortPromptComponent } from './short-prompt.component';

describe('ShortPromptComponent', () => {
  let component: ShortPromptComponent;
  let fixture: ComponentFixture<ShortPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
