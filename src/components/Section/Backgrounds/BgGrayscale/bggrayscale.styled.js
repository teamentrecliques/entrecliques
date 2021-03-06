import styled from 'styled-components';
import Breakpoints from '../../../../styles/global.breakpoints';

export const BgGrayscale = styled.div`
  background: linear-gradient(337.55deg, #141414 0%, #2b2b2b 100%);
  top: 0;
  height: 100vh;
  min-height: 768px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 0;

  .arrows {
    animation: 10s infinite alternate fade;
    height: 100%;
    margin-left: 50vw;
    width: 50vw;
  }

  @media screen and ${Breakpoints.mobileSm} {
    height: auto;
    min-height: 120vh;

    .arrows {
      animation: 10s infinite alternate fade-mobile;
      width: 100%;
      margin-left: 0;
    }
  }

  @keyframes fade-mobile {
    from {
      opacity: 0.1;
    }

    60% {
      opacity: 0.6;
    }

    to {
      opacity: 0.1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.2;
    }

    60% {
      opacity: 1;
    }

    to {
      opacity: 0.2;
    }
  }
`;
