import React from 'react';

interface BottomProps {
    name?: string;
}

const Bottom: React.FC<BottomProps> = ({ name = 'Your Name' }) => {
    const currentYear = new Date().getFullYear();

    return (
        <p>
            © {currentYear} ({name}). All rights reserved.
        </p>
    );
};

export default Bottom;
