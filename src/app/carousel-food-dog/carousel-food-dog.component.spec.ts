import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFoodDogComponent } from './carousel-food-dog.component';

describe('CarouselFoodDogComponent', () => {
  let component: CarouselFoodDogComponent;
  let fixture: ComponentFixture<CarouselFoodDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFoodDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFoodDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
