
import HeadDetails from "./headDetails"
/*todo *a* rel alternate 
<link href="https://www.sporthotel-sillian.at/de/" hreflang="de" rel="alternate">
    <meta name="facebook-domain-verification" content="11bh26efgqzbx5fjd6qskdl2xrq50g"></meta>
*/
const  Head = ({type}) => 
{

    return (
    <div>
      <head>
        <meta content="text/html"/>
        <meta http-equiv="Content-type" />
        <meta charset= "utf-8"/>
        <title>Moderne Ferienwohnungen direkt am Schigebiet Thurntaler</title>
        <meta name="author" content="Brueckenwirt Appartements"/>   
        <meta name ="publisher" content ="Brueckenwirt Appartements"/>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta name="keywords" content="Ferienwohnung, Schiurlaub, direkt am Schigebiet, Thurntaler, Urlaub, Urlaub in den Bergen, Urlaub mit Kindern, Urlaub mit Hund, Wanderurlaub" />
        <meta name="geo.region" content="AT-7" />
        <meta name="geo.placename" content="Panzendorf" />
        <meta name="geo.position" content="46.750043;12.435834" />
        <meta name="ICBM" content="46.750043, 12.435834" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="canonical" href="https://www.derbrueckenwirt.at/"/>
        <meta name="google-site-verification" content="google3134a8bd7a2aec41"/>
    
        <link rel="alternate" hreflang="de" href="https://www.derbrueckenwirt.at"> </link>
        <link rel="alternate" hreflang="en" href="https://www.derbrueckenwirt.at/en"></link>
        <link rel="alternate" hreflang="it" href="https://www.derbrueckenwirt.at/it/"></link>
        <link rel="alternate" hreflang="x-default" href="https://www.derbrueckenwirt.at"></link>

        <HeadDetails 
        type = {"home"}
        />

    </head>
    </div>
    )
}

export default Head;