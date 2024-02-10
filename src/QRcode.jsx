import React, { useContext, useState } from 'react'




export const QRcode = () => {
    const[img, setImg] = useState("");
    const[loading, setLoading] = useState(false);
    const[qrData, setQrData] = useState("https://www.w3schools.com/css/css_howto.asp");
    // const {contextObj, changeContexttVal} = useContext("https://www.w3schools.com/css/css_howto.asp");
    const[qrSize, setQrSize] = useState("150");
    


  async  function generateQR(){
        setLoading(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);

        }catch(error){
            console.log("Error generating QR code", error);


        }finally{
            setLoading(false)

        }
    }
    function downloadQR(){
        fetch(img).then((Response) => Response.blob()).then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) =>{
            console.log("error downloading Qr Code", error);
        });
    }
    const handle1 = (e) => {
       setQrData(e.target.value);
       
          };

          const handle2 = (e) => {
            setQrSize(e.target.value);
              };
    
    function Qr(){
        return(
            <div className='app-container'>
                {loading && <p>Please Wait...</p>}
               {img &&  <img src={img} alt="" height={250} width={200} className='qr-code-image' />}
                <div>
                <h2 className='l1'>QR Code Generator</h2>

                <label htmlFor="dataInput" className='input-label'>Data for QR code : </label>

                <input type="text" value={qrData} onChange={handle1} id='dataInput' placeholder='Enter data for QR code' />
               
                <label htmlFor="sizeInput" className='input-label'>Image size (e.g., 150) : </label>

                <input type="text" value={qrSize} onChange={handle2} id='sizeInput' placeholder='Enter image size' />
                

                <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
                <button className='download-button' onClick={downloadQR}>Download QR Code</button>
                    
                </div>
                <p className='footer'>Designed by Murugan Dhanasekaran</p>
            </div>
        );
    }
  return (
    <div>
        <Qr />
    </div>
  )
}
