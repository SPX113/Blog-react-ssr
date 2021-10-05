import Link from "next/link";
import {
    HomeOutlined,
    BookOutlined,
    EllipsisOutlined,
    SearchOutlined
} from '@ant-design/icons';
export default function Nav(){
    return(
        <>
            <nav>
                <ul className="w3-navbar w3-black w3-hide-small">
                    <li><a><Link href="/home"><HomeOutlined style={{fontSize: '1.1rem'}} /></Link></a></li>
                    <li><a><Link href="/"><BookOutlined style={{fontSize: '1.1rem'}} /></Link></a></li>
                    <li><a><Link href="/"><EllipsisOutlined style={{fontSize: '1.1rem'}} /></Link></a></li>
                    <li className="w3-right"><a href="#"><SearchOutlined style={{fontSize: '1.1rem'}} /></a></li>
                </ul>
            </nav>

<style jsx>
{`
  nav ul li a{
  color: white;
  }
   nav ul li a:hover{
  color: black;
  }
`}
</style>
        </>
    )
}