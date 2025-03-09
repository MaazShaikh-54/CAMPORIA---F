import './count.css'
import { useState } from 'react';
import Button from '../Button/button';

export default function Count() {
    const [person, setPerson] = useState(1);

    const addPerson = () => {
        if (person === 5) {
            alert("You can't book more than 5 person");
            return;
        }
        setPerson(person + 1);
    }
    const subPerson = () => {
        if (person === 1) {
            return;
        }
        setPerson(person - 1);
    }

    return (
        <>
            <div className="count-container">
                <pre><b>Person: </b></pre> 
                <Button className="person-btn" text="-" onClick={subPerson} />
                <span className='person'>{person}</span>
                <Button className="person-btn" text="+" onClick={addPerson} />
            </div>
        </>
    )
}