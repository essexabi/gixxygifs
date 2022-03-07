import React, { useContext } from "react";
import { Route } from "wouter";
import "./Styles/App.scss";

import { ModeContextProvider } from "context/ModeContext";
import { GifContextProvider } from "context/GifContext";
import Home from "pages/Home";
import Search from "pages/Search";
import Detail from "pages/Detail";
import NavBar from "components/NavBar";

function App() {
    return (
        <div className="App">
            <GifContextProvider>
                <ModeContextProvider>
                    <NavBar />

                    <section className="App-content">
                        <Route component={Home} path="/" />
                        <Route component={Home} path="/home" />
                        <Route component={Search} path="/search/:keyword" />
                        <Route component={Detail} path="/gif/:id" />
                    </section>
                </ModeContextProvider>
            </GifContextProvider>
        </div>
    );
}

export default App;
