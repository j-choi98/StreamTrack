import React from 'react';
import Header from '../Header';
import Divider from '../Divider';
import Container from '../Container';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <Container className="my-auto text-center font-poppins">
        <div className="grid grid-cols-1 gap-8 mx-5 my-5">
          <div className="border-2 border-teal-400 rounded p-4">
            <p className="font-bold uppercase text-5xl md:text-6xl">
              Statistics
            </p>

            <Divider className="mb-8" />

            <div className="grid grid-cols-2 gap-8">
              <div className="border-2 border-teal-400 rounded p-4">
                <div className="text-2xl uppercase break-words">
                  Number of Channels Being Tracked
                </div>

                <Divider className="mb-3 mt-3" />

                <div className="text-6xl break-words">100,000,000,000</div>
              </div>
              <div className="border-2 border-teal-400 rounded p-4">
                <div className="text-2xl uppercase break-words">Number of Total Logs</div>

                <Divider className="mb-3 mt-3" />

                <div className="text-6xl break-words">100,000,000,000</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-teal-400 rounded p-4">
            <div className="font-bold text-6xl uppercase">About</div>

            <Divider className="mb-8" />

            <div>
              See what streamers a Twitch user is watching by looking up their
              name.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}