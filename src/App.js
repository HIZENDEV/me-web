import React, { Component } from 'react';

// Static components
import Slideshow from './components/Slider';
import Header from './components/Header'
import Pagination from './components/Pagination'
import Hamburger from './components/Hamburger'
import Menu from './components/Menu'

// Content screens
import About from './screens/About'
import Skills from './screens/Skills'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

// Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: {
        current: 1,
        total: 4
      },
      isActiveMenu: false
    }
    this.switchScreens = this.switchScreens.bind(this)
    this.selectScreens = this.selectScreens.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({isActiveMenu: !this.state.isActiveMenu})
  }

  switchScreens(action) {
    const GO_LEFT = 0
    const GO_RIGHT = 1
    let screens = this.state.screens
    const isLastScreen = action === GO_RIGHT && screens.current === screens.total
    const isFirstScreen = action === GO_LEFT && screens.current === 1

    if (isLastScreen || isFirstScreen) return

    action === GO_RIGHT ? screens.current++ : screens.current--

    this.setState({ screens: screens })
  }

  selectScreens(num) {
    let screens = this.state.screens
    screens.current = num
    this.setState({ screens: screens})
    this.toggleMenu()
  }

  render() {
    let currentSection = null
    switch (this.state.screens.current) {
      default:
        currentSection = <About />
        break;
      case 2:
        currentSection = <Skills />
        break;
      case 3:
        currentSection = <Projects />
        break;
      case 4:
        currentSection = <Contact />
        break;
    }

    let isActivated = {}

    this.state.isActiveMenu ? isActivated = {display: 'block'} : isActivated = {display: 'none'}

    return (
      <div className="App">
        <Hamburger toggle={this.toggleMenu} />
        <Menu selectScreens={this.selectScreens}  isActive={isActivated}/>
        <div className="LeftPan">
          <Slideshow bookmark={this.bookmark}/>
        </div>
        <div className="RightPan">
          <Header />
          <div className="Content">
            {currentSection}
          </div>
          <Pagination switch={this.switchScreens} state={this.state.screens.current} total={this.state.screens.total} />
        </div>
      </div>
    );
  }
}

export default App;
