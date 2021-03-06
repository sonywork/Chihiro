/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Co,Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2017/08/20        Tang Xiaoji
 */

'use strict';

import React from 'react';
import {Layout, Input, Icon, Button} from 'antd';
import {browserHistory} from 'react-router';

import {color, image, dimension} from '../../resource';
import {msg, utils} from '../../utils';
import {route} from '../../config';

import {connect} from 'react-redux';
import {login} from '../../actions';

class ManageLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
    }
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    let {width, height} = this.props;

    return (
      <Layout
        style={{
          width: width - dimension.main_menu_width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.white
        }}>

        <img
          width={80}
          height={80}
          style={{
            borderRadius: 80
          }}
          src={'./user.png'} />

        <Input
          style={{
            marginTop: 30,
            width: width * 0.15 < dimension.critical_pass_input_width ? dimension.critical_pass_input_width : width * 0.15
          }}
          value={this.state.name}
          ref={r => this.input = r}
          size="large"
          onChange={(text) => this.setState({name: text.target.value})}
          suffix={<a onClick={() => this.setState({name: ''})}><Icon type="close" /></a>}
          placeholder="请输入用户名" />

        <Input
          style={{
            marginTop: 10,
            width: width * 0.15 < dimension.critical_pass_input_width ? dimension.critical_pass_input_width : width * 0.15
          }}
          value={this.state.pass}
          type={'password'}
          size="large"
          onChange={(text) => this.setState({pass: text.target.value})}
          suffix={<a onClick={() => this.setState({pass: ''})}><Icon type="close" /></a>}
          placeholder="请输入密码" />

        <Button
          type="primary"
          style={{
            width: width * 0.15 < dimension.critical_pass_input_width ? dimension.critical_pass_input_width : width * 0.15,
            marginTop: 10
          }}
          onClick={this.onLogin}>{"登录"}
        </Button>
      </Layout>
    );
  }

  onLogin = () => {
    let {name, pass} = this.state;

    this.props.dispatch(login(name, pass, () => {
      msg.showMsg(msg.INFO, 'login success');
      location.reload();
    }, (err) => {
      msg.showMsg(msg.INFO, 'login failed');
    }))
  }
}


function select(store) {
  return {
    width: store.screen.width,
    height: store.screen.height
  }
}

export default connect(select) (ManageLogin);
