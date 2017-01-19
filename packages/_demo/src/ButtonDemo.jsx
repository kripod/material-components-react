import React from 'react';
import Button from '../../button';

const ButtonDemo = () =>
  <div>
    <h1>Button</h1>

    <section>
      {[true, false].map(isEnabled =>
        <fieldset key={isEnabled} disabled={!isEnabled}>
          <legend>{isEnabled ? 'Enabled' : 'Disabled'}</legend>

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
        </fieldset>,
      )}
    </section>
  </div>
;

export default ButtonDemo;
