import React from 'react';

import {ReactComponent as Arrow} from 'core/assets/imgs/arrow.svg';
import './styles.scss';

const Pagination = () => {

    return (
        <div className="pagination-container">
            <Arrow className="pagination-previous" />
            <div className="pagination-item active">
                1
            </div>
            <div className="pagination-item">
                2
            </div>
            <div className="pagination-item">
                3
            </div>
            <Arrow className="pagination-next active" />
        </div>
    );
}

export default Pagination;