import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addCars, removeCars } from "./Action";

const cars = [
    { id: 1, name: "Tesla Model S", description: "Tezkor va zamonaviy elektromobil." },
    { id: 2, name: "Mercedes CLS 63", description: "Kuchli va sport avtomobil." },
    { id: 3, name: "Toyota Camry", description: "Ishonchli va tejamkor sedan." }
];

function Home() {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state) => state.cars.card);

  const toggleFavorite = (car) => {
    const isFavorite = favoriteCars.some(favCar => favCar.id === car.id);

    if (isFavorite) {
      dispatch(removeCars(car.id));
    } else {
      dispatch(addCars(car));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cars.map((car) => {
        const isFavorite = favoriteCars.some(favCar => favCar.id === car.id);

        return (
          <div key={car.id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 flex flex-col">
            <h1 className="text-xl font-bold mt-4 text-center">{car.name}</h1>
            <p className="text-gray-600 mt-2 text-center">{car.description}</p>
            <span onClick={() => toggleFavorite(car)} className="cursor-pointer">
              <Heart 
                className="w-10 h-10 ml-[150px] mt-[50px]" 
                color="red"
                fill={isFavorite ? "red" : "none"} // Yurak to'liq yoki bo'sh bo'lishi
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
