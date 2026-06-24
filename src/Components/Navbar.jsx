import { Crown } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<div className="flex justify-between p-4 bg-[#f6f6f4]">
				<div className="flex gap-10">
					<div className="flex gap-1 ">
						<div className="flex items-center">
							<Crown />
						</div>
						<div className=" text-lg py-2 flex items-baseline font-bold ">
							Clause
						</div>
					</div>
					<div className="flex gap-5 items-center-safe text-[#272927] font-semibold">
						<div>Solution</div>
						<div>Customer</div>
						<div>Pricing</div>
					</div>
				</div>
				<div className="flex gap-5 items-center">
					<button className="bg-[#fdffff] px-5 py-2 rounded-2xl text-[#02423a]">
						Login
					</button>
					<button className=" bg-[#02423a] px-5 py-2 text-[#afd283] rounded-2xl">
						Start Now
					</button>
				</div>
			</div>
		</>
	);
};
export default Navbar;
