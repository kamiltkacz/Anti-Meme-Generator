import React, {Component} from "react";
 import logo from './haroldsmile.jpg';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            notFunnyText: "Your meme is not funny",
            funnyText: "Hi, type something to see if your meme is funny",
            tryText: ""


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEvaluate = this.handleEvaluate.bind(this)


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
            topText:""

        })



    }


    handleEvaluate(event) {
        event.preventDefault()
        const isFunny = (this.state.topText + this.state.bottomText);

        if (isFunny) {

            this.setState({
                funnyText: "Your meme stinks",


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
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>

                <h2>{this.state.funnyText} </h2>


                <img src={logo} alt="" width="50%" height="30%" />
                <button className="evBtn" onClick={this.handleEvaluate}>Evaluate</button>

            </div>
        )
    }
}

export default MemeGenerator