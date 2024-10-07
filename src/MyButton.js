import React from 'react';

const MyButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={styles.button}>
            {label}
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default MyButton;
