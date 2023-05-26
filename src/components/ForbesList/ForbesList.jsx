import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
      {list.map(({ avatar, capital, isIncrease, name, id }) => { return <ForbesListItem avatar={avatar} capital={capital} isIncrease={isIncrease} name={name} key={id} />})}
  </LeaderBoardProfiles>
</LeaderBoard>;
};
