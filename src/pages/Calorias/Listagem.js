import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import useTable from '../../components/useTable';
import { useDispatch, useSelector } from 'react-redux'  
import { fetchListas, listasSelector } from '../../slices/listas/listasSlice'	

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    {id: 'alimentos', label: 'Alimentos'},
    {id: 'data', label: 'Data'},

]

export default function Listagem() {

    const { listas, loading, hasErrors } = useSelector(listasSelector)	

    const classes = useStyles();

    const [records, setRecords] = useState(listas);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListas());
        setRecords(listas);
    },[])

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
                    <TableContainer>
                        <TblHead />
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map(item =>
                                    {
                                        let stringParsed = new Date(item.data);
                                        let year = stringParsed.getFullYear();
                                        let month = stringParsed.getMonth();
                                        let day = stringParsed.getDate();
                                        return <TableRow key={item.id}>
                                        <TableCell>{item.alimentos.map(li => (
                                            <ul>
                                                <li>{li}</li>
                                            </ul>
                                        )
                                        )}</TableCell>
                                        <TableCell>{`${day}/${month}/${year}`}
                                        </TableCell>
                                    </TableRow>}
                                    )
                            }
                        </TableBody>
                    </TableContainer>
                    <TblPagination />
            </Paper>
       
        </>
    )
}
