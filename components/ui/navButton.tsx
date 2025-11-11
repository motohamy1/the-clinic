const NavButton = ({name}: {name: string}) => {
  return (
    <button className="px-6 py-2 rounded-full bg-[#c4bdb3]/50 hover:bg-[#ff7839] text-gray-800 font-medium text-sm transition-all duration-200 hover:shadow-lg border border-gray-400/30">
      {name}
    </button>
  )
}

export default NavButton