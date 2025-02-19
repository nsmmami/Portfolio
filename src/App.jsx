// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
        <span className='text-xl ml-3'>NisshoCode</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>HOME</a>
        <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
        <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
        <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
      </nav>
    </div>
    </header>

    <section className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
      <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
        My portfolio Website</h1>
        <p className='mb-8 leading-relaxed'>現在最強の無職です。</p>
        <button className='text-white bg-yellow-500 py-2 px-6 border-0 rounded text-lg hover:bg-yellow-600 duration-300'>Contact Me</button>
      </div>
      <div className='md:w-1/2 lg:max-w-lg w-5/6'>
        <img src="./public/img/top.JPG" alt="ウエストレベル一眼です" className='rounded' />
      </div>
    </section>
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>これまで義理人情だけで生きて参りました。</p>
        </div>

<div className='flex flex-wrap'>

  <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-yellow-500 text-white rounded-full'>
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>
            </div>
            <h2 className='text-gray-900 text-lg font-medium ml-2'>AirLine App</h2>
            </div>
            <div><p>LCC各社の最安値と全国の空港ラウンジの格付けが見られます。ビジネスクラスへのアップグレード空席情報も。</p>
            <a href="#" className='mt-3 text-yellow-500 items-center'>もっとみる →</a></div>
          </div>
          </div>

  <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-yellow-500 text-white rounded-full'>
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775L14 13.9633Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
    fill="currentColor"
  />
</svg>
</div>
            <h2 className='text-gray-900 text-lg font-medium ml-2'>FX App</h2>
            </div>
            <div><p>初期費用50万円から始めるFXのレートチャート。追証なしで安心安全な取引を！一晩で溶かしません。</p>
            <a href="#" className='mt-3 text-yellow-500 items-center'>もっとみる →</a></div>
          </div>
          </div>

  <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-yellow-500 text-white rounded-full'>
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z"
    fill="currentColor"
  />
  <path
    d="M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z"
    fill="currentColor"
  />
</svg>
            </div>
            <h2 className='text-gray-900 text-lg font-medium ml-2'>DIY Body App</h2>
            </div>
            <div><p>高額な整体はもう不要。悩みの個所をタップするだけでAIがストレッチメニューを決めてくれます。</p>
            <a href="#" className='mt-3 text-yellow-500 items-center'>もっとみる →</a></div>
          </div>
          </div>

          </div>
      </div>

    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./public/img/camera.JPG" alt="マニュアル一眼です" className='rounded' />
        </div>
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
        <div>
        <h2>HTML</h2>
        <div className='shadow bg-green-100 mt-2 w-full'>
          <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
        </div>

        <h2>Javascript</h2>
        <div className='shadow bg-orange-100 mt-2 w-full'>
          <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"40%"}}>40%</div>
        </div>

        <h2>React</h2>
        <div className='shadow bg-blue-100 mt-2 w-full'>
          <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"30%"}}>30%</div>
        </div>

        <h2>Photography</h2>
        <div className='shadow bg-violet-100 mt-2 w-full'>
          <div className='bg-violet-600 text-xs leading-none py-1 text-center text-white' style={{width:"100%"}}>100%</div>
        </div>

      </div>
      </div>
      </div>
    </section>
    </>  
  )
}

export default App
