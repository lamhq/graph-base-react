import React from 'react';

// the context that contain all identities in the app
// value is provided from Provider component
export const IdentitiesContext = React.createContext(null);

// the context contain the current identity used by the component
// value is provided from withIdentity hoc
export const IdentityContext = React.createContext(null);
