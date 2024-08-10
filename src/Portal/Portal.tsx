import React, { useContext, useEffect } from "react";
import PortalContext from "./PortalContext";

interface PortalProps {
    children: React.ReactNode,
    name: string
}
const Portal: React.FC<PortalProps> = ({ children, name }) => {
    const { addComponent } = useContext(PortalContext);
    useEffect(() => {
        addComponent({ name, component: children });
    }, [children, name]);

    return null;
}

export default Portal;