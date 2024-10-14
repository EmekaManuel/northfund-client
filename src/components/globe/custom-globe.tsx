import { useCallback, useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { COUNTRIES_DATA } from "./countries";
import HEX_DATA from "./country-hex.json";
import type { GlobeMethods } from "react-globe.gl"; // Import the correct type from the library

const getRandomCountry = () => {
  return COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
};

export default function CustomGlobe() {
  const globeEl = useRef<GlobeMethods | null>(null); // Define the type explicitly
  const country = getRandomCountry();
  const [selectedCountry, setSelectedCountry] = useState({
    lat: country.latitude,
    lng: country.longitude,
    label: country.name,
  });
  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        const country = getRandomCountry();
        setSelectedCountry({
          lat: country.latitude,
          lng: country.longitude,
          label: country.name,
        });
      })();
    }, 3000); //Every 3 seconds
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    // globeEl.current.controls().autoRotate = true;
    // globeEl.current.controls().autoRotateSpeed = 0.2;

    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    if (globeEl.current) {
      globeEl.current.pointOfView(MAP_CENTER, 0);
    }
  }, [globeEl]);

  useEffect(() => {
    const countryLocation = {
      lat: selectedCountry.lat,
      lng: selectedCountry.lng,
      altitude: 1.5,
    };

    if (globeEl.current) {
      globeEl.current.pointOfView(countryLocation, 0);
    }
  }, [selectedCountry]);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      labelsData={[selectedCountry]}
      labelText={"label"}
      height={500}
      labelSize={1.6}
      animateIn={false}
      labelColor={useCallback(() => "white", [])}
      labelDotRadius={0.4}
      labelAltitude={0.05}
      hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(() => "#1b66b1", [])}
    />
  );
}
