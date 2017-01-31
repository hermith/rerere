import * as React from 'react';
import { Component } from 'react';

interface SubProps {
  routeParams: {
    subname: string;
  };
}

export const Sub = (props: SubProps) => {
  return <div>Sub view: {props.routeParams.subname}</div>;
};
