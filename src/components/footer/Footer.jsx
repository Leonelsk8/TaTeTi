import style from './footer.module.css';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import portfolio from '../../assets/journal-code.svg';

const Footer = () => {
  return (
    <div className={`${style.Footer} pt-5 text-white`}>
      <div className='text-center'>
        <h1 className={`text-2xl ${style.title}`}>Ta Te Ti Fun</h1>
      </div>
      <div className='mt-5'>
        <h1 className='text-center mb-3 text-xl'>Mis redes</h1>
        <div className='flex justify-center'>
          <a href='https://leonelsk8.netlify.app/' target='_blank'  rel="noopener noreferrer" className='me-4'>
            <div className='flex flex-col items-center'>
              <img src={portfolio} alt="" />
              <p>Portfolio</p>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/leonel-gomez-266292268' target='_blank'  rel="noopener noreferrer" className='me-4'>
            <div className='flex flex-col items-center'>
              <img src={linkedin} alt="" />
              <p>Linkedin</p>
            </div>
          </a>
          <a href='https://github.com/Leonelsk8' target='_blank'  rel="noopener noreferrer">
            <div className='flex flex-col items-center'>
              <img src={github} alt="" />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
      <div className={`${style.copyright}`}>
        <p className='text-center'>Copyright &copy; TaTeTi Fun - Leonel Gomez</p>
      </div>
    </div>
  )
}

export default Footer