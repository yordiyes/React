import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

function Alert({children}: Props){
    return <div>
        Alert, {children}
    </div>
}

export default Alert;