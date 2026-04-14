export default function EventCategories() {
  const categories = [
    'BARREL RACING',
    'POLE BENDING',
    'RODEO',
    'BULL RIDING',
    'BRONC RIDING',
    'TEAM ROPING',
    'STEER WRESTLING',
    'BREAKAWAY & TIE DOWN ROPING',
    'RANCH HORSE',
    'CLINICS',
    'HUNTER & JUMPER',
    'BARREL RACE NO HORSE',
    'CHARITIES & DONATIONS',
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 px-4">
      {categories.map((category) => (
        <button
          key={category}
          className="px-6 py-3 border-2 border-white/40 text-white rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
