import React, { Component } from 'react'
import Chart from './Chart'

//TODO deletar
import Button from '@material-ui/core/Button'
import FormDialog from './FormDialog'



class LineChart extends Component {
    /*constructor(props) {
        super(props)
        this.state = {
            title: {
                text: 'My chart'
            },
            series: [{
                name: 'Profits',
                data: [1, 2, 3]
            }]
        }
    }*/

    updateChartData(newData) {
        this.setState((state) => ({
            series: [{
                name: state.series[0].name,
                data: state.series[0].data.reverse()
            }]
        })
        )
    }

    render() {
        return (
            /*TODO deletar as divs*/
            <div>
                {/*<Chart data={this.state} />*/}
                <Chart data={{ title: { text: 'My Chart' }, series: [{ name: 'Profits', data: this.props.widgetData }] }} />
                <Button onClick={() => this.updateChartData([3, 2, 1])} >Gangorra</Button>
                {/*TODO colocar isso aqui ao nível do Body*/}
                <FormDialog />
            </div>
        )
    }
}

export default LineChart