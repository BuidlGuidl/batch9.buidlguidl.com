// Buidl data array
const buidlsData = [
  {
    name: "Scroll Fighter",
    image: "https://github.com/arjanjohan/scroll-fighter/raw/main/logo.png",
    url: "https://app.buidlguidl.com/build/14yLHhMarnyyIDiayAKo",
  },
  {
    name: "Scaffold Move",
    image: "https://github.com/arjanjohan/scaffold-move/raw/main/assets/logo_small.png",
    url: "https://app.buidlguidl.com/build/9uXW8LEWrWXzXajz84PD",
  },
  {
    name: "Oh Snap!",
    image: "https://github.com/chain-notes-brussels/chain-notes-snap/raw/main/assets/logo.png",
    url: "https://app.buidlguidl.com/build/yHt0IhqXVk6Gff4jM3aO",
  },
  {
    name: "Roman Receipts",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/buidlguidl-v3.appspot.com/o/builds%2F459399612eaf4d2f489e3ce00.png?generation=1722954568641273&alt=media",
    url: "https://app.buidlguidl.com/build/uafgHz8XYs3WJy7ZZoLP",
  },
  {
    name: "SE2 Chainlink ",
    image: "https://ethglobal.b-cdn.net/projects/pwkxb/screenshots/iej95/default.jpg",
    url: "https://app.buidlguidl.com/build/Qb3o6WxbazdZthI8iEHO",
  },
  {
    name: "🦥 Sloth Shaming",
    image: "https://github.com/warsaw-hackers/Sloth-Shaming/raw/main/assets/ui.png",
    url: "https://github.com/warsaw-hackers/Sloth-Shaming",
  },
];

// Buidls Component
export const Buidls = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {buidlsData.map((buidl, index) => (
        <div key={index} className="bg-gray-200/60 rounded-lg p-4">
          <a href={buidl.url} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={buidl.image} alt={buidl.name} className="rounded-lg" />
            <p className="text-center mb-0 mt-2">{buidl.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
