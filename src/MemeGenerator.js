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
            funnyText: "Hi, type something to check Harold's reaction",
            showHaroldSerious: false,
            showHaroldSmile: false,
            seeHarReact: "Create the meme and see Harold's reaction",
            memeStinks: " Your meme is foul",
            tryTit: ""



        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       // this.handleCheck = this.handleCheck.bind(this)
     //  this.hideAll = this.hideAll.bind(this)


    }

    // showHaroldSerious = (bool) => {

    //     this.setState({
    //       showHaroldSerious: bool
    //     });


    //   }

    //   showHaroldSmile = (bool) => {

    //     this.setState({
    //       showHaroldSmile: bool
    //     });

    //   }

    // checkMe = () => {

    //     this.setState({
    //       checkBtn: false
    //     });
    //   }



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


    render() {

       const isFunny = (this.state.topText && this.state.bottomText);


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


                   <p>
                { isFunny ?  this.state.memeStinks  :  this.state.seeHarReact }

                  </p>
                  <div id="smileHarold" hidden={this.state.bottomText} >
                   <img src={smileLogo} id="harold_smile" alt="harold smiles" width="20%" height="20%" />
                   </div>
                   <div id="seriousHarold" hidden={!this.state.topText + !this.state.bottomText}>
                   <img src={notSmileLogo} id="harold_serious" alt="harold serious" width="20%" height="20%"  />
                   </div>
<<<<<<< HEAD
                   <p> para para</p>
=======
                   <p>A paragraph</p>
>>>>>>> 35c85bb21021d5d007c64aba19da6b3090930451


        {/* <button onClick={this.showHaroldSerious.bind(null,true)} hidden={!this.state.topText + !this.state.bottomText}>Check</button>
        <button onClick={this.showHaroldSerious.bind(null,false)} hidden={!this.state.topText + !this.state.bottomText} >HideCheck</button>
        <button onClick={this.showHaroldSmile.bind(null,true)} hidden={!this.state.topText + !this.state.bottomText}>Check again</button>
        <button onClick={this.showHaroldSmile.bind(null,false)} hidden={!this.state.topText + !this.state.bottomText} >HideCheckagain</button> */}



        {/* {
           this.state.showHaroldSerious ? <img src={smileLogo} id="harold_smile" alt="harold smiles" width="20%" height="20%" style={{display: 'block'}}  /> :

           <img src={notSmileLogo} id="harold_serious" alt="harold serious" width="20%" height="20%" style={{display: 'none'}} />

       }


         {
            this.state.showHaroldSmile ? <img src={notSmileLogo} id="harold_serious" alt="harold serious" width="20%" height="20%" style={{display: 'block'}}/> :

            <img src={smileLogo} id="harold_smile" alt="harold smiles" width="20%" height="20%" style={{display: 'none'}}/>
        } */}







            </div>

        )
    }
}

export default MemeGenerator