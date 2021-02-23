import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewappPage } from './newapp.page';

describe('NewappPage', () => {
  let component: NewappPage;
  let fixture: ComponentFixture<NewappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
