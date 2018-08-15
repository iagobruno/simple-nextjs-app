import { Container, Subscribe } from 'unstated'

export class Store extends Container {
  state = {
    githubUsername: 'google'
  } 

  changeUsername = (newValue) => {
    this.setState(prevState => {
      return { githubUsername: newValue }
    }, function() {
      console.log('novo estado')
    })
  }
}

export const connect = (Component) => props => (
  // Fazer o component atualizar quando um desses container de estado for atualizado.
  // Você pode acessar os dados chamando this.props.store
  // OBSERVAÇÃO: Não recomendado fazer isso nos componentes do tipo página do NextJS, por que se não ele não vai conseguir chamar o "getInitialProps".
  <Subscribe to={[Store]}>
    {(store) => (
      <Component store={store} {...props}>{props.children}</Component>
    )}
  </Subscribe>
)