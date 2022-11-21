interface IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;
  turnOn(): void;
}

class Phone implements IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;
  constructor(price: number, electroType: string, manufacturer: string) {
    this.electroType = electroType;
    this.manufacturer = manufacturer;
    this.price = price;
  }
  turnOn(): void {
    console.log(
      `The ${this.electroType} manufacturer is ${this.manufacturer} and it costs ${this.price} `
    );
  }
}
class ElectricSaw implements IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;
  constructor(price: number, electroType: string, manufacturer: string) {
    this.electroType = electroType;
    this.manufacturer = manufacturer;
    this.price = price;
  }
  turnOn(): void {}
}

function getElectro(phone: Phone) {
  console.log(phone.price);
  console.log(phone.electroType);
  console.log(phone.manufacturer);
  phone.turnOn();
}
const phone = new Phone(1300, "Mobile Phone", "iPhone");
getElectro(phone);