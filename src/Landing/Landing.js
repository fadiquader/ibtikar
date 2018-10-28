import React, { Component } from 'react';
import './Landing.css';
//
import {TopTraingle, Logo, BottomTraingle, Ul, Li} from './components';

const socials = {
  facebook: {
    link: "",
  },
  twitter: {
    link: "https://twitter.com/ibtikarom"
  },
  insta: {
    link: ""
  },
  youtube: {
    link: ""
  },
};

const services = {
  smartApps: {
    link: ""
  },
  webApps: {
    link: ""
  },
  vr: {
    link: ""
  },
  cartoon: {
    link: ""
  },
};

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <TopTraingle />
        <div className="landing-content">
          <div>
            <Logo />
          </div>
          <div >
            <div className="text-center">
              <p>
                <a href="https://twitter.com/ibtikarom" target="_blank">
                  @ibtikarom
                </a>
              </p>
              <Ul
                animateOnMount={true}
                initialPose="init"
                pose="enter"
                className="unstyled-list text-center">
                {
                  Object.keys(socials).map((key, i) => {
                    return (
                      <Li i={i} initialPose="init" pose="enter" key={key}>
                        <a href={socials[key]} target="_blank">
                          <img src={require(`../assets/svg/${key}.svg`)} alt={key}/>
                        </a>
                      </Li>
                    )
                  })
                }
              </Ul>
            </div>
            <div className="text-center">
              <p>Services</p>
              <Ul
                animateOnMount={true}
                initialPose="init"
                pose="enter"
                className="unstyled-list text-center">
                {
                  Object.keys(services).map((key, i) => {
                    return (
                      <Li i={i} initialPose="init" pose="enter" key={key}>
                        <img src={require(`../assets/svg/${key}.svg`)} alt={key}/>
                      </Li>
                    )
                  })
                }
              </Ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <BottomTraingle />
          <p className="soon">Will be back</p>
        </div>
      </div>
    );
  }
}

export { Landing };
