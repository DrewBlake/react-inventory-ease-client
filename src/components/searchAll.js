import React from 'react';

export default function SearchAll(props) {
    const autos = props.autos.map((auto, index) => (
            <h3 key={index}>
                {auto.year} {auto.make} {auto.model} {auto.mileage}          
            </h3>
    ));
       
    return(
        
        <main role="main">
            <header role="banner">
                <h1>Access Granted!</h1> 
                <h3>Search for existing vehicle or vehicles</h3>
                <h3>Add new inventory</h3>    
            </header>
            <section>
                <header>
                    <h2>Search Entire Inventory</h2>
                    <h3>Will list all vehicles and associated info for 
                        entire dealership stock
                    </h3>               
                </header>
                <button onClick={()=>props.displayAll()}>Search All</button>
                {props.isShow && <div>{autos}</div>}
            </section>           
            
        </main>
    );
}