import React, { useState } from 'react';
// @ts-ignore
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { add } from "@/store/actions/test"
import { Button } from 'antd-mobile';

const style = {
  test: {
    width: 30,
    height: 30,
    marginLeft: 30
  },
  border: {
    marginTop: 30,
    border: `1px solid #ccc`
  }
}

function Me(props: any) {
  console.log(props)
  return (<div>Me
    <div className="hairline-top" style={{...style.test}}></div>
    <div style={{...style.test, ...style.border}}></div>
    <Link to="/about">关于我</Link>
    <Link to="/me/1">详情</Link>
    <div>
      <span>{props.count}</span>
      {/*<Button onClick={e => props.add()}>+</Button>*/}
    </div>
  </div>)
}

const mapState = (state: any) => {
  return {
    count: state.test
  }
}

const mapActions = (dispatch: any) => {
  return {
    add: (id: any) => dispatch(add(id))
  }
}

export default connect(mapState, mapActions)(Me);