import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage2ScreenComponent } from './subpage2-screen.component';

describe('Subpage2ScreenComponent', () => {
  let component: Subpage2ScreenComponent;
  let fixture: ComponentFixture<Subpage2ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage2ScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpage2ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
