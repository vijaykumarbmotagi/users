import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commands } from './commands';

describe('Commands', () => {
  let component: Commands;
  let fixture: ComponentFixture<Commands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Commands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
