import React from 'react';
import MyButton from './MyButton';

const App = () => {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to My React App!</h1>
            <MyButton label="Click Me!" onClick={handleClick} />
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
};

export default App;
