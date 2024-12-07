import './style.css';

export default function Home() {
    return(
        <section className="container" id='home'>
            <div className="row" 
            // style={{ minHeight: "50vh" }}
            >
                <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <div className='typing my-3 text-center'>
                    <h1 className='text-center'>Hello, My name is Flora!</h1>
                    </div>
                    <p className="text-start ms-5 mb-5 floating">An aspiring full-stack web developer with a passion for creating responsive, user-friendly web applications using front-end and back-end technologies.</p>
                    <a href="#connect" className="mx-auto btn w-25 btn-connect mb-5">Connect</a>
                </div>
                <div className="col-md-4 m-auto floating-img">
                    <img src="/flora.png" alt="this is flora's picture" className="me" style={{ width: "13rem", height: "13rem", borderRadius: "50%" }}/>
                </div>
            </div>
        </section>
    )
}