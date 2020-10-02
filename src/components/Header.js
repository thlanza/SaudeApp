import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center" >
                    <Grid item>
                        <InputBase 
                        placeholder="Search top"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <Link to="/">
                        <IconButton>
                            <Badge badgeContent={'listar'} color="secondary">
                                <NotificationsNoneIcon fontSize="large" />
                            </Badge>
                            </IconButton>
                        </Link>
                        <Link to="/listagem">
                        <IconButton>
                            <Badge badgeContent={'registros'} color="primary">
                                <ChatBubbleOutlineIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                        </Link>
  
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


export default withRouter(Header);