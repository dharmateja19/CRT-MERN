// import { useState } from "react";
import List from "./components/List";

function App() {
	// const [num1, setnum1] = useState(0);
	// const [num2, setnum2] = useState(0);
	// const [res, setres] = useState(0);
	// const [count, setCount] = useState(0);
	// const data = [1, 2, 3, 4, 5];
	// const handleSUbmit = () => {
	// 	setres(num1 + num2);
	// 	setnum1(0);
	// 	setnum2(0);
	// };
	const datas = [
		{
			id: "1",
			title: "Big Buck Bunny",
			thumbnailUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "Vlc Media Player",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			description:
				"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
			subscriber: "25254545 Subscribers",
			isLive: true,
		},
		{
			id: "2",
			title: "The first Blender Open Movie from 2006",
			thumbnailUrl:
				"https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
			duration: "12:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "Blender Inc.",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
			description:
				"Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
			subscriber: "25254545 Subscribers",
			isLive: true,
		},
		{
			id: "3",
			title: "For Bigger Blazes",
			thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "T-Series Regional",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
			description:
				"Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
			subscriber: "25254545 Subscribers",
			isLive: true,
		},
		{
			id: "4",
			title: "For Bigger Escape",
			thumbnailUrl:
				"https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "T-Series Regional",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
			description:
				" Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
			subscriber: "25254545 Subscribers",
			isLive: false,
		},
		{
			id: "5",
			title: "Big Buck Bunny",
			thumbnailUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "Vlc Media Player",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			description:
				"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
			subscriber: "25254545 Subscribers",
			isLive: true,
		},
		{
			id: "6",
			title: "For Bigger Blazes",
			thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "T-Series Regional",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
			description:
				"Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
			subscriber: "25254545 Subscribers",
			isLive: false,
		},
		{
			id: "7",
			title: "For Bigger Escape",
			thumbnailUrl:
				"https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
			duration: "8:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "T-Series Regional",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
			description:
				" Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
			subscriber: "25254545 Subscribers",
			isLive: true,
		},
		{
			id: "8",
			title: "The first Blender Open Movie from 2006",
			thumbnailUrl:
				"https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
			duration: "12:18",
			uploadTime: "May 9, 2011",
			views: "24,969,123",
			author: "Blender Inc.",
			videoUrl:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
			description:
				"Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
			subscriber: "25254545 Subscribers",
			isLive: false,
		},
	];
	return (
		<>
			{/* <div className="flex flex-col w-full justify-center items-center bg-gray-300 gap-5">
				<div className="flex flex-col justify-center rounded-2xl bg-gray-300 gap-5 border-2 p-10">
					<h1 className="text-center font-mono">Calculator</h1>
					<input
						className="border-2 rounded-2xl p-5 font-mono"
						type="number"
						placeholder="num1"
						value={num1}
						onChange={(e) => setnum1(Number(e.target.value))}
					/>
					<input
						className="border-2 rounded-2xl p-5 font-mono"
						type="number"
						placeholder="num2"
						value={num2}
						onChange={(e) => setnum2(Number(e.target.value))}
					/>
					<button
						onClick={handleSUbmit}
						className="border-2 rounded-2xl p-5 font-mono bg-green-400"
					>
						calculate
					</button>
					<h1 className="border-2 rounded-2xl p-5 font-mono">Answer: {res}</h1>
				</div>
				<div>
					<button
						className="border-2 rounded-2xl p-5 font-mono bg-amber-600"
						onClick={() => setCount((prevcount) => prevcount + 1)}
					>
						Count : {count}
					</button>
				</div>
				<div className="boarde-2 rounded-2xl p-3 bg-amber-200 flex gap-5">
					{data.map((d) => (
						<p>{d}</p>
					))}
				</div>
				<div className="flex border-2 rounded-2xl bg-green-700 text-2xl font-mono">
					<List name="Dharma" />
					<List name="Teja" />
				</div>
			</div> */}
      <div className="grid grid-cols-3 h-140 p-5 gap-5">
        {datas.map((data)=>(<List data={data}/>))}
      </div>
		</>
	);
}

export default App;
