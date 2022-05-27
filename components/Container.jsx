import NavBar from "./NavBar";
import Head from "next/head";

const Container= (props) => {
    return(
        <div>
            <Head>
                <title>Mercado Tek</title>
                <link rel="icon" href="../favicon.ico"/>
            </Head>
            <NavBar/>
            <div className="font-mono">
                {props.children}
            </div>
        </div>

    )
}

export default Container;