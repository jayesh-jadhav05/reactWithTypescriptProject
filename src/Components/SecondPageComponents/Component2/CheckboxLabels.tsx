import Checkbox from '@mui/material/Checkbox';
import './component2Style.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function CheckboxLabels() {
    // This Two State For Expand and Unexpand button
    const [expandDep1, setExpandDep1] = useState(true);
    const [expandDep2, setExpandDep2] = useState(true);
    // This States For Department 1 
    const [checked, setChecked] = useState(false);
    const [dep1_subdep1, setDep1_subdep1] = useState(false);
    const [dep1_subdep2, setDep1_subdep2] = useState(false);
    // This States For Department 2
    const [checked2, setChecked2] = useState(false);
    const [dep2_subdep1, setDep2_subdep1] = useState(false);
    const [dep2_subdep2, setDep2_subdep2] = useState(false);
    const [dep2_subdep3, setDep2_subdep3] = useState(false);


    return (
        <div className='main-container'>
            <div className='container'>
                <div className='department1'>
                    {
                        dep1_subdep1 && dep1_subdep2 ?
                            <li className='dep-name'><Checkbox checked={true} onChange={() => setChecked(!checked)} /> customer_service <span onClick={() => setExpandDep1(!expandDep1)}><ExpandMoreIcon /></span></li>
                            : <li className='dep-name'><Checkbox checked={checked} onChange={() => setChecked(!checked)} /> customer_service <span onClick={() => setExpandDep1(!expandDep1)}><ExpandMoreIcon /></span></li>

                    }
                    {
                        expandDep1 && <div className='subdepartments'>
                            {
                                checked ? (
                                    <>
                                        <li><Checkbox checked={true} /> A1</li>
                                        <li><Checkbox checked={true} /> A1</li>
                                    </>

                                ) : (
                                    <>
                                        <li><Checkbox checked={dep1_subdep1} onChange={() => setDep1_subdep1(!dep1_subdep1)} /> A1</li>
                                        <li><Checkbox checked={dep1_subdep2} onChange={() => setDep1_subdep2(!dep1_subdep2)} /> A1</li>
                                    </>
                                )
                            }
                        </div>
                    }
                </div>
                <div className='department2'>
                    {
                        dep2_subdep1 && dep2_subdep2 && dep2_subdep3 ?
                            <li className='dep-name'><Checkbox checked={true} onChange={() => setChecked2(!checked2)} /> customer_service <span onClick={() => setExpandDep1(!expandDep1)}><ExpandMoreIcon /></span></li>
                            : <li className='dep-name'><Checkbox checked={checked2} onChange={() => setChecked2(!checked2)} /> customer_service <span onClick={() => setExpandDep2(!expandDep2)}><ExpandMoreIcon /></span></li>

                    }
                    {
                        expandDep2 && <div className='subdepartments'>
                            {
                                checked2 ? (
                                    <>

                                        <li><Checkbox checked={true} /> graphic_design</li>
                                        <li><Checkbox checked={true} /> product_design</li>
                                        <li><Checkbox checked={true} /> web_design</li>
                                    </>

                                ) : (
                                    <>
                                        <li><Checkbox checked={dep2_subdep1} onChange={() => setDep2_subdep1(!dep2_subdep1)} /> graphic_design</li>
                                        <li><Checkbox checked={dep2_subdep2} onChange={() => setDep2_subdep2(!dep2_subdep2)} /> product_design</li>
                                        <li><Checkbox checked={dep2_subdep3} onChange={() => setDep2_subdep3(!dep2_subdep3)} /> web_design</li>
                                    </>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}