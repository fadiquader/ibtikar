import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1
  }).pipe(interpolate(from, to));

export const Polygon = posed.polygon({
  firstInit: {
    opacity: 0,
    scale: 0
  },
  first: {
    opacity: 1,
    scale: 1,
    decay: 300,
  },
  secondInit: {
    x: 500,
    opacity: 0,
    translate: 100
  },
  second: {
    translate: 0,
    opacity: 1,
    x: 0
  }
});

export const SVG = posed.svg({
  topInit: {
    y: -100,
    opacity: 0
  },
  topEnter: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 100,
    y: 0
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
  },
  logo: {
    x: 0,
    y: 0,
    opacity: 1,
    decay: 500
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
    delayChildren: 200,
    staggerChildren: 100
  },
  enter: {
    x: 0,
    opacity: 1,
    delayChildren: 400,
  }
});
export const Li = posed.li({
  hoverable: true,
  draggable: true,
  hover: {
   scale: 1.2
  },
  init: {
    // y: -50, opacity: 0,
    scale: 1,
    delay: ({ i }) => i * 200
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: ({ i }) => i * 200
  },
  drag: { scale: 1.2 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring' }
  }
});

