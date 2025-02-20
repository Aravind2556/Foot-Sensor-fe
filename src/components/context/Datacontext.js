import React, { createContext, useEffect, useState } from 'react'

export const DContext = createContext()
function Datacontext(props) {
  const apiurl = process.env.REACT_APP_API_URL
  const [isAuth,setAuth]=useState(null)

  // Left Foot ThinkSpeak Data
  const [thinkspeakDataL,setThinkspeakDataL]=useState(null)
  const [forceAvgL,setforceAvgL]=useState(null)
  const [forceParamsL, setForceParamsL]=useState(null)
  const [oxygenParamsL,setOxygenParamsL]=useState(null)
  const [accelerationParamsL,setAccelerationParamsL]=useState(null)
  const [gyroscopeParamsL,setGyroscopeParamsL]=useState(null)

  // Right Foot ThinkSpeak Data
  const [thinkspeakDataR,setThinkspeakDataR]=useState(null)
  const [forceAvgR,setforceAvgR]=useState(null)
  const [forceParamsR, setForceParamsR]=useState(null)
  const [accelerationParamsR,setAccelerationParamsR]=useState(null)
  const [gyroscopeParamsR,setGyroscopeParamsR]=useState(null)


  const leftFootData = {
    forceAvg: forceAvgL,
    forceParams: forceParamsL,
    heartRate: oxygenParamsL,
    acceleration: accelerationParamsL,
    gyro: gyroscopeParamsL
  }

  const rightFootData = {
    forceAvg: forceAvgR,
    forceParams: forceParamsR,
    acceleration: accelerationParamsR,
    gyro: gyroscopeParamsR
  }


  useEffect(()=>{
    const fetchData = () =>{
      fetch("https://api.thingspeak.com/channels/2840130/feeds.json?api_key=D3OAKMGE1G3OGV77",{
        method :"GET",
      })
      .then(res=>res.json())
      .then(data=>{
        if (data) {
          setThinkspeakDataL(data);
        } else {
          setThinkspeakDataL(false);
        }
      })
      .catch(err=>{
        console.log("Network issue please try again later",err)
      })
    
      fetch("https://api.thingspeak.com/channels/2840319/feeds.json?api_key=OYQ4P6FNNCMCKR5J",{
        method :"GET",
      })
      .then(res=>res.json())
      .then(data=>{
        if (data) {
          setThinkspeakDataR(data);
        } else {
          setThinkspeakDataR(false);
        }
      })
      .catch(err=>{
        console.log("Network issue please try again later",err)
      })
    
    }
    fetchData()
    const interval = setInterval(fetchData, 50000)

    return () => clearInterval(interval)
  },[])
  
  
  useEffect(() => {
    if (thinkspeakDataL?.feeds) {
      const processedGraphData1 = thinkspeakDataL.feeds.map((feed) => {
        const currentField = 'field1'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      const processedGraphData2 = thinkspeakDataL.feeds.map((feed) => {
        const currentField = 'field2'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      const processedGraphData3 = thinkspeakDataL.feeds.map((feed) => {
        const currentField = 'field3'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      const processedGraphData4 = thinkspeakDataL.feeds.map((feed) => {
        const currentField = 'field4'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      



      const processedForceAvg = thinkspeakDataL.feeds.map(feed=>{
        const currentField = 'field1'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        let totalValues = 0
        values.forEach(value => {
          totalValues+=value
        })

        return {
          xAxis: feed.created_at,
          yAxis: totalValues/values.length,
        }
      })


  
      setForceParamsL(processedGraphData1);
      setforceAvgL(processedForceAvg)
      setOxygenParamsL(processedGraphData2)
      setAccelerationParamsL(processedGraphData3)
      setGyroscopeParamsL(processedGraphData4)
    }


    if (thinkspeakDataR?.feeds) {
      const processedGraphData1 = thinkspeakDataR.feeds.map((feed) => {
        const currentField = 'field1'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      const processedGraphData3 = thinkspeakDataR.feeds.map((feed) => {
        const currentField = 'field3'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      const processedGraphData4 = thinkspeakDataR.feeds.map((feed) => {
        const currentField = 'field4'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        const labeledValues = values.reduce((acc, value, index) => {
          acc[`f${index + 1}`] = value;
          return acc;
        }, {});
  
        return {
          xAxis: feed.created_at,
          yAxis: labeledValues,
        };
      });

      



      const processedForceAvg = thinkspeakDataR.feeds.map(feed=>{
        const currentField = 'field1'
        const values = feed[currentField] ? feed[currentField].split(",").map((axis) => Number(axis)) : [];
        let totalValues = 0
        values.forEach(value => {
          totalValues+=value
        })

        return {
          xAxis: feed.created_at,
          yAxis: totalValues/values.length,
        }
      })


  
      setForceParamsR(processedGraphData1);
      setforceAvgR(processedForceAvg)
      setAccelerationParamsR(processedGraphData3)
      setGyroscopeParamsR(processedGraphData4)
    }
  }, [thinkspeakDataL, thinkspeakDataR]);





  useEffect(()=>{
    if(apiurl){
      fetch(`${apiurl}/authentication`,{
        method:"GET",
        credentials:'include'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.success === true){
          setAuth(data.user)
        }
        else{
          setAuth(false)
        }
      })
      .catch(err=>{
        console.log("error fetching to username",err)
      })

    }
    else{
      console.log("apiurl")
    }
  },[apiurl])

  
  const data = {isAuth, leftFootData, rightFootData}
return (
   

   
        <DContext.Provider value={data}>
            {props.children}
        </DContext.Provider>
  )
}

export default Datacontext
