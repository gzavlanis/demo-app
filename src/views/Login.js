import { authenticate } from 'utils/server'
import React from 'react'
import NotificationAlert from 'react-notification-alert'
import { useHistory } from 'react-router-dom'
import { notificationOptions } from 'utils/helpers'
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'
import _ from 'lodash'

function Login() {
  const notificationAlertRef = React.useRef(null)
  let history = useHistory()

  const handleSubmit = async event => {
    event.preventDefault()
    let { username, password } = document.forms[0]
    if (_.isEmpty(username.value) || _.isEmpty(password.value)) {
      notificationAlertRef.current.notificationAlert(notificationOptions('Wrong username or password', 'danger'))
      return
    }
    let authResponse = await authenticate('/api/users/auth', { username: username.value, password: password.value })
    if (_.isEmpty(authResponse)) {
      notificationAlertRef.current.notificationAlert(notificationOptions('Wrong username or password', 'danger'))
      return
    }
    localStorage.setItem(`s90Cookie`, authResponse.data.token)
    localStorage.setItem(`userInfo`, JSON.stringify(authResponse.data.user))
    let mainRoute = '/operator/dashboard'
    switch (authResponse.data.user.role_id) {
      case 1:
        mainRoute = '/admin/dashboard'
        break
      case 2:
        mainRoute = '/admin/dashboard'
        break
      case 3:
        mainRoute = '/admin/dashboard'
        break
      case 4:
        mainRoute = '/logout'
        break
      case 5:
        mainRoute = '/logout'
        break

      default:
        break
    }

    history.push(`${mainRoute}`)
  }

  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card md="12">
              <Row>
                <Col className="pr-3 pl-3" md="12">
                  <div className="login-image">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img alt="..." className="login-image" src={require('assets/img/favicon.ico')}></img>
                    </a>
                  </div>
                </Col>
              </Row>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-3 pl-3" md="12">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control name="username" type="text" placeholder="Type your username"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-3 pl-3" md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control name="password" type="password" placeholder="Type your password"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col className="pr-3 pl-3" md="12">
                      <Button className=" login-btn" variant="danger" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
