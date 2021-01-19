import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMapComponent } from './sidebar-map.component';

describe('SidebarMapComponent', () => {
  let component: SidebarMapComponent;
  let fixture: ComponentFixture<SidebarMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
