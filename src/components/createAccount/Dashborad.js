import React, { useContext, useEffect, useState } from 'react';
import { DContext } from '../context/Datacontext';
import Livechart from '../Livechart'


function Dashborad() {

  const {leftFootData, rightFootData} = useContext(DContext)
  console.log("Left foor data",leftFootData)
  console.log("right foot data",rightFootData)
  const [forceAvgL, setForceAvgL] = useState(null)
  const [forceAvgR, setForceAvgR] = useState(null)

  const [forceParamsL, setForceParamsL] = useState(null)
  const [forceParamsR, setForceParamsR] = useState(null)

  const [heartRateParamsL,setheartRateParamsL] = useState(null)

  useEffect(()=>{

    if(leftFootData){
      if(leftFootData.forceAvg && leftFootData.forceAvg.length>0){
        const tempForceAvgXaxis = leftFootData.forceAvg.map(data=>new Date(data.xAxis).toLocaleString())

        const tempForceAvgYaxis = leftFootData.forceAvg.map(data=>data.yAxis)
        const tempForceAvg = [{
          "x-axis": tempForceAvgXaxis,
          "y-axis": tempForceAvgYaxis,
          color: "#876868",
          seriesName: 'Force Average data'
        }]
        setForceAvgL(tempForceAvg)

      }

      if(leftFootData.forceParams && leftFootData.forceParams.length>0){
        const tempForceParamsXaxis = leftFootData.forceParams.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.forceParams.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.forceParams.map(data=>data.yAxis.f2)
        const YaxisF3 = leftFootData.forceParams.map(data=>data.yAxis.f3)
        const YaxisF4 = leftFootData.forceParams.map(data=>data.yAxis.f4)
        const YaxisF5 = leftFootData.forceParams.map(data=>data.yAxis.f5)

        const tempForcef1 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF1,
          color: "#845668",
          seriesName: 'f1'
        }
        const tempForcef2 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF2,
          color: "#876988",
          seriesName: 'f2'
        }
        const tempForcef3 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF3,
          color: "#566868",
          seriesName: 'f3'
        }
        const tempForcef4 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF4,
          color: "#25e868",
          seriesName: 'f4'
        }
        const tempForcef5 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF5,
          color: "#g76868",
          seriesName: 'f5'
        }

        setForceParamsL([tempForcef1, tempForcef2, tempForcef3, tempForcef4, tempForcef5])
      }

      if(leftFootData.forceParams && leftFootData.forceParams.length>0){
        const tempForceParamsXaxis = leftFootData.forceParams.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.forceParams.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.forceParams.map(data=>data.yAxis.f2)
        const YaxisF3 = leftFootData.forceParams.map(data=>data.yAxis.f3)
        const YaxisF4 = leftFootData.forceParams.map(data=>data.yAxis.f4)
        const YaxisF5 = leftFootData.forceParams.map(data=>data.yAxis.f5)

        const tempForcef1 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF1,
          color: "#845668",
          seriesName: 'f1'
        }
        const tempForcef2 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF2,
          color: "#876988",
          seriesName: 'f2'
        }
        const tempForcef3 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF3,
          color: "#566868",
          seriesName: 'f3'
        }
        const tempForcef4 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF4,
          color: "#25e868",
          seriesName: 'f4'
        }
        const tempForcef5 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF5,
          color: "#g76868",
          seriesName: 'f5'
        }

        setheartRateParamsL([tempForcef1, tempForcef2, tempForcef3, tempForcef4, tempForcef5])
      }
    }
    
    
    if(rightFootData){
      if(rightFootData.forceAvg && rightFootData.forceAvg.length>0){
        const tempForceAvgXaxis = rightFootData.forceAvg.map(data=>new Date(data.xAxis).toLocaleString())
        const tempForceAvgYaxis = rightFootData.forceAvg.map(data=>data.yAxis)

        const tempForceAvg = [{
          "x-axis": tempForceAvgXaxis,
          "y-axis": tempForceAvgYaxis,
          color: "#876868",
          seriesName: 'Force Average data'
        }]
        setForceAvgR(tempForceAvg)
      }

      if(rightFootData.forceParams && rightFootData.forceParams.length>0){
        const tempForceParamsXaxis = rightFootData.forceParams.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.forceParams.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.forceParams.map(data=>data.yAxis.f2)
        const YaxisF3 = leftFootData.forceParams.map(data=>data.yAxis.f3)
        const YaxisF4 = leftFootData.forceParams.map(data=>data.yAxis.f4)
        const YaxisF5 = leftFootData.forceParams.map(data=>data.yAxis.f5)

        const tempForcef1 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF1,
          color: "#845668",
          seriesName: 'f1'
        }
        const tempForcef2 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF2,
          color: "#876988",
          seriesName: 'f2'
        }
        const tempForcef3 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF3,
          color: "#566868",
          seriesName: 'f3'
        }
        const tempForcef4 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF4,
          color: "#25e868",
          seriesName: 'f4'
        }
        const tempForcef5 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF5,
          color: "#g76868",
          seriesName: 'f5'
        }

        setForceParamsR([tempForcef1, tempForcef2, tempForcef3, tempForcef4, tempForcef5])
      }
    }

  },[leftFootData, rightFootData])

  console.log(leftFootData, rightFootData)

  const controls = {
    show: true,
    download: true,
    selection: true,
    zoom: true,
    zoomin: true,
    zoomout: true,
    pan: true,
    reset: true,
    zoomEnabled: true,   // Controls the zoom behavior of the chart
    autoSelected: 'zoom'
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

  console.log("sample data",sampleData)

  if(forceAvgL===null || forceAvgR===null || forceParamsL===null){
    return <div>Loading...</div>
  }


  return (
    <div className='w-100'>
      <h2 className='my-3 text-center text-primary'>Dashboard</h2>

      <div className='p-2 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2'>Force Sensor Average</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-2'>
          <div className='col-11 col-md-8 col-lg-5 bg-light'>
            <Livechart data={forceAvgL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-light'>
            <Livechart data={forceAvgR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>
      
      <div className='p-2 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2'>Force Sensor</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-2'>
          <div className='col-11 col-md-8 col-lg-5 bg-light'>
            <Livechart data={forceParamsL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-light'>
            <Livechart data={forceParamsR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashborad