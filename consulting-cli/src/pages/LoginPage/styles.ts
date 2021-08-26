import styled from 'styled-components';

const FormPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 10%;
    font-weight: 100;
    color: #404040;
  }
`;

const Form = styled.form`
 
  padding: 1.5rem;
  width: 30%;
  margin: 3rem auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #fafbfc;
  border: .1rem solid #e1e4e8;
  border-radius: 5px;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    width: 100%;
    font-size: 1rem;
    padding: .5rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
    
    border-radius: 5px;
    border: 1px solid #e1e4e8;

    :focus{
      outline: none;
    }
  }

  button {
    width: 100%;
    font-size: 1rem;
    font-weight: bolder;
    padding: .5rem 3rem;

    border-radius: 5px;
    border-style: none;

    cursor: pointer;
    background: #06f;
    color: #fff;

    :hover{
      background: #1a75ff;
    }
  }
`;

export { FormPage, Form };