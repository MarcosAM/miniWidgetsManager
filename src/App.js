import React from 'react'
import Header from './components/Header'
import Widget from './components/Widget'
import LineChart from './components/Chart'
import Body from './components/Body'
import Fab from './components/Fab'
import AddIcon from '@material-ui/icons/Add'


function App() {
    return (
        <div className="App">
            <Header title='Delfos' />
            <Body>
                <Widget title='Chart 1'>
                    <LineChart />
                </Widget>
                <Fab>
                    <AddIcon />
                </Fab>
            </Body>
        </div>
    );
}

export default App;
