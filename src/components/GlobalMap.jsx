import React, { memo } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import { MapPin } from 'lucide-react';

const geoUrl = "/features.json"; // Locally served TopoJSON

const GlobalMap = ({ chapters, events, cities, onMarkerClick }) => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'transparent' }}>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 140 }}
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={5}>
                    {/* Base World Map */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#1a1a1a"
                                    stroke="rgba(255, 255, 255, 0.1)"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#222", outline: "none" },
                                        pressed: { fill: "#111", outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Render Active Chapters */}
                    {chapters && chapters.map(({ slug, city, coordinates, status }) => (
                        <Marker key={slug} coordinates={coordinates} onClick={() => onMarkerClick && onMarkerClick(slug)} style={{ cursor: 'pointer' }}>
                            <circle
                                r={6}
                                fill="var(--color-accent)"
                                stroke="#fff"
                                strokeWidth={1.5}
                                data-tooltip-id="map-tooltip"
                                data-tooltip-content={`Active Chapter: ${city}`}
                            />
                            <circle r={12} fill="var(--color-accent)" opacity={0.3} className="animate-ping map-pulse" />
                        </Marker>
                    ))}

                    {/* Render Upcoming Events */}
                    {events && events.map((evt, idx) => (
                        <Marker key={`evt-${idx}`} coordinates={evt.coordinates} onClick={() => onMarkerClick && onMarkerClick(evt.city)} style={{ cursor: 'pointer' }}>
                            <g transform="translate(-12, -24)">
                                <MapPin color="#4ade80" size={24} data-tooltip-id="map-tooltip" data-tooltip-content={`Upcoming Event: ${evt.title}`} />
                            </g>
                        </Marker>
                    ))}

                    {/* Render Emerging Cities */}
                    {cities && cities.filter(c => c.status === 'emerging').map(({ city, coordinates }, idx) => (
                        <Marker key={`emerge-${idx}`} coordinates={coordinates}>
                            <circle
                                r={4}
                                fill="#888"
                                stroke="#444"
                                strokeWidth={1}
                                data-tooltip-id="map-tooltip"
                                data-tooltip-content={`Emerging City: ${city} (No Host Yet)`}
                            />
                        </Marker>
                    ))}

                </ZoomableGroup>
            </ComposableMap>
            <Tooltip id="map-tooltip" style={{ backgroundColor: 'rgba(0,0,0,0.9)', color: 'white', borderRadius: '4px', zIndex: 100 }} />
        </div>
    );
};

export default memo(GlobalMap);
