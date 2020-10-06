import React from 'react'
import {Dimensions} from 'react-native'
import {PieChart} from 'react-native-chart-kit'
import {colors} from '../utils'

const Chart = ({data}) => {
  const chartConfig = {
    backgroundGradientFrom: colors.orange,
    backgroundGradientTo: colors.orange,
    color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.5,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }

  return (
    <PieChart
      data={data}
      width={Dimensions.get('window').width}
      height={230}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
    />
  )
}

export default Chart
