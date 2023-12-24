export default function twcPage(params: any) {
  let { children, title, description, repoUrl, deployUrl, href } = params;
  return (
    <>
      <div className="flex flex-row  space-x-4 font-mono text-white text-sm font-bold leading-6">
        <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
        <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
        <div className="basis-1/2 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      </div>
      <div className="flex flex-wrap gap-4 mt-3 font-mono text-white text-sm font-bold leading-6 bg-stripes-indigo rounded-lg">
        <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">01</div>
        <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">02</div>
        <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">03</div>
      </div>
      <div className="overflow-hidden transition-all border rounded-lg shadow-sm cursor-pointer group border-slate-300/70 hover:border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-800/5">
        <div className="relative">
          <div className="flex items-center justify-center select-none pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity aspect-[2/1]">
            <div className="nx-mt-6 nx-leading-7 first:nx-mt-0">{children}</div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-4 bg-neutral-100 group-hover:bg-neutral-50">
          <p className="text-lg font-bold tracking-tight text-neutral-800">{title}</p>
          <p className="mt-1 text-neutral-500">{description}</p>
        </div>
        <div className="flex items-center justify-start w-full px-3 pb-4 select-none whitespace-nowrap bg-neutral-100 group-hover:bg-neutral-50">
          <a
            href={repoUrl}
            target="_blank"
            className="transition-colors group flex items-center justify-center gap-1 py-2 px-3 font-medium tracking-tight text-[15px] text-center text-neutral-900"
          >
            <svg
              className="w-5 h-5 p-0.5 transition-colors text-neutral-500 group-hover:text-neutral-800"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            查看 Repo
          </a>
          <a
            href={deployUrl}
            target="_blank"
            className="transition-colors group flex items-center justify-center gap-1 py-2 px-3 font-medium tracking-tight text-[15px] text-center text-neutral-900"
          >
            <svg
              className="w-5 h-5 transition-colors text-neutral-500 group-hover:text-neutral-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 4L3 20H21L12 4Z" fill="currentColor"></path>
            </svg>
            部署到 Vercel
          </a>
        </div>
      </div>
      <a
        className="p-6 transition-all border rounded-lg shadow-lg group border-slate-200 hover:border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-700 shadow-transparent hover:shadow-neutral-800/5"
        href={href}
      >
        <span className="flex items-end justify-between mb-3">
          <span className="block text-lg font-semibold tracking-tight text-slate-800">{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-6 h-6 transition-colors duration-300 stroke-2 text-slate-200 group-hover:text-slate-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </span>
        <span className="text-sm text-slate-500 leading-[1.4rem] block group-hover:text-slate-600 transition-colors duration-300">
          {description}
        </span>
      </a>
      <div className="transition-all border rounded-lg shadow-lg border-slate-200 hover:border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-700 shadow-transparent hover:shadow-neutral-800/5">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="h-52 w-full px-4 flex items-center justify-center dot-background">
            <div className="w-64 max-w-full h-40 border rounded-md shadow bg-white dark:bg-neutral-900 hover:scale-105 duration-700 transition-transform border-neutral-300 dark:border-neutral-600">
              <div className="flex bg-slate-400/5 dark:bg-neutral-800/50 p-1 border-b gap-1 dark:border-neutral-800 border-neutral-300">
                <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
              </div>
              <div className="p-4 animate-pulse relative">
                <div className="h-2 w-2/3 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-3/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-2/3 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-1/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-2 mb-6">
          <p className="text-lg font-semibold tracking-tight text-neutral-800">Blocking UI</p>
          <p className="mt-1 text-neutral-500">
            Blocking responses wait until the full response is available before displaying it.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="transition-all border rounded-lg shadow-lg border-slate-200 hover:border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-700 shadow-transparent hover:shadow-neutral-800/5">
          <div className="flex items-center justify-center overflow-hidden">
            <div className="h-52 w-full px-4 flex items-center justify-center dot-background">
              <div className="w-64 max-w-full h-40 border rounded-md shadow bg-white dark:bg-neutral-900 hover:scale-105 duration-700 transition-transform border-neutral-300 dark:border-neutral-600">
                <div className="flex bg-slate-400/5 dark:bg-neutral-800/50 p-1 border-b gap-1 dark:border-neutral-800 border-neutral-300">
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                </div>
                <div className="p-4 animate-pulse relative">
                  <div className="h-2 w-2/3 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-3/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-2/3 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6 mt-2 mb-6">
            <p className="text-lg font-semibold tracking-tight text-neutral-800">Blocking UI</p>
            <p className="mt-1 text-neutral-500">
              Blocking responses wait until the full response is available before displaying it.
            </p>
          </div>
        </div>
        <div className="transition-all border rounded-lg shadow-lg border-slate-200 hover:border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-700 shadow-transparent hover:shadow-neutral-800/5">
          <div className="flex items-center justify-center overflow-hidden">
            <div className="h-52 w-full px-4 flex items-center justify-center dot-background">
              <div className="w-64 max-w-full h-40 border rounded-md shadow bg-white dark:bg-neutral-900 hover:scale-105 duration-700 transition-transform border-neutral-300 dark:border-neutral-600">
                <div className="flex bg-slate-400/5 dark:bg-neutral-800/50 p-1 border-b gap-1 dark:border-neutral-800 border-neutral-300">
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                  <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
                </div>
                <div className="p-4 animate-pulse relative">
                  <div className="h-2 w-2/3 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-3/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-2/3 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/4 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                  <div className="h-2 w-1/2 mt-2 rounded bg-gray-400/80 dark:bg-neutral-600 browser-skeleton"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6 mt-2 mb-6">
            <p className="text-lg font-semibold tracking-tight text-neutral-800">Streaming UI</p>
            <p className="mt-1 text-neutral-500">
              Streaming responses can transmit parts of the response as they become available.
            </p>
          </div>
        </div>
      </div>
      <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    </>
  );
}
