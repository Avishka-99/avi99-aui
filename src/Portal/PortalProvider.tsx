import React, { useState } from "react";
import PortalContext from "./PortalContext";
interface PortalProviderProps {
    children: React.ReactNode;
}
interface Element {
    name: string;
    component: React.ReactNode;
}
const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
    const [components, setComponents] = useState<Record<string, React.ReactNode>>({});
    const addComponent = ({ name, component }: Element) => {

        setComponents(prevComponents => ({
            ...prevComponents,
            [name]: component
        }));
    }
    return (
        <PortalContext.Provider value={{ addComponent }}>

            <React.Fragment>
                {children}
            </React.Fragment>
            <React.Fragment>
                {Object.entries(components).map(([_name, Component]) => (
                    Component
                ))}
            </React.Fragment>
        </PortalContext.Provider>
    );

}
export default PortalProvider;