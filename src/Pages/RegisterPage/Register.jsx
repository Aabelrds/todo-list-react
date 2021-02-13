import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import RegisterNav from './RegisterNav';
import { useState } from 'react/cjs/react.development';


const RegisterPage = (props) => {
    const [actualStep, setActualStep] = useState(1);
    const [form, setForm] = useState({});

    const onChangeForm = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const sendForm = () => {
        // Lanza la petición del formulario.
    }

    const nuevoMetodo = () => {
        
    }

    const getStepComponent = () => {
        if (actualStep === 1) return <Step1 step={actualStep} goToStep={goToStep} onChangeForm={onChangeForm} />;
        if (actualStep === 2) return <Step2 step={actualStep} goToStep={goToStep} />;
        if (actualStep === 3) return <Step3 step={actualStep} goToStep={goToStep} />;
        if (actualStep === 4) return <Step4 step={actualStep} sendForm={sendForm} />;
    
        return null;
    }

    const goToStep = step => {
        setStep(step);
    }
    

    return(
        <div className="registerpage">
            <RegisterNav />
            {getStepComponent(step)}
        </div>
    )
}