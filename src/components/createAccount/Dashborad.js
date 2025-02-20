import React, { useContext, useEffect, useState } from 'react';
import { DContext } from '../context/Datacontext';
import Livechart from '../Livechart'


function Dashborad() {

  const {leftFootData, rightFootData} = useContext(DContext)

  const controls = {
    show: true,
    download: true,
    selection: false,
    zoom: true,
    zoomin: true,
    zoomout: true,
    pan: true,
    reset: true,
    zoomEnabled: true,   // Controls the zoom behavior of the chart
    autoSelected: 'reset'
  };
  

  const sampleData = [
    {
      "x-axis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "y-axis": [4, 5, 2, 8, 6, 4, 5, 2, 8, 6],
      color: "#876868",
      seriesName: 'f1'
    },
    {
      "x-axis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "y-axis": [5, 6, 3, 7, 4, 5, 6, 3, 7, 4],
      color: "#f5675f",
      seriesName: 'f2'
    },
    {
      "x-axis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "y-axis": [2, 3, 1, 5, 3, 2, 3, 1, 5, 3],
      color: "#f5675f",
      seriesName: 'f3'
    },
    {
      "x-axis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "y-axis": [4, 2, 6, 8, 4, 7, 8, 3, 2, 1],
      color: "#f5675f",
      seriesName: 'f4'
    }
  ];



  return (
    <div className='w-100'>
      <h2>Dashborad</h2>
      <div>
        <h3>Force Sensor Average</h3>
        <div>
          <Livechart data={sampleData} title={'Force Sensor'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
        </div>
      </div>
    </div>
  )
}

export default Dashborad