import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import './Landing.css';
//
import {TopTraingle, Logo, BottomTraingle, Ul, Li, Container, charPoses} from './components';
import SplitText from 'react-pose-text';

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
    tooltip: "Smart Apps"
  },
  webApps: {
    tooltip: "Web Apps"
  },
  vr: {
    tooltip: "AR Apps"
  },
  cartoon: {
    tooltip: "Cartoon"
  },
};

class Landing extends Component {
  render() {
    return (
      <Container
        animateOnMount={true}
        initialPose="init"
        pose="enter"
        className="landing-page">
        <TopTraingle />
        <div className="landing-content">
          <div>
            <Logo />
          </div>
          <div >
            <div className="text-center">
              <p>
                <Container>
                  @ibtikarom
                </Container>
              </p>
              <Ul
                animateOnMount={true}
                initialPose="init"
                pose="enter"
                className="unstyled-list text-center">
                {
                  Object.keys(socials).map((key, i) => {
                    return (
                      <Li i={i} initialPose="firstInit" pose="enter" key={key}>
                        <a href={socials[key]} target="_blank">
                          <img src={require(`../assets/svg/${key}.svg`)} alt={key}/>
                        </a>
                      </Li>
                    )
                  })
                }
              </Ul>
            </div>
            <br/>
            <div className="text-center">
              <p>
                <Container>Services</Container>
              </p>
              <Ul
                animateOnMount={true}
                initialPose="init"
                pose="enter"
                className="unstyled-list text-center">
                {
                  Object.keys(services).map((key, i) => {
                    return (
                      <Li i={i} initialPose="firstInit" pose="enter" key={key}>
                        <Tooltip
                          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                          placement="bottom"
                          destroyTooltipOnHide
                          mouseEnterDelay={0}
                          mouseLeaveDelay={0.1}
                          overlay={services[key].tooltip}
                        >
                          <img src={require(`../assets/svg/${key}.svg`)} alt={key}/>
                        </Tooltip>
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
          <p className="soon">
            <SplitText
              animateOnMount={true}
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              Will be back
            </SplitText>
          </p>

        </div>
      </Container>
    );
  }
}

export { Landing };
