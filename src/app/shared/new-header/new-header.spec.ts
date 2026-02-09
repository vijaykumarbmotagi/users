import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeader } from './new-header';

describe('NewHeader', () => {
  let component: NewHeader;
  let fixture: ComponentFixture<NewHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
