import React, { useContext, useEffect, useState } from 'react';
import { DContext } from '../context/Datacontext';
import Livechart from '../Livechart'
import Loading from '../Loading';


function Dashborad() {

  const {leftFootData, rightFootData} = useContext(DContext)
  const [forceAvgL, setForceAvgL] = useState(null)
  const [forceAvgR, setForceAvgR] = useState(null)

  const [forceParamsL, setForceParamsL] = useState(null)
  const [forceParamsR, setForceParamsR] = useState(null)

  const [heartRateParamsL,setheartRateParamsL] = useState(null)

  const [accParamsL, setAccParamsL] = useState(null)
  const [accParamsR,setAccParamsR] = useState(null)

  const [gyroscopeParamL,setgyroscopeParamL] = useState(null)
 const [gyroscopeParamR,setgyroscopeParamR] = useState(null)

  useEffect(()=>{

    if(leftFootData){
      if(leftFootData.forceAvg && leftFootData.forceAvg.length>0){
        const tempForceAvgXaxis = leftFootData.forceAvg.map(data=>new Date(data.xAxis).toLocaleString())

        const tempForceAvgYaxis = leftFootData.forceAvg.map(data=>data.yAxis)
        const tempForceAvg = [{
          "x-axis": tempForceAvgXaxis,
          "y-axis": tempForceAvgYaxis,
          color: "#008DD5",
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
          color: "#f24236",
          seriesName: 'Heal'
        }
        const tempForcef2 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF           ",
          seriesName: 'Arch'
        }
        const tempForcef3 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Big toe'
        }
        const tempForcef4 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF4,
          color: "#25e868",
          seriesName: 'Mid toe'
        }
        const tempForcef5 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF5,
          color: "#C200FB",
          seriesName: 'Ball of foot'
        }

        setForceParamsL([tempForcef1, tempForcef2, tempForcef3, tempForcef4, tempForcef5])
      }

      if(leftFootData.heartRate && leftFootData.heartRate.length>0){
        const tempHeartParamsXaxis = leftFootData.heartRate.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.heartRate.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.heartRate.map(data=>data.yAxis.f2)

        const tempHeartf1 = {
          "x-axis": tempHeartParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Heart Rate'
        }
        const tempHeartf2 = {
          "x-axis": tempHeartParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'SpO2'
        }

        setheartRateParamsL([tempHeartf1, tempHeartf2])
      }

      if(leftFootData.acceleration && leftFootData.acceleration.length>0){
        const tempAccParamsXaxis = leftFootData.acceleration.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.acceleration.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.acceleration.map(data=>data.yAxis.f2)
        const YaxisF3 = leftFootData.acceleration.map(data=>data.yAxis.f3)

        const tempAccf1 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Ax'
        }
        const tempAccf2 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'Ay'
        }
        const tempAccf3 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Az'
        }

        setAccParamsL([tempAccf1, tempAccf2, tempAccf3])
      }


      if(leftFootData.gyro && leftFootData.gyro.length>0){
        const tempgyroParamsXaxis = leftFootData.gyro.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = leftFootData.gyro.map(data=>data.yAxis.f1)
        const YaxisF2 = leftFootData.gyro.map(data=>data.yAxis.f2)
        const YaxisF3 = leftFootData.gyro.map(data=>data.yAxis.f3)

        const tempAccf1 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Gx'
        }
        const tempAccf2 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'Gy'
        }
        const tempAccf3 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Gz'
        }

        setgyroscopeParamL([tempAccf1, tempAccf2, tempAccf3])
      }
    }
  
    
    
    if(rightFootData){
      if(rightFootData.forceAvg && rightFootData.forceAvg.length>0){
        const tempForceAvgXaxis = rightFootData.forceAvg.map(data=>new Date(data.xAxis).toLocaleString())
        const tempForceAvgYaxis = rightFootData.forceAvg.map(data=>data.yAxis)

        const tempForceAvg = [{
          "x-axis": tempForceAvgXaxis,
          "y-axis": tempForceAvgYaxis,
          color: "#008DD5",
          seriesName: 'Force Average data'
        }]
        setForceAvgR(tempForceAvg)
      }

      if(rightFootData.forceParams && rightFootData.forceParams.length>0){
        const tempForceParamsXaxis = rightFootData.forceParams.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = rightFootData.forceParams.map(data=>data.yAxis.f1)
        const YaxisF2 = rightFootData.forceParams.map(data=>data.yAxis.f2)
        const YaxisF3 = rightFootData.forceParams.map(data=>data.yAxis.f3)
        const YaxisF4 = rightFootData.forceParams.map(data=>data.yAxis.f4)
        const YaxisF5 = rightFootData.forceParams.map(data=>data.yAxis.f5)

        const tempForcef1 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Heal'
        }
        const tempForcef2 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'Arch'
        }
        const tempForcef3 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Big toe'
        }
        const tempForcef4 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF4,
          color: "#25e868",
          seriesName: 'Mid toe'
        }
        const tempForcef5 = {
          "x-axis": tempForceParamsXaxis,
          "y-axis": YaxisF5,
          color: "#C200FB",
          seriesName: 'Ball of foot'
        }

        setForceParamsR([tempForcef1, tempForcef2, tempForcef3, tempForcef4, tempForcef5])
      }

      if(rightFootData.acceleration && rightFootData.acceleration.length>0){
        const tempAccParamsXaxis = rightFootData.acceleration.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = rightFootData.acceleration.map(data=>data.yAxis.f1)
        const YaxisF2 = rightFootData.acceleration.map(data=>data.yAxis.f2)
        const YaxisF3 = rightFootData.acceleration.map(data=>data.yAxis.f3)

        const tempAccf1 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Ax'
        }
        const tempAccf2 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'Ay'
        }
        const tempAccf3 = {
          "x-axis": tempAccParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Az'
        }

        setAccParamsR([tempAccf1, tempAccf2, tempAccf3])
      }

      if(rightFootData.gyro && rightFootData.gyro.length>0){
        const tempgyroParamsXaxis = rightFootData.gyro.map(data=>new Date(data.xAxis).toLocaleString())

        const YaxisF1 = rightFootData.gyro.map(data=>data.yAxis.f1)
        const YaxisF2 = rightFootData.gyro.map(data=>data.yAxis.f2)
        const YaxisF3 = rightFootData.gyro.map(data=>data.yAxis.f3)

        const tempAccf1 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF1,
          color: "#f24236",
          seriesName: 'Gx'
        }
        const tempAccf2 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF2,
          color: "#007FFF",
          seriesName: 'Gy'
        }
        const tempAccf3 = {
          "x-axis": tempgyroParamsXaxis,
          "y-axis": YaxisF3,
          color: "#98CE00",
          seriesName: 'Gz'
        }

        setgyroscopeParamR([tempAccf1, tempAccf2, tempAccf3])
      }
    }

  },[leftFootData, rightFootData])

 

  const controls = {
    show: true,
    download: true,
    selection: true,
    zoom: true,
    zoomin: true,
    zoomout: true,
    pan: true,
    reset: true,
    zoomEnabled: true,   
    autoSelected: 'zoom'
  };
  
if(forceAvgL===null || forceAvgR===null || forceParamsL===null){
    return <Loading/>
  }


  return (
    <div className='w-100'>
      <h2 className='my-3 text-center text-dark fw-bolder'>Live Dashboard</h2>

      <div className='p-3 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2 text-dark'>Force Sensor Average</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-3'>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={forceAvgL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={forceAvgR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={4} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>
      
      <div className='p-3 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2 text-dark'>Force Sensor</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-3'>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={forceParamsL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={forceParamsR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>

      <div className='p-3 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2 text-dark'>Heart/ SpO2</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-3'>
          <div className='col-11 col-md-8 col-lg-10 bg-white rounded'>
            <Livechart data={heartRateParamsL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={3} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>

      <div className='p-3 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2 text-dark'>Acceleration Sensor</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-3'>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={accParamsL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={accParamsR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>

      <div className='p-3 border rounded m-2 bg-primary'>
        <h3 className='text-center my-2 text-dark'>Gyroscope Sensor</h3>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-start gap-3'>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={gyroscopeParamL} title={'Left Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
          <div className='col-11 col-md-8 col-lg-5 bg-white rounded'>
            <Livechart data={gyroscopeParamR} title={'Right Foot'} lineStyle={'smooth'} lineWidth={2} chartType={'line'} controls={controls} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashborad