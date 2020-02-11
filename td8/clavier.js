import React from 'react';
import ReactDOM from 'react-dom';

import './lettre.js';


const Clavier({letters, usedLetters, onClick})=>
	<div className="Clavier"> 
		letters.map(letter=>(
			<Lettre 
				lettre={letter}
				feedback={usedLetters.has(letter) ? "hidden" : "visible"}
				onClick={()=>onClick(lettre)} />
			))
	</div>
})

export default Clavier