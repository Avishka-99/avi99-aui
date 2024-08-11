import React, { useContext, useEffect } from "react";
import PortalContext from "./PortalContext";
const Portal = ({ children, name }) => {
    const { addComponent } = useContext(PortalContext);
    useEffect(() => {
        addComponent({ name, component: children });
    }, [children, name]);
    return null;
};
export default Portal;
