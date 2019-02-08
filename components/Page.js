import React from 'react';

export default function Page(props) {
  return (
    <div className="page">
      {props.children}
    </div>
  )
}