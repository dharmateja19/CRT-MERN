import { Zap } from "lucide-react";

const Hero = () => {
	return (
		<>
			<div className="bg-[#f6f6f4] h-125">
				<div className="flex h-full justify-center items-center">
					<div className="flex w-210 text-center gap-y-5 flex-col items-center">
                        <div className=" flex justify-center items-center w-55 border-gray-400 rounded-2xl bg-[#fdffff]">
                            <div><Zap /> </div>
                            <div className="text-[#02423a] text-2xl font-semibold px-2">Create for last</div>
                        </div>
						<div className="text-7xl font-semibold text-[#02423a]">
							One tool to manage contracts and your team
						</div>
						<div className="text-lg font-medium">
							Clause helps legal teams work faster, smarter and more
							efficiently, delivering the visibility and data-driven insights to
							mitigate risk and ensure compliance.
						</div>
						<div className="flex gap-5 items-center justify-center">
							<button className="bg-[#fdffff] px-5 py-2 rounded-2xl text-[#02423a] font-semibold">Start For Free</button>
							<button className=" bg-[#02423a] px-5 py-2 text-[#afd283] rounded-2xl font-semibold">Get a Demo</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Hero;
