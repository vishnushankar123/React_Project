// import React, { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import s from './images/R.gif';
// import p1 from './images/p1-unscreen.gif';
// import p2 from './images/p2-unscreen.gif';
// import p4 from './images/exercises-running-on-all-fours-unscreen.gif';
// import p01 from './images/p01-unscreen.gif';
// import p6 from './images/p6-unscreen.gif';
// import p3 from './images/p3-unscreen.gif'
// import underweightImage from './images/p1.gif';
// import normalWeightImage from './images/p2.gif';
// import obesityImage from './images/obesity.jpg';
// import overweightImage from './images/overweight.webp';
// import './BMI.css';
 
// const F = "https://cdn-icons-png.flaticon.com/512/417/417776.png";
// const M = "https://cdn-icons-png.flaticon.com/512/3048/3048122.png";
 
// const BMICalculator = () => {
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [result, setResult] = useState('');
//     const [gender, setGender] = useState(null);
//     const [bmiCategory, setBmiCategory] = useState(null);
 
//     const calculateBMI = () => {
//         if (!height || !weight) {
//             setResult('Please enter height and weight.');
//             return;
//         }
 
//         const h = parseFloat(height);
//         const w = parseFloat(weight);
//         const bmi = w / ((h / 100) * (h / 100));
 
//         let category = '';
//         if (bmi <= 18.5) {
//             category = 'Underweight';
//         } else if (bmi <= 25) {
//             category = 'Normal weight';
//         } else if (bmi <= 30) {
//             category = 'Overweight';
//         } else {
//             category = 'Obesity';
//         }
 
//         setResult(`Your BMI is: ${Math.round(bmi)} (${category})`);
//         setBmiCategory(category);
//     };
//     const handleGenderChange = (e) => {
//         setGender(e.target.value);
//     };
//     return (
//         <div className='container-fluid'>
//             <div className='row'>
//                 <div className='col-md-3'>
//                     <img src={s} alt='' />
//                 </div>
//                 <div className='col-md-1'></div>
//                 <div className='col-md-5'>
//                     <div className='sai'>
//                         <h2 style={{ color: 'white' }}>BMI calculator</h2>
//                         <p className="txt" style={{ color: 'white' }}>height</p>
//                         <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
//                         <p className="txt" style={{ color: 'white' }}>weight</p>
//                         <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} /><br />
 
//                         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
//                             <label style={{ color: 'white', marginRight: '10px' }}>
//                                 <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} /> Male
//                             </label>
//                             <label style={{ color: 'white' }}>
//                                 <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} /> Female
//                             </label>
//                         </div>
 
//                         <button className="button" onClick={calculateBMI}>Calculate</button>
//                         <p style={{ color: 'white' }}>Please input height [cm] and weight [kg]</p>
//                     </div>
//                 </div>
//                 <div className='sai1'>
//                     <div className='col-md-2'>
//                     <h2 style={{ color: 'white' }}>Output</h2>
//                         <p id="result" style={{ color: 'white' }}>{result}</p>
//                         {bmiCategory === 'Underweight' && (
//                             <img src={underweightImage} alt='Underweight' style={{ width: '100%',height:200, borderRadius: '10px' }} />
//                         )}
//                         {bmiCategory === 'Normal weight' && (
//                             <img src={normalWeightImage} alt='Normal weight' style={{ width: '200',height:200, borderRadius: '10px' }} />
//                         )}
//                         {bmiCategory === 'Obesity' && (
//                             <img src={obesityImage} alt='Obesity' style={{ width: '200',height:200, borderRadius: '10px' }} />
//                         )}
//                         {bmiCategory === 'Overweight' && (
//                             <img src={overweightImage} alt='Overweight' style={{ width: '300',height:200,borderRadius: '10px' }} />
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p1} alt='' style={{ width: 200 }} />
//                 </div>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p2} alt='' style={{ width: 200 }} />
//                 </div>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p3} alt='' style={{ width: 200 }} />
//                 </div>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p4} alt='' style={{ width: 200 }} />
//                 </div>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p01} alt='' style={{ width: 200 }} />
//                 </div>
//                 <div className='col-md-2' style={{ backgroundColor: 'brown', padding: 10 }}>
//                     <img src={p6} alt='' style={{ width: 150, height: 200 }} />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default BMICalculator; 

import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './BMI.css'; // Assuming you have custom CSS for styling
 
import s from './images/r12.gif';
import p1 from './images/p21-unscreen.gif';
import p2 from './images/p41-unscreen.gif';
import p3 from './images/p71-unscreen.gif';
import p4 from './images/p21-unscreen.gif';
import p01 from './images/r1-unscreen (1).gif';
import p6 from './images/p71-unscreen.gif';
import underweightImage from './images/underweight.jpg';
import normalWeightImage from './images/underweight.jpg';
import obesityImage from './images/Obesity.webp';
import overweightImage from './images/Obesity.webp';
 
const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');
    const [gender, setGender] = useState(null);
    const [bmiCategory, setBmiCategory] = useState(null);
 
    const calculateBMI = () => {
        if (!height || !weight) {
            setResult('Please enter height and weight.');
            return;
        }
 
        const h = parseFloat(height);
        const w = parseFloat(weight);
        const bmi = w / ((h / 100) * (h / 100));
 
        let category = '';
        if (bmi <= 18.5) {
            category = 'Underweight';
        } else if (bmi <= 25) {
            category = 'Normal weight';
        } else if (bmi <= 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
 
        setResult(`Your BMI is: ${Math.round(bmi)} (${category})`);
        setBmiCategory(category);
    };
 
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
 
    return (
        <div className='container-fluid' id='BMI'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={s} alt='' className='img-fluid' />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                    <div className='sai'>
                        <h2 className='text-white'>BMI Calculator</h2>
                        <p className='txt text-white'>Height</p>
                        <input
                            type='text'
                            id='height'
                            className='form-control'
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <p className='txt text-white'>Weight</p>
                        <input
                            type='text'
                            id='weight'
                            className='form-control'
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <div className='d-flex justify-content-center mt-3 mb-2'>
                            <label className='text-white mr-3'>
                                <input
                                    type='radio'
                                    value='male'
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange}
                                />{' '}
                                Male
                            </label>
                            <label className='text-white'>
                                <input
                                    type='radio'
                                    value='female'
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange}
                                />{' '}
                                Female
                            </label>
                        </div>
                        <button className='btn btn-primary' onClick={calculateBMI}>
                            Calculate
                        </button>
                        <p className='text-white mt-3'>Please input height [cm] and weight [kg]</p>
                    </div>
                </div>
                <div className='sai1 col-md-3'>
                    <h2 className='text-white'>Output</h2>
                    <p id='result' className='text-white'>{result}</p>
                    {bmiCategory === 'Underweight' && (
                        <img
                            src={underweightImage}
                            alt='Underweight'
                            className='img-fluid rounded'
                        />
                    )}
                    {bmiCategory === 'Normal weight' && (
                        <img
                            src={normalWeightImage}
                            alt='Normal weight'
                            className='img-fluid rounded'
                           style={{height:200}}
                        />
                    )}
                    {bmiCategory === 'Obesity' && (
                        <img src={obesityImage} alt='Obesity' className='img-fluid rounded' />
                    )}
                    {bmiCategory === 'Overweight' && (
                        <img
                            src={overweightImage}
                            alt='Overweight'
                            className='img-fluid rounded'
                        />
                    )}
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p1} alt='' className='img-fluid rounded' />
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p2} alt='' className='img-fluid rounded' />
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p3} alt='' className='img-fluid rounded' />
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p4} alt='' className='img-fluid rounded' />
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p01} alt='' className='img-fluid rounded' />
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'brown', padding: '10px' }}>
                    <img src={p6} alt='' className='img-fluid rounded' />
                </div>
            </div>
        </div>
    );
};
 
export default BMICalculator;

