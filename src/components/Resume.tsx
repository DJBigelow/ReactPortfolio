import React from 'react'
// import {PDF} from './Pdf'
// import ReactPDF, {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'
import IFrame from 'react-iframe'

export const Resume = () => (
   <div>
       <IFrame url="../../DanielBigelowResume.pdf" width="900px" height="1175px">

       </IFrame>
   </div>
)