import React from 'react'
import Card from './Card';
function Tours ({tours})  {
  return (
    <div>
        <div>
            <h2>Plan with Us</h2>
        </div>
        <div>
           {
             tours.map( (tour) => {
                return <Card {...tour}> </Card>
             })
           }
        </div>
    </div>
  );
}

export default Tours;