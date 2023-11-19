
import flechebas from '@/Assets/Images/Components/Collapse/CollapseFlecheBas.png';
import flechehaut from '@/Assets/Images/Components/Collapse/CollapseFlecheHaut.png';

import React, { useState } from 'react';

const Collapse = ({ title, description }) => {

    const [open, setopen] = useState(false);
    const handleCollapse = () => {
        setopen(!open);
    }

    return (
        <div>
            <li className="collapse-container">
                <div className="collapse-header" onClick={handleCollapse}>
                    <h2>{title}</h2>
                    <span>
                        <img src={open ? flechehaut : flechebas} alt="flecheClick" />
                    </span>
                </div>
                {
                    open && (
                        <div className='Collapse-description'>
                            {description}
                        </div>
                    )
                }
            </li>
        </div>
    );
};

export default Collapse;