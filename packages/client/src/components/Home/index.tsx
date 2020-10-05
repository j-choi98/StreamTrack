import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeQuery } from './__generated__/HomeQuery.graphql';
import { QueryRenderer } from 'react-relay';

import Divider from '../Divider';
import Container from '../Container';
import Card from '../Card';
import environment from '../../environment';

export default function Home() {
  const query = graphql`
    query HomeQuery {
      getStreamerCount
    }
  `;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 mx-5 mb-5">
        <Card title="Statistics">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl text-lessbrightred uppercase break-words">
                Number of Channels Being Tracked
              </div>

              <div className="text-6xl text-brightred break-words">
                <QueryRenderer<HomeQuery>
                  environment={environment}
                  query={query}
                  variables={{}}
                  render={({ props }) => {
                    if (props) {
                      return props.getStreamerCount;
                    }
                    return <FontAwesomeIcon icon="spinner" spin />;
                  }}
                />
              </div>
            </div>
            <div>
              <div className="text-2xl uppercase text-lessbrightred break-words">
                Number of Total Logs
              </div>

              <div className="text-6xl text-brightred break-words">
                <FontAwesomeIcon icon="spinner" spin />
              </div>
            </div>
          </div>
        </Card>

        <div className="border-2 border-borderred rounded p-4">
          <div className="font-bold text-6xl text-lessbrightred uppercase">
            About
          </div>

          <Divider className="mb-8" />

          <div className="text-gray-400">
            See what streamers a Twitch user is watching by looking up their
            name.
          </div>
        </div>
      </div>
    </Container>
  );
}
