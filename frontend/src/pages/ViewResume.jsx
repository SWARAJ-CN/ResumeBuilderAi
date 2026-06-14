import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaCloudDownloadAlt } from "react-icons/fa";

import { IoChevronBack } from "react-icons/io5";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getAParticularResume } from '../service/allApi.js';
// pdf building library
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ViewResume = () => {

     const [userData, setUserData] = useState({})
     const resumeRef = useRef()

    //  console.log(resumeRef.current);
     
    const {id} = useParams()
    console.log(id);

    const getAResume = async () => {
        try {
            const result = await getAParticularResume(id)
            // console.log(result);
            setUserData(result.data)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const HandleDownload = async () =>{

     const element = resumeRef.current; //current html element

     const canvas = await html2canvas(element,{ // convert element to canvas / take a screen shot
        scale:2,
        useCORS:true,
     });

     const imgData = canvas.toDataURL("image/png"); // covert canvas to image
     const pdf = new jsPDF("p","mm","a4"); // create pdf

     const pdfwidth = pdf.internal.pageSize.getWidth(); //get pdf width return 210 bcz a4

     const pdfheight = (canvas.height * pdfwidth) / canvas.width; // maintaining image ratio

     pdf.addImage( // image to pdf
        imgData,
        "PNG",
        0,
        0,
        pdfwidth,
        pdfheight
    )
    pdf.save(`${userData.fullName || "Resume"}.pdf`)
  }

    useEffect(()=>{
        getAResume()
    },[id])
    

  return (
    <>
    <div className='container'>
        <div className='row my-3'>
            <div className='col-lg-2'> </div>
            <div className='col-lg-8'>
                <div className='d-flex justify-content-center align-content-center gap-5'>
                    <button onClick={HandleDownload} className='btn fs-3 me-2'> <FaCloudDownloadAlt /> </button>
                    <Edit userData={userData} setUserData={setUserData} Id={id}/>
                    <Link to={"/form"} className='btn fs-2 me-2'> <IoChevronBack /> </Link>
                </div>
                <div 
                className='mt-5' 
                ref={resumeRef}
                >
                 <Preview userData={userData} />
                </div>
            </div>
            <div className='col-lg-2'></div>
        </div>
    </div>
    </>
  )
}

export default ViewResume