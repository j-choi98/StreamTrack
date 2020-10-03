import React from 'react';
import Divider from '../Divider';
import Container from '../Container';
import Card from '../Card';

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 mx-5 my-5">
        <Card title="Statistics">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl text-lessbrightred uppercase break-words">
                Number of Channels Being Tracked
              </div>

              <div className="text-6xl text-brightred break-words">
                100,000,000,000
              </div>
            </div>
            <div>
              <div className="text-2xl uppercase text-lessbrightred break-words">
                Number of Total Logs
              </div>

              <div className="text-6xl text-brightred break-words">
                100,000,000,000
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
