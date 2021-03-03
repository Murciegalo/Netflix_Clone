import React from 'react'
import { Container,
  Base,
  Title,
  Text,
  SmallText,
  Link,
  Input,
  Submit
} from './styles'

export default function Form({ children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Form.Base = function FormBase({children, ...restProps}) {
  return <Base {...restProps}>
    {children}
  </Base>
}

Form.Title = function FormTitle({children, ...restProps}) {
  return <Title {...restProps}>
    {children}
  </Title>
}

Form.Text = function FormText({children, ...restProps}) {
  return <Text {...restProps}>
    {children}
  </Text>
}

Form.SmallText = function FormSmallText({children, ...restProps}) {
  return <SmallText {...restProps}>
    {children}
  </SmallText>
}

Form.Link = function FormLink({children, ...restProps}) {
  return <Link {...restProps}>
    {children}
  </Link>
}

Form.Input = function FormInput({children, ...restProps}) {
  return <Input {...restProps}>
    {children}
  </Input>
}

Form.Submit = function FormSubmit({children, ...restProps}) {
  return <Submit {...restProps}>
    {children}
  </Submit>
}