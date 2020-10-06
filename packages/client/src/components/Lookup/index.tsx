import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Card from '../Card';
import Container from '../Container';

interface FormData {
  username: string;
}

export default function Lookup() {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const history = useHistory();

  const onSubmit = handleSubmit(({ username }) => {
    history.push(`/lookup/${username.trim()}`);
  });

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 mx-5 my-5">
        <Card title="Lookup">
          {errors.username && (
            <div
              className="mb-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
              role="alert"
            >
              Invalid Twitch username.
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div className="w-full block">
              <div className="mb-4">
                <label className="block uppercase text-2xl text-lessbrightred mb-2">
                  Twitch Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  type="text"
                  ref={register({ required: true, pattern: /^[a-z0-9]+$/i })}
                />
              </div>
              <div>
                <button className="border-2 text-lessbrightred hover:bg-brightred hover:text-white focus:outline-none border-lessbrightred ml-3 py-2 px-16 rounded">
                  Search
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}
