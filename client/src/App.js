import React,{useEffect} from 'react';
import './App.css';


function App() {

    const [data, setData] = React.useState({});

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((response) => {
                setData(response.message)
                console.log(response)
            });
    }, []);


    return (<section style={{height: "100vh", width: "100%", backgroundColor: "#ff9000"}}
                     className={'d-flex align-items-center justify-content-center'}>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     className="animate-spin lex-shrink-0 w-12 h-12" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                        d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
                </svg>
            </div>
            <br/>
            <div className="row text-center">
                <div className="col-12">
                    <h3 className={'text-black font-weight-bold'}>Want to learn to code?</h3>
                    <h4>Grab a seat while page loads😉</h4>
                </div>
            </div>
        </section>
    );
}

export default App;
