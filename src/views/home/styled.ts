import styled from 'styled-components'

const HomeWrapper = styled.div`
  .home-wrapper {
    width: ${(props) => props.theme.containerWitdh};
    margin: 0 auto;

    .area-content {
      margin-bottom: 16px;
    }
  }
`

export default HomeWrapper
