

function Navigator(props) {

  const { user } = props;

  const section = props?.section  ?? 'header';
  const hoverBg  = (section === 'header') ? 'hover:bg-sky-400': 'hover:bg-pink-500';
  const textColor  = (section === 'header') ? 'hover:text-white': 'hover:text-white';
  
  const defaultClass = `${textColor} ${hoverBg} border-solid border-2 px-8 py-2 border-gray-200 dark:text-white rounded-md cursor-pointer`;


  console.log(section, 'props')
    return (    
      <div className="text-2xl m-6 text-center">
          <a  target={`_blank`} href={user.resume} className={defaultClass}>Resume</a>
          <a href={`mailto:${user.email}`} className={`ml-10 ${defaultClass}`}>E-Mail</a>
          <a target={`_blank`} href={user.dribble} className={`ml-10 ${defaultClass}`}>Dribbble</a>
          <a target={`_blank`} href={user.linkedin} className={`ml-10 ${defaultClass}`}>LinkedIn</a>
          <a target={`_blank`} href={user.twitter} className={`ml-10 ${defaultClass}`}>Twitter</a>
      </div>
    );
  }
  
  export default Navigator;
  