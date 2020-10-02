import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export function useForm(initialFieldValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange) 
            validate({[name] : value})
    }

    const resetForm = () => {
        setValues(initialFieldValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyles = makeStyles(theme => ({

    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))


export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;

    return (
        <form className={classes.root} {...other}>
           {props.children} 
        </form>
    )
}

