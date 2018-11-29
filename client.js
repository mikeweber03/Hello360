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
    1000, /* width */
    700, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );
  
  r360.renderToSurface(
    r360.createRoot('PeriodicTable', { /* initial props */ }),
  //  r360.getDefaultSurface()
  myCylinderSurface
  );


  
  const leftPanel = new Surface(650, 450, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(0.0, 0.1);
  
  r360.renderToSurface(
    r360.createRoot('SelectedElement'),
    leftPanel,
  );
  
//  const bohrPanel = new Surface(256, 256, Surface.SurfaceShape.Flat);
//  bohrPanel.setAngle(1.2, 0.2);
  
//  r360.renderToSurface(
//    r360.createRoot('ViewBohrDiagram'),
//    bohrPanel,
//  );
  


 const loc1 =  new Location([0, -1.5, -3.8]);

  r360.renderToLocation(
    r360.createRoot('WorldView', {}),
    loc1,
  );


  // Load the initial environment
  //r360.compositor.setBackground(r360.getAssetURL('360_0053.jpg'), {format: '3DLR'});
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

 // r360.runtime.executor._worker.addEventListener('message', (e) => onMessage(e, r360));
}

//function onMessage(e, r360) {
  
  //if(e.data.type === 'newComponent') {
  
 //    r360.renderToLocation(
 //     r360.createRoot('ModelView', {}),
 //     new Location([0, -2, -1]),
 //   );
  //}
//}

window.React360 = {init};
