// iife/cjs usage extends esm default export - so import it all
import directive, * as namedExports from '@/entry.esm';

// Attach named exports directly to directive. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(([exportName, exported]) => {
  if (exportName !== 'default') directive[exportName] = exported;
});

export default directive;
