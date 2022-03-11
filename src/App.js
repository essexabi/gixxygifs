import React from "react";
import { Route } from "wouter";
import "./Styles/App.scss";

import { ModeContextProvider } from "context/ModeContext";
import { GifContextProvider } from "context/GifContext";
import { CategoriesContextProvider } from "context/CategoriesContext";
import Home from "pages/Home";
import Search from "pages/Search";
import Detail from "pages/Detail";
import Category from "pages/Category";
import NavBar from "components/NavBar";

function App() {

    return (
        <div className="App">
            <GifContextProvider>
                <ModeContextProvider>
                    <NavBar />

                    <section className="App-content">
                    <CategoriesContextProvider>
                        <Route component={Home} path="/" />
                        <Route component={Home} path="/home" />
                        <Route component={Category} path="/category/:name" />
                        <Route component={Search} path="/search/:keyword" />
                        <Route component={Detail} path="/gif/:id" />
                    </CategoriesContextProvider>
                    </section>
                </ModeContextProvider>
            </GifContextProvider>
        </div>
    );
}

export default App;
