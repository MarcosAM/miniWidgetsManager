import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

class OutlinedTextFields extends Component {
    constructor(props) {
        this.state = {
            age: ''
        }
    }

    handleChange(name, event) {
        //TODO adicionar event de mudança

        /*
        console.log(name)
        console.log(event)
        this.setState(state => ({ ...state, [name]: event.target.value }))*/
    }

    /*const classes = useStyles();
    const[values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };*/

    render() {
        return (
            <form className={classes.container} noValidate autoComplete="off" >
                <TextField
                    id="outlined-number"
                    label="Number"
                    value={this.state.age}
                    onChange={handleChange('age')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        )
    }
}

export default withStyles(styles)(OutlinedTextFields)