import React, { useEffect, useState } from 'react';

export default function Booking(props) {
	// ...existing code...

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 2000); // Adjust the delay time as needed

		return () => clearTimeout(timer);
	}, []);

	// ...existing code...

	return (
		<>
			HELLO WORLD
			<div dangerouslySetInnerHTML={{ __html: myLanguage === 'de' ? 'DE' : myLanguage === 'en' ? 'EN' : '' }}/>
			{myLanguage === 'de' && isLoaded && <div dangerouslySetInnerHTML={{ __html: htmlString }}/>}
		</>
	);
}
	{myLanguage === 'en' && <div dangerouslySetInnerHTML={{ __html: htmlStringEN }}/>}
	</>
)
	
};


  



 
