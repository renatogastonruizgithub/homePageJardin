import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Box from '@mui/material/Box';
import { Icon, Style } from "ol/style";
const MapComponent = ({ address }) => {

    const [coordinates, setCoordinates] = useState("");
    const mapRef = React.createRef();
    const [isLoading, setIsLoading] = useState(true); // Nuevo estado para controlar la carga

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
                if (response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        if (address) {
            fetchData();
        }
    }, [address]);

    useEffect(() => {
        if (!isLoading && coordinates) {
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM()
                    }),
                    createMarkerLayer(coordinates)
                ],
                view: new View({
                    center: fromLonLat([coordinates.lng, coordinates.lat]),
                    zoom: 18
                })
            });

            return () => map.dispose();
        }
    }, [isLoading, coordinates]);


    const createMarkerLayer = (coords) => {
        const marker = new Feature({
            geometry: new Point(fromLonLat([coords.lng, coords.lat]))
        });

        const markerStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                src: "https://openlayers.org/en/latest/examples/data/icon.png"
            })
        });

        marker.setStyle(markerStyle);

        const vectorSource = new VectorSource({
            features: [marker]
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource
        });

        return vectorLayer;
    };



    return (
        <>


            <Box sx={{ display: "grid", placeItems: "center", height: { xs: "300px", md: "400px", lg: "400px" } }}>

                {isLoading ? (
                    <p>Cargando el mapa...</p>
                ) : (
                    <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
                )}
            </Box>

        </>
    )
}

export default MapComponent 