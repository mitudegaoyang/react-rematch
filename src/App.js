import React from 'react';
import { connect } from 'react-redux'
import { Componet } from './componet';

class App extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    increment () {
        this.props.increment(this.props.count.num + 1)
    }
    // if切换
    toggle () {
        this.props.toggle(!this.props.count.flag)
    }
    // show 切换
    toggleShow () {
        this.props.toggleShow(!this.props.count.flagShow)
    }
    // 子组件传值
    handleClick (msg, name) {
        console.log('子组件传回父组件')
        console.log(msg, name);
    }

    // handleClick = (msg, name) => {
    //     console.log('子组件传回父组件')
    //     console.log(msg, name);
    // }

    render() {
        return (
            <div>
                <h2>
                    count is <b style={{backgroundColor: '#ccc'}}>{this.props.count.num}</b>
                </h2>
                ​
                <h2>
                    <button onClick={this.increment.bind(this)}>增加count</button>
                    {' '}
                    <em style={{backgroundColor: 'yellow'}}>(normal dispatch)</em>
                </h2>
                ​
                <h2>
                    <button onClick={this.toggle.bind(this)}>类v-if实现</button>
                    <button onClick={this.toggleShow.bind(this)}>类v-show实现</button>
                    {' '}
                    <em style={{backgroundColor: 'yellow'}}>(normal dispatch)</em>
                </h2>

                <h2>
                    {'v-if当前值'}{this.props.count.flag ? 'true' : 'false'}
                </h2>
                <h2>
                    {'v-show当前值'}{this.props.count.flagShow ? 'true' : 'false'}
                </h2>

                <Componet
                    title="仿v-if、v-show"
                    msg="仿v-if、v-show"
                    v-if={this.props.count.flag}
                    v-show={this.props.count.flagShow}
                    // onClick={this.handleClick.bind(this)}
                    // onClick={this.handleClick}
                    onClick={()=>this.handleClick}
                />

                <h2>
                    <button onClick={this.props.asyncIncrement}>
                        Increment count (delayed 1 second)
                    </button>
                    {' '}
                    <em style={{backgroundColor: 'yellow'}}>(an async effect!!!)</em>
                </h2>
            </div>
        )
    }
}

const mapState = state => ({
  count: state.count,
})

const mapDispatch = dispatch => ({
  increment: dispatch.count.increment,
  toggle: dispatch.count.toggle,
  toggleShow: dispatch.count.toggleShow,
  asyncIncrement: dispatch.count.asyncIncrement,
})

export default connect(
    mapState,
    mapDispatch
)(App)
