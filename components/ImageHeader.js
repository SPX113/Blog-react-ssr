export default function ImageHeader(){
    return(
        <header className="w3-display-container w3-wide" id="home">
            <img className="w3-image" src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg"
                 alt="Fashion Blog" width="1600" height="1060"/>
                <div className="w3-display-left w3-padding-xlarge">
                    <h1 className="w3-text-white">{"Jane's"}</h1>
                    <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>FASHION BLOG</b></h1>
                    <h6>
                        <button className="w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off"
                                onClick="document.getElementById('subscribe').style.display='block'">SUBSCRIBE
                        </button>
                    </h6>
                </div>
        </header>
    )
}