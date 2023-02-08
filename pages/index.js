import Head from 'next/head'
import Image from 'next/image'
import calculateFengshui from 'fengshui-logo'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [output, setOutput] = useState('')
  const [title, setTitle] = useState('')
  function handleChange(event) {
    const nameToCalculate = event.target.value
    if (nameToCalculate.trim().length > 0) {
      let result = calculateFengshui(nameToCalculate)
      result = result[0]
      setTitle(result.TITLE)
      setOutput(`${result.DETAIL}`)
    }
  }

  return (
    <div className="flex justify-center">
      <Head>
        <title>Hokibot</title>
        <meta property="og:title" content="Hokibot" key="title" />
      </Head>
      <div className="mb-3 xl:w-96">
        <label className="block mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Please Type the name
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
      "
          id="exampleFormControlInput1"
          placeholder="Please input the name"
        />
        <div className="block mt-2 mb-2 text-left">
          <label className="block mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
            {title}
          </label>
        </div>
        <div className="block mb-2 text-left">
          <label className="block mb-2 font-mono leading-none tracking-tight text-gray-900">
            {output}
          </label>
        </div>
      </div>
    </div>
  )
}
