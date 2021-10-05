export default function Inspiration(){
    return(
        <>
            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                    <h4 style={{color: "white"}}>相册</h4>
                </div>
                <div className="w3-row-padding w3-white">
                    <div className="w3-col s6">
                        <p><img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg" alt="Jeans"
                                style={{width:"100%"}}/></p>
                        <p><img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg" alt="Jeans"
                                style={{width:"100%"}}/></p>
                    </div>
                    <div className="w3-col s6">
                        <p><img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg"
                                alt="Men in Hats" style={{width:"100%"}} className="w3-grayscale"/></p>
                        <p><img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg" alt="Jeans"
                                style={{width:"100%"}}/></p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
h4{
 color: white;
}
p{
 margin: 14px 0;
}
                `}
            </style>
        </>

    )
}