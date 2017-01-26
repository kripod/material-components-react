import React from 'react';
import Typography from '../../typography';

const TypographyDemo = () =>
  <div>
    <h1>Typography</h1>

    {[false, true].map(adjustMargin =>
      <div key={adjustMargin}>
        <h2>{adjustMargin ? 'With' : 'Without'} margin adjustments</h2>

        <section>
          <h1><Typography adjustMargin={adjustMargin} display4>Display 4</Typography></h1>
          <h1><Typography adjustMargin={adjustMargin} display3>Display 3</Typography></h1>
          <h1><Typography adjustMargin={adjustMargin} display2>Display 2</Typography></h1>
          <h1><Typography adjustMargin={adjustMargin} display1>Display 1</Typography></h1>
          <h1><Typography adjustMargin={adjustMargin} headline>Headline</Typography></h1>

          <h2>
            <Typography adjustMargin={adjustMargin} title>
              Title <Typography adjustMargin={adjustMargin} caption>Caption.</Typography>
            </Typography>
          </h2>

          <h2><Typography adjustMargin={adjustMargin} subheading2>Subheading 2</Typography></h2>
          <h2><Typography adjustMargin={adjustMargin} subheading1>Subheading 1</Typography></h2>

          <p>
            <Typography adjustMargin={adjustMargin} body1>
              Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </Typography>
          </p>

          <aside>
            <Typography adjustMargin={adjustMargin} body2>
              Body 2 text, calling something out.
            </Typography>
          </aside>
        </section>
      </div>,
    )}
  </div>
;

export default TypographyDemo;
