import HotelBlock from "./HotelBlock";

export interface Hotel {
  id: string;
  name: string;
  capacity: number;
  pool: boolean;
  spa: boolean;
  avgCost: number;
  skiIn: boolean;
}
async function getHotels() {
  const data = await fetch("https://snowtooth-hotel-api.fly.dev");
  return data.json();
}

export default async function Hotels() {
  const hotels = await getHotels();
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Hotel info</h1>
        <div className="flex justify-between items-center flex-wrap">
          {hotels.map((hotel: Hotel) => (
            <HotelBlock key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
    </main>
  );
}
