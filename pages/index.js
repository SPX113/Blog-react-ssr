import {useState, useRef} from "react";
import Link from "next/link";
export default function Index() {
    const [scale,setScale] = useState(1.5);
    const [y,setY] = useState('0');
    const [x,setX] = useState('0');
    const xRef = useRef();

    const handleMouseMove = (e) => {
        const d = xRef.current.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        x = x - x * 2;
        y = y - y * 2;
        setScale(1.6);
        setX(x/2 + "px");
        setY(y/2 + "px");
    };

    const handleMouseLeave = () => {
        setScale(1);
        setX(0);
        setY(0);

    };
  return (
      <>
          <div
              id="wrapper"
              ref={xRef}
              onMouseMove={handleMouseMove}
              onClick={handleMouseLeave}
          >
              <img id="image" src="https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2550&q=80" alt="banner" />
          </div>
          <div className="intro-text">
              <div className="intro-lead-in">WELCOME TO MY BLOG</div>
              <div className="intro-heading">Keep your face always toward the sunshine and shadows will fall behind you.</div>
              <Link href="/home">
                  <a className="btn btn-xl">ENTER</a>
              </Link>
          </div>
          <style jsx>
              {`
                #wrapper {
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                }
               #wrapper #image {
                    width: 100vw;
                    height: 100vh;
                    transform: translateX(${x}) translateY(${y}) scale(${scale});
                    transition: ease-out 0.7s;
                }
.intro-text {
    padding-top: 100px;
    padding-bottom: 50px;
    position: fixed;
    z-index: 1;
    width: 70%;
    top: 15%;
    color: white;
    font-size: 4rem;
    transform: translateX(-50%);
    left: 50%;
    text-align: center;
    pointer-events: none;
}

.intro-text .intro-lead-in {
    margin-bottom: 25px;
    font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 2rem;
    font-style: italic;
    line-height: 22px;
}

.intro-text .intro-heading {
    margin-bottom: 25px;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 50px;
}
.btn-xl {
    padding: 20px 40px;
    border-color: #1ee2e7;
    border-radius: 3px;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #1ee2e7;
    pointer-events: auto;
}

.btn-xl:hover,
.btn-xl:focus,
.btn-xl:active,
.btn-xl.active,
.open .dropdown-toggle.btn-xl {
    border-color: #17d0d5;
    color: #fff;
    background-color: #17d0d5;
}

.btn-xl:active,
.btn-xl.active,
.open .dropdown-toggle.btn-xl {
    background-image: none;
}

.btn-xl.disabled,
.btn-xl[disabled],
fieldset[disabled] .btn-xl,
.btn-xl.disabled:hover,
.btn-xl[disabled]:hover,
fieldset[disabled] .btn-xl:hover,
.btn-xl.disabled:focus,
.btn-xl[disabled]:focus,
fieldset[disabled] .btn-xl:focus,
.btn-xl.disabled:active,
.btn-xl[disabled]:active,
fieldset[disabled] .btn-xl:active,
.btn-xl.disabled.active,
.btn-xl[disabled].active,
fieldset[disabled] .btn-xl.active {
    border-color: #1ee2e7;
    background-color: #1ee2e7;
}

.btn-xl .badge {
    color: #fed136;
    background-color: #fff;
}
                `}
          </style>
      </>

  )
}
