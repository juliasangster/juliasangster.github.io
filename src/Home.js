import React from 'react';
import CircleImageText from './CircleImageText';

export default function Home() {
  return (
    <div>
        <CircleImageText 
            imageSrc = "home_images/headshot.jpg"
            imageAlt = "Headshot of Julia Sangster"
            text = {<h1>Hi! I'm Julia</h1>}
            position ="left"/>
    </div>
  );
}