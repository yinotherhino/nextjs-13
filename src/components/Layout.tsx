import React from 'react'

const Layout = ({children}:{children:JSX.Element}) => {
  return (
    <div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout;