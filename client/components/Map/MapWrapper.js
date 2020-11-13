import React, { forwardRef } from 'react'

const MapWrapper = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <ReactMapGL
      ref={ref}
      {...props}
    >
      {children}
    </ReactMapGL>
  );
});

export default MapWrapper
