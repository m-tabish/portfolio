import './App.css'
import { github, peerlist, linkedIn, twitter, linkedIn_orange, twitter_orange, peerlist_orange } from "./index"


function App() {


  const opacity_icons = 100;
  const date = new Date();
  const time = date.toString().split(" ");
  const displayDate = time[2] + " " + time[1] + " " + " " + time[3];
  const displayTime = time[4].split(":");
  let meridiem = "am";

  let [hours, minutes] = displayTime;
  if (hours > 12) { meridiem = "pm"; }
  hours = hours > 12 ? hours - 12 : hours == 0 ? 12 : hours;


  return (
    <>
      <div className="w-screen h-screen bg-custom bg-cover bg-center bg-fixed bg-no-repeat  overflow-hidden overscroll-none flex flex-col">
        {/* displayTime */}
        <div className='self-end px-7 py-4 sm:px-5 sm:text-2xl font-light w-full h-24 z-10 flex flex-col text-right text-xl'>{displayDate} <br className='text-xl' /> {hours + ":" + minutes + " " + meridiem} IST</div>

        {/* main container */}
        <div className=' w-full h-full sm:-my-24 m-auto flex flex-col gap-5 items-center  justify-center -z-1'>
          {/* profile image*/}
          <div className={` min-w-40 min-h-40 bg-profile bg-cover bg-no-repeat rounded-full bg-center`} />

          {/* <div className='px-3 py-1 text-xl rounded-full'>mohdtabishkhan001@gmail.com</div> */}

          <div className="text-3xl p-2 text-center flex flex-col gap-4">
            <div className='font-light mt-12'> Hello,</div>
            <div className='font-light'> I am <span className='text-accent font-bold '>Mohd Tabish Khan</span>
            </div>
            <div className=' font-light sm:text-3xl text-2xl sm:m-0'> In pursuit to become a <br /><span className='font-bold    '>web developer</span> and a <span className='font-bold  '>designer</span></div>
          </div>


          {/* links */}
          <div className="text-xl mt-36 sm:mt-10 font-light tracking-wide"> Socials here:- </div>
          <div className='flex gap-6'>

            <a className={`h-16 w-16 rounded-full opacity-${opacity_icons} hover:opacity-100`} href="https://peerlist.io/tabish" target="_blank">
              <img className="w-full h-full rounded-full" src={peerlist_orange} alt="" />
            </a>


            <a className={`h-16 w-16 rounded-full opacity-${opacity_icons}  hover:opacity-100`} href="https://github.com/m-tabish" target="_blank" >
              <img className="w-full h-full rounded-full" src={github} alt="" />
            </a>

            <a className={`h-16 w-16 rounded-full opacity-${opacity_icons}  hover:opacity-100`} href="https://twitter.com/papayafruit123" target="_blank" >
              <img className="w-full h-full rounded-full" src={twitter_orange} alt="" />
            </a>

            <a className={`h-16 w-16 rounded-full opacity-${opacity_icons}  hover:opacity-100`} href="https://www.linkedin.com/in/m-tabishk/" target="_blank" >
              <img className="w-full h-full rounded-full" src={linkedIn_orange} alt="" />
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
