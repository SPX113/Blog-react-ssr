import axios from "axios";
import { withRouter} from 'next/router'
import marked from 'marked';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import 'github-markdown-css/github-markdown.css';

import { Card } from 'antd';
import Nav from "../components/Nav";
import Head from "next/head";
import About from "../components/About";
import Posts from "../components/Posts";
import Advertising from "../components/Advertising";
import Tags from "../components/Tags";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";




marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});




function Detail(props){

    const strHtml = marked(props.data);
    return(
        <>
            <Head>
                <title>{props.router.query.title}</title>
                <meta charSet='utf-8' />
            </Head>
            <div className="w3-light-grey">
                <Nav/>
                <div className="w3-content" style={{maxWidth:"1600px"}}>
                    <div className="w3-row w3-padding w3-border">
                        <div className="w3-col l8 s12">
                            <Card>
                                <div dangerouslySetInnerHTML={{__html: strHtml}} className='markdown-body'/>
                            </Card>
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
Detail.getInitialProps = async function({ query: { title }}) {
    const promise =new Promise((resolve)=>{
        axios({
            url:'http://localhost:3030/mdsrc/'+encodeURI(title)+'.md'
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
        data: await promise,
        recommend: await recommend
    };
};
export default withRouter(Detail);
