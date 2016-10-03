import React from 'react'
/* globals window */

export default class Active extends React.Component {
  constructor({ active }) {
    super()
    this.state = { active }
    this.listenToOuterClick = this.listenToOuterClick.bind(this)
    this.setActive = this.setActive.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.listenToOuterClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.listenToOuterClick)
  }

  listenToOuterClick(e) {
    if(!this.refs.component) return
    if(!this.refs.component.contains(e.target) && this.state.active) this.setState({ active: false })
  }

  setActive(active) {
    if(active != this.state.active) this.setState({ active })
  }

  render() {
    let { active } = this.state
    let { children, className, activeClassName } = this.props
    return (
      <div 
        ref="component"
        className={className ? `${className}${active ? ` ${activeClassName}` : ''}` : null}
      >
        {children(active, this.setActive)}
      </div>
    )
  }
}
