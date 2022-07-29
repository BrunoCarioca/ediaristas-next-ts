import React from 'react';
//import { } from '@mui/material';
import { BreadcrumpContainer, BreadcrumpItem } from './Breadcrumb.style';

export interface BreadcrumbProps {
    selected: string;
    items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ selected, items }) => {
    return (
        <BreadcrumpContainer>
            {items.map((item, index) => (
                <React.Fragment key={item}>
                    <BreadcrumpItem isSelected={selected === item}>
                        {item}
                    </BreadcrumpItem>
                    {index !== items.length - 1 && <span> &gt; </span>}
                </React.Fragment>
            ))}
        </BreadcrumpContainer>
    );
};

export default Breadcrumb;
