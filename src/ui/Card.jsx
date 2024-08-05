import React from "react";

const Card = () => {
	return (
		<div className="w-[400px] p-4 dark:bg-slate-900 bg-white rounded-2xl shadow-lg">
			<div className="w-full aspect-square rounded-lg overflow-hidden">
				<img
					src="https://i.pinimg.com/736x/d1/7f/8d/d17f8df8ba0978d06154994a5820d12f.jpg"
					alt=""
					className="w-full h-full object-cover object-center"
				/>
			</div>
			<div className="mt-4">
				<p className="dark:text-white text-gray-800">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestiae odit perferendis eius laudantium? Similique quis
					repellat veniam sapiente iure. Eaque animi necessitatibus
					voluptatum minima ea voluptates alias, beatae nobis
					incidunt.
				</p>
			</div>
		</div>
	);
};

export default Card;
