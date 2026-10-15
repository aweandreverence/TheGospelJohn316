const { createRequire } = require('module');

// Exercise the target contract between core and preset-env, not browser exclusions.
test('core and preset-env accept the Opera Mobile target', () => {
  for (const consumer of ['@babel/core', '@babel/preset-env']) {
    const consumerRequire = createRequire(require.resolve(consumer));
    const getTargets = consumerRequire('@babel/helper-compilation-targets').default;
    expect(() => getTargets({ opera_mobile: '80' })).not.toThrow();
  }
});
