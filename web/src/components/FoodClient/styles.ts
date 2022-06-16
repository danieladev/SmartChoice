import styled, { css } from 'styled-components';

interface IFoodPlateProps {
}

export const Container = styled.div<IFoodPlateProps>`
border-radius: 8px;

header {
  border-radius: 8px 8px 0px 0px;
  height: 250px;
  overflow: hidden;
  transition: 0.3s opacity;
  text-align: center;


  img {
    pointer-events: none;
    user-select: none;
    height: 250px;
  }
}

  section.body {
    padding: 30px;
    border-width: 5px;
    border-style: solid;
    border-color: #AD1D3F;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #AD1D3F;

      b {
        font-weight: 600;
      }
    }
  }
`;
