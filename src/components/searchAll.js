import React from 'react';

export default function SearchAll(props) {
    const autos = props.autos.map((auto, index) => (
            <div key={index}>
                <h3>{auto.year} {auto.make} {auto.model} -- Miles: {auto.mileage}</h3>
                <h4>Id: {auto.id} -- Parking Space: {auto.parkingSpace}</h4>  
            </div>
    ));
       
    return(
        
        <main role="main">
            <header role="banner">
                <h2>Access Granted!</h2> 
                <h3>Search for existing vehicles</h3>
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