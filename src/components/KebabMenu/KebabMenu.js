import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core'
import styles from './styles'

const KebabMenu = ({ menuItens }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function renderMenuItens(menuItens) {
        return menuItens.map(menuItem => <MenuItem onClick={handleClose}>{menuItem.text}</MenuItem>)
    }

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {renderMenuItens(menuItens)}
            </Menu>
        </div>
    );
}

export default withStyles(styles)(KebabMenu)