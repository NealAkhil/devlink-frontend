import React from "react";

// importing store
import {store} from '../../store/index'

import render from '../../../src/index'
 // dispatching the actions
  function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
    store.subscribe(render);
  }
  function setTechnology (text) {
    return {
       type: "SET_TECHNOLOGY",
       text: text
     }
  }
  
  const Explore= ({ technologies }) => (
  <div className="mt-5">
    
    {
        technologies.map((tech, i) => (
      <button
        className="ml-2 primary btn"
        data-tech={tech}
        key={`btn-${i}`}
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
      ))}
  </div>
);

export default Explore;