# how to use

https://www.styled-components.com/docs/basics

# basic

```jsx
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

## custom

```jsx
const BasicNotification = styled.p`
    background: lightblue;
    padding: 5px;
    margin: 5px;
    color: black;
`;

const SuccessNotification = styled(BasicNotification)`
    background: lightgreen;
`;

const ErrorNotification = styled(BasicNotification)`
    background: lightcoral;
    font-weight: bold;
`;

class Application extends React.Component {
  render() {
    return (
      <div>
        <BasicNotification>Basic Message</BasicNotification>
        <SuccessNotification>Success Message</SuccessNotification>
        <ErrorNotification>Error Message</ErrorNotification>
      </div>
    )
  }
}
```
