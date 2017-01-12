import Button from '@react-material/button';
import React from 'react';

const ButtonDemo = () =>
  <div>
    <h1>Button</h1>

    {Object.entries({
      light: '',
      dark: 'mdc-theme--dark'
    }).map(([themeName, themeStyleClassName], i) =>
      <div key={i}>
        <h2>{themeName} theme</h2>
        <section className={themeStyleClassName}>
          {[true, false].map((isEnabled, j) =>
            <fieldset key={j} disabled={!isEnabled}>
              <legend>{isEnabled ? 'Enabled': 'Disabled'}</legend>

              <Button>Default</Button>
              <Button raised>Raised</Button>
              <Button dense>Dense Default</Button>
              <Button dense raised>Dense Raised</Button>
              <Button compact>Compact</Button>
              <Button compact raised>Compact Raised</Button>
              <Button primary>Default with Primary</Button>
              <Button raised primary>Raised with Primary</Button>
              <Button accent>Default with Accent</Button>
              <Button raised accent>Raised with Accent</Button>
            </fieldset>
          )}
        </section>
      </div>
    )}
  </div>
;

export default ButtonDemo;
