import styled from "styled-components";

function BurgerButton({ handleClick, clicked }) {
  return (
    <Wrapper onClick={handleClick} clicked={clicked}>
      <div className={`icon nav-icon-5 ${clicked ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Wrapper>
  );
}

export default BurgerButton;

const Wrapper = styled.div`
  .nav-icon-5 {
    width: 35px;
    height: 30px;
    margin: 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-icon-5 span {
    background-color: white;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s;
    width: 100%;
    height: 4px;
  }

  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }

  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
  }

  .nav-icon-5 span:nth-child(3) {
    top: 26px;
    left: 0px;
  }

  .nav-icon-5.open span:nth-child(1) {
    top: 13px;
    transform: rotate(45deg);
  }

  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }

  .nav-icon-5.open span:nth-child(3) {
    top: 13px;
    transform: rotate(-45deg);
  }
`;
