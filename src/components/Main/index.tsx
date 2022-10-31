import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="imagem de um atomo e react avançado ao lado"
    ></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Desenvolvedor sentado em frente a um computador"
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
