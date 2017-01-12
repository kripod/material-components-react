import Fab from '@react-material/fab';
import React from 'react';
import './FabDemo.css';

const FabDemo = () =>
  <div>
    <h1>FAB (Floating Action Button)</h1>

    <Fab className="fab-absolute">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    </Fab>

    <section>
      {[true, false].map(isEnabled =>
        <fieldset key={isEnabled} disabled={!isEnabled}>
          <legend>{isEnabled ? 'Enabled' : 'Disabled'}</legend>

          <Fab aria-label="Favorite">favorite_border</Fab>
          <Fab mini aria-label="Favorite">favorite_border</Fab>
          <Fab plain aria-label="Favorite">favorite_border</Fab>
          <Fab mini plain aria-label="Favorite">favorite_border</Fab>
        </fieldset>,
      )}
    </section>
  </div>
;

export default FabDemo;
