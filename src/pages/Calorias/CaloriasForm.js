import { FormControl, Grid } from '@material-ui/core';
import React from 'react'
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import  * as employeeService from '../../services/employeeService'
import { postLista }  from '../../slices/listas/listasSlice'
import { useDispatch } from 'react-redux';
import api from '../../services/api';

const initialFieldValues = {
    id: 0,
    alimento1: '',
    alimento2: '',
    alimento3: '',
    alimento4: '',
    alimento5: '',
    alimento6: '',
    data: new Date()
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = {...errors};
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length>9 ? "" : "Minimum 10 numbers required."
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !==  0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if(fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const dispatch = useDispatch();

    const {
        values, 
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, true, validate);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(validate()){
            // employeeService.insertEmployee(values);
        const alimentosArray = [];
        alimentosArray.push(values.alimento1);
        alimentosArray.push(values.alimento2);
        alimentosArray.push(values.alimento3);
        alimentosArray.push(values.alimento4);
        alimentosArray.push(values.alimento5);
        alimentosArray.push(values.alimento6);


        let newAlimentosArray = alimentosArray.filter(x => x !== '')
        const data = values.data;
        console.log(newAlimentosArray);
        try {
            await api.post('/listas', { alimentos: newAlimentosArray, data})
        } catch(e){
            return console.log(e.message);
        }
            resetForm();

    }

    return (
            <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="alimento1"
                        label="Alimento 1"
                        value={values.alimento1}
                        onChange={handleInputChange}
                        // error={errors.fullName}
                        />
                    <Controls.Input
                        name="alimento2"
                        label="Alimento 2"
                        value={values.alimento2}
                        onChange={handleInputChange}
                        // error={errors.fullName}
                        />
                    <Controls.Input
                        name="alimento3"
                        label="Alimento 3"
                        value={values.alimento3}
                        onChange={handleInputChange}
                        // error={errors.fullName}
                        />
                 
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Alimento 4"
                        name="alimento4"
                        value={values.alimento4}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Alimento 5"
                        name="alimento5"
                        value={values.alimento5}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Alimento 6"
                        name="alimento6"
                        value={values.alimento6}
                        onChange={handleInputChange}
                    />
                    <Controls.Datepicker 
                    name="Dia de atividades"
                    label="Dia de atividades"
                    value={values.hireDate}
                    onChange={handleInputChange}
                    />
                    {/* <Controls.Checkbox
                    name="isPermanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                    /> */}
                    <div>
                        <Controls.Button
                            text="Grave seu registro"
                            type="submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>   
            </Form>
    )
}
