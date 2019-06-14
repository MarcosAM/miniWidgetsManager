import React, { Component } from 'react'
import Chart from './Chart'

//TODO deletar
import Button from '@material-ui/core/Button'


class LineChart extends Component {

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
            </div>
        )
    }
}

export default LineChart