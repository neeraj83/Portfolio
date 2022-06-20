function Navigator(props) {

  const { user } = props;

  const section = props?.section  ?? 'header';
  const hoverBg  = (section === 'header') ? 'hover:bg-white': 'hover:bg-[#0075F7]';
  const textColor  = (section === 'header') ? 'hover:text-[#0075F7]': 'hover:text-white';
  
  const defaultClass = `${textColor} ${hoverBg} border-solid border-2 px-8 py-2 border-gray-200 hover:border-[#0075F7] dark:text-white rounded-md cursor-pointer`;


  console.log(section, 'props')
    return (    
      <div className="m-6 text-center text-2xl  flex flex-col md:flex-row text-xl justify-between lg:justify-center xl:justify-center 2xl:place-items-center">
          <a  target={`_blank`} href={user.resume} className={defaultClass}>Resume</a>
          <a href={`mailto:${user.email}`} className={`ml-0 sm:ml-0 md:ml-0 lg:ml-10 xl:ml-10 2xl:ml-10 ${defaultClass}`}>E-Mail</a>
          <a target={`_blank`} href={user.dribble} className={`ml-0 sm:ml-0 md:ml-0 lg:ml-10 xl:ml-10 2xl:ml-10 ${defaultClass}`}>Dribbble</a>
          <a target={`_blank`} href={user.linkedin} className={`ml-0 sm:ml-0 md:ml-0 lg:ml-10 xl:ml-10 2xl:ml-10 ${defaultClass}`}>LinkedIn</a>
          <a target={`_blank`} href={user.twitter} className={`ml-0 sm:ml-0 md:ml-0 lg:ml-10 xl:ml-10 2xl:ml-10 ${defaultClass}`}>Twitter</a>
      </div>
    )  }
  
  export default Navigator;
  