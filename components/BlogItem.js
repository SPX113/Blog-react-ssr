import Router from "next/router";
import {useState} from "react";

export default function BlogItem(props){
    const {title,photo,describe,createtime,article} = props;
    const date = new Date(createtime);
    const time = date.getFullYear()+ '-' + (date.getMonth()+1) + '-' + date.getDate();
    let [like,setLike] = useState('like');
    function detail(){
        Router.push(`/detail?title=${article}`)
    }
    function giveLike() {
       setLike("✓ Liked")
    }

    return(
        <div className="w3-container w3-white w3-margin w3-padding-large">
            <div className="w3-center">
                <h3>{title}</h3>
                <h5>{describe}, <span className="w3-opacity">{time}</span></h5>
            </div>

            <div className="w3-justify">
                <img src={photo} alt="Girl Hat"
                     style={{width:"100%"}} className="w3-padding-12"/>
                    <p>
                        <strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry.
                        Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                        mattis nunc id lorem euismod placerat. Vivamus porttitor
                        magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                        Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                        ultricies congue gravida diam non fringilla.</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.</p>
                    <p className="w3-left">
                        <button className="w3-btn w3-white w3-border" onClick={giveLike}>
                            <b>{like}</b>
                        </button>
                    </p>
                    <p className="w3-right">
                        <button className="w3-btn" onClick={detail} id="myBtn"><b>进入文章</b> </button>
                    </p>
                    <p className="w3-clear"></p>
                    <div className="w3-row w3-padding-bottom" id="demo1" style={{display:"none"}}>
                        <hr/>
                            <div className="w3-col l2 m3">
                                <img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg"
                                     style={{width:"90px"}}/>
                            </div>
                            <div className="w3-col l10 m9">
                                <h4>George <span className="w3-opacity w3-medium">May 3, 2015, 6:32 PM</span></h4>
                                <p>Great blog post! Following</p>
                            </div>
                    </div>
            </div>
        </div>
    )
}