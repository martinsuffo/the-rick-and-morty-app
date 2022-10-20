import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersHomeComponent } from './characters-home.component';

describe('CharactersHomeComponent', () => {
  let component: CharactersHomeComponent;
  let fixture: ComponentFixture<CharactersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
