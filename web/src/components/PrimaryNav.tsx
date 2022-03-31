import * as React from 'react';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Popover, Transition } from '@headlessui/react';
import Container from '@/components/Container';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const services = [
  {
    name: `Website Design & Development`,
    description: `You deserve a website that is easy to use, high-performance, beautifully designed and ready to meet the needs of your audience.`,
    href: `/`,
    icon: CursorClickIcon,
  },
  {
    name: `Brand Identity & Strategy`,
    description: `Present a clear, holistic and compelling visual representation of your organisation to the world`,
    href: `/`,
    icon: ShieldCheckIcon,
  },
  {
    name: `Marketing Campaigns & Execution`,
    description: `Connect to your audience online with authentic, tested and measurable marketing strategies`,
    href: `/`,
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: `Watch Demo`, href: `/`, icon: PlayIcon },
  { name: `View All Products`, href: `/`, icon: CheckCircleIcon },
  { name: `Contact Sales`, href: `/`, icon: PhoneIcon },
];
const company = [
  { name: `About`, href: `/`, icon: InformationCircleIcon },
  { name: `Customers`, href: `/`, icon: OfficeBuildingIcon },
  { name: `Press`, href: `/`, icon: NewspaperIcon },
  { name: `Careers`, href: `/`, icon: BriefcaseIcon },
  { name: `Privacy`, href: `/`, icon: ShieldCheckIcon },
];
const resources = [
  { name: `Community`, href: `/`, icon: UserGroupIcon },
  { name: `Partners`, href: `/`, icon: GlobeAltIcon },
  { name: `Guides`, href: `/`, icon: BookmarkAltIcon },
  { name: `Webinars`, href: `/`, icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: `Boost your conversion rate`,
    href: `/`,
    preview: `Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.`,
    imageUrl: `https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80`,
  },
  {
    id: 2,
    name: `How to use search engine optimization to drive traffic to your site`,
    href: `/`,
    preview: `Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.`,
    imageUrl: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(` `);
}
function PrimaryNav() {
  return (
    <Popover className="relative">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20 bg-gray-50">
        <Container>
          <div className="flex justify-between items-center py-5 sm:py-4md:justify-start md:space-x-10">
            <div>
              <Link to="/" className="flex">
                <span className="sr-only">bjh.dev</span>
                <StaticImage
                  className="h-8 w-auto sm:h-10"
                  src="../assets/images/logo.svg"
                  alt="bjh.dev logo"
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between mt-4">
              <Popover.Group as="nav" className="flex space-x-10">
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? `text-purple-600` : `text-white`,
                          `group rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600`,
                        )}
                      >
                        <span>Services</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? `text-purple-600` : `text-white`,
                            `ml-2 h-5 w-5 group-hover:text-purple-600`,
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="hidden bg-gray-800 md:block absolute z-10 top-full inset-x-0 transform shadow-xl">
                          <Container>
                            <div className="mx-auto grid gap-y-6 py-6 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-3 lg:py-12 xl:py-16">
                              {services.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="group -m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-700"
                                >
                                  <div className="flex md:h-full lg:flex-col">
                                    <div className="flex-shrink-0">
                                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-purple-800 group-hover:bg-orange-400 text-white sm:h-12 sm:w-12">
                                        <item.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </div>
                                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                      <div>
                                        <p className="text-base font-medium text-white">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-300">
                                          {item.description}
                                        </p>
                                      </div>
                                      <p className="mt-2 text-sm font-medium text-purple-600 group-hover:text-orange-400 group-hover:underline lg:mt-4">
                                        Learn more{` `}
                                        <span aria-hidden="true">&rarr;</span>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </Container>
                          <div className="bg-gray-50">
                            <Container>
                              <div className="space-y-6 py-5 sm:flex sm:space-y-0 sm:space-x-10">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center text-base font-medium text-gray-800 hover:text-orange-400"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </Container>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link
                  to="/"
                  className="text-base font-medium text-white hover:text-purple-600"
                >
                  Recent Work
                </Link>
                <a
                  href="/"
                  className="text-base font-medium text-white hover:text-purple-600"
                >
                  Why Us?
                </a>
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? `text-purple-600` : `text-white`,
                          `group  rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600`,
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? `text-purple-600` : `text-white`,
                            `ml-2 h-5 w-5 group-hover:text-purple-600`,
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="hidden bg-gray-800 md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                          <Container>
                            <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav className="grid gap-y-10 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 xl:pr-12">
                                <div>
                                  <h3 className="text-base font-medium tracking-wide text-orange-400">
                                    Company
                                  </h3>
                                  <ul className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="-m-3 p-3 flex items-center text-base font-medium text-white hover:text-purple-600"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 h-6 w-6"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">
                                            {item.name}
                                          </span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-base font-medium tracking-wide text-orange-400">
                                    Resources
                                  </h3>
                                  <ul className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="-m-3 p-3 flex items-center text-base font-medium text-white hover:text-purple-600"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 h-6 w-6"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">
                                            {item.name}
                                          </span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                              <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                <div>
                                  <h3 className="text-base font-medium tracking-wide text-orange-400">
                                    From the blog
                                  </h3>
                                  <ul className="mt-6 space-y-6">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} className="flow-root">
                                        <a
                                          href={post.href}
                                          className="group -m-3 p-3 flex rounded-lg hover:bg-gray-700"
                                        >
                                          <div className="hidden sm:block flex-shrink-0">
                                            <img
                                              className="w-32 h-20 object-cover rounded-md"
                                              src={post.imageUrl}
                                              alt=""
                                            />
                                          </div>
                                          <div className="w-0 flex-1 sm:ml-8">
                                            <h4 className="text-base font-medium text-white group-hover:text-orange-400 truncate">
                                              <span className="border-b-2 border-gray-800 group-hover:border-orange-400">
                                                {post.name}
                                              </span>
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-300">
                                              {post.preview}
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <a
                                    href="/"
                                    className="text-orange-400 hover:text-white"
                                  >
                                    {` `}
                                    View more posts{` `}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Container>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
        </Container>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute bg-gray-800 z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="flex">
                    <span className="sr-only">bjh.dev</span>
                    <StaticImage
                      className="h-12 w-auto sm:h-10"
                      src="../assets/images/logo.svg"
                      alt="bjh.dev logo"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {services.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-800 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-white">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a
                      href="/"
                      className="font-medium text-purple-600 hover:text-purple-600"
                    >
                      {` `}
                      View all products <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Company
                </a>

                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Resources
                </a>

                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Blog
                </a>

                <a
                  href="/"
                  className="rounded-md text-base font-medium text-white hover:text-gray-700"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default PrimaryNav;
