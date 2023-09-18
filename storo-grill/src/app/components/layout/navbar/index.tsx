'use client';
import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Menu,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MapIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { products } from './dropdown';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const callsToAction = [
  { name: 'Kontakt oss', href: '#', icon: PhoneIcon },
  { name: 'Se Kart', href: '#', icon: MapIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const togglePopover = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#262626]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="text-2xl font-extrabold tracking-tight leading-none logo text-gray-200">
              Storo Grill
            </h1>
          </a>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden sm:flex sm:gap-x-12">
          <a
            href="#"
            className="text-sm font-extrabold leading-6 text-gray-200"
          >
            Hjem
          </a>

          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-400 hover:text-gray-300"
              onClick={togglePopover}
            >
              Meny
              <ChevronDownIcon
                className={classNames(
                  open ? 'rotate-180' : '',
                  'h-5 w-5 flex-none '
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute -left-44 top-[28px] z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#262626] ring-1 ring-gray-900/50 shadow-lg shadow-gray-200 ">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#525252]"
                    >
                      <div className="flex h-17 w-[80px] flex-none items-center justify-center rounded-lg ">
                        <Image
                          src={item.icon}
                          className="h-full w-full text-gray-600 object-cover rounded "
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-50"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                          <p className="mt-1 text-gray-100 ">
                            {item.description}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-50/5 bg-[#262626]">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-[#525252]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-50"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="#gallery"
            className="text-sm font-semibold leading-6 text-gray-400 hover:text-gray-300"
          >
            Gallery
          </a>
        </Popover.Group>
        <div className="hidden sm:flex lg:flex-1 md:justify-end">
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
            {/* Order with dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="relative flex items-center text-gray-400 hover:text-gray-300">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <a className="ml-1 mr-2 text-sm flex items-center">
                  <span className="text-sm font-semibold leading-6 topNav ">
                    Bestill med
                  </span>
                  <ShoppingBagIcon className="w-6 h-6 ml-1" />
                </a>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right top-[32px] rounded-lg bg-[#262626] ring-1 ring-gray-900/5 divide-y divide-gray-50/5 shadow-lg shadow-gray-200">
                  <Menu.Item>
                    <a
                      href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
                      className="block px-4 py-2 text-sm group text-gray-50 hover:bg-[#525252] hover:rounded-t-lg"
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
                      className="block px-4 py-2 text-sm group text-gray-50 hover:bg-[#525252] hover:rounded-b-lg "
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
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-3xl font-extrabold tracking-tight leading-none logo">
                Storo Grill
              </h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hjem
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Meny
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#gallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gallery
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wolt
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Foodora
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
