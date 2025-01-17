import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparticipantComponent } from './listeparticipant.component';

describe('ListeparticipantComponent', () => {
  let component: ListeparticipantComponent;
  let fixture: ComponentFixture<ListeparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeparticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
