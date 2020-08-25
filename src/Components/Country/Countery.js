import React from 'react';
import './Countery.css'
const Countery = (props) => {
    //console.log(props.name);
    //console.log(props.count);
    const { name, alpha2Code, population, region, flag, callingCodes, capital } = props.count;
   const addCountry = props.addCountry;

    //console.log(props);
    return (
        <div className='counery-component'>
            <div className='countery-flag'>
                <img src={flag} alt="" />
            </div>
            <div className='countery-inforamtion'>
                <h4>Country Name: {name}</h4>
                <p><small>Coutry Code : {alpha2Code} RajDahni{capital}</small></p>
                <p><small>Population : {population}</small></p>
                <p><small>Call Code : {callingCodes}</small></p>
                <small>Region : {region}</small>
                <div className="add-country-sec">
                    <button className="add-country-btn" onClick={()=>addCountry(props.count)}>Add Country</button>
                </div>
            </div>
        </div>
    );
};

export default Countery;
