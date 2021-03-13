import React from 'react'

class Headers extends React.Component {
  constructor(props) {
  }
  // react 生命周期
  // componentWillMount () {
  //   console.log('初始化调用，只调用一次')
  // }
  // componentDidMount() {
  //   console.log('组件渲染后调用，只调用一次')
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('组件初始化时不调用，组件接收新的props时调用')
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('组件接收新的state或者props， 返回false则组织更新')
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('组件初始化时不调用，只有在组件将更新时调用，此时可以修改state')
  // }
  // componentDidUpdate() {
  //   console.log('组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点')
  // }
  // componentWillMount() {
  //   console.log('组件卸载时调用， 事件监听和定时器需要在此时进行清除')
  // }
  render() {
    // render react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行，此时可以修改state
    return (
      <div>
      </div>
    )
  }
}
export default Headers