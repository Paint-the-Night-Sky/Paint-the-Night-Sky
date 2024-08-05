import React, { useEffect } from 'react';

const Satellite = () => {
  useEffect(() => {
    const loadLeaflet = async () => {
      const [leafletCss, leafletJs] = await Promise.all([
        loadCss('https://unpkg.com/leaflet/dist/leaflet.css'),
        loadScript('https://unpkg.com/leaflet/dist/leaflet.js')
      ]);

      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map).openPopup();
    };

    loadLeaflet();
  }, []);

  const loadCss = (href) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  return (
    <div className="satellite">
      <h3>Satellite</h3>
      <div id="map" style={{ height: '150px', width: '100%' }}></div>
    </div>
  );
};

export default Satellite;