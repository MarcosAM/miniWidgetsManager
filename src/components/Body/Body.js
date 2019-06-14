import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'

const Body = ({ classes, children }) => (
    <div className={classes.body}>
        {children}
    </div>
)

export default withStyles(styles)(Body)