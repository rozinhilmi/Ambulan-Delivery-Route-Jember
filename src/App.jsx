import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store'

import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import * as Material from '@mui/material'
import * as MaterialLab from '@mui/lab'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import djikstra from './Methods/djikstra'
import "./assets/style.css"
import Peta_Jember from "./assets/Peta Jember.png"
import Graf_Jember from "./assets/Graf Jember.png"
// import peta-jember from "./assets/Peta "



function App() {
  const dispatch = useDispatch()
  const graf = useSelector((state)=>state.graf )
  const [puskesmasInput,setPuskesmasInput] = useState('')
  const [rumahSakitInput,setRumahSakitInput] = useState('')
  const [loadingButtonText,setLoadingButtonText] = useState('Get Shortest Route')
  const [resultStep,setResultStep] = useState([]);
  const [resultMap,setResultMap] = useState('');
  const puskesmasOnClick = (event) => {
    setPuskesmasInput(event.target.value);
  };
  const rumahSakitOnClick = (event) => {
    setRumahSakitInput(event.target.value);
  };
  const [boxHeight,setBoxHeight] = useState('250px')

  var mapObj = {
    'Ps-':"Puskesmas ",
    'Rs-':'Rumah Sakit '
 };
 const getMapResult = ()=>{
  if(resultMap != ''){
    window.open(resultMap,'_blank')
  }
  
 }
  const getSortestRoute = ()=>{
    setLoadingButtonText("Loading...")
    

    setTimeout(()=>{
      if(puskesmasInput !== '' && rumahSakitInput != ''){
        setBoxHeight('auto')
        let steperResult = [];
        let djikstra_result = djikstra(graf,puskesmasInput,rumahSakitInput).route.split("-")
        let result = "";
        for (const id of djikstra_result) {
          for (const node of graf) {
            if(node.id == id){
              result =  result +"/" +node.position
              

              steperResult.push(node.node_name.replaceAll(/Ps-|Rs-/gi, (matched)=>mapObj[matched] ))
              break;
            }
          }
        }
        setResultStep(steperResult);
        result = result.replaceAll('Ps-','Puskesmas ')
        result = result.replaceAll('Rs-','Rumah Sakit ')
        setResultMap(`https://www.google.co.id/maps/dir${result}`);
      }

      setLoadingButtonText('Get Shortest Route')
    },1500)
  }

  useEffect(()=>{
    for (let index = 0; index < document.getElementsByTagName('circle').length; index++) {
      document.getElementsByTagName('circle')[index].classList.add('color-primary') 
    }
  },[resultStep])
  
  

  return (
    <div className="App">
      <div className='navbar'>
        <h3>Find Fastest Route for Patient Delivery Ambulan in Jember City</h3>
      </div>
      <div className='box-form' style={{ height:boxHeight }}>
        <div className='input-form'>
          <h5>From</h5>
          <div>
            <Material.FormControl size='small' sx={{ minWidth:'300px',margin:'5px',padding:'0px' }} autoWidth>

              <Material.InputLabel style={{ display:'flex',alignItems:'center' }}>
                <MedicalInformationIcon fontSize='small' />
                <p>Public health center</p>
              </Material.InputLabel>

              <Material.Select
                labelId="demo-simple-select-label"
                className="demo-simple-select"
                value={puskesmasInput}
                label="la Public health center"
                onChange={puskesmasOnClick}
              >
                {graf.map((node)=>{
                  if(node.node_type == 1) {
                    return <Material.MenuItem value={node.id}>{node.node_name.replaceAll('Ps-','Puskesmas ')}</Material.MenuItem>
                  }
                } )}
              </Material.Select>
            </Material.FormControl>
          </div>

          <h5>To</h5>

          <div>
            <Material.FormControl size='small' sx={{ minWidth:'300px',margin:'5px',padding:'0px' }}  autoWidth>

              <Material.InputLabel style={{ display:'flex',alignItems:'center' }}>
                <HomeWorkIcon fontSize='small' />
                <p>Hospital</p>
              </Material.InputLabel>

              <Material.Select
                labelId="demo-simple-select-label"
                className="demo-simple-select"
                value={rumahSakitInput}
                label="la Hospital"
                onChange={rumahSakitOnClick}
              >
                {graf.map((node)=>{
                  if(node.node_type == 2) {
                    return <Material.MenuItem value={node.id}>{node.node_name.replaceAll('Rs-','Rumah Sakit ')}</Material.MenuItem>
                  }
                } )}
              </Material.Select>

            </Material.FormControl>
          </div>
        </div>

        <Material.Button onClick={()=>{getSortestRoute()}} autoWidth sx={{ marginLeft:'auto',marginRight:'auto' }} variant="contained">{loadingButtonText}</Material.Button>
        
        {resultStep.length != 0 ? 
          <>
            
            <MaterialLab.Timeline position="alternate">
              {resultStep.map((step)=>
                  <MaterialLab.TimelineItem>
                    <MaterialLab.TimelineSeparator>
                      <MaterialLab.TimelineDot color='primary' />
                      <MaterialLab.TimelineConnector />
                    </MaterialLab.TimelineSeparator>
                    <MaterialLab.TimelineContent>{step}</MaterialLab.TimelineContent>
                  </MaterialLab.TimelineItem>
                  )
              }   
              
            </MaterialLab.Timeline>
            <Material.Button onClick={()=>{getMapResult()}} autoWidth sx={{ marginLeft:'auto',marginRight:'auto' }} variant="contained"><PlaceIcon fontSize='small'/> Detail Route</Material.Button>
          </>
        :null}  
      </div>

      <div className='footer'>
        <span>
          <RouteIcon fontSize='large' className='color-primary' />
          <p>Sistem Pencarian Rute Terpendek Pengantaran Pasien Menggunakan Ambulans Di Kabupaten Jember Berbasis Website</p>
        </span>
        <span>
          <CheckCircleOutlineIcon fontSize='large' className='color-primary' />
          <p>Menghasilkan Rute terpendek secara Tepat dan Akurat</p>
        </span>
        <span>
          <GraphicEqIcon fontSize='large' className='color-primary' />
          <p>Sistem ini dibuat dengan menjadikan Peta Kabupaten Jember kedalam Bentuk Graf dengan menjadikan Puskeskams, Rumah Sakit dan Kecamatan sebagai titik dan jalan raya sebagai sisi</p>
        </span>
        <img style={{ width:'100%',marginTop:10 }} src={Peta_Jember} />
        <ArrowDownwardIcon style={{ margin:'auto',marginBottom:10,marginTop:10 }} fontSize='large' />
        <img style={{ width:'100%' }} src={Graf_Jember} />
        <p style={{ marginTop:10 }}>Algoritma Djikstra berperan sebagai menentu rute terpendek antar titik pada Graf Kabupaten Jember ini</p>
        
      </div>
    </div>
  )
}

export default App
