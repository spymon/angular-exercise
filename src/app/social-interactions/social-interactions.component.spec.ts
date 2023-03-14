import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInteractionsComponent } from './social-interactions.component';

describe('SocialInteractionsComponent', () => {
  let component: SocialInteractionsComponent;
  let fixture: ComponentFixture<SocialInteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialInteractionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
