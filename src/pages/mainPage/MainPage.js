import React from 'react';
import logo from '../../image/pngwing.com.png';
import jsPDF from 'jspdf';
import YouTube from 'react-youtube';

const MainPage = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const imgData = logo;
    const text = 'Lyan Iliya';
    const text2 = '04.11.2023'
    const text3 = 'L.I.'

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = '200px Arial'; 
      ctx.fillStyle = 'white';
      const textWidth = ctx.measureText(text).width;
      const x = (canvas.width - textWidth) / 2;
      const y = canvas.height / 2.05;
      ctx.fillText(text, x, y);

      ctx.font = '200px Arial';
      ctx.fillStyle = "white";
      ctx.textAlign = "start";
      const textWidth2 = ctx.measureText(text).width;
      const x2 = (canvas.width - textWidth) / 4
      const y2 = (canvas.height - textWidth2)  / 1.05
      ctx.fillText(text2, x2, y2);

      ctx.font = '200px Arial';
      ctx.fillStyle = "white";
      ctx.textAlign = "end";
      const textWidth3 = ctx.measureText(text).width;
      const x3 = (canvas.width - textWidth) / 1.15
      const y3 = (canvas.height - textWidth2)  / 1.05
      ctx.fillText(text3, x3, y3);

      const dataURL = canvas.toDataURL('image/jpeg'); 
      doc.addImage(dataURL, 'JPEG', 15, 40, 180, 160);
      const pdfOutput = doc.output('datauristring'); 
      const pdfWindow = window.open(); 
      pdfWindow.document.write("<iframe width='100%' height='100%' src='" + pdfOutput + "'></iframe>");
    };

    img.src = imgData;
  };


  return (
    <button onClick={generatePDF}>Open</button>
    
   
    
    
  );
};

export default MainPage;