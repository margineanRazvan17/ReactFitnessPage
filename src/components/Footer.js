import Logo from "./Logo.png"
import Lottie from "lottie-react"
import animData from "./animation.json"
import Twiter from "./twitter.png"
import Google from "./google.png"
import Facebook from "./facebook.png"

const Footer = () => {
    const fontStyles = {
        fontFamily: "Monospace, sans-serif", // Înlocuiește "NumeleFontului" cu fontul dorit
        fontWeight: "normal", // Poate fi "bold" pentru bold
      };
  return <footer className="bg-purple-400 py-16 ">

    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    <div className="mt-16 basis-1/2 md:mt-0">
        <img alt='logo' src={Logo} />
        <p className="my-5" style={fontStyles}>
        Universitatea Babeş-Bolyai Cluj-Napoca
Facultatea de Matematică şi Informatică
Str. Mihail Kogălniceanu, nr. 1
RO-400084 Cluj-Napoca
        </p>
<p>
    Sportify All Rights Reserved.
</p>
    </div>
    <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold mb-5 ">Links</h4>
        <a href="https://www.cs.ubbcluj.ro/" className="my-5" style={fontStyles}>
            <img alt='twiter' src={Google} className="w-8 hover:opacity-40"/>
        </a>

        <p className="my-5 ">
            <a href="https://twitter.com/mateinfoubb" className="my-5 hover:text-red-300 " style={fontStyles}>
                <img alt='twiter' src={Twiter} className="w-8 hover:opacity-40"/>
            </a>
        </p>

        
        <p ><a href="https://www.facebook.com/MateInfoUBBCluj" className="my-5" style={fontStyles}>
            <img alt='twiter' src={Facebook} className="w-8 hover:opacity-40"/>
        </a></p>

    </div>
    <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us
        </h4>
        <p style={fontStyles}>0786 846 373</p>
    </div>
    <Lottie animationData={animData} />
    </div>
    </footer>;

  
};

export default Footer