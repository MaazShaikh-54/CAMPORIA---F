import './count.css'
import { useEffect, useState } from 'react';
import Button from '../Button/button';
import { useParams } from 'react-router-dom';
import campsites from '../Search/campsiteData';

export default function Count() {
    const { id } = useParams();
    const campsite = campsites.find((camp) => camp.id === Number(id));

    const [person, setPerson] = useState(1);
    const [priceVal, setPriceVal] = useState(campsite.price);
    const [addDisabled, setAddDisabled] = useState(false);
    const [subDisabled, setSubDisabled] = useState(true);

    const addPerson = () => {
        if (person === 5) {
            setAddDisabled(true);
            return;
        }
        const newPersonCount = person + 1;
        setPerson(newPersonCount);

        setPriceVal(priceVal + campsite.price);

        if (newPersonCount === 5) setAddDisabled(true);
        setSubDisabled(false);
    }

    const subPerson = () => {
        if (person === 1) return;

        const newPersonCount = person - 1;
        setPerson(newPersonCount);

        setPriceVal(priceVal - campsite.price);

        if (newPersonCount === 1) setSubDisabled(true);
        setAddDisabled(false);
    }

    useEffect(() => {
        console.log("Person:", person, "Price:", priceVal, "Add Disabled:", addDisabled, "Sub Disabled:", subDisabled);
    }, [person, priceVal, addDisabled, subDisabled]);

    return (
        <>
            <div className="count-container">
                <div className="priceVal">
                    <b>Price: </b> ₹ {priceVal}
                </div>
                <div className="count-btn">
                    <b>Person: </b>
                    <Button className={`person-btn ${subDisabled ? "subDisabled" : ""}`} text="-" onClick={subPerson} />
                    <span className='person'>{person}</span>
                    <Button className={`person-btn ${addDisabled ? "addDisabled" : ""}`} text="+" onClick={addPerson} />
                </div>
            </div>
        </>
    )
}