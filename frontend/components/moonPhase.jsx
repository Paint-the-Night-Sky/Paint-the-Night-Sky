import React, { useEffect, useState } from 'react';

const MoonPhase = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchMoonPhase = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/moonChart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        lat: 40.7128,
                        long: -74.0060
                    })
                });

                const data = await response.json();
                setImageUrl(data.data.imageUrl);
            } catch (err) {
                console.error('Fetch error:', err);
            }
        };
        fetchMoonPhase();
    }, []);

    return (
        <div className="moonphase">
            <h3>MoonPhase</h3>
            {imageUrl ? (
                <div>
                    <img src={imageUrl} />
                </div>
            ) : (<p>Loading...</p>)}
        </div>
    );
};

export default MoonPhase;
