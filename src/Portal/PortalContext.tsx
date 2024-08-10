import * as React from 'react'
interface Element {
    name: string;
    component: React.ReactNode;
}
const PortalContext = React.createContext({
    addComponent: (_element: Element) => { }
})
export default PortalContext;