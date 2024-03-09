import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrationDocsProcessComponent } from './cration-docs-process.component';

describe('CrationDocsProcessComponent', () => {
  let component: CrationDocsProcessComponent;
  let fixture: ComponentFixture<CrationDocsProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrationDocsProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrationDocsProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
