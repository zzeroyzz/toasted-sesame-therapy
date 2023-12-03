/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Image } from '@chakra-ui/react';
import { FlowerAnimationData } from './constants';

const FlowerAnimations = () => {
  const controls = useAnimation();
  const [motionBoxPosition, setMotionBoxPosition] = useState(null);

  useEffect(() => {
    const updatePosition = () => {
      // This should be the selector for your MotionBox or a ref to it if it's a single instance
      const box = document.querySelector('#motionBox');
      if (box) {
        const boxTop = box.getBoundingClientRect().top + window.scrollY;
        setMotionBoxPosition(boxTop);
      }
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Call on mount to set initial position

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  useEffect(() => {
    if (motionBoxPosition !== null) {
      controls.start((i) => ({
        y: [0, motionBoxPosition], // Start from 0 and animate to the position of the MotionBox
        transition: { duration: 1.5, ease: 'linear' },
        // Stop the animation if the flower's top position is greater than the MotionBox's top position
        onComplete: () => controls.stop(),
      }));
    }
  }, [motionBoxPosition, controls]);

  return (
    <Box position="relative" className="flower-animation-container">
      {FlowerAnimationData.map((flower, index) => (
        <motion.div
          custom={index} // Pass the index if you want to stagger the animation
          animate={controls}
          key={flower.id}
          initial={{ y: 0 }} // Start position at top of the viewport
          style={{
            position: 'absolute',
            top: `${flower.initialY}px`,
            left: `${flower.initialX}px`,
          }}
        >
          <Image src={flower.src} alt={`flower-${index}`} width={`${flower.size}px`} />
        </motion.div>
      ))}
    </Box>
  );
};

export default FlowerAnimations;
