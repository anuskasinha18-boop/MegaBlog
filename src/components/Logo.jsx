import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{width, fontWeight: '700', fontSize: '1.5rem'}} className="text-gradient">
        12MegaBlog
    </div>
  )
}

export default Logo