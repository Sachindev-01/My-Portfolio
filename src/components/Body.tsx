import { Outlet } from "react-router-dom"

const Body = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-white">
        <Outlet />
    </div>
  )
}

export default Body