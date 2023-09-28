import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Ticker = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = React.useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0}>
            {({ countUpRef }) => {
                return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                    >
                        <h4 className={''} ref={countUpRef} />
                    </VisibilitySensor>
                );
            }}
        </CountUp>
    );
};

export default Ticker;
