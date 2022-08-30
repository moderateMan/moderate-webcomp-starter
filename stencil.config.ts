import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'webcomp-starter',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      generateTypeDeclarations: true,
    },
  ],
};
