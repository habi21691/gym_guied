import React,{useContext} from 'react'
import { Box,Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../asset/icons/right-arrow.png';
import LeftArrowIcon from '../asset/icons/left-arrow.png';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrolbar = ({ data, bodyPart, setBodyPart }) => {
   
    return (
        <>
            
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  
        >

            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m='0 40px'
                    onClick={ () => {
                      setBodyPart(item)
                      window.scrollTo({top: 1800, behaviour:'smooth'})
                    }}

                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            ))}
        </ScrollMenu>
        </>
    )
}

export default HorizontalScrolbar