import React from 'react'
import CurrentLocation from '../Utility/CurrentLocation'

const ForgetPasswordContainer = () => {
  return (
    <div className='container'>
      <CurrentLocation current={'نسيت كلمه السر'} />
      <form
        className="p-3 rounded"
        style={{
          backgroundColor: "var(--secondary-color)",
          boxShadow: "var(--main-box-shadow)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            البريد الالكترونى
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <button type="submit" className="btn special-btn">
          ارسال الكود
        </button>
      </form>
    </div>
  )
}

export default ForgetPasswordContainer