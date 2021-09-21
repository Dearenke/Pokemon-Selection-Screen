import React, { memo } from 'react';
import './index.css';

function Pokemon(props) {
    const { data = {}, style = {}, checked = false } = props;
    return (
        <div className={`sprites ${checked ? ' checked' : ''}`} style={{ ...style }}>
            <div style={{ width: 140 }}>
                <img height="100%" src={data.sprites.back_default} alt="squirtle" />
            </div>
            <div className="des">
                <p>
                    name:
                    {data.name}
                </p>
                <p>
                    weight:
                    {data.weight}
                </p>
                <p>
                    height:
                    {data.height}
                </p>
                <div className="experienceBox">
                    <div style={{ width: `${data.base_experience || 0}%`, background: '#cdc049' }}>
                        {Number(data.base_experience)}
                    </div>
                </div>
            </div>
        </div>
    );
}

const isEqual = (prePorps, nextProps) => {
    if (prePorps.checked === nextProps.checked) {
        return true;
    }
    return false;

};

export default memo(Pokemon, isEqual);
