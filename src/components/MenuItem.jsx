export default function MenuItem({ item, layout = 'compact' }) {
  if (layout === 'full') {
    return (
      <div className="flex flex-col items-start border-b-2 border-white pb-4 mb-4">
        <h2 className="mt-0 text-2xl text-white text-left w-full mb-0">{item.name}</h2>
        <p className="text-base text-left my-2">{item.desc || ''}</p>
        <div className="flex justify-center w-full gap-4">
          {item.prices
            ? item.prices.map((p, i) => <span key={i} className="text-xl">{p}</span>)
            : <span className="text-xl">{item.price}</span>
          }
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-between items-center border-b-2 border-white pb-4 mb-4">
      <div className="text-left flex-grow">
        <h2 className="text-2xl m-0 block">{item.name}</h2>
        <p className="text-base m-0">{item.desc || ''}</p>
      </div>
      <div className="text-xl min-w-[50px] text-right flex-shrink-0 ml-4">
        {item.price || (item.prices ? item.prices[0] : '')}
      </div>
    </div>
  )
}
