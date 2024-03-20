import React, { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow'>Header</header>
      <main className='container mx-auto bg-slate-400 px-4 py-8'>{children}</main>
      <footer className='bg-white shadow'>Footer</footer>
    </div>
  )
}

export default Layout
