import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl"; // access map
import "maplibre-gl/dist/maplibre-gl.css"; // use map css
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(123.8854);
  const [lat] = useState(10.3157);
  const [zoom] = useState(10);
  const [API_KEY] = useState("ZQyqv6eWtI6zNE29SPDd");

  //get user entry
  const fetchEntry = async () => {
    try {
      //api endpoint
      const response = await fetch("http://localhost:8800/entry");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLng = position.coords.longitude;
        const currentLat = position.coords.latitude;

        new maplibregl.Marker({ color: "#00FF00" })
          .setLngLat([currentLng, currentLat])
          .setPopup(
            new maplibregl.Popup().setHTML("<h3>Your Current Location</h3>")
          )
          .addTo(map.current);
      });
    }

    // Fetch entry data and add markers
    fetchEntry().then((entries) => {
      entries.forEach((entry) => {
        const marker = new maplibregl.Marker({ color: "#FF0000" }) // Red marker for commissions
          .setLngLat([entry.entryLong, entry.entryLat])
          //display entry title and poster
          .setPopup(
            new maplibregl.Popup().setHTML(
              `<h3>${entry.entryTitle}</h3><p>${entry.username}</p>`
            )
          )
          .addTo(map.current);
      });
    });
  }, [API_KEY, lat, lng, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
