import { useState } from "react";
export default function According ({
    term, 
    code,
    title,
    credits,
    description
}) {

    const [IsActive, setIsActive] = useState(false);
    return (
        <>
        Term: {term}

        <div onClick = {() => setIsActive(!IsActive)}>
           {code}
           {title}
           {credits}
          <div>{IsActive ? '^' : '*'}</div> 
        </div> 

        {IsActive && <div>{description}</div>}
        </>
    )
}