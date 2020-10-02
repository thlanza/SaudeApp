import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import CaloriasForm from './CaloriasForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as EmployeeService from '../../services/employeeService';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    {id: 'alimentos', label: 'Alimentos'},
    {id: 'data', label: 'data'},
]

export default function Calorias() {

    const classes = useStyles();
    const [records, setRecords] = useState(EmployeeService.getAllEmployees());

    const {
        TableContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells);

    return (
        <>
            <PageHeader
                title="Novo dia de registro de calorias e exercícios"
                subTitle="Controle seu dia-a-dia!"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                />
            <Paper className={classes.pageContent}>
                <CaloriasForm />
            </Paper>
       
        </>
    )
}
