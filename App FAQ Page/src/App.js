import React from 'react';
import Header from './components/Header';
import Toggle from './components/Toggle';
import './App.css';

function App () {
    
  const [data, setdata] = React.useState([
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet dui lacus?',
      answer: 'Praesent ut convallis augue.',
      open: false
    },
    {
      question: 'Vestibulum rhoncus eros sapien, at accumsan nunc euismod vitae?',
      answer: 'Aenean quis justo non nunc tincidunt iaculis.',
      open: false
    },
    {
      question: 'Aliquam erat volutpat vestibulum ut libero augue?',
      answer: 'Duis vitae turpis odio.',
      open: false
    },
    {
        question: 'Praesent molestie tristique lacinia donec semper sagittis nisl?',
        answer: 'Nec blandit augue dictum sed.',
        open: false
    },
    {
        question: 'Mauris maximus nec ipsum ac tincidunt?',
        answer: 'Proin at purus ligula. Sed justo lorem.',
        open: false
    }
  ]);

  const classToggle = index => {
    setdata(data.map((item, i) => {
      if (i === index) {
        item.open = !item.open
      } else {
        item.open = false;
      }

      return item;
    }))
  }

  return (
    <div className="App">
      <Header />
      <div className="box">
        {data.map((faq, i) => (
          <Toggle faq={faq} index={i} classToggle={classToggle} />
        ))}
      </div>
    </div>
  );
}

export default App;
