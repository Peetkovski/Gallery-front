import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFormListComponent } from './gallery-form-list.component';

describe('GalleryFormListComponent', () => {
  let component: GalleryFormListComponent;
  let fixture: ComponentFixture<GalleryFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
