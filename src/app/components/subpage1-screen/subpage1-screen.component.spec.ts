import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1ScreenComponent } from './subpage1-screen.component';

describe('Subpage1ScreenComponent', () => {
  let component: Subpage1ScreenComponent;
  let fixture: ComponentFixture<Subpage1ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage1ScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpage1ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
