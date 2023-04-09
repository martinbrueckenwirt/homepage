import React from 'react'



/*jsonld.com
google tag manager zum verwalten
google structured data test tool
https://schemantra.com/schema_list/Apartment#schemantra1
https://easyschema.com/website/
https://search.google.com/test/rich-results
google + wird für Privatpersonen  nicht mehr unterstützt??  "https://plus.google.com/111228147092738439847"

*/

constSchemaOrganisation = 
    { "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Brückenwirt Appartements",
 "legalName" : "Brückenwirt Appartements GmbH",
 "url": "https://www.derbrueckenwirt.at",
 "logo": "https://www.derbrueckenwirt.at/public/logo.png",
 "foundingDate": "2014",
 "founders": [
 {
 "@type": "Person",
 "name": "Mag. Evelin Pichler"
 },
 {
 "@type": "Person",
 "name": "Dr. Martin Buergler"
 } ],
 "address": {
 "@type": "PostalAddress",
 "streetAddress": "Panzendorf 12",
 "addressLocality": "Heinfels",
 "addressRegion": "",
 "postalCode": "9919",
 "addressCountry": "AT"
 },
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "reception desk",
 "telephone": "[+43 (0)4842 6336]",
 "email": "office@derbrueckenwirt.at"
 },
 "sameAs": [ 
 "http://www.facebook.com/derbrueckenwirt1",
 "http://www.instagram.com/brueckenwirt"

 ]};

 constSchemaWebsite ={
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Brückenwirt Appartements",
        "url": "https://www.derbrueckenwirt.at"
        };

constSchemaAccomodation ={
        "@context": "https://schema.org",
        "@type": "Accommodation",
        "@id": "Accommodation",
        "accommodationCategory": "***",
        "address": "Panzendorf 12",
        "description": "holiday apartments",
        "floorLevel": "1-3",
        "floorSize": "32-85 MTK",
        "identifier": "www.derbrueckenwirt.at",
        "keywords": "holiday, skiing, mountains, nature, family, kids, pets allowed, beautiful scenery, biking, mountain biking, paragliding, climbing",
        "mainEntityOfPage": "www.derbrueckenwirt.at",
        "maximumAttendeeCapacity": "48",
        "occupancy": "48",
        "numberOfBedrooms": "22",
        "numberOfBathroomsTotal": "10",
        "numberOfFullBathrooms": "10",
        "numberOfRooms": "33",
        "petsAllowed": "yes",
        "yearBuilt": "2014",
        "telephone": "+43 4842 6336",
        "mail": "office@derbrueckenwirt.at",
        "branchCode": "apartmenthouse",
        "alternateName": "Brückenwirt",
        "sameAs":"Brückenwirt Appartements"
      };




 constSchemaHaunold ={
       "@context": "https://schema.org",
     "@type": "Apartment",
     "name": "haunold",
     "description": "Ausblick nach Westen, großer Balkon",
     "image": "",
     "numberOfRooms": "3",
     "occupancy": {
          "@type": "QuantitativeValue",
          "minValue": "1",
          "maxValue": "3"
     },
     "floorLevel": "1",
     "floorSize": {
          "@type": "QuantitativeValue",
          "value": "32",
          "unitCode": "MTK"
     },
     "numberOfBathroomsTotal": "1",
     "numberOfBedrooms": "1",
     "petsAllowed": true,
     "tourBookingPage": "",
     "yearBuilt": "2014"
    };
   
    constSchemaBurgHeinfels ={
        "@context": "https://schema.org",
      "@type": "Apartment",
      "name": "Burg_Heinfels",
      "description": "Ausblick nach Osten in den Garten und auf die historische Burg Heinfels; großer Balkon",
      "image": "",
      "numberOfRooms": "3",
      "occupancy": {
           "@type": "QuantitativeValue",
           "minValue": "1",
           "maxValue": "4"
      },
      "floorLevel": "1",
      "floorSize": {
           "@type": "QuantitativeValue",
           "value": "37",
           "unitCode": "MTK"
      },
      "numberOfBathroomsTotal": "1",
      "numberOfBedrooms": "2",
      "petsAllowed": true,
      "tourBookingPage": "",
      "yearBuilt": "2014"
     };

     constSchemaThurntaler ={
        "@context": "https://schema.org",
      "@type": "Apartment",
      "name": "Burg_Heinfels",
      "description": "Ausblick nach Westen, großer Balkon",
      "image": "",
      "numberOfRooms": "4",
      "occupancy": {
           "@type": "QuantitativeValue",
           "minValue": "1",
           "maxValue": "4"
      },
      "floorLevel": "2",
      "floorSize": {
           "@type": "QuantitativeValue",
           "value": "40",
           "unitCode": "MTK"
      },
      "numberOfBathroomsTotal": "1",
      "numberOfBedrooms": "2",
      "petsAllowed": true,
      "tourBookingPage": "",
      "yearBuilt": "2014"
     };

     constSchemaHelm ={
        "@context": "https://schema.org",
      "@type": "Apartment",
      "name": "Helm",
      "description": "Ausblick nach Süden auf die Karnischen Alpen, 2 getrennte Schlafzimmer",
      "image": "",
      "numberOfRooms": "4",
      "occupancy": {
           "@type": "QuantitativeValue",
           "minValue": "1",
           "maxValue": "6"
      },
      "floorLevel": "2",
      "floorSize": {
           "@type": "QuantitativeValue",
           "value": "56",
           "unitCode": "MTK"
      },
      "numberOfBathroomsTotal": "1",
      "numberOfBedrooms": "3",
      "petsAllowed": true,
      "tourBookingPage": "",
      "yearBuilt": "2014"
     };

     constSchemaDreiZinnen ={
        "@context": "https://schema.org",
      "@type": "Apartment",
      "name": "Drei_Zinnen",
      "description": "Ausblick nach Süden auf die Karnischen Alpen, 2 getrennte Schlafzimmer, 2 Bäder",
      "image": "",
      "numberOfRooms": "5",
      "occupancy": {
           "@type": "QuantitativeValue",
           "minValue": "1",
           "maxValue": "7"
      },
      "floorLevel": "2",
      "floorSize": {
           "@type": "QuantitativeValue",
           "value": "85",
           "unitCode": "MTK"
      },
      "numberOfBathroomsTotal": "2",
      "numberOfBedrooms": "3",
      "petsAllowed": true,
      "tourBookingPage": "",
      "yearBuilt": "2014"
     };

const  HeadDetails = ({type}) => 
{

    switch (type){
        case 'home':
            return(
                <>
                    <meta name="description" content="Moderne Appartements / Ferienwohnungen direkt am Schigebiet ✔ 2-6 Personen ✔ sehr kinderfreundlich ✔ Haustiere erlaubt, großer Garten, hochwertige Ausstattung, getrennte Schlafräume, Cafe im Erdgeschoß."/>
                    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaOrganisation) }}
                        />
                     <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaWebsite) }}
                        />
                         <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaAccomodation) }}
                        />
 
                </>

            )

            case 'typeA':
            return(
                <>
                    <meta name="description" content="Moderne Ferienwohnung mit Blick auf das Schigebiet mit großem Balkon"/>
                    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaHaunold) }}
                        />
                   
                </>

            )
            case 'typeB':
            return(
                <>
                    <meta name="description" content="Moderne Ferienwohnung mit Blick in den Garten und die historische Burg Heinfels."/>
                    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaHaunold) }}
                        />
                   
                </>

            )
            case 'typeC':
                return(
                    <>
                        <meta name="description" content="Schöne Ferienwohnung mit Blick nach Westen auf das Schigebiet mit getrennten Schlafräumen."/>
                        <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaThurntaler) }}
                            />
                       
                    </>
    
                )
            case 'typeD':
                return(
                    <>
                        <meta name="description" content="Große sonnige Ferienwohnung mit  großem Balkon nach Süden und Ausblick auf die Karnischen Alpen."/>
                        <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaHelm) }}
                            />
                        
                    </>
    
                )
                case 'typeE':
                    return(
                        <>
                            <meta name="description" content="Luxuriöse Ferienwohnung mit großem Balkon nach Süden. 2 getrennte Bäder und Infrarotkabine"/>
                            <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaDreiZinnen) }}
                                />
                            
                        </>
        
                    )
                default: 
                return(
                    <>
                        <meta name="description" content="Große sonnige Ferienwohnung mit  großem Balkon nach Süden und Ausblick auf die Karnischen Alpen."/>
                        <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(constSchemaHelm) }}
                            />
                        
                    </>
                )
    }
            
            
}

export default HeadDetails;