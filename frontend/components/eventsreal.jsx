import React, { useEffect, useState } from 'react';

const EventsReal = () => {
    
    const [events, setEvents] = useState([]);

    const lat = 40.7128;
    const long = -74.0060;

    useEffect(() => {
        const fetchEventChart = async() => {
            try{ 
                console.log('testing')
                const response = await fetch('http://localhost:3000/api/events', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify({ lat, long }),
                });
                if (!response.ok) {
                    throw new Error('Network response is not ok')
                }
                let jsonResponse = await response.json();

                console.log(jsonResponse);
                setEvents([jsonResponse.data.table.rows[0].cells[0]]);

                
            } catch (error) {
                console.log(error);
            }
        };
        fetchEventChart();
    }, []);

    return (
        <div className="eventsreal">
          <h3>Events</h3>
          <ul>
            {events.map((event, index) => (
              <li key={index}>{JSON.stringify(event)}</li>
            ))}
          </ul>
        </div>
      );
    };

export default EventsReal;