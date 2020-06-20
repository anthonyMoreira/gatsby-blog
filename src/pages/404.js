import React from 'react'
import Layout from '../components/layout'

class PageNotFound extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Oops !</h1>
        <p>404 ! Page was not found</p>
      </Layout>
    )
  }
}
export default PageNotFound
