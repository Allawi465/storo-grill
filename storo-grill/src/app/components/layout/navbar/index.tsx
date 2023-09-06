'use client';
import React, { useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Meny from './dropdown';
import DownIcon from './svg';

import { BiPhoneCall } from 'react-icons/bi';
import { FaMapMarkedAlt } from 'react-icons/fa';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const toggleOrder = () => {
    setIsOrderVisible(!isOrderVisible);
  };

  const navigation = [
    { name: 'HJEM', href: '#', current: true },
    { name: 'MENY', href: '#', current: false, icon: <DownIcon /> },
    { name: 'Kontakt us', href: '#', current: false },
  ];

  return (
    <div>
      <div className="flex justify-center flex-col mt-6 mb-2 sm:mt-12">
        <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl dark:text-white mr-auto ml-auto mb-2">
          STORO GRILL
        </h1>
        <span className="border-gray-200 w-full bg-white border-t outline-offset-8 mt-4"></span>
      </div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-2 lg:px-8">
              <div className="relative flex h-12 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-0 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-black font-extrabold'
                              : ' text-gray-600 hover:text-gray-900 font-medium ',
                            'rounded-md px-3 py-2 text-sm font-medium flex tracking-wide'
                          )}
                          onClick={
                            item.name === 'MENY' ? toggleOrder : undefined
                          }
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                          {item.icon && <span>{item.icon}</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3 sm:gap-1 lg:gap-5">
                  <button
                    type="button"
                    className="relative flex rounded-full items-center text-gray-600 text-sm hover:text-gray-900"
                  >
                    <a
                      href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=no&sa=X&geocode=KbfRa7hsb0FGMdMDTuFUDy7C&daddr=Vitaminveien+14,+0483+Oslo"
                      className="mt-1 ml-1 mr-2 text-lg flex items-center"
                    >
                      <FaMapMarkedAlt className="w-6 h-6 mb-1 sm:mb-0" />
                      <span className="mt-1 ml-1 text-lg mb-1 topNav">
                        Se kart
                      </span>
                    </a>
                  </button>

                  <button
                    type="button"
                    className="relative flex rounded-full items-center text-gray-600 text-sm hover:text-gray-900"
                  >
                    <a
                      href="tel:+4746750757"
                      className="mt-1 ml-1 mr-2 text-lg flex items-center"
                    >
                      <BiPhoneCall className="w-6 h-6 mb-1 sm:mb-0" />
                      <span className="mt-1 ml-1 text-lg mb-1 topNav">
                        Ring us
                      </span>
                    </a>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="relative flex rounded-full items-center text-gray-600 text-sm hover:text-gray-900">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                        <span className="mt-1 ml-1 text-lg topNav">
                          Bestill med
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg bg-gray-900 ">
                        <Menu.Item>
                          <a
                            href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
                            className="block px-4 py-2 text-sm group text-white"
                          >
                            <p className={`mb-3 `}>
                              Foodora{' '}
                              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                              </span>
                            </p>
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
                            className="block px-4 py-2 text-sm group text-white"
                            style={{ borderTop: '2px solid #A7AFBC' }}
                          >
                            <p className={`mb-3 divide-y`}>
                              Wolt{' '}
                              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                              </span>
                            </p>
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-black font-extrabold'
                        : 'text-gray-600 border border-transparent hover:border-gray-800 hover:text-gray-800',
                      'rounded-md px-3 py-3 text-base font-medium flex tracking-wide'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={item.name === 'MENY' ? toggleOrder : undefined}
                  >
                    {item.name}
                    {item.icon && <span className="ml-1">{item.icon}</span>}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            {isOrderVisible && <Meny />}
          </>
        )}
      </Disclosure>
    </div>
  );
}
