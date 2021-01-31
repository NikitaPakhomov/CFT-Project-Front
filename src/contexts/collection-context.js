import { createContext } from 'react';

const CollectionContext = createContext({
    checked: 0,
    inc: () => { },

})
CollectionContext.displayName = 'CollectionInfoContext';


export default CollectionContext;