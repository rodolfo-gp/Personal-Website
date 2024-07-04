import profile_Pic from './assets/binary.jpg';

function IntroCard() {
  return (
    <div className="IntroCard">
        <div className='IntroCardPfp'>
            <img src={profile_Pic} alt="Profile picture" />
        </div>
        <div className="IntroCardText">
            <h2>Hi, I{"'"}m</h2>
            <h1>Rodolfo Gil-Preira</h1>
            <p>3rd year Software Engineering student</p>
        </div>  
    </div>
  );
}

export default IntroCard;
