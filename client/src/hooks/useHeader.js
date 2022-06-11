import {useState} from "react";

const useHeader=()=>{
    const [whiteHeader,setWhiteHeader]=useState(false);

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop < 10) {
            /*document.getElementById("navbar").classList.remove("navbar-light");
            document.getElementById("navbar").classList.add("navbar-dark");
            document.getElementById("navbar").classList.remove("bg-light");
            document.getElementById("navbar").classList.add("bg-transparent");*/
            // document.getElementById("logo").src="logo_header.png";
            console.log(document.documentElement.scrollTop + " uping");
            setWhiteHeader(false);
        } else {
            /*document.getElementById("navbar").classList.remove("navbar-dark");
            document.getElementById("navbar").classList.add("navbar-light");
            document.getElementById("navbar").classList.remove("bg-transparent");
            document.getElementById("navbar").classList.add("bg-light");*/
            //document.getElementById("logo").src="logo_header_dark.png";

            console.log(document.documentElement.scrollTop + " downing")
            setWhiteHeader(true);
        }
    })

    document.addEventListener('load',()=>{
        if (document.documentElement.scrollTop < 100) {
          /*  document.getElementById("navbar").classList.remove("navbar-dark");
            document.getElementById("navbar").classList.add("navbar-light");
            document.getElementById("navbar").classList.remove("bg-light");
            document.getElementById("navbar").classList.add("bg-transparent");*/
            //document.getElementById("logo").src="logo_header.png";
            setWhiteHeader(false);
            console.log(document.documentElement.scrollTop + " uping");
        } else {
           /* document.getElementById("navbar").classList.remove("navbar-dark");
            document.getElementById("navbar").classList.add("navbar-dark");
            document.getElementById("navbar").classList.remove("bg-light");
            document.getElementById("navbar").classList.add("bg-light");*/
            //document.getElementById("logo").src="logo_header_dark.png";
            setWhiteHeader(true);
            console.log(document.documentElement.scrollTop + " downing")
        }

        document.getElementById("hamburger_btn").addEventListener('click',(e)=>{
            document.getElementById("navbar").classList.add("bg-light");
            document.getElementById("navbar").classList.add("navbar-dark");
        });

    })


    return {whiteHeader};
    
}

export default useHeader;