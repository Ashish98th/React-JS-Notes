import React from 'react'
import ChildC from './ChildC'

function ChildB({firstName}) {
  return (
    <div>ChildB

        <ChildC firstName={firstName} />
    </div>
  )
}

export default ChildB