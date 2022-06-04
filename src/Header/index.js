
import Naviagtor from './Navigation';
import AssetsImage from './../Comman/Image';

function UserProfile({user}) {

  console.log( user, '  user' )
  return (    
    <div className='text-center'>
        <div className='flex items-center justify-center'>
            <AssetsImage path={`./../Assets/Profile/Images/ProfilePic.jpg`} alt={'User Profile'}/>
        </div>   
        <div className='text-2xl mt-6'>Hi <span role={'img'} aria-label="hi">✋</span> , My name is <span className='font-bold'>{user.name}</span>.</div>
        <div className='text-6xl mt-6 font-bold'>{user.role}</div>
        <div className='text-2xl mt-6'>{user.bio}</div>
        <Naviagtor user={user}/>
    </div>

  );
}

export default UserProfile;
