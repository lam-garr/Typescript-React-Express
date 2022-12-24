import React from "react";

interface propInterface {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    data: string | undefined | null;
}

function Home(props:propInterface){
    return(
        <main>
            <button onClick={props.clickHandler}>click me!</button>
            {props.data && <h1>{props.data}</h1>}
        </main>
    )
}

export default Home;