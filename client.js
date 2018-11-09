// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Location,
  Surface
} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  
  const myCylinderSurface = new Surface(
    1200, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  r360.renderToSurface(
    r360.createRoot('PeriodicTable', { /* initial props */ }),
  //  r360.getDefaultSurface()
  myCylinderSurface
  );

 const loc1 =  new Location([0, -5, -3]);

  r360.renderToLocation(
    r360.createRoot('WorldView', {}),
    loc1,
  );

  // Load the initial environment
  //r360.compositor.setBackground(r360.getAssetURL('360_0053.jpg'), {format: '3DLR'});
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  r360.runtime.executor._worker.addEventListener('message', (e) => onMessage(e, r360));
}

function onMessage(e, r360) {
  
  if(e.data.type === 'newComponent') {
    debugger;
 //    r360.renderToLocation(
 //     r360.createRoot('ModelView', {}),
 //     new Location([0, -2, -1]),
 //   );
  }
}

window.React360 = {init};
