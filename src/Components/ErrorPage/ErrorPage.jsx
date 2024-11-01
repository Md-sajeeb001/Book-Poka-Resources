import errorImg from '../../assets/755014.png'
const ErrorPage = () => {
    return (
        <div className='max-w-5xl mx-auto my-8 text-center'>
            <h2 className='text-3xl text-red-500'>page not found!! 404</h2> 
            <img className='mx-auto' src={errorImg} alt="" />           
        </div>
    );
};

export default ErrorPage;