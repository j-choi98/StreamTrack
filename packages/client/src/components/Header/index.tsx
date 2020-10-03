import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import Container from '../Container';

export default function Header() {
  const [navbarMenuOpen, setnavbarMenuOpen] = React.useState(false);

  return (
    <div className="bg-dark">
      <Container>
        <div className="flex">
          <div className="flex text-brightred items-center mx-5">
            <svg
              className="mr-4 fill-current h-8 md:h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <path
                clip-rule="evenodd"
                d="M 100 33.332031 C 33.859375 33.332031 -0.101562 100 -0.101562 100 C -0.101562 100 25.523438 166.667969 100 166.667969 C 167.441406 166.667969 200.089844 100.257812 200.089844 100.257812 C 200.089844 100.257812 167.183594 33.332031 100 33.332031 Z M 100.148438 141.667969 C 75.964844 141.667969 58.484375 123.433594 58.484375 100 C 58.484375 76.558594 75.964844 58.332031 100.148438 58.332031 C 124.332031 58.332031 141.816406 76.558594 141.816406 100 C 141.816406 123.433594 124.332031 141.667969 100.148438 141.667969 Z M 100.148438 75 C 86.332031 75.023438 75.148438 86.609375 75.148438 100 C 75.148438 113.382812 86.332031 125 100.148438 125 C 113.964844 125 125.148438 113.375 125.148438 100 C 125.148438 86.601562 113.964844 74.976562 100.148438 75 Z M 100.148438 75 "
                fill-rule="evenodd"
              />
            </svg>

            <div className="font-bold text-brightred uppercase font-poppins text-3xl md:text-5xl">
              StreamTrack
            </div>
          </div>

          <div className="flex font-poppins ml-auto items-center mx-5">
            <div className="flex md:hidden">
              <div>
                <button
                  onClick={() => setnavbarMenuOpen(!navbarMenuOpen)}
                  className={classnames(
                    { active: navbarMenuOpen },
                    'px-3 py-2 border-2 duration-200 rounded text-lessbrightred border-lessbrightred hover:text-white hover:bg-brightred hover:border-brightred focus:outline-none'
                  )}
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mr-4 hidden md:block">
              <NavLink
                exact
                className="inline-block text-xl px-6 py-2 border-2 duration-200 rounded text-lessbrightred border-lessbrightred hover:text-white hover:bg-brightred hover:border-brightred"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </div>
            <div className="hidden md:block">
              <NavLink
                exact
                className="inline-block text-xl px-6 py-2 border-2 duration-200 rounded text-lessbrightred border-lessbrightred hover:text-white hover:bg-brightred hover:border-brightred"
                to="/lookup"
                activeClassName="active"
              >
                Lookup
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={classnames('mb-5', {
            block: navbarMenuOpen,
            hidden: !navbarMenuOpen
          })}
        >
          <NavLink
            exact
            to="/"
            className="block px-2 py-1 text-xl text-lessbrightred hover:text-white hover:bg-brightred"
            activeClassName="active"
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/lookup"
            className="block px-2 py-1 text-xl text-lessbrightred hover:text-white hover:bg-brightred"
            activeClassName="active"
          >
            Lookup
          </NavLink>
        </div>
      </Container>
    </div>
  );
}
