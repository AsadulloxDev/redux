export const addCars = (car) => ({
    type: "add_cars",
    payload: car
});

export const removeCars = (carId) => ({
    type: "remove_cars",
    payload: carId
});
