import React from 'react';
import { StoryList } from './StoryList';
import { Wall } from './Wall';

export const MainSection = () => {
    return (
        <div className="main_section">
            <StoryList/>
            <Wall/>
        </div>
    )
}
