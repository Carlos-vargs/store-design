import React from 'react';
import { Link } from 'react-router-dom'

export default function AppIcon() {
  return (
    <React.Fragment>
      <div className="ml-4 flex lg:ml-0">
        <Link to="/">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt="logo"
          />
        </Link>
      </div>
    </React.Fragment>
  );
}
