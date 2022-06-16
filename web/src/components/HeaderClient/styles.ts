import styled from 'styled-components';

export const Container = styled.div`
  background: #F9F9F9;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border-width: 5px;
          border-style: solid;
          border-color: #AD1D3F;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            font-size: 50px;
            display: flex;
            padding: 1px 20px;
            color: #AD1D3F;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
