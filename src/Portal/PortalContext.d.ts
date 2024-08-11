import * as React from 'react';
interface Element {
    name: string;
    component: React.ReactNode;
}
declare const PortalContext: React.Context<{
    addComponent: (_element: Element) => void;
}>;
export default PortalContext;
