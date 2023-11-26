import * as React from 'react';

import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const h1Tags = [];

  for (let i = 0; i < 50; i++) {
    h1Tags.push(
      <h1 key={i} className='font-sf-mono text-white'>
        This is homepage
      </h1>
    );
  }
  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <h1 className='font-sf-mono text-white'>{h1Tags}</h1>
      </main>
    </>
  );
}
