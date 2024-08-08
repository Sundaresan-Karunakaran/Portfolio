import React from 'react';

type InformationType = {
    from: string,
    to: string, 
    position: string, 
    company: string, 
    link: string, 
    text: string
    }
interface InformationProps {
    info: InformationType,
    }
      
const SubDiv: React.FC<InformationProps> = (info) => {
    const handleClick = () => {
        window.open(info.info.link, '_blank');
    }
    return (
        <div className='subdiv' onClick={handleClick}>
            <h4>{info.info.position}</h4>
                <div style={{fontSize:'15px'}}>
                    {info.info.company}
                </div>
            <h5>{info.info.from} - {info.info.to}</h5>
            <h5 style={{paddingTop:"1%"}}>{info.info.text}</h5>
        </div>
    )
}


export default SubDiv;