export function Logo({className, type}) {
  // Type can be white to use white logo
  // const image = type === 'white' ? "/codecloud-white.svg" : "/codecloud.svg"
  const image = "/versaminds.png"
  return (
    <div className={className}>
      <img src={image} alt="VersaMinds logo" className="w-full" />
    </div>
  )
}
