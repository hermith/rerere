import * as React from 'react';
import { Component } from 'react';

interface UserProps {
  routeParams: {
    username: string;
  };
}

export const User = (props: UserProps) => {
  return <div>User view: {props.routeParams.username}</div>;
};
