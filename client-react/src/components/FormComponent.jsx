import React from 'react'

function Input({
  label = '請輸入',
  inputRef,
  required = false,
  text = 'text',
}) {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        輸入帳號
      </label>
      <input
        ref={inputRef}
        type={text}
        required={required}
        className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm "
        placeholder={label}
      />
    </div>
  )
}
function Button(props) {
  const { icon, click, text } = props

  return (
    <button
      onClick={click}
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ease-in-out duration-100 hover:bg-secondary"
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </span>
      {text}
    </button>
  )
}

export { Input, Button }
