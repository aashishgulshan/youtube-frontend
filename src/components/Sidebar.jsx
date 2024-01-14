export default function Sidebar() {
  return (
    <div className="hidden lg:block">
      <aside className=" no-scrollbar flex h-screen w-64 flex-col overflow-y-auto border-r px-5">
        {/* <a href="#">
        
        </a> */}
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              {/* <label className="px-3 text-xs font-semibold uppercase">
                analytics
              </label> */}
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Home</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="mx-2 text-sm font-medium">Shorts</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Subscription</span>
              </a>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase">
                You
              </label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                <span className="mx-2 text-sm font-medium">Your Channel</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bar-chart"
                >
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                <span className="mx-2 text-sm font-medium">History</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-copy"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span className="mx-2 text-sm font-medium">Your videos</span>
              </a>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase">
                Settings
              </label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
                <span className="mx-2 text-sm font-medium">Setting</span>
              </a>

              <div className="collapse">
                <input type="checkbox" />

                <div className="collapse-title text-sm font-medium">
                  <a className="flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                    </svg>
                    <span className="mx-2">Theme</span>
                  </a>
                </div>

                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">Default</span>
                      <input
                        type="radio"
                        name="theme-radios"
                        className="radio theme-controller"
                        value="default"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">Retro</span>
                      <input
                        type="radio"
                        name="theme-radios"
                        className="radio theme-controller"
                        value="retro"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">Cyberpunk</span>
                      <input
                        type="radio"
                        name="theme-radios"
                        className="radio theme-controller"
                        value="cyberpunk"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">Valentine</span>
                      <input
                        type="radio"
                        name="theme-radios"
                        className="radio theme-controller"
                        value="valentine"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">Aqua</span>
                      <input
                        type="radio"
                        name="theme-radios"
                        className="radio theme-controller"
                        value="aqua"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* <span className="mx-2 text-sm font-medium">Themes</span> */}
            </div>
          </nav>
          <div className="mt-6">
            <div className="rounded-lg bg-gray-100 p-3 ">
              <h2 className="text-sm font-medium text-gray-800">
                New feature availabel!
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                harum officia eligendi velit.
              </p>
              <img
                className="mt-2 h-32 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1806&amp;q=80"
                alt="Feature"
              />
            </div>
            <div className="my-6 flex items-center justify-between">
              <a href="#" className="flex items-center gap-x-2">
                <img
                  className="h-7 w-7 rounded-full object-cover"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="avatar"
                />
                <span className="text-sm font-medium">Aashish Gulshan</span>
              </a>
              <a
                href="#"
                className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
