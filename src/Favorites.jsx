import { useSelector, useDispatch } from "react-redux";
import { removeCars } from "./Action";
import { Heart } from "lucide-react";

function Favorites() {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state) => state.cars.card);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-4">Favorites</h2>
      {favoriteCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favoriteCars.map((car) => (
            <div key={car.id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 flex flex-col">
              <h1 className="text-xl font-bold mt-4 text-center">{car.name}</h1>
              <p className="text-gray-600 mt-2 text-center">{car.description}</p>
              <span onClick={() => dispatch(removeCars(car.id))} className="cursor-pointer">
                <Heart 
                  className="w-10 h-10 ml-[150px] mt-[50px]" 
                  color="red"
                  fill="red" // Favoritdagi mashinalarning yuragi to'liq bo'ladi
                />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">Hali hech qanday mashina yo‘q</p>
      )}
    </div>
  );
}

export default Favorites;
