import React from 'react';
import { useState } from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}  
      </li>
    );
  });
  
  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

const Folder = ({folders}) => {
  const [currentTab, setCurrentTab] = useState(0)
  // const selectTab = (num) => {
  //   setCurrentTab(num);
  // }


  const titles = folders.map((folder) => folder.title);
  
  return (
    <section className="tabs-section">
      <h1>Tabs</h1>
      <div className='tabs'>
        <Headers
          titles={titles}
          currentTab={currentTab}
          selectTab={setCurrentTab}
        />
        <div className='tab-content'>
          {folders[currentTab].content}
        </div>
      </div>
    </section>
  );


  
}

// class Folder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTab: 0
//     };
//   }
  
  // selectTab = (num) => {
  //   this.setState({ currentTab: num });
  // }
  
//   render() {
//   }
// }

export default Folder;