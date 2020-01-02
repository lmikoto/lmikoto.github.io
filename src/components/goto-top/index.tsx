import './index.css';
import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

export default () => {
  return (
    <ScrollUpButton
      ContainerClassName="AnyClassForContainer"
      TransitionClassName="AnyClassForTransition"
    />
  )
}