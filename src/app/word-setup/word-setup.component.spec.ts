import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSetupComponent } from './word-setup.component';

describe('WordSetupComponent', () => {
  let component: WordSetupComponent;
  let fixture: ComponentFixture<WordSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});