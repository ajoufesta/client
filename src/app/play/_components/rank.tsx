import { GamePlayer } from '@/app/lib/types';

interface Props {
  players: GamePlayer[];
}

const COLOR_SET = ['#CE5350', '#D77B48', '#D79E48'];

const Rank = ({ players }: Props) => {
  return players.map((player, index) => (
    <div
      className="flex justify-start overflow-hidden rounded-r-full relative py-[1.2rem] px-[1.7rem] w-fit"
      key={index}
    >
      <div style={{ width: `${4 * index}rem`, height: `100%` }} />
      <div
        style={{ backgroundColor: COLOR_SET[index] }}
        className={`w-[3.3rem] h-[3.3rem] rounded-full flex justify-center`}
      >
        <span className="text-bold text-white text-[1.8rem] text-center leading-loose">
          {index + 1}
        </span>
      </div>
      <span className="font-bold text-[1.8rem] text-brown-700 leading-loose ml-[0.7rem] mr-[1.4rem]">
        {player.name}
      </span>
      <span className="text-[1.8rem] text-brown-700 leading-loose">
        {player.level}점
      </span>
      <div className="absolute w-full h-full bg-white opacity-60 -z-10 top-0 left-0" />
    </div>
  ));
};

export default Rank;
