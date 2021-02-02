import {Car} from './components/Car.js'


const myCar = new Car('Volvo', 30, 5, 0, 30)

myCar.carDetails()

myCar.engineON()

myCar.drive(100)
myCar.drive(100)
myCar.drive(100)
myCar.drive(100)
myCar.drive(100)
myCar.drive(50)
myCar.drive(200)

myCar.carDetails()

myCar.fillup(10)
myCar.fillup(7)

myCar.carDetails()

myCar.fillup(15)

myCar.carDetails()
