import React, { Component } from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'C++', A: 35, B: 55, C: 65, D: 80, fullMark: 100 },
  { subject: 'Python', A: 10, B: 35, C: 65, D: 90, fullMark: 100 },
  { subject: 'JavaScript', A: 0, B: 20, C: 50, D: 80, fullMark: 100 },
  { subject: 'ReactJS', A: 0, B: 15, C: 55, D: 90, fullMark: 100 },
  { subject: 'NodeJS', A: 0, B: 0, C: 45, D: 75, fullMark: 100 },
  { subject: 'HTML/CSS', A: 5, B: 35, C: 70, D: 85, fullMark: 100 },
  { subject: 'SQL', A: 0, B: 0, C: 30, D: 70, fullMark: 100 },
];

class Chart extends Component {
  render() {
    return (
      <div id="resume">
        <p>My resume can be downloaded <a href="Michael_Geng_Resume.pdf">here</a></p>
        <div>
          <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]}/>
              <Radar name="2015" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
              <Radar name="2016" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
              <Radar name="2017" dataKey="C" stroke="#82b3ca" fill="#82b3ca" fillOpacity={0.6}/>
              <Radar name="2018" dataKey="D" stroke="#9b5da3" fill="#9b5da3" fillOpacity={0.6}/>
              <Legend />
              
            </RadarChart>
        </div>      
      </div>
    )
  }
}

export default Chart;