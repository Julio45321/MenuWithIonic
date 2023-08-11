import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariscosPage } from './mariscos.page';

describe('MariscosPage', () => {
  let component: MariscosPage;
  let fixture: ComponentFixture<MariscosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MariscosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
