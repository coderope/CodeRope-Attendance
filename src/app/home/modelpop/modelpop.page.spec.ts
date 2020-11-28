import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelpopPage } from './modelpop.page';

describe('ModelpopPage', () => {
  let component: ModelpopPage;
  let fixture: ComponentFixture<ModelpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelpopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
