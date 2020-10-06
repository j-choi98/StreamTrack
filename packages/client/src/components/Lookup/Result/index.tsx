import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Card from '../../Card';
import Container from '../../Container';

interface Props
  extends RouteComponentProps<{
    name: string;
  }> {}

export default function Result(props: Props) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 mx-5 my-5">
        <Card title={props.match.params.name}></Card>
      </div>
    </Container>
  );
}
