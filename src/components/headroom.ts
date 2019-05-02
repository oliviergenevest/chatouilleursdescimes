import { css } from 'styled-components'
import theme from '../../config/theme'


const transition = {
 transition: 'all 0.35s ease-in-out',
}

const headroomCss = css`
  .headroom-wrapper {
  
  position:relative;
    width: 100%;
    z-index: 2000;
  /*  height:200px;*/
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
   /* padding: 1rem 1.5rem;*/
    svg {
     
      g {
        fill: ${theme.colors.white};
      }
    }
  }
  .headroom--unfixed {
    position: fixed;
    transform: translateY(0);
    transition: ${transition.transition};
    

  }
  .headroom--scrolled {
    transition: ${transition.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${transition.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${transition.transition};
    background-color: ${theme.colors.white};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
        color: ${theme.colors.black};
        &:hover {
          border-color: ${theme.colors.black};
          color: ${theme.colors.black};
        }
        &:focus {
          color: ${theme.colors.black};
        }
      }
    }
   /* padding-top: 0.75rem;
    padding-bottom: 0.75rem;*/
    svg {
     
      g {
        fill: ${theme.colors.black};
      }
    }
    span {
      color: ${theme.colors.black};
    }
  }
`

export default headroomCss