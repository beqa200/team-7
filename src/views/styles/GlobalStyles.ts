import { createGlobalStyle } from 'styled-components';

import HelveticaNeueLight from '../../assets/fonts/HelveticaNeueThin.otf';
import HelveticaNeueRegular from '../../assets/fonts/HelveticaNeueLight.otf';
import HelveticaNeueMedium from '../../assets/fonts/HelveticaNeueMedium.otf';
import HelveticaNeueBold from '../../assets/fonts/HelveticaNeueBold.otf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueBold}) format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Helvetica Neue';
    }

    body{
        background-color: #f9f9f9;
    }
`;

export default GlobalStyles;