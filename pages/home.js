import axios from "axios";
import Nav from "../components/Nav";
import Head from "next/head";
import MyHeader from "../components/MyHeader";
// import ImageHeader from "../components/ImageHeader";
import BlogItem from "../components/BlogItem";
import About from "../components/About";
import Posts from "../components/Posts";
import Advertising from "../components/Advertising";
import Tags from "../components/Tags";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";


export default function Home(props){
    return(
        <>
            <Head>
                <title>归档</title>
                <meta charSet='utf-8' />
            </Head>
            <div className="w3-light-grey">
                <Nav/>
                <div className="w3-content" style={{maxWidth:"1600px"}}>
                    <MyHeader/>
                    {/*<ImageHeader/>*/}
                    <div className="w3-row w3-padding w3-border">
                        <div className="w3-col l8 s12">
                            {
                                props.list.result.map(item =>{
                                    return(
                                        <BlogItem {...item} key={item.id}/>
                                    )
                                })
                            }
                        </div>
                        <div className="w3-col l4">
                            <About/>
                            <hr/>
                            <Posts list={props.recommend}/>
                            <hr/>
                            <Advertising/>
                            <hr/>
                            <Tags/>
                            <hr/>
                            <Inspiration/>
                            <hr/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
Home.getInitialProps = async function() {
    const list =new Promise((resolve)=>{
        axios({
            url:'http://localhost:3030/allarticle',
            method: 'get',
            params:{
                pageNo: 1
            }
        }).then(
            (res)=>{
                resolve(res.data)
            }
        )
    });
    const recommend =new Promise((resolve)=>{
        axios({
            url:'http://localhost:3030/recommedArticle',
            method: 'get'
        }).then(
            (res)=>{
                resolve(res.data)
            }
        )
    });
    return {
        list: await list,
        recommend: await recommend
    };
};