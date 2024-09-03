import { FC } from 'react';
import { CardGridProps } from '../../../types/index';

export const CardGrid: FC<CardGridProps> = ({ children, className }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4${className}`}>
            {children}
        </div>
    );
};
