"use client";

import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import type { StoreBranch } from "@/data/stores";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom marker icon
const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background: ${isSelected ? '#8E5238' : '#171715'};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="transform: rotate(45deg);">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

// Component to change map view
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

interface InteractiveMapProps {
  stores: StoreBranch[];
  selectedStoreId?: string;
  onStoreSelect?: (storeId: string) => void;
  height?: string;
  className?: string;
}

export function InteractiveMap({
  stores,
  selectedStoreId,
  onStoreSelect,
  height = "500px",
  className = "",
}: InteractiveMapProps) {
  const [activeStore, setActiveStore] = useState<string | null>(selectedStoreId || null);

  // Calculate center of all stores
  const center: [number, number] = useMemo(() => {
    if (activeStore) {
      const store = stores.find((s) => s.id === activeStore);
      if (store) return [store.latitude, store.longitude];
    }
    
    const avgLat = stores.reduce((sum, s) => sum + s.latitude, 0) / stores.length;
    const avgLng = stores.reduce((sum, s) => sum + s.longitude, 0) / stores.length;
    return [avgLat, avgLng];
  }, [stores, activeStore]);

  const zoom = activeStore ? 15 : 10;

  const handleMarkerClick = (storeId: string) => {
    setActiveStore(storeId);
    onStoreSelect?.(storeId);
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full rounded-lg border-2 border-sand-border shadow-medium"
        style={{ zIndex: 1 }}
      >
        <ChangeView center={center} zoom={zoom} />
        
        {/* Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Store Markers */}
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.latitude, store.longitude]}
            icon={createCustomIcon(activeStore === store.id)}
            eventHandlers={{
              click: () => handleMarkerClick(store.id),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent-terracotta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal">
                      {store.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted">{store.area}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-xs text-charcoal-muted">
                  <div className="flex items-start gap-2">
                    <Navigation className="w-3 h-3 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{store.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 shrink-0" />
                    <p>{store.openingHours}</p>
                  </div>
                </div>

                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-terracotta hover:text-accent-sienna transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-ivory/95 backdrop-blur-sm border border-sand-border rounded-lg p-3 shadow-medium">
        <p className="text-xs font-medium text-charcoal mb-2">Lokasi Cabang</p>
        <div className="flex items-center gap-2 text-xs text-charcoal-muted">
          <div className="w-3 h-3 bg-charcoal rounded-full border-2 border-white shadow-sm" />
          <span>{stores.length} Cabang</span>
        </div>
      </div>
    </div>
  );
}
