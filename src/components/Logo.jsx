import VersaMindsLogo from '@/images/versaminds.png'
import Image from 'next/image'
export function Logo({className, type}) {
  // Type can be white to use white logo
  // const image = type === 'white' ? "/codecloud-white.svg" : "/codecloud.svg"
  return (
    <div className={className}>
      <Image src={VersaMindsLogo} alt="VersaMinds logo" className="w-full" />
    </div>
  )
}
