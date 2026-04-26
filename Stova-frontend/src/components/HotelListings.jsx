import { useState } from "react";
import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import hotel1 from "@/assets/hero/hero1.jpg";

export default function HotelListings() {
    const hotels=[
        {
            "_id": "1",
            "name": "Sydney Harbour Hotel",
            "location": "Sydney, Australia",
            "rating": 4.8,
            "reviews": 1023,
            "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/84555265.jpg?k=ce7c3c699dc591b8fbac1a329b5f57247cfa4d13f809c718069f948a4df78b54&o=&hp=1",
            "price": 200,
            "description": "Stay at Sydney Harbour Hotel and wake up to stunning harbour views in one of Australia’s most iconic destinations. Starting at $200 per night, enjoy rooftop dining, modern facilities, and close proximity to Darling Harbour and Sydney’s vibrant nightlife. Ideal for couples and city adventurers.",
            "__v": 0
          },
    
        {
            "_id": "2",
            "name": "Milan Central Suites",
            "location": "Colombo, Sri Lanka",
            "rating": 4.5,
            "reviews": 670,
            "image": hotel1,
            "price": 140,
            "description": "Nestled in the fashion capital of Milan, Italy, Milan Central Suites combines style and comfort for an unforgettable stay. At $140 per night, enjoy proximity to the Duomo and Galleria Vittorio Emanuele II, making it perfect for shoppers and culture enthusiasts alike.",
            "__v": 0
        },
        {
            "_id": "3",
            "name": "Hotel 3",
            "location": "Kyoto,Japan",
            "rating": 4.8,
            "reviews": 1236,
            "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/384708999.jpg?k=dc054540001deea93902a52e62647ba3c134c2309b1064b2ca36240b17f137ba&o=&hp=1",
            "price": 150,
            "description": "Immerse yourself in Kyoto’s serene beauty at Elysée Retreat, a sanctuary of peace and tradition. Discover the charm of Japanese gardens, historic temples, and tea ceremonies, all just steps away. For $150 per night, indulge in authentic Kyoto hospitality, minimalistic elegance, and an unforgettable cultural experience tailored for nature lovers and tranquility seekers.",
            "__v": 0
        }
    ]

    const location=["All","Colombo","Tokyo","Kyoto","Bangkok","Singapore","Sydney","New York"]
    const [selectedLocation, setSelectedLocation] = useState("All");

    const handleSelectedLocation = (location) =>{
        setSelectedLocation(location);
    }

    const filteredHotels = selectedLocation === "All" ? hotels:hotels.filter((hotel)=>{
        return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase())
    })
  return (
    <section className ="px-8 py-8 lg:py-16">
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Trending hotels</h2>
            <p className="text-lg text-muted-foreground">
            Discover the most trending hotels worldwide for an unforgettable
            experience.
          </p>
        </div>
        <div className="flex items-center gap-4">
            {
                location.map((location,i)=>{
                    return(
                        <LocationTab
                            key={i}
                            selectedLocation={selectedLocation}
                            name={location}
                            onClick={handleSelectedLocation}
                        />
                    )
                })
            }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {filteredHotels.map((hotel)=>{
                return(
                    <HotelCard key={hotel._id} hotel={hotel}/>
                )
            })}
            
                
        </div>
        
    </section>
  )
}