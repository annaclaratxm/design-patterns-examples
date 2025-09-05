// Produto
class Car {
    constructor() {
        this.brand = null;
        this.model = null;
        this.year = null;
        this.engine = null;
        this.color = null;
        this.gps = null;
        this.description = "Carro configurado"; // padrão genérico
    }

    showDetails() {
        console.log(`
    ${this.description}:
    Marca: ${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Motor: ${this.engine}
    Cor: ${this.color}
    GPS: ${this.gps !== null ? "GPS integrado" : "Não possui GPS"}
    `);
    }
}

// Builder
class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setColor(color) {
        this.car.color = color;
        return this;
    }

    addGPS() {
        this.car.gps = true;
        return this;
    }

    setDescription(description) {
        this.car.description = description;
        return this;
    }

    build() {
        return this.car;
    }
}

// Director → Carros pré-definidos
class CarDirector {
    static buildEconomyCar() {
        return new CarBuilder()
            .setBrand("Chevrolet")
            .setModel("Celta")
            .setYear(2005)
            .setEngine("1.0")
            .setColor("Prata")
            .setDescription("Carro Econômico")
            .build();
    }

    static buildSUVCar() {
        return new CarBuilder()
            .setBrand("Kia")
            .setModel("Sportage")
            .setYear(2024)
            .setEngine("2.0 Flex")
            .setColor("Branco")
            .addGPS()
            .setDescription("SUV Familiar")
            .build();
    }

    static buildLuxuryCar() {
        return new CarBuilder()
            .setBrand("BMW")
            .setModel("X6")
            .setYear(2025)
            .setEngine("3.0 Turbo")
            .setColor("Preto")
            .addGPS()
            .setDescription("Carro de Luxo")
            .build();
    }

    static buildElectricCar() {
        return new CarBuilder()
            .setBrand("BYD")
            .setModel("Han EV")
            .setYear(2025)
            .setEngine("Elétrico 517cv")
            .setColor("Azul")
            .addGPS()
            .setDescription("Carro Elétrico")
            .build();
    }

    static buildSportsCar() {
        return new CarBuilder()
            .setBrand("McLaren")
            .setModel("720S")
            .setYear(2025)
            .setEngine("4.0 V8 Biturbo")
            .setColor("Laranja")
            .addGPS()
            .setDescription("Carro Esportivo")
            .build();
    }
}

// Uso
const economy = CarDirector.buildEconomyCar();
const suv = CarDirector.buildSUVCar();
const luxury = CarDirector.buildLuxuryCar();
const electric = CarDirector.buildElectricCar();
const sports = CarDirector.buildSportsCar();

const custom = new CarBuilder().setBrand("Ford").setModel("Mustang").setYear(2025).setEngine("5.0 V8").setColor("Vermelho").addGPS().setDescription("Carro Personalizado").build();

economy.showDetails();
suv.showDetails();
luxury.showDetails();
electric.showDetails();
sports.showDetails();
custom.showDetails();