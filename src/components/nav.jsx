import {Link} from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { useEffect, useState, Fragment } from 'react'
import '../assets/css/nav.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Nav() {
	const [username, setUsername] = useState();
	const [usercode, setUsercode] = useState();
	const [fullname, setFullname] = useState();
  useEffect(() => {
      setUsername(localStorage.getItem('username') || 'Username');
			setUsercode(localStorage.getItem('usercode') || 'Usercode');
			setFullname(localStorage.getItem('fullname') || 'FullName');
  }, []); 

  return (
		<>
		<nav className='bg-[#0050a0]'>
		<div className="mx-auto flex justify-between">
			<ul>
        <li><Link to="/index">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
			</ul>

			<Menu as="div" className="my-auto me-2">
				<Menu.Button>
					<img src='/src/assets/img/me/IMG_0030.JPG' className="w-8 h-8 rounded-full" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
                <div href="#" className="flex px-4 py-2 text-sm">
									<div className="w-full flex flex-row">
										<div className="flex flex-col me-2">
											{/* <div className="flex"><img className="w-10 h-10 rounded-md" src='/src/assets/img/me/IMG_0030.JPG' /></div> */}
											
											<div className="flex"><img className="w-10 h-10 rounded-md" src='/src/assets/img/me/IMG_0030.JPG' /></div>
										</div>
										<div className="flex flex-col" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
											<div className="flex">  {fullname} </div>
											<div className="flex"> รหัสพนักงาน : {usercode} </div>
										</div>
									</div>
                </div>
            </Menu.Item>
            <Menu.Item>
							{({ active }) => (
								<Link to="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  Profile
								</Link>
              )}
            </Menu.Item>
						<hr className="my-1" />
						<Menu.Item >
							{({ active }) => (
								<Link to="/login" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  Logout
								</Link>
              )}
						</Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
		</div>
    </nav>
		</>
  )
}

export default Nav