import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDailog } from './post-dailog';

describe('PostDailog', () => {
  let component: PostDailog;
  let fixture: ComponentFixture<PostDailog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDailog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDailog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
