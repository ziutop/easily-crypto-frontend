import styled from "styled-components";

export const RegisterForm = styled.form`
  width: 360px;
  height: 750px;
  margin: auto;

  background-color: #ffffffcc;
  border-radius: 10px;
  box-shadow: 0 0 20px #303030;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h3 {
    font-size: 40px;

    font-family: "kanit", sans-serif;
    font-weight: 600;
    font-style: italic;

    margin: 0 0 20px;

    color: #ffee00;
    text-shadow: 0 0 3px #000;
  }

  label {
    width: 80%;
    font-family: "kanit", sans-serif;
    font-weight: 500;
    margin-bottom: 5px;
  }

  button {
    width: calc(80% + 10px);
    background-color: #79e079;

    color: #fff;
    font-family: "kanit", sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 25px;
    padding: 3px 0;

    &:hover {
      filter: brightness(0.8);
    }
  }

  span {
    margin-top: 10px;
    font-size: 14px;

    a {
      font-weight: bold;
    }
  }
`;

export const InputRegisterForm = styled.input`
  width: 80%;
  height: 30px;

  margin: 0 0 10px;

  border-style: none;
  border-radius: 3px;

  padding-left: 10px;

  font-family: "kanit", sans-serif;
  font-weight: 400;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
