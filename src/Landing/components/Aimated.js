import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import SplitText from 'react-pose-text';

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1
  }).pipe(interpolate(from, to));

export const Polygon = posed.polygon({
  firstInit: {
    opacity: 0,
    scale: 0,
  },
  first: {
    opacity: 1,
    scale: 1,
    decay: 1000,
    delay: 200,
    transition: {
      delay: 500
    }
  },
  secondInit: {
    x: 500,
    opacity: 0,
    translate: 100
  },
  second: {
    translate: 0,
    opacity: 1,
    x: 0,
    decay: 1000,
    transition: {
      delay: 1000
    }
  }
});

export const SVG = posed.svg({
  topInit: {
    y: -100,
    opacity: 0,
  },
  topEnter: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 100,
    y: 0,
    transition: {
      delay: 500
    }
  }
});

export const Path = posed.path({

});

export const LogoSvg = posed.svg({
  hoverable: true,
  init: {
    scale: 1,
  },
  logoInit: {
    x: -1000,
    y: 100,
    opacity: 0,
    transition: {
      x: {type: 'tween'},
      y: (props) => ({type: 'spring'})
    }
  },
  logo: {
    x: 0,
    // y: 0,
    opacity: 1,
    decay: 1000,
    delay: 1000,
    y: { type: 'spring', stiffness: 1000, damping: 15 },
    default: { duration: 600 }
  },
  hover: {
    scale: 1.2,
    transition: {
      type: 'decay',
    }
  }
});

export const Ul = posed.ul({
  init: {
    x: 600,
    opacity: 0,
    staggerChildren: 200,
  },
  enter: {
    x: 0,
    opacity: 1,
    delayChildren: 1000,
    decay: 1000,
    delay: 1200,
    stiffness: 500,
    staggerChildren: 200,
  }
});
export const Li = posed.li({
  hoverable: true,
  draggable: true,
  hover: {
   scale: 1.2
  },
  firstInit: {
    opacity: 0,
  },
  init: {
    scale: 1,
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: ({ i }) => i * 1100
  },
  drag: { scale: 1.2 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring' }
  },
  props: { i: 1 }
});


export const Container = posed.div({
  init: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 300
    }
  }
});

export const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
    transition: {
      delay: 1000
    }
  }
};
