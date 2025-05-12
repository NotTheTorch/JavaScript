class Car
{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails)
    {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo()
    {
        const trunkStatus = this.isTrunkOpen? "Opened" : "Closed";
        console.log(`${this.#brand} ${this.#model} ${this.speed} km/h ${trunkStatus}`);
    }

    go()
    {
        if(this.speed+5 <= 200)
        {
            this.speed += 5;
            this.displayInfo();
        }
        else
        {
            console.log('Reached Max Speed');
        }

    }

    brake()
    {
        if(this.speed-5 >= 0)
            {
                this.speed -= 5;
                this.displayInfo();
            }
            else
            {
                console.log('Reached Min Speed');
            }
    }

    openTrunk()
    {
        if(this.speed == 0)
        {
            this.isTrunkOpen = true;
            this.displayInfo();
        }
        else
            console.log('Cannot Open trunk while moving');

    }

    closeTrunk()
    {
        this.isTrunkOpen = false;
        this.displayInfo();
    }
}

class RaceCar extends Car
{
    acceleration;
    
    constructor(carDetails)
    {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }


    go()
    {
        this.speed += this.acceleration;
        if(this.speed > 300)
            this.speed = 300;
        this.displayInfo();
    }

    openTrunk()
    {
        console.log('Race cars do not have trunk');
    }

    closeTrunk()
    {
        console.log('Race cars do not have trunk');
    }
}

const car1 = new Car({brand:'Toyota',model:'Corolla', speed:0, isTrunkOpen:false});
const car2 = new Car({brand:'Tesla', model:'Model-3', speed:0, isTrunkOpen:true});
const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
  });

raceCar.go();
raceCar.openTrunk();
raceCar.closeTrunk();
