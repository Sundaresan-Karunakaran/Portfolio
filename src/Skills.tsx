import React from 'react';

interface SkillsProps {
    text: string;
}

const Skills: React.FC<SkillsProps> = ({text}) => {

    return (
        <div className='icon' style={{fontSize:'20px'}}>
            {text}
        </div>
    )
}
export default Skills;