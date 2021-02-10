import React, {Component} from "react";
import smileLogo from './haroldSmile.jpg';
import notSmileLogo from './haroldNotFunny.jpg';


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            funnyText: "Hi, type something to see if your meme is funny",
            showMessage: false




        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheck = this.handleCheck.bind(this)


    }

    showMessage = (bool) => {
        this.setState({
          showMessage: bool
        });
      }


    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })


    }


    handleSubmit(event) {

        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
        this.setState({
            bottomText: "",
            topText:"",
            funnyText: ""

        })



    }

    handleCheck(event) {
        event.preventDefault()
       const isFunny = (this.state.topText + this.state.bottomText);
       if (isFunny) {

        this.setState({
            funnyText: "Your meme stinks",
          // harold_serious here goes your condition

        })


        } else {
       this.setState({
           funnyText: "Finish Your meme",

    })

    }


    }



    render() {



        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Next</button>
                </form>
                <div className="meme">

                <img src={notSmileLogo} id="harold_serious" alt="harold serious" width="20%" height="20%" />
                    <img src={this.state.randomImg} alt="" />
                    <img src={smileLogo} id="harold_smile" alt="harold smiles" width="20%" height="20%" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

                <p>{this.state.funnyText} </p>
                <button className="evBtn" name="checkBtn" onClick={this.handleCheck}>Check</button>
        <button onClick={this.showMessage.bind(null, true)}>show</button>
        <button onClick={this.showMessage.bind(null, false)}>hide</button>
        { this.state.showMessage && (<div>hello world!</div>) }


            </div>

        )
    }
}

export default MemeGenerator