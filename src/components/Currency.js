import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert bg-success'> Currency {
            <select className='bg-success bg-gradient' name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="£">Pound(£)</option>
                <option value="₹">Ruppee(₹)</option>
                <option value="€">Euro(€)</option>
                <option value="CAD">Dollar($)</option>
            </select>
        }
        </div>
    );
};

export default Currency;