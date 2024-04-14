import {Component} from 'react'

import {
  AppContainer,
  TextContent,
  Heading,
  TextContainer,
  Paragraph,
  Input,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {
    userInput: '',
    buttonClick: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prev => ({buttonClick: !prev.buttonClick}))
  }

  render() {
    const {userInput, buttonClick} = this.state
    const buttonText = buttonClick ? 'Save' : 'Saved'

    return (
      <AppContainer>
        <TextContent>
          <Heading>Editing Text Input </Heading>
          <TextContainer>
            {buttonClick ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </TextContainer>
        </TextContent>
      </AppContainer>
    )
  }
}

export default TextInput
