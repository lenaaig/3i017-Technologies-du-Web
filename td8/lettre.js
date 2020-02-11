import React from 'react';
import ReactDOM from 'react-dom';

const Lettre = ({lettre, feedback, onclick})=>{ 	//composant non fonctionnel qui sert seulement à l'affichage
	<div className={'letter ${feedback}'} onClick={()=>onclick(letter)}> 
		{feedback==='hidden' ? "-" : lettre}
	</div>
}

export default Lettre