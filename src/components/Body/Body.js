import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Widget from '../Widget'
import LineChart from '../Chart'
import Fab from '../Fab'
import AddIcon from '@material-ui/icons/Add'

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widgetsData: [
                [1, 5, 3]
            ]
        }
    }

    updateWidgetData({ index, data }) {
        this.setState(state => ({
            widgetsData: state.widgetsData.splice(index, 1, data)
        }))
    }

    render() {
        return (
            <div className={this.props.classes.body}>
                <Widget title='Chart 1'>
                    <LineChart widgetData={this.state.widgetsData[0]} />
                </Widget>
                <Fab>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default withStyles(styles)(Body)