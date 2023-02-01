import React from 'react';

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Ship Technology Industrial Consultancy, Center for Innovation Technology Transfer & Industrial Collaboration, CITTIC, CUSAT, Kochi, Kerala 682022&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
        {/* <a href="https://2yu.co">2yu</a> */}
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 100%;
          width: 100%;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Map;
