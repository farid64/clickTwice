import React, { Component } from 'react';

import Header from "../header";
import Nav from "../NavBar";
import Main from "../mainBody";
import Item from "../Item";
import Footer from "../Footer";

import data from "../../data.json";

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      score: 0,
      highScore: 0,
      message: "Click the images",
    }
    this.handleItemClick=this.handleItemClick.bind(this);
    this.resetData=this.resetData.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.shuffleItem(this.state.data) });
    console.log(this.state.data);
  };

  shuffleItem(data){
    let i = data.length - 1;
    let temp = {};
    let j = 0;
    while(i>0){
      j = Math.floor(Math.random()*i);
      temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }

    return data;
  };

  resetData(){
    this.state.data.forEach(function(item){
      item.clicked = false;
    });
    this.shuffleItem(this.state.data);
    this.setState({score: 0});
  }

  handleItemClick(id){
    const self = this;
    let score = this.state.score;
    let highScore = this.state.highScore;

    this.state.data.some(function(item){
      if(item.id === id){
        if(!item.clicked){
          item.clicked = true;
          score++;
          self.setState({data: self.shuffleItem(self.state.data), score: score, message: "Correct"});
        }else{
          if(score > highScore){
            highScore = score;
          }
          self.setState({highScore: highScore, message: "Incorrect"});
          self.resetData();
        }
      }
      return item.id === id;
    });
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} message={this.state.message}/>
        <Header />
        <Main>
          {this.state.data.map(item => (
            <Item
              id={item.id}
              key={item.id}
              clickItem={this.handleItemClick}
              image={item.image}
            />
          ))}
        </Main>
        <Footer />
      </div>
    )
  }
};

export default Game;