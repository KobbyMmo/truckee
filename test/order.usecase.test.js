let orderUsecase;
let packages;
beforeAll(() => {
    orderUsecase = new OrderUseCase();
});

beforeEach(() => {
    packages = [
        { "id": "123123", "weight": 345 },
        { "id": "123123213", "weight": 500 },
        { "id": "12312321", "weight": 300 }
    ]
});

describe("Price of order", () => {
    test('cost for load of 400 should be 4', () => {
        expect(orderUsecase.calculateCost(400)).toBe(4);
    });
    test('cost for load of 800 should be 6', () => {
        expect(orderUsecase.calculateCost(800)).toBe(6);
    });
})

describe("loadPackages", () => {
    test('there must be 2 trucks', () => {
        const trucks = orderUsecase.loadPackages(packages);
        expect(trucks.length).toBe(2);
    });
    test('first truck should have 845 ', () => {
        const trucks = orderUsecase.loadPackages(packages);
        const weightOfCargo = trucks[0].load.reduce((acc, obj) => {
            return acc + obj.weight;
        }, 0)
        expect(weightOfCargo).toBe(845);
    });
    test('second truck should have 300 ', () => {
        const trucks = orderUsecase.loadPackages(packages);
        const weightOfCargo = trucks[1].load.reduce((acc, obj) => {
            return acc + obj.weight;
        }, 0)
        expect(weightOfCargo).toBe(300);
    });

})

