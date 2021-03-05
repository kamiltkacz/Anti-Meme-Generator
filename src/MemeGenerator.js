import React, { Component } from "react";
import smileLogo from "./haroldsmileprop.jpg";
import notSmileLogo from "./haroldNotFunny.jpg";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/3pnmg.jpg",
      allMemeImgs: [],
      funnyText: "Hi, type something to check Harold's reaction",
      showHaroldSerious: false,
      showHaroldSmile: false,
      seeHarReact: "Type the meme and see Harold's instant reaction",
      memeEval: " Here's what Harold thinks:",
      notSmileLogo: "true",
      hideTruth: "Sorry, he's hard to please",
      checkAgain: "Check again, maybe he misunderstood"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showHaroldSerious = (bool) => {
    this.setState({
      showHaroldSerious: bool,
    });
  };

  showHaroldSmile = (bool) => {
    this.setState({
      showHaroldSmile: bool,
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
    this.setState({
      bottomText: "",
      topText: "",
      funnyText: "",
      hideTruth: false,
      checkAgain: "I think you got the point"
    });
  }

  render() {
    const isFunny = this.state.topText && this.state.bottomText;

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
        <p>{isFunny ? this.state.memeEval : this.state.seeHarReact}</p>
        <div id="smileHarold" hidden={this.state.bottomText}>
          <img src={smileLogo} id="harold_smile" alt="harold smiles" />
        </div>

        <div
          id="seriousHarold"
          hidden={!this.state.topText + !this.state.bottomText}
        >
          <img src={notSmileLogo} id="harold_serious" alt="harold serious" />
        </div>
        <div>
          <button
            id="checkAgain"
            onClick={this.showHaroldSerious.bind(null, true)}
            hidden={!this.state.topText + !this.state.bottomText}
          >
             {this.state.checkAgain}
          </button>
        </div>

        {this.state.showHaroldSerious ? (
          <button
            id="hideTruth"
            onClick={this.showHaroldSerious.bind(null, false)}
            hidden={!this.state.topText + !this.state.bottomText}
          >
           {this.state.hideTruth}
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MemeGenerator;
