import Router from "next/router";
export default function Posts(props){
    function detail(title){
        Router.push(`/detail?title=${title}`)
    }
    return(
        <div className="w3-white w3-margin" style={{cursor: 'pointer'}}>
            <div className="w3-container w3-padding w3-black">
                <h4 style={{color: "white"}}>热门博文</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
                {
                    props.list.map(item => {
                        return(
                            <li className="w3-padding-16" key={item.id} onClick={() => detail(item.article)}>
                                <img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg" alt="Image"
                                     className="w3-left w3-margin-right" style={{width:"50px"}}/>
                                <span className="w3-large">{item.title}</span>
                                <br/>
                                <br/>
                                <span>{item.describe}</span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}