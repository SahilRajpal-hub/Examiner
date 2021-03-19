import React from 'react'

const Loader = () => {
  return (
    <div id='loader-wrapper'>
      <div id='loader'>
        <div class='loader-ellips'>
          <span class='loader-ellips__dot'></span>
          <span class='loader-ellips__dot'></span>
          <span class='loader-ellips__dot'></span>
          <span class='loader-ellips__dot'></span>
        </div>
      </div>
    </div>
  )
}

export default Loader
