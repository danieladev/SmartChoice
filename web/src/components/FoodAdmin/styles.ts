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
    border-bottom-width: thin;

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

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;
    border-width: 5px;
    border-style: solid;
    border-color: #AD1D3F;

    div.icon-container {
      display: flex;

      button {
        background: #F9F9F9;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 260px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }
    }
  }
`;
