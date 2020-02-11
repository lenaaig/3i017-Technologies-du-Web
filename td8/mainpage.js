class MainPage extends Component{
	constructor(props){
		super(props);
		this.state={letters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		mot:'toto';
		usedLetters:newSet();
		score:0;
		etat:"perdu";
		}
	}

	handleClick(letter){
		const t=this.state.usedLetters
		this.setState({usedLetters:t});
		this.setState({score=this.state.score+1});
	}


	//message d'alerte


	displayWord(mot, usedLetters){
		return mot.replace(/\w/g,(letter => (usedLetters.has(letter))? letter : "*" ));
	}


	render(){
		return(
			<div className='main'>
			<p className="score"> {this.state.score}"-"{this.state.etat} </p>

			<p className="mot"> {this.displayWord(this.state.mot, this.state.usedLetters)} </p>

			<Clavier
				letters={this.state.lettre}
				usedLetters={this.state.usedLetters}
				onClick={this.handleClick}
			</div>

			);
	}

}