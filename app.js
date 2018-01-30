import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    let dataURLsec = "http://doganco.com/wp-json/myplugin/v1/order";
    fetch(dataURLsec)
      .then(res => res.json())
      .then(res => {
        this.setState({
          sections: res
        })
      })
  }

  render() {
    //let sections = [...this.state.sections];
    //sections.sort((a,b) => a.acf.order - b.acf.order);

    let sections = this.state.sections.map((section, index) => {
      var sectionStyles = {
        backgroundColor: section.acf.section_color,
      }
      var sectionOrder = section.acf.section_order
      return <section key={index} style={sectionStyles} >
      <InViewMonitor
        classNameNotInView='outofview'
        classNameInView='inview'
        toggleClassNameOnInView={true}
      >
          <p>{sectionOrder}</p>
          <p>{section.post_title}</p>
          </InViewMonitor>
        </section>

    });

    return (
      <div className="page_content">
        {sections}
      </div>
    )
  }
}
export default App;
