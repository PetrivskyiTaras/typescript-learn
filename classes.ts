class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('car drive');
  }

  public startDrive(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrive();
car.honk();
