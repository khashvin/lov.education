import React from 'react';

import './MapSection.css'

const MapSection = () => {
  return (
    <section className="contact-map-section">
      <div className="auto-container">
        <div className="map-outer">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="100%" height="500" id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Literacy%20of%20Virtue&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}>
              </iframe>
              <a href="#"></a></div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection;