type params = {
  category:  string,
  name: string,
  sortBy: string
}

const Filter = ({setParams} : {setParams: Function}) => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="text-xs rounded-2xl pl-2 ring-1 ring-gray-400"
        />
        
      </div>
      <div className="">
      <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onClick={(e) => {
            const value = (e.target as HTMLInputElement).value
            setParams((prms: params) => ({...prms, sortBy:value}))
          }}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter