import React from 'react';
import HorizontalCarousel from './HorizontalCarousel.js';

function Popup() {
    return (
        <div style={styles.main}>
            <h1>Options</h1>
            
            <HorizontalCarousel />
        </div>
    )
}

const styles = {
    main: {
        width: '300px',
        height: '600px'
    }
}

export default Popup;