import { CustomizeProducts } from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">Product Name</h1>
          <p className="text-bold text-xs text-gray-800">
            What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated 
            top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda,
            and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the 
            entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out
            with precision the likes of which has never been seen before on this Earth, mark my fucking words.
            You think you can get away with saying that shit to me over the Internet? Think again, fucker.
            As we speak I am contacting my secret network of spies across the USA and your IP is being
            traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic 
            little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill 
            you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained 
            in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will
             use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. 
             If only you could have known what unholy retribution your little "clever" comment was about to bring 
             down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now 
             you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. 
             You're fucking dead, kiddo.
          </p>
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">$59</h3>
            <h2 className="font-medium text-2xl">$49</h2>
          </div>
          <div className="h-[2px] bg-gray-100"></div>
            <CustomizeProducts/>
          <div className="h-[2px] bg-gray-100"></div>
          
        </div>
      </div>
    );
}

export default SinglePage;