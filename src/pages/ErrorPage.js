import {Link} from 'react-router-dom';

const ErrorPage = () =>{
    return(
        <section className='bg-purple-100 h-screen py-20'>
            <h2 className='text-4xl font-bold text-center py-6'>404</h2>
            <p className='text-4xl font-bold text-center py-6'>page not fout</p>
            <Link to='/' className='rounded-md bg-purple-600 px-10 py-2 hover:bg-purple-300 hover:text-white'>Back Home</Link>
        </section>
    );
}

export default ErrorPage;