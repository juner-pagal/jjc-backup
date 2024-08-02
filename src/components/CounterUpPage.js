import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CounterUpPage () {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='counterBackground'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-3'>
                            <h1 className='display-3 fw-bolder'>
                                {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                                k
                            </h1>
                            <p>Project Complete</p>
                        </div>
                        <div className='col-md-3'>
                            <h1 className='display-3 fw-bolder'>
                                {counterOn && <CountUp start={0} end={38} duration={2} delay={0} />}
                                k
                            </h1>
                            <p>Happy Client</p>
                        </div>
                        <div className='col-md-3'>
                            <h1 className='display-3 fw-bolder'>
                                {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}.
                                {counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}
                                k
                            </h1>
                            <p>Team Members</p>
                        </div>
                        <div className='col-md-3'>
                            <h1 className='display-3 fw-bolder'>
                                {counterOn && <CountUp start={0} end={18} duration={2} delay={0} />}
                                k
                            </h1>
                            <p>Winning Award</p>
                        </div>
                    </div>
                    
                </div>
            </div>          
        </ScrollTrigger>
       
        </>
    );
}

export default CounterUpPage;